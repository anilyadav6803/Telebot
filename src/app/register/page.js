'use client'

import "flag-icons/css/flag-icons.min.css";
import { useState } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FixedSizeList as List } from 'react-window'
import countriesData from './countries.json'


const countries = Object.entries(countriesData).map(([code, data]) => ({
  name: data.name,
  code: `+${data.countryCallingCode}`,
  flag: data.flag,
})).sort((a, b) => a.name.localeCompare(b.name))

export default function RegisterPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedFlag, setSelectedFlag] = useState(`fi fi-${countries[0].flag}`);
  const [searchQuery, setSearchQuery] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [password, setPassword] = useState('')
  const [step, setStep] = useState('phone') // 'phone', 'code', 'password', 'success'
  const [error, setError] = useState('')
  const [session, setSession] = useState('')

  const filteredCountries = searchQuery
    ? countries.filter(country => 
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.includes(searchQuery)
      )
    : countries.slice(0, 20)

  const handleConnect = async () => {
    setError('')
    try {
      if (step === 'sendCode') {
        const res = await fetch('/api/telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNumber: selectedCountry.code + phoneNumber }),
        })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        setStep('code')
      } else if (step === 'code') {
        const res = await fetch('/api/telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            phoneNumber: selectedCountry.code + phoneNumber, 
            code: verificationCode,
            session: session // Include the session if available
          }),
        })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        if (data.session) {
          setSession(data.session)
        }
        if (data.requiresPassword) {
          setStep('password')
        } else {
          setStep('success')
        }
      } else if (step === 'password') {
        const res = await fetch('/api/telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            phoneNumber: selectedCountry.code + phoneNumber, 
            code: verificationCode, 
            password,
            session: session
          }),
        })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        if (data.session) {
          setSession(data.session)
        }
        setStep('success')
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-8xl mx-auto p-4">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold">Connect to BOT</h1>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {step === 'phone' && (
          <>
            <p className="text-gray-600 text-sm mb-6">
              Enter the phone number of the telegram account which is already a member of the desired source chats, along with country code
            </p>
            <div className="flex gap-2 mb-6">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 min-w-[120px]"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <span>{selectedCountry.flag}</span>
                    <span>{selectedCountry.code}</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Select Country Code</DialogTitle>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute right-4 top-4" 
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </DialogHeader>
                  <Input
                    placeholder="Search by country name or dial code"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4"
                  />
                  <ScrollArea className="h-[300px]">
                    <List
                      height={300}
                      itemCount={filteredCountries.length}
                      itemSize={40}
                      width="100%"
                      itemData={filteredCountries}
                    >
                      {({ index, style, data }) => {
                        const country = data[index]
                        return (
                          <Button
                            key={country.code}
                            variant="ghost"
                            className="w-full justify-start text-left"
                            style={style}
                            onClick={() => {
                              setSelectedCountry(country)
                              setSearchQuery('')
                            }}
                          >
                            <span className="mr-2">{country.flag}</span>
                            <span>{country.name}</span>
                            <span className="ml-auto text-gray-500">{country.code}</span>
                          </Button>
                        )
                      }}
                    </List>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
              <Input
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1"
              />
            </div>
          </>
        )}

        {step === 'code' && (
          <div className="mb-6">
            <p className="text-gray-600 text-sm mb-2">Enter the verification code sent to your phone</p>
            <Input
              placeholder="Verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
        )}

        {step === 'password' && (
          <div className="mb-6">
            <p className="text-gray-600 text-sm mb-2">Enter your Telegram password</p>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        {step === 'success' && (
          <p className="text-green-500 mb-6">Successfully connected to Telegram!</p>
        )}

        {step !== 'success' && (
          <Button 
            className="w-full bg-gray-500 hover:bg-gray-600 text-white mb-4"
            onClick={handleConnect}
          >
            {step === 'phone' ? 'Connect' : 'Verify'}
          </Button>
        )}

        <p className="text-center text-sm text-gray-600 mb-8">
          By connect, you agree to our{' '}
          <Link href="/terms" className="text-blue-600 hover:underline">Terms</Link>
          {' & '}
          <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
        </p>

        <div className="space-y-6">
          <h2 className="text-center font-medium">Here are some advices to NOT get banned from Telegram</h2>
          <ul className="space-y-3">
            {[
              'Do not use virtual phone numbers.',
              'Do not use phone numbers that have never been used with Telegram app before.',
              'Do not use newly acquired phone numbers.',
              'Do not use VoIP numbers.',
              'Do not abuse, spam or use it for other suspicious activities.',
              'Only use phone numbers that have been previously used with Telegram app.'
            ].map((advice, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{advice}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

