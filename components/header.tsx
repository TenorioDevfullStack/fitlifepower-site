"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = ["Suplementos", "Equipamentos", "Roupas Fitness", "Acessórios", "Lutas", "Musculação"]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600">
            {/* LOGO: Se quiser usar uma imagem personalizada, coloque em public/images/logo/logo.png e descomente a linha abaixo */}
            {/* <img src="/images/logo/logo.png" alt="FitLifePower" className="h-6 w-6" /> */}
            <Dumbbell className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            FitLifePower
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categoria/${category
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {category}
            </Link>
          ))}
        </nav>

        {/* Search and Mobile Menu */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Buscar produtos..." className="w-64 pl-10 border-gray-200 focus:border-green-500" />
            </div>
          </div>

          {/* Mobile Search Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Buscar produtos..." className="pl-10 border-gray-200 focus:border-green-500" />
                </div>
                <nav className="flex flex-col space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/categoria/${category
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, "-")}`}
                      className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors py-2"
                    >
                      {category}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="border-t bg-white p-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Buscar produtos..." className="pl-10 border-gray-200 focus:border-green-500" />
          </div>
        </div>
      )}
    </header>
  )
}
