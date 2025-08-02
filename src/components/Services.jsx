import { Wrench, Settings, Shield, Clock, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      icon: <Wrench className="text-blue-600" size={40} />,
      title: "Instalação Completa",
      description: "Instalação profissional de kits completos para portas automáticas com garantia de qualidade e segurança.",
      features: ["Análise técnica do local", "Instalação certificada", "Testes de funcionamento", "Garantia de 2 anos"]
    },
    {
      icon: <Settings className="text-blue-600" size={40} />,
      title: "Manutenção Preventiva",
      description: "Serviços de manutenção preventiva e corretiva para garantir o funcionamento perfeito do seu equipamento.",
      features: ["Revisão completa", "Lubrificação", "Ajustes de segurança", "Relatório técnico"]
    },
    {
      icon: <Shield className="text-blue-600" size={40} />,
      title: "Assistência Técnica",
      description: "Suporte técnico especializado com atendimento rápido e eficiente para resolver qualquer problema.",
      features: ["Atendimento 24/7", "Diagnóstico remoto", "Peças originais", "Técnicos certificados"]
    }
  ]

  const stats = [
    { icon: <Users size={24} />, number: "500+", label: "Clientes Atendidos" },
    { icon: <Award size={24} />, number: "15+", label: "Anos de Experiência" },
    { icon: <Clock size={24} />, number: "24/7", label: "Suporte Técnico" },
    { icon: <Shield size={24} />, number: "100%", label: "Garantia" }
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em automação de portas, desde a instalação até a manutenção, 
            com qualidade e confiabilidade que você pode confiar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ' + service.title, '_blank')}
              >
                Solicitar Serviço
              </Button>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-blue-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-yellow-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

