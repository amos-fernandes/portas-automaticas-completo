import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, CreditCard, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.
    
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`
    
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Telefone",
      info: "(11) 99999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "E-mail",
      info: "contato@portasautomaticas.com.br",
      action: "mailto:contato@portasautomaticas.com.br"
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Endereço",
      info: "Rua das Portas, 123 - São Paulo, SP",
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="text-blue-600" size={24} />,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      action: null
    }
  ]

  const paymentMethods = [
    {
      icon: <Smartphone className="text-green-600" size={32} />,
      title: "PIX",
      description: "Pagamento instantâneo via PIX",
      action: () => window.open('https://wa.me/5511999999999?text=Gostaria de fazer um pagamento via PIX', '_blank')
    },
    {
      icon: <CreditCard className="text-blue-600" size={32} />,
      title: "Cartão",
      description: "Parcelamento em até 12x sem juros",
      action: () => window.open('https://wa.me/5511999999999?text=Gostaria de fazer um pagamento via cartão', '_blank')
    }
  ]

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato conosco para orçamentos, 
            dúvidas ou suporte técnico. Nossa equipe está sempre disponível.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Solicite seu Orçamento
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="instalacao">Instalação</option>
                      <option value="manutencao">Manutenção</option>
                      <option value="assistencia">Assistência Técnica</option>
                      <option value="orcamento">Orçamento de Kit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva suas necessidades ou dúvidas..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Payment */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{contact.title}</h4>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{contact.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Formas de Pagamento
              </h3>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={method.action}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{method.title}</h4>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 text-center">
                  <strong>Desconto especial:</strong> 5% de desconto para pagamentos à vista via PIX
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-green-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">
                Atendimento Rápido
              </h3>
              <p className="mb-6 text-green-100">
                Precisa de atendimento imediato? Fale conosco agora pelo WhatsApp!
              </p>
              <Button 
                className="w-full bg-white text-green-600 hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Preciso de atendimento rápido.', '_blank')}
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            Emergência 24/7
          </h3>
          <p className="text-red-700 mb-6">
            Para emergências fora do horário comercial, nossa equipe está disponível 24 horas por dia, 7 dias por semana.
          </p>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open('https://wa.me/5511999999999?text=EMERGÊNCIA - Preciso de atendimento urgente!', '_blank')}
          >
            <Phone className="mr-2" size={20} />
            Emergência: (11) 99999-9999
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Contact

