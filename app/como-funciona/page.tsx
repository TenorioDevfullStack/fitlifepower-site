import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, MousePointer, ShoppingCart, CheckCircle, ArrowRight } from "lucide-react"

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Como{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Funciona</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como é simples encontrar os melhores produtos fitness com as melhores ofertas
          </p>
        </div>

        {/* Processo Passo a Passo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Processo Simples em 4 Passos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <CardContent className="pt-8">
                <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Explore</h3>
                <p className="text-gray-600 text-sm">
                  Navegue por nossas categorias ou use a busca para encontrar produtos específicos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <CardContent className="pt-8">
                <MousePointer className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Escolha</h3>
                <p className="text-gray-600 text-sm">
                  Veja detalhes, avaliações e clique em "Ver Ofertas na Shopee" no produto desejado.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <CardContent className="pt-8">
                <ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Compre</h3>
                <p className="text-gray-600 text-sm">
                  Você será direcionado para a Shopee onde pode finalizar sua compra com segurança.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <CardContent className="pt-8">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Receba</h3>
                <p className="text-gray-600 text-sm">
                  Receba seu produto em casa com toda a garantia e suporte da Shopee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Por que escolher o FitLifePower */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Por que escolher o FitLifePower?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Curadoria Especializada</h3>
                  <p className="text-gray-600">Selecionamos apenas produtos testados e aprovados por nossa equipe.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Melhores Ofertas</h3>
                  <p className="text-gray-600">Monitoramos constantemente para trazer as melhores promoções.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Segurança Total</h3>
                  <p className="text-gray-600">
                    Todas as compras são feitas diretamente na Shopee, com total segurança.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Sem Custos Extras</h3>
                  <p className="text-gray-600">Nosso serviço é 100% gratuito para você. Pagamos apenas comissões.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/placeholder.svg?height=400&width=500" alt="Por que escolher" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-2">É seguro comprar através dos links?</h3>
                <p className="text-gray-600">
                  Sim! Todos os links direcionam para a Shopee oficial. Você compra diretamente na plataforma com todas
                  as garantias e proteções.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-2">Os preços são os mesmos da Shopee?</h3>
                <p className="text-gray-600">
                  Sim! Os preços são exatamente os mesmos. Às vezes você pode até encontrar cupons exclusivos através
                  dos nossos links.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-2">Como vocês escolhem os produtos?</h3>
                <p className="text-gray-600">
                  Nossa equipe testa e avalia produtos baseado em qualidade, custo-benefício, avaliações de usuários e
                  eficácia comprovada.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-2">Posso devolver produtos?</h3>
                <p className="text-gray-600">
                  Sim! Como a compra é feita na Shopee, você tem todas as políticas de devolução e garantia da
                  plataforma.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-xl mb-6 opacity-90">
            Explore nossa seleção de produtos e encontre tudo que precisa para seus objetivos fitness
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
            Ver Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
