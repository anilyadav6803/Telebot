import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Copy, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Upgrade</h1>

        <div className="mb-20">
          <PricingCards />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-green-600">
            <span className="text-xl">✳</span>
            <h2 className="text-xl font-semibold">Available Package</h2>
            <span className="text-xl">✳</span>
          </div>

          <p className="text-gray-600">
            — Currently we are offering three (03) paid packages: Gold, Diamond
            and Platinum.
          </p>
          <p className="flex items-center space-x-2 text-orange-600">
            <span>🔥</span>
            <span>Save up to 2 months when you pay annually</span>
            <span>🔥</span>
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">ALL PACKAGES</h2>
          <PackageSelection />
        </div>

        <p className="text-right text-sm text-gray-500 mt-8">
          Contact us for advice at @redf0x1
        </p>
      </main>
    </div>
  );
}

function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 relative">
      {/* Gold Package */}
      <Card className="bg-white p-6">
        <div className="bg-amber-400 text-white text-center py-1 px-4 w-fit rounded mb-4">
          GOLD
        </div>
        <div className="text-4xl font-medium text-cyan-500 mb-6">
          4.99<span className="text-sm text-cyan-500">/MO</span>
        </div>
        <div className="space-y-3">
          <Feature text="Unlimited Messages Forward" />
          <Feature text="No Sponsored Ads" />
          <Feature text="Unlimited Task Create" />
          <Feature
            text="Max Set 5 Second/ID in Total Task"
            highlight
            color="red"
          />
          <Feature text="15 Manage Setup" />
          <Feature text="Edit, Delete, Reply" />
          <Feature text="ON/OFF Show Forward Header" />
          <Feature text="Forward Chat to Bots" />
          <Feature text="Forward Bots to Bots" />
          <Feature text="Duplicate/Delay Filters" />
          <Feature text="Clone Source (Max file size 100mb)" />
          <Feature text="Dedicated Server" />
        </div>
      </Card>

      {/* Diamond Package */}
      <Card className="bg-white p-6 relative">
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <div className="bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-medium">
            MOST POPULAR
          </div>
        </div>
        <div className="bg-pink-500 text-white text-center py-1 px-4 w-fit rounded mb-4">
          DIAMOND
        </div>
        <div className="text-4xl font-medium text-cyan-500 mb-6">
          7.99<span className="text-sm text-cyan-500">/MO</span>
        </div>
        <div className="text-green-500 text-sm mb-4">
          Save up to 2 months when you pay annually
        </div>
        <div className="space-y-3">
          <Feature text="GOLD Feature +" />
          <Feature text="Unlimited Forward Task" />
          <Feature text="Unlimited Manage Setup" />
          <Feature text="User Filter / Filters" />
          <Feature text="Cleaner Filter" />
          <Feature text="Replace / Reformat Content Basic" />
          <Feature text="Blacklist / Whitelist Basic" />
          <Feature text="Add Header / Footer" />
          <Feature text="Forward Chat to Bots" />
          <Feature text="Forward Bots to Bots" />
          <Feature text="Duplicate/Delay Filters" />
        </div>
      </Card>

      {/* Platinum Package */}
      <Card className="bg-white p-6">
        <div className="bg-purple-500 text-white text-center py-1 px-4 w-fit rounded mb-4">
          PLATINUM
        </div>
        <div className="text-4xl font-medium text-cyan-500 mb-6">
          12.99<span className="text-sm text-cyan-500">/MO</span>
        </div>
        <div className="space-y-3">
          <Feature text="DIAMOND Feature +" />
          <Feature text="Blacklist / Whitelist Advanced" />
          <Feature text="Translate" />
          <Feature text="Watermark" />
          <Feature text="Replace / Reformat Content Advanced" />
          <Feature text="Auto Post Scheduler" />
          <Feature text="Replace Sticker" />
          <Feature text="Clone Source (File size Unlimited)" />
          <Feature text="Filters Clone" />
          <Feature text="Support Forward Topic" />
          <Feature text="Crypto Filters" />
          <Feature text="Power On/Off Schedule" />
          <Feature text="Remove Line by Keyword" />
          <Feature text="Remove Line by Order" />
        </div>
      </Card>
    </div>
  );
}

function Feature({ text, highlight, color = "amber" }) {
  return (
    <div className="flex items-start gap-2">
      <span
        className={`${highlight ? "text-red-500" : `text-${color}-500`} mt-1`}
      >
        {highlight ? "●" : "○"}
      </span>
      <span className={`${highlight ? "text-red-600" : `text-${color}-800`}`}>
        {text}
      </span>
    </div>
  );
}

 function PackageSelection() {
    return (
      <div className="space-y-4">
        {/* Gold Package */}
        <Button
          variant="ghost"
          className="w-full h-24 justify-between bg-white hover:bg-gray-50 border shadow-sm relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4kozHg1UYuzjCcdXjvfFj0QiccG0VR.png"
              alt="Gold Package"
              className="object-cover object-left"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-white px-3 py-1 rounded text-sm font-medium">
              GOLD
            </div>
            <span className="font-semibold text-amber-700">PACKAGE</span>
          </div>
          <ChevronRight className="h-5 w-5" />
        </Button>
  
        {/* Diamond Package */}
        <Button
          variant="ghost"
          className="w-full h-24 justify-between bg-white hover:bg-gray-50 border shadow-sm relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4kozHg1UYuzjCcdXjvfFj0QiccG0VR.png"
              alt="Diamond Package"
              className="object-cover object-center"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-pink-500 text-white px-3 py-1 rounded text-sm font-medium">
              DIAMOND
            </div>
            <span className="font-semibold text-pink-700">PACKAGE</span>
          </div>
          <ChevronRight className="h-5 w-5" />
        </Button>
  
        {/* Platinum Package */}
        <Button
          variant="ghost"
          className="w-full h-24 justify-between bg-white hover:bg-gray-50 border shadow-sm relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4kozHg1UYuzjCcdXjvfFj0QiccG0VR.png"
              alt="Platinum Package"
              className="object-cover object-right"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple-500 text-white px-3 py-1 rounded text-sm font-medium">
              PLATINUM
            </div>
            <span className="font-semibold text-purple-700">PACKAGE</span>
          </div>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    );
  }