import { Users, Award, Clock, MapPin, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const About = () => {
  const achievements = [
    { icon: <Users size={24} />, number: "500+", label: "Clientes Satisfeitos" },
    { icon: <Award size={24} />, number: "15+", label: "Anos de Experiência" },
    { icon: <Clock size={24} />, number: "24/7", label: "Suporte Disponível" },
    { icon: <MapPin size={24} />, number: "50+", label: "Cidades Atendidas" }
  ]

  const values = [
    {
      title: "Qualidade",
      description: "Trabalhamos apenas com as melhores marcas e produtos certificados do mercado.",
      icon: <Star className="text-blue-600" size={32} />
    },
    {
      title: "Confiabilidade",
      description: "Mais de 15 anos de experiência garantindo a satisfação dos nossos clientes.",
      icon: <CheckCircle className="text-blue-600" size={32} />
    },
    {
      title: "Inovação",
      description: "Sempre atualizados com as últimas tecnologias em automação de portas.",
      icon: <Award className="text-blue-600" size={32} />
    }
  ]

  const team = [
    {
      name: "João Silva",
      role: "Diretor Técnico",
      experience: "15 anos de experiência",
      specialties: ["Instalação", "Manutenção", "Consultoria Técnica"]
    },
    {
      name: "Maria Santos",
      role: "Gerente de Vendas",
      experience: "10 anos de experiência",
      specialties: ["Atendimento", "Orçamentos", "Pós-venda"]
    },
    {
      name: "Carlos Oliveira",
      role: "Técnico Especialista",
      experience: "12 anos de experiência",
      specialties: ["Automação", "Eletrônica", "Programação"]
    }
  ]

  return (
    <section id="quem-somos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Quem Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em automação de portas com mais de 15 anos de experiência no mercado, 
            oferecendo soluções completas e personalizadas para cada cliente.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundada em 2009, nossa empresa nasceu da paixão por tecnologia e automação. 
                Começamos como uma pequena oficina especializada em reparos de portões automáticos 
                e hoje somos referência no mercado de automação residencial e comercial.
              </p>
              <p>
                Ao longo dos anos, estabelecemos parcerias sólidas com as principais marcas do setor, 
                como EVO e MEGA, garantindo que nossos clientes tenham acesso aos melhores produtos 
                e tecnologias disponíveis no mercado.
              </p>
              <p>
                Nossa missão é proporcionar segurança, comodidade e tranquilidade através de 
                soluções em automação de alta qualidade, sempre com atendimento personalizado 
                e suporte técnico especializado.
              </p>
            </div>
            <Button 
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer mais sobre a empresa.', '_blank')}
            >
              Fale Conosco
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Nossos Números
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-blue-600">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nossa Equipe
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-blue-600" size={40} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.experience}
                </p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs mr-1 mb-1">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Certificações e Parcerias
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Somos certificados pelas principais marcas do setor e mantemos parcerias estratégicas 
            que garantem a qualidade e autenticidade dos nossos produtos e serviços.
          </p>
          <div className="flex justify-center space-x-8 items-center">
            <div className="bg-white/10 rounded-lg p-4">
              <span className="font-bold text-lg">EVO</span>
              <p className="text-xs text-blue-200">Parceiro Autorizado</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <span className="font-bold text-lg">MEGA</span>
              <p className="text-xs text-blue-200">Distribuidor Oficial</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <span className="font-bold text-lg">ISO</span>
              <p className="text-xs text-blue-200">Certificação 9001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

