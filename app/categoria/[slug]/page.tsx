"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const categoryInfo = {
  suplementos: {
    title: "Suplementos",
    description: "Os melhores suplementos para potencializar seus resultados",
    icon: "💊",
    products: ["Whey Protein", "Creatina", "BCAA", "Pré-treino"],
  },
  equipamentos: {
    title: "Equipamentos",
    description: "Equipamentos de qualidade para seu treino em casa ou academia",
    icon: "🏋️",
    products: ["Halteres", "Barras", "Anilhas", "Esteiras"],
  },
  "roupas-fitness": {
    title: "Roupas Fitness",
    description: "Roupas confortáveis e funcionais para seus treinos",
    icon: "👕",
    products: ["Camisetas", "Shorts", "Leggings", "Tênis"],
  },
  acessorios: {
    title: "Acessórios",
    description: "Acessórios essenciais para otimizar seus treinos",
    icon: "🧤",
    products: ["Luvas", "Cintos", "Straps", "Shakers", "Munhequeiras", "Joelheiras"],
  },
  lutas: {
    title: "Lutas",
    description: "Equipamentos e acessórios para artes marciais",
    icon: "🥋",
    products: ["Kimonos", "Luvas de MMA", "Protetores", "Tatames"],
  },
  musculacao: {
    title: "Musculação",
    description: "Tudo para seu treino de musculação",
    icon: "💪",
    products: ["Pesos", "Máquinas", "Bancos", "Cabos", "Barras", "Anilhas", "Elásticos"],
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryInfo[params.slug as keyof typeof categoryInfo]

  if (!category) {
    return <div>Categoria não encontrada</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">{category.description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {category.products.map((product) => (
              <Badge key={product} variant="outline" className="text-sm">
                {product}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <ProductGrid categoryFilter={params.slug} />
      <Footer />
    </div>
  )
}
