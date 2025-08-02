import { useState } from 'react'
import { Star, ShoppingCart, Eye, Zap, Shield, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PaymentModal from './PaymentModal'

const Products = () => {
  const [paymentModal, setPaymentModal] = useState({ isOpen: false, product: null })

  const openPaymentModal = (product) => {
    setPaymentModal({ isOpen: true, product })
  }

  const closePaymentModal = () => {
    setPaymentModal({ isOpen: false, product: null })
  }
  const products = [
    {
      id: 1,
      brand: "EVO",
      name: "Kit Completo EVO Standard",
      price: "R$ 1.299,00",
      originalPrice: "R$ 1.499,00",
      image: "/src/assets/images/2MCtJTN74GUb.jpg",
      rating: 4.8,
      reviews: 127,
      features: ["Motor 1/4 HP", "Controle remoto", "Sensor de segurança", "Garantia 2 anos"],
      badge: "Mais Vendido"
    },
    {
      id: 2,
      brand: "EVO",
      name: "Kit EVO Premium com Sensor",
      price: "R$ 1.899,00",
      originalPrice: "R$ 2.199,00",
      image: "/src/assets/images/oX2PSAyCmHXq.webp",
      rating: 4.9,
      reviews: 89,
      features: ["Motor 1/2 HP", "2 Controles remotos", "Sensor infravermelho", "Central digital"],
      badge: "Premium"
    },
    {
      id: 3,
      brand: "MEGA",
      name: "Kit MEGA Automático Completo",
      price: "R$ 1.599,00",
      originalPrice: "R$ 1.799,00",
      image: "/src/assets/images/QIHuTixXFWPv.jpg",
      rating: 4.7,
      reviews: 156,
      features: ["Motor industrial", "Sistema anti-esmagamento", "Backup de energia", "Instalação inclusa"],
      badge: "Novo"
    },
    {
      id: 4,
      brand: "MEGA",
      name: "Kit MEGA Professional",
      price: "R$ 2.299,00",
      originalPrice: "R$ 2.599,00",
      image: "/src/assets/images/f7ET3elmNFF8.jpg",
      rating: 5.0,
      reviews: 43,
      features: ["Motor 3/4 HP", "Controle por app", "Múltiplos sensores", "Garantia estendida"],
      badge: "Top"
    }
  ]

  const brands = [
    {
      name: "EVO",
      logo: "/src/assets/images/hMyT3bo0H6jZ.jpg",
      description: "Tecnologia italiana de ponta em automação",
      features: ["Qualidade Premium", "Tecnologia Avançada", "Suporte Técnico"]
    },
    {
      name: "MEGA",
      logo: "/src/assets/images/SSrlEpuSxmIq.png",
      description: "Soluções robustas para uso comercial e residencial",
      features: ["Durabilidade", "Eficiência Energética", "Fácil Manutenção"]
    }
  ]

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kits completos das melhores marcas do mercado, com garantia de qualidade e preços competitivos.
          </p>
        </div>

        {/* Brands Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src={brand.logo} alt={brand.name} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{brand.name}</h3>
              <p className="text-gray-600 mb-4">{brand.description}</p>
              <div className="flex justify-center space-x-4 text-sm text-gray-700">
                {brand.features.map((feature, idx) => (
                  <span key={idx} className="bg-white px-3 py-1 rounded-full">{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-bold">
                    {product.brand}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-4 text-sm text-gray-600">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-600">ou 12x sem juros</div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => openPaymentModal(product)}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Comprar Agora
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Eye size={16} className="mr-2" />
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Zap className="text-yellow-400 mb-3" size={40} />
              <h3 className="font-bold text-lg mb-2">Instalação Rápida</h3>
              <p className="text-blue-100 text-sm">Instalação profissional em até 24 horas</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-yellow-400 mb-3" size={40} />
              <h3 className="font-bold text-lg mb-2">Garantia Estendida</h3>
              <p className="text-blue-100 text-sm">2 anos de garantia em todos os produtos</p>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="text-yellow-400 mb-3" size={40} />
              <h3 className="font-bold text-lg mb-2">Suporte Técnico</h3>
              <p className="text-blue-100 text-sm">Assistência técnica especializada 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={paymentModal.isOpen}
        onClose={closePaymentModal}
        product={paymentModal.product}
      />
    </section>
  )
}

export default Products

