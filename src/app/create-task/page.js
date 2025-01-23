'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ChevronDown, Copy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"


const mockData = [
  { id: '2119832023', name: '106 GHOST RIDER' },
  { id: '2054329197', name: '107 Ghost Rider girl' },
  { id: '6738345028', name: '@Shreya Ready' },
  { id: '1971085256', name: 'Aktu Students Group' },
  { id: '1410054479', name: 'Aman Tiwari' },
  { id: '1337473172', name: 'Anil Yadav' },
]

const filters = ['All', 'Channel', 'Group', 'User', 'Bot']

export default function CreateTaskPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedItems, setSelectedItems] = useState([])


  const filteredData = mockData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.includes(searchQuery)
  )

  const handleItemSelect = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    )
  }

  const steps = [
    { number: 1, title: 'Select Source Forward' },
    { number: 2, title: 'Select Target Forward' },
    { number: 3, title: 'Fill info task and create' },
  ]

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
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Steps Sidebar */}
          <div className="w-64 shrink-0">
      <div className="space-y-6 sticky top-8">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start gap-4">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                currentStep === step.number
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setCurrentStep(step.number)} // Update step when clicked
            >
              {step.number}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  currentStep === step.number
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              >
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Enter Name or ID for search"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? 'secondary' : 'outline'}
                    onClick={() => setActiveFilter(filter)}
                    className="rounded-full"
                  >
                    {filter}
                  </Button>
                ))}
              </div>

              {/* Not Found Message */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>Not found your channel? Please click Reload and wait few minutes</p>
                <Button variant="outline" size="sm">
                  Reload
                </Button>
              </div>

              {/* Items List */}
              <div className="space-y-2 min-h-[400px]">
                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleItemSelect(item.id)}
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.id}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t mt-auto">
                <p className="text-sm text-gray-600">
                  Your source selected ({selectedItems.length})
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/home">Cancel</Link>
                  </Button>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => setCurrentStep(prev => Math.min(prev + 1, 3))}
                    disabled={selectedItems.length === 0}
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
