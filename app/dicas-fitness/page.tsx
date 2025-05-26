import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Heart, Zap, Target } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "10 Dicas Essenciais para Iniciantes na Musculação",
    excerpt: "Começando na academia? Confira nossas dicas fundamentais para ter sucesso desde o primeiro dia.",
    category: "Musculação",
    author: "Equipe FitLifePower",
    date: "15 Jan 2024",
    readTime: "5 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 2,
    title: "Suplementação: O que Realmente Funciona?",
    excerpt: "Descubra quais suplementos são realmente eficazes e como utilizá-los corretamente.",
    category: "Suplementos",
    author: "Dr. Carlos Silva",
    date: "12 Jan 2024",
    readTime: "8 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 3,
    title: "Treino em Casa: Equipamentos Essenciais",
    excerpt: "Monte seu home gym com os equipamentos certos e economize tempo e dinheiro.",
    category: "Equipamentos",
    author: "Ana Santos",
    date: "10 Jan 2024",
    readTime: "6 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 4,
    title: "Nutrição Pré e Pós-Treino: Guia Completo",
    excerpt: "Maximize seus resultados com a alimentação correta antes e depois dos treinos.",
    category: "Nutrição",
    author: "Nutri. Maria Costa",
    date: "8 Jan 2024",
    readTime: "7 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 5,
    title: "Como Escolher o Whey Protein Ideal",
    excerpt: "Entenda as diferenças entre os tipos de whey e escolha o melhor para seus objetivos.",
    category: "Suplementos",
    author: "Prof. João Lima",
    date: "5 Jan 2024",
    readTime: "4 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 6,
    title: "Exercícios Funcionais para o Dia a Dia",
    excerpt: "Movimentos que melhoram sua qualidade de vida e performance nas atividades cotidianas.",
    category: "Treino",
    author: "Personal Trainer Lucas",
    date: "3 Jan 2024",
    readTime: "5 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

export default function DicasFitnessPage() {
  const featuredArticles = articles.filter((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dicas{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Fitness</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo especializado para potencializar seus resultados e alcançar seus objetivos fitness
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="default" className="bg-green-600 hover:bg-green-700 cursor-pointer">
            Todos
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Musculação
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Suplementos
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Nutrição
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Equipamentos
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
            Treino
          </Badge>
        </div>

        {/* Artigos em Destaque */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Artigos em Destaque</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">{article.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span>{article.readTime} de leitura</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    Ler Artigo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Outros Artigos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Mais Artigos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Ler Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Receba Dicas Exclusivas</h2>
          <p className="text-xl mb-6 opacity-90">
            Inscreva-se em nossa newsletter e receba as melhores dicas fitness diretamente no seu email
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Inscrever
            </Button>
          </div>
        </div>

        {/* Benefícios */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Por que seguir nossas dicas?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conteúdo Especializado</h3>
              <p className="text-gray-600">Dicas criadas por profissionais experientes da área fitness e nutrição.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
              <p className="text-gray-600">Estratégias testadas e aprovadas que realmente funcionam na prática.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Foco na Saúde</h3>
              <p className="text-gray-600">
                Priorizamos sempre sua saúde e bem-estar em todas as nossas recomendações.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
