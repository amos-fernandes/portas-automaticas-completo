import { ArrowRight, Shield, Wrench, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Kits Completos para
              <span className="text-yellow-400 block">Portas Automáticas</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Especialistas em automação de portas com produtos das marcas EVO e MEGA. 
              Instalação, manutenção e assistência técnica especializada.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <Shield className="text-yellow-400" size={24} />
                <span className="text-sm">Garantia Estendida</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="text-yellow-400" size={24} />
                <span className="text-sm">Instalação Profissional</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-yellow-400" size={24} />
                <span className="text-sm">Suporte 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para portas automáticas.', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                Ver Produtos
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-lg">EVO</h3>
                  <p className="text-sm text-blue-100">Tecnologia Avançada</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-lg">MEGA</h3>
                  <p className="text-sm text-blue-100">Qualidade Premium</p>
                </div>
                <div className="col-span-2 bg-white/20 rounded-lg p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">+500</h3>
                  <p className="text-sm text-blue-100">Instalações Realizadas</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 rounded-full p-3 font-bold text-sm animate-bounce">
              Novo!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

