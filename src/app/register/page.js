'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
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

// Country data
const countries = [
  { name: 'Anonymous Number', code: '+888', flag: '🏴‍☠️' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Aland Islands', code: '+358', flag: '🇦🇽' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  // Add more countries as needed
]

export default function RegisterPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[4]) // Default to US
  const [searchQuery, setSearchQuery] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-8xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold">Connect to BOT</h1>
        </div>

        {/* Instructions */}
        <p className="text-gray-600 text-sm mb-6">
          Enter the phone number of the telegram account which is already a member of the desired source chats, along with country code
        </p>

        {/* Phone Input */}
        <div className="flex gap-2 mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 min-w-[120px]"
              >
                <span>{selectedCountry.flag}</span>
                <span>{selectedCountry.code}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>Select Country Code</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Search by country name or dial code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4"
              />
              <ScrollArea className="h-[300px]">
                <div className="space-y-2">
                  {filteredCountries.map((country) => (
                    <Button
                      key={country.code}
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => {
                        setSelectedCountry(country)
                        setSearchQuery('')
                      }}
                    >
                      <span className="mr-2">{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="ml-auto text-gray-500">{country.code}</span>
                    </Button>
                  ))}
                </div>
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

        {/* Connect Button */}
        <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white mb-4">
          Connect
        </Button>

        {/* Terms */}
        <p className="text-center text-sm text-gray-600 mb-8">
          By connect, you agree to our{' '}
          <Link href="/terms" className="text-blue-600 hover:underline">Terms</Link>
          {' & '}
          <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
        </p>

        {/* Advice Section */}
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
