'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from 'lucide-react'

export default function Page() {
  const router = useRouter()

  return (
    <div className="min-h-screen grid md:grid-cols-3">
      {/* Left Section - Hero */}
      <div className="relative hidden md:flex md:col-span-2 flex-col items-start justify-center p-8 bg-gradient-to-b from-violet-600 to-blue-400 text-white overflow-hidden">
        {/* Logo and Title */}
        <div className="relative z-10 flex items-center gap-4 mb-6">
          <div className="flex gap-0.5">
            <div className="w-2 h-8 bg-white rounded-sm"></div>
            <div className="w-2 h-8 bg-white/50 rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">AUTO FORWARD</h1>
            <p className="text-xl"><span className="text-orange-400">FOR TELEGRAM</span></p>
          </div>
        </div>

        {/* Description */}
        <p className="relative z-10 text-2xl font-light max-w-md mb-8">
          Automatically forward messages from Channels, Users and Groups (private or public)
        </p>

        {/* Paper Airplane Icon */}
        <div className="absolute right-0 top-1/3 transform -translate-y-1/2">
          <Send className="w-48 h-48 text-white/90 rotate-12" />
        </div>

        {/* Cloud Background */}
        <div className="absolute bottom-0 left-0 right-0 h-64">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-32 h-32 bg-blue-400/50 rounded-full"
              style={{
                left: `${i * 15}%`,
                bottom: `${Math.sin(i) * 20}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex items-center justify-end p-8">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-0.5 md:hidden">
                <div className="w-2 h-8 bg-violet-600 rounded-sm"></div>
                <div className="w-2 h-8 bg-violet-400 rounded-sm"></div>
              </div>
              <CardTitle className="text-2xl font-bold">
                SIGN IN{' '}
                <span className="text-violet-600">AUTO FORWARD</span>{' '}
                <span className="text-orange-400">FOR TELEGRAM</span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                To get <span className="font-semibold">UserID</span> and{' '}
                <span className="font-semibold">Token</span> please check in your profile on Bot{' '}
                <a href="#" className="text-blue-500 hover:underline">(Click to view instructions)</a>.
                Or connect bot to create if you don't have an account..
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="userId" className="text-sm font-medium">
                  UserID
                </label>
                <Input
                  id="userId"
                  placeholder="Enter Your Account ID"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="token" className="text-sm font-medium flex items-center gap-2">
                  Token
                  <span className="text-gray-400">ⓘ</span>
                </label>
                <Input
                  id="token"
                  placeholder="Enter your Login Token"
                  type="password"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                LOGIN
              </Button>
              
              <div className="text-center">Or</div>
              
              <Button 
                variant="outline"
                className="w-full border-violet-600 text-violet-600 hover:bg-violet-50"
                onClick={() => router.push('/register')}
              >
                📱 Register Bot
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

