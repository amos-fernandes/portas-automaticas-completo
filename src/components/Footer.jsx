import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Serviços", href: "#servicos" },
    { name: "Produtos", href: "#produtos" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Contato", href: "#contato" }
  ]

  const services = [
    "Instalação de Portas Automáticas",
    "Manutenção Preventiva",
    "Assistência Técnica 24/7",
    "Venda de Kits Completos",
    "Consultoria Técnica"
  ]

  const brands = [
    "Kits EVO",
    "Kits MEGA",
    "Controles Remotos",
    "Sensores de Segurança",
    "Peças Originais"
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">PA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Portas Automáticas</h3>
                <p className="text-sm text-gray-400">Kits Completos EVO & MEGA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialistas em automação de portas com mais de 15 anos de experiência. 
              Oferecemos soluções completas com qualidade e confiabilidade.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">contato@portasautomaticas.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Rua das Portas, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Produtos</h4>
            <ul className="space-y-3 mb-6">
              {brands.map((brand, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {brand}
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Siga-nos</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-green-600 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Precisa de Ajuda?</h3>
              <p className="text-green-100">
                Entre em contato conosco pelo WhatsApp e receba atendimento personalizado!
              </p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de mais informações.', '_blank')}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Portas Automáticas. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Garantia
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Preciso de ajuda com portas automáticas.', '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </footer>
  )
}

export default Footer

