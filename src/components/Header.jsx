import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>contato@portasautomaticas.com.br</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Atendimento: Segunda a Sexta, 8h às 18h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">PA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Portas Automáticas</h1>
              <p className="text-sm text-gray-600">Kits Completos EVO & MEGA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Serviços
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Produtos
            </a>
            <a href="#quem-somos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Quem Somos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contato
            </a>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Orçamento WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Serviços
              </a>
              <a href="#produtos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Produtos
              </a>
              <a href="#quem-somos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Quem Somos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contato
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                Orçamento WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

