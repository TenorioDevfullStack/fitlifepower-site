import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Award, Users } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre o{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              FitLifePower
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos apaixonados por fitness e dedicados a ajudar você a encontrar os melhores produtos para transformar
            seu corpo e sua vida. Nossa missão é democratizar o acesso a equipamentos e suplementos de qualidade.
          </p>
        </div>

        {/* Nossa História */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                O FitLifePower nasceu da paixão por um estilo de vida saudável e da necessidade de tornar produtos
                fitness de qualidade mais acessíveis para todos.
              </p>
              <p>
                Começamos como entusiastas do fitness que enfrentavam dificuldades para encontrar produtos confiáveis
                com bom custo-benefício. Decidimos criar uma plataforma que reunisse os melhores produtos do mercado em
                um só lugar.
              </p>
              <p>
                Hoje, somos uma referência em curadoria de produtos fitness, sempre buscando as melhores ofertas e
                novidades para nossa comunidade.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="/placeholder.svg?height=400&width=500" alt="Nossa História" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Foco</h3>
                <p className="text-gray-600 text-sm">
                  Selecionamos apenas produtos que realmente fazem diferença nos seus resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Paixão</h3>
                <p className="text-gray-600 text-sm">
                  Vivemos o fitness e compartilhamos essa paixão com nossa comunidade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Qualidade</h3>
                <p className="text-gray-600 text-sm">
                  Priorizamos sempre a qualidade sobre quantidade em nossa curadoria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Comunidade</h3>
                <p className="text-gray-600 text-sm">
                  Construímos uma comunidade forte de pessoas em busca de uma vida mais saudável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nossa Missão */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "Democratizar o acesso a produtos fitness de qualidade, oferecendo curadoria especializada e as melhores
            ofertas do mercado, para que todos possam alcançar seus objetivos de saúde e bem-estar sem comprometer o
            orçamento."
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
