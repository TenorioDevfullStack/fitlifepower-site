import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou precisa de ajuda? Estamos aqui para ajudar você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div>
            <Card className="p-8">
              <CardContent className="pt-0">
                <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome *
                      </label>
                      <Input id="nome" placeholder="Seu nome completo" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <Input id="assunto" placeholder="Qual o assunto da sua mensagem?" required />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva sua dúvida, sugestão ou como podemos ajudar..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    size="lg"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">contato@fitlifepower.com.br</p>
                    <p className="text-sm text-gray-500">Respondemos em até 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-sm text-gray-500">Seg a Sex, 9h às 18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Localização</h3>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                    <p className="text-sm text-gray-500">Atendimento online</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 14h</p>
                    <p className="text-sm text-gray-500">Domingo: Fechado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociais */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-4">Siga-nos nas redes sociais</h3>
                <p className="text-gray-600 mb-4">Fique por dentro das novidades, dicas fitness e melhores ofertas!</p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    YouTube
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-2">Como funciona o site?</h3>
                <p className="text-gray-600 text-sm">
                  Somos um site de curadoria que direciona para as melhores ofertas na Shopee.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-2">Posso sugerir produtos?</h3>
                <p className="text-gray-600 text-sm">
                  Claro! Envie suas sugestões pelo formulário e avaliaremos para inclusão.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-2">Problemas com pedidos?</h3>
                <p className="text-gray-600 text-sm">
                  Para questões de pedidos, entre em contato diretamente com a Shopee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
