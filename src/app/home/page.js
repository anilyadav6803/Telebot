"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  Copy,
  Settings,
  RefreshCcw,
  Diamond,
  LayoutTemplate,
  UserPlus,
  UserX,
  List,
  ListX,
  Sparkles,
  Send,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Default");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-8xl mx-auto px-4 py-2">
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
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2"
                    aria-label="User Menu"
                  >
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

      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-5 h-[calc(100vh-5rem)] sticky top-20">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-6 h-full overflow-y-auto">
              <div className="space-y-4">
                {/* User ID Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <UserX className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">USER ID</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="text-black text-sm">123456789</span>
                    <button
                      aria-label="Copy User ID"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Copy className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Phone Number Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <PhoneCall className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">Phone Number</span>
                  </div>
                  <span className="text-black text-sm">9310718039</span>
                </div>

                {/* Plan Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded">
                      <Diamond className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">Plan</span>
                  </div>
                  <span className="text-sm text-gray-600">Free/Pro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-7">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Search and Create Task */}
              <div className="flex justify-between items-center mb-6">
                <div className="relative flex-1 max-w-2xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Enter Name, Source ID, Target ID, or Label Task"
                    className="pl-10"
                  />
                </div>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => router.push("/create-task")}
                >
                  Create Task +
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {["Default", "Order", "Actived", "Deactived"].map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "secondary" : "ghost"}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full ${
                      activeTab === tab ? "bg-gray-200" : ""
                    }`}
                  >
                    {tab}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
