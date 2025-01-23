"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Copy, Settings, RefreshCcw, MessageCircleMore, Diamond, LayoutTemplate, UserPlus, UserX, List, ListX, Sparkles, Send, ChevronRight, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation'
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Default");
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-8xl mx-auto px-4 py-2 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-2 h-8 bg-violet-600 rounded-sm"></div>
                <div className="w-2 h-8 bg-violet-400 rounded-sm"></div>
              </div>
              <h1 className="text-xl font-bold">
                <span className="text-violet-600">AUTO FORWARD</span>{" "}
                <span className="text-orange-400">FOR TELEGRAM</span>
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-24">
              <Link href="/home" className="text-gray-900 font-bold">
                Dashboard
              </Link>
              <Link href="/explore" className="text-gray-600 font-bold">
                Explore
              </Link>
              <Link href="/upgrade" className="text-gray-600 font-bold">
                Upgrade VIP
              </Link>
              <Link href="/updates" className="text-gray-600 font-bold">
                New Update
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Avatar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="text-sm text-left">
                      <div>Anil</div>
                      <div className="text-gray-500 flex gap-2 text-xs">
                        ID: 1337473172
                        <Copy className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="flex gap-1"></div>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-8xl mx-auto px-4 ">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-5 h-[calc(100vh-5rem)] sticky top-20">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-6 h-full overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <UserX className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">USER ID</span>
                  </div>
                  <div className="flex gap-1">
                    <span className=" text-black text-sm"> 123456789 </span>
                    <Copy className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <PhoneCall className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">Phone Number</span>
                  </div>
                  <span className=" text-black text-sm"> 9310718039 </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <Send className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">Account Status</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    Activate
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <Settings className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">Server</span>
                  </div>
                  <span className="text-green-600 text-sm">FREE 3 ⚡</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <Diamond className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">Plan</span>
                  </div>
                  <span className="text-sm text-gray-600">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <RefreshCcw className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">Start Time</span>
                  </div>
                  <span className="text-sm text-gray-600">null</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium mb-4">Features</h3>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Replace
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <List className="h-4 w-4 mr-2" />
                    Whitelist
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <ListX className="h-4 w-4 mr-2" />
                    Blacklist
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Allow User
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <UserX className="h-4 w-4 mr-2" />
                    Block User
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <Copy className="h-4 w-4 mr-2" />
                    Clone
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <LayoutTemplate className="h-4 w-4 mr-2" />
                    Template
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <Diamond className="h-4 w-4 mr-2" />
                    Upgrade
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <MessageCircleMore className="h-4 w-4 mr-2" />
                    Chat Support
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <RefreshCcw className="h-4 w-4 mr-2" />
                    Restart Bot
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-span-7">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="relative flex-1 max-w-2xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Enter Name or Source ID or Target ID or Label Task"
                    className="pl-10"
                  />
                </div>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => router.push('/create-task')}
                >
                  Create Task +
                </Button>
              </div>
              <div className="flex gap-2 mb-6">
                {["Default", "Order", "Actived", "Deactived"].map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "secondary" : "ghost"}
                    onClick={() => setActiveTab(tab)}
                    className="rounded-full"
                  >
                    {tab}
                  </Button>
                ))}
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-600 mb-4">
                  Your Forward Tasks
                </h2>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                        RUNNING
                      </span>
                      <span className="font-medium">123</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Source</span>
                      <span className="text-sm">@UserName1 (93108496)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Target</span>
                      <span className="text-sm">UserName2(83769485611)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}