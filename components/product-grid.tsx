"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, ExternalLink } from "lucide-react"

// Dados de exemplo dos produtos
const products = [
  // Suplementos
  {
    id: 1,
    name: "Whey Protein Concentrado 1kg",
    category: "Suplementos",
    rating: 4.8,
    reviews: 1250,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/whey-protein.jpg
    image: "/images/produtos/whey-protein.jpg",
    shopeeLink: "https://shopee.com.br/product/123456",
    tags: ["Proteína", "Ganho de Massa"],
    description: "Whey protein de alta qualidade para ganho de massa muscular e recuperação pós-treino.",
  },
  {
    id: 4,
    name: "Creatina Monohidratada 300g",
    category: "Suplementos",
    rating: 4.9,
    reviews: 1800,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/creatina.jpg
    image: "/images/produtos/creatina.jpg",
    shopeeLink: "https://shopee.com.br/product/123459",
    tags: ["Força", "Performance"],
    description: "Creatina pura para aumento de força e performance nos treinos.",
  },
  {
    id: 16,
    name: "BCAA 2:1:1 120 Cápsulas",
    category: "Suplementos",
    rating: 4.6,
    reviews: 980,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/bcaa.jpg
    image: "/images/produtos/bcaa.jpg",
    shopeeLink: "https://shopee.com.br/product/123471",
    tags: ["BCAA", "Recuperação"],
    description: "Aminoácidos essenciais para recuperação muscular e redução do catabolismo.",
  },
  {
    id: 17,
    name: "Pré-Treino Beta Alanina 300g",
    category: "Suplementos",
    rating: 4.7,
    reviews: 1100,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/pre-treino.jpg
    image: "/images/produtos/pre-treino.jpg",
    shopeeLink: "https://shopee.com.br/product/123472",
    tags: ["Pré-treino", "Energia"],
    description: "Fórmula avançada para energia e foco durante os treinos.",
  },
  {
    id: 18,
    name: "Glutamina 300g Pura",
    category: "Suplementos",
    rating: 4.5,
    reviews: 750,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/glutamina.jpg
    image: "/images/produtos/glutamina.jpg",
    shopeeLink: "https://shopee.com.br/product/123473",
    tags: ["Glutamina", "Recuperação"],
    description: "Glutamina pura para recuperação muscular e fortalecimento do sistema imune.",
  },
  {
    id: 19,
    name: "Albumina 500g Natural",
    category: "Suplementos",
    rating: 4.4,
    reviews: 620,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/albumina.jpg
    image: "/images/produtos/albumina.jpg",
    shopeeLink: "https://shopee.com.br/product/123474",
    tags: ["Proteína", "Natural"],
    description: "Proteína de clara de ovo desidratada, absorção lenta e gradual.",
  },
  {
    id: 20,
    name: "Hipercalórico Mass Gainer 3kg",
    category: "Suplementos",
    rating: 4.6,
    reviews: 890,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/hipercalorico.jpg
    image: "/images/produtos/hipercalorico.jpg",
    shopeeLink: "https://shopee.com.br/product/123475",
    tags: ["Hipercalórico", "Ganho de Peso"],
    description: "Fórmula hipercalórica para ganho de peso e massa muscular.",
  },

  // Equipamentos
  {
    id: 2,
    name: "Halteres Ajustáveis 20kg",
    category: "Equipamentos",
    rating: 4.6,
    reviews: 890,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/halteres.jpg
    image: "/images/produtos/halteres.jpg",
    shopeeLink: "https://shopee.com.br/product/123457",
    tags: ["Musculação", "Casa"],
    description: "Halteres ajustáveis ideais para treino em casa com diferentes cargas.",
  },
  {
    id: 21,
    name: "Esteira Elétrica Dobrável",
    category: "Equipamentos",
    rating: 4.7,
    reviews: 1500,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/esteira.jpg
    image: "/images/produtos/esteira.jpg",
    shopeeLink: "https://shopee.com.br/product/123476",
    tags: ["Cardio", "Esteira"],
    description: "Esteira elétrica dobrável com velocidade até 12km/h e inclinação ajustável.",
  },
  {
    id: 22,
    name: "Bicicleta Ergométrica Magnética",
    category: "Equipamentos",
    rating: 4.5,
    reviews: 1200,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/bicicleta.jpg
    image: "/images/produtos/bicicleta.jpg",
    shopeeLink: "https://shopee.com.br/product/123477",
    tags: ["Cardio", "Bicicleta"],
    description: "Bicicleta ergométrica com sistema magnético e 8 níveis de resistência.",
  },
  {
    id: 23,
    name: "Power Tower Multifuncional",
    category: "Equipamentos",
    rating: 4.8,
    reviews: 680,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/power-tower.jpg
    image: "/images/produtos/power-tower.jpg",
    shopeeLink: "https://shopee.com.br/product/123478",
    tags: ["Multifuncional", "Calistenia"],
    description: "Torre multifuncional para barra fixa, paralelas, flexões e abdominais.",
  },
  {
    id: 24,
    name: "Smith Machine Profissional",
    category: "Equipamentos",
    rating: 4.9,
    reviews: 450,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/smith-machine.jpg
    image: "/images/produtos/smith-machine.jpg",
    shopeeLink: "https://shopee.com.br/product/123479",
    tags: ["Smith", "Profissional"],
    description: "Smith machine profissional com sistema de segurança e múltiplas posições.",
  },

  // Roupas Fitness
  {
    id: 3,
    name: "Camiseta Dry Fit Masculina",
    category: "Roupas Fitness",
    rating: 4.7,
    reviews: 2100,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/camiseta-masculina.jpg
    image: "/images/produtos/camiseta-masculina.jpg",
    shopeeLink: "https://shopee.com.br/product/123458",
    tags: ["Treino", "Conforto"],
    description: "Camiseta com tecnologia dry fit para máximo conforto durante os treinos.",
  },
  {
    id: 25,
    name: "Legging Feminina Suplex",
    category: "Roupas Fitness",
    rating: 4.6,
    reviews: 1800,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/legging-feminina.jpg
    image: "/images/produtos/legging-feminina.jpg",
    shopeeLink: "https://shopee.com.br/product/123480",
    tags: ["Legging", "Feminino"],
    description: "Legging em suplex com modelagem anatômica e alta compressão.",
  },
  {
    id: 26,
    name: "Shorts Masculino Tactel",
    category: "Roupas Fitness",
    rating: 4.5,
    reviews: 1400,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/shorts-masculino.jpg
    image: "/images/produtos/shorts-masculino.jpg",
    shopeeLink: "https://shopee.com.br/product/123481",
    tags: ["Shorts", "Masculino"],
    description: "Shorts em tactel com secagem rápida e bolsos laterais.",
  },
  {
    id: 27,
    name: "Top Feminino com Bojo",
    category: "Roupas Fitness",
    rating: 4.7,
    reviews: 950,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/top-feminino.jpg
    image: "/images/produtos/top-feminino.jpg",
    shopeeLink: "https://shopee.com.br/product/123482",
    tags: ["Top", "Feminino"],
    description: "Top esportivo com bojo removível e alças ajustáveis.",
  },
  {
    id: 28,
    name: "Tênis de Corrida Masculino",
    category: "Roupas Fitness",
    rating: 4.8,
    reviews: 2200,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/tenis-corrida.jpg
    image: "/images/produtos/tenis-corrida.jpg",
    shopeeLink: "https://shopee.com.br/product/123483",
    tags: ["Tênis", "Corrida"],
    description: "Tênis de corrida com amortecimento avançado e solado antiderrapante.",
  },
  {
    id: 29,
    name: "Jaqueta Corta Vento Unissex",
    category: "Roupas Fitness",
    rating: 4.4,
    reviews: 780,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/jaqueta.jpg
    image: "/images/produtos/jaqueta.jpg",
    shopeeLink: "https://shopee.com.br/product/123484",
    tags: ["Jaqueta", "Unissex"],
    description: "Jaqueta corta vento leve e respirável para atividades ao ar livre.",
  },

  // Acessórios
  {
    id: 5,
    name: "Luvas de Treino Profissionais",
    category: "Acessórios",
    rating: 4.5,
    reviews: 650,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/luvas.jpg
    image: "/images/produtos/luvas.jpg",
    shopeeLink: "https://shopee.com.br/product/123460",
    tags: ["Proteção", "Grip"],
    description: "Luvas profissionais com grip superior para proteção das mãos.",
  },
  {
    id: 7,
    name: "Shaker com Compartimento 600ml",
    category: "Acessórios",
    rating: 4.6,
    reviews: 980,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/shaker.jpg
    image: "/images/produtos/shaker.jpg",
    shopeeLink: "https://shopee.com.br/product/123462",
    tags: ["Shaker", "Suplementos"],
    description: "Shaker com compartimento extra para suplementos, ideal para o pós-treino.",
  },
  {
    id: 8,
    name: "Cinto de Musculação Couro",
    category: "Acessórios",
    rating: 4.7,
    reviews: 750,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/cinto.jpg
    image: "/images/produtos/cinto.jpg",
    shopeeLink: "https://shopee.com.br/product/123463",
    tags: ["Proteção", "Lombar"],
    description: "Cinto de couro legítimo para proteção lombar em exercícios pesados.",
  },
  {
    id: 9,
    name: "Straps de Levantamento",
    category: "Acessórios",
    rating: 4.5,
    reviews: 560,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/straps.jpg
    image: "/images/produtos/straps.jpg",
    shopeeLink: "https://shopee.com.br/product/123464",
    tags: ["Grip", "Força"],
    description: "Straps profissionais para melhorar a pegada em exercícios de puxada.",
  },
  {
    id: 14,
    name: "Munhequeira Neoprene Par",
    category: "Acessórios",
    rating: 4.3,
    reviews: 680,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/munhequeira.jpg
    image: "/images/produtos/munhequeira.jpg",
    shopeeLink: "https://shopee.com.br/product/123469",
    tags: ["Proteção", "Punho"],
    description: "Par de munhequeiras em neoprene para proteção dos punhos.",
  },
  {
    id: 30,
    name: "Joelheira Elástica Par",
    category: "Acessórios",
    rating: 4.4,
    reviews: 520,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/joelheira.jpg
    image: "/images/produtos/joelheira.jpg",
    shopeeLink: "https://shopee.com.br/product/123485",
    tags: ["Proteção", "Joelho"],
    description: "Par de joelheiras elásticas para proteção e suporte durante os treinos.",
  },
  {
    id: 31,
    name: "Toalha de Treino Microfibra",
    category: "Acessórios",
    rating: 4.2,
    reviews: 890,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/toalha.jpg
    image: "/images/produtos/toalha.jpg",
    shopeeLink: "https://shopee.com.br/product/123486",
    tags: ["Toalha", "Microfibra"],
    description: "Toalha de microfibra super absorvente e compacta para academia.",
  },
  {
    id: 32,
    name: "Garrafa Térmica 1L",
    category: "Acessórios",
    rating: 4.6,
    reviews: 1100,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/garrafa.jpg
    image: "/images/produtos/garrafa.jpg",
    shopeeLink: "https://shopee.com.br/product/123487",
    tags: ["Garrafa", "Térmica"],
    description: "Garrafa térmica de 1 litro que mantém a temperatura por até 12 horas.",
  },
  {
    id: 33,
    name: "Mochila Esportiva 30L",
    category: "Acessórios",
    rating: 4.5,
    reviews: 670,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/mochila.jpg
    image: "/images/produtos/mochila.jpg",
    shopeeLink: "https://shopee.com.br/product/123488",
    tags: ["Mochila", "Esportiva"],
    description: "Mochila esportiva com compartimentos para tênis, roupas e acessórios.",
  },

  // Lutas
  {
    id: 6,
    name: "Kimono Jiu-Jitsu A3",
    category: "Lutas",
    rating: 4.8,
    reviews: 420,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/kimono.jpg
    image: "/images/produtos/kimono.jpg",
    shopeeLink: "https://shopee.com.br/product/123461",
    tags: ["Jiu-Jitsu", "Competição"],
    description: "Kimono de alta qualidade para treinos e competições de Jiu-Jitsu.",
  },
  {
    id: 34,
    name: "Luvas de MMA Profissionais",
    category: "Lutas",
    rating: 4.7,
    reviews: 580,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/luvas-mma.jpg
    image: "/images/produtos/luvas-mma.jpg",
    shopeeLink: "https://shopee.com.br/product/123489",
    tags: ["MMA", "Luvas"],
    description: "Luvas de MMA em couro sintético com proteção para dedos e punhos.",
  },
  {
    id: 35,
    name: "Protetor Bucal Duplo",
    category: "Lutas",
    rating: 4.4,
    reviews: 320,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/protetor-bucal.jpg
    image: "/images/produtos/protetor-bucal.jpg",
    shopeeLink: "https://shopee.com.br/product/123490",
    tags: ["Protetor", "Bucal"],
    description: "Protetor bucal duplo moldável para máxima proteção durante os treinos.",
  },
  {
    id: 36,
    name: "Caneleira Muay Thai",
    category: "Lutas",
    rating: 4.6,
    reviews: 450,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/caneleira.jpg
    image: "/images/produtos/caneleira.jpg",
    shopeeLink: "https://shopee.com.br/product/123491",
    tags: ["Caneleira", "Muay Thai"],
    description: "Caneleira em couro sintético com espuma de alta densidade.",
  },
  {
    id: 37,
    name: "Saco de Pancada 120cm",
    category: "Lutas",
    rating: 4.8,
    reviews: 380,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/saco-pancada.jpg
    image: "/images/produtos/saco-pancada.jpg",
    shopeeLink: "https://shopee.com.br/product/123492",
    tags: ["Saco", "Pancada"],
    description: "Saco de pancada de 120cm em lona resistente, ideal para treinos intensos.",
  },
  {
    id: 38,
    name: "Tatame EVA 50x50cm Kit 4 peças",
    category: "Lutas",
    rating: 4.5,
    reviews: 720,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/tatame.jpg
    image: "/images/produtos/tatame.jpg",
    shopeeLink: "https://shopee.com.br/product/123493",
    tags: ["Tatame", "EVA"],
    description: "Kit com 4 peças de tatame EVA 50x50cm para proteção do solo.",
  },

  // Musculação
  {
    id: 10,
    name: "Banco Regulável Musculação",
    category: "Musculação",
    rating: 4.8,
    reviews: 1200,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/banco.jpg
    image: "/images/produtos/banco.jpg",
    shopeeLink: "https://shopee.com.br/product/123465",
    tags: ["Banco", "Regulável"],
    description: "Banco regulável para diversos exercícios de musculação em casa.",
  },
  {
    id: 11,
    name: "Barra Fixa de Porta",
    category: "Musculação",
    rating: 4.4,
    reviews: 890,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/barra-fixa.jpg
    image: "/images/produtos/barra-fixa.jpg",
    shopeeLink: "https://shopee.com.br/product/123466",
    tags: ["Barra Fixa", "Casa"],
    description: "Barra fixa ajustável para porta, suporta até 120kg.",
  },
  {
    id: 12,
    name: "Kit Anilhas 20kg",
    category: "Musculação",
    rating: 4.7,
    reviews: 1500,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/anilhas.jpg
    image: "/images/produtos/anilhas.jpg",
    shopeeLink: "https://shopee.com.br/product/123467",
    tags: ["Anilhas", "Peso"],
    description: "Kit completo de anilhas em ferro fundido para barras olímpicas.",
  },
  {
    id: 13,
    name: "Elásticos de Resistência Kit",
    category: "Musculação",
    rating: 4.6,
    reviews: 2200,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/elasticos.jpg
    image: "/images/produtos/elasticos.jpg",
    shopeeLink: "https://shopee.com.br/product/123468",
    tags: ["Elásticos", "Resistência"],
    description: "Kit com 5 elásticos de diferentes resistências para treino funcional.",
  },
  {
    id: 15,
    name: "Barra W Rosqueada 120cm",
    category: "Musculação",
    rating: 4.8,
    reviews: 920,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/barra-w.jpg
    image: "/images/produtos/barra-w.jpg",
    shopeeLink: "https://shopee.com.br/product/123470",
    tags: ["Barra W", "Rosqueada"],
    description: "Barra W rosqueada de 120cm para exercícios de bíceps e tríceps.",
  },
  {
    id: 39,
    name: "Kettlebell 16kg",
    category: "Musculação",
    rating: 4.7,
    reviews: 850,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/kettlebell.jpg
    image: "/images/produtos/kettlebell.jpg",
    shopeeLink: "https://shopee.com.br/product/123494",
    tags: ["Kettlebell", "Funcional"],
    description: "Kettlebell de 16kg em ferro fundido para treino funcional completo.",
  },
  {
    id: 40,
    name: "Barra Olímpica 20kg",
    category: "Musculação",
    rating: 4.9,
    reviews: 680,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/barra-olimpica.jpg
    image: "/images/produtos/barra-olimpica.jpg",
    shopeeLink: "https://shopee.com.br/product/123495",
    tags: ["Barra", "Olímpica"],
    description: "Barra olímpica de 20kg com rolamentos e pegada antiderrapante.",
  },
  {
    id: 41,
    name: "Medicine Ball 8kg",
    category: "Musculação",
    rating: 4.5,
    reviews: 420,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/medicine-ball.jpg
    image: "/images/produtos/medicine-ball.jpg",
    shopeeLink: "https://shopee.com.br/product/123496",
    tags: ["Medicine Ball", "Funcional"],
    description: "Medicine ball de 8kg em borracha para exercícios funcionais e core.",
  },
  {
    id: 42,
    name: "Rack para Halteres",
    category: "Musculação",
    rating: 4.6,
    reviews: 320,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/rack-halteres.jpg
    image: "/images/produtos/rack-halteres.jpg",
    shopeeLink: "https://shopee.com.br/product/123497",
    tags: ["Rack", "Organização"],
    description: "Rack organizador para até 10 pares de halteres, estrutura em aço.",
  },
  {
    id: 43,
    name: "Corda Naval 15m",
    category: "Musculação",
    rating: 4.4,
    reviews: 280,
    // IMAGEM DO PRODUTO: Coloque a imagem em public/images/produtos/corda-naval.jpg
    image: "/images/produtos/corda-naval.jpg",
    shopeeLink: "https://shopee.com.br/product/123498",
    tags: ["Corda", "Cardio"],
    description: "Corda naval de 15 metros para treino cardiovascular e funcional intenso.",
  },
]

export function ProductGrid({ categoryFilter }: { categoryFilter?: string }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")

  const categories = ["all", "Suplementos", "Equipamentos", "Roupas Fitness", "Acessórios", "Lutas", "Musculação"]

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesCategoryFilter =
        !categoryFilter ||
        (() => {
          const normalizedCategory = product.category
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-")
          const normalizedFilter = categoryFilter.toLowerCase()
          return (
            normalizedCategory === normalizedFilter ||
            normalizedCategory.includes(normalizedFilter) ||
            normalizedFilter.includes(normalizedCategory)
          )
        })()
      return matchesSearch && matchesCategory && matchesCategoryFilter
    })

    switch (sortBy) {
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating)
      case "popularity":
        return filtered.sort((a, b) => b.reviews - a.reviews)
      case "newest":
        return filtered.sort((a, b) => b.id - a.id)
      default:
        return filtered
    }
  }, [searchTerm, selectedCategory, sortBy, categoryFilter])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos em{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção especial de produtos fitness com os melhores preços e qualidade garantida
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Categorias</SelectItem>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevância</SelectItem>
                <SelectItem value="rating">Melhor Avaliação</SelectItem>
                <SelectItem value="popularity">Mais Popular</SelectItem>
                <SelectItem value="newest">Mais Recentes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge variant="secondary" className="absolute top-2 right-2">
                  {product.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews} avaliações)</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                  onClick={() => window.open(product.shopeeLink, "_blank")}
                >
                  Ver Ofertas na Shopee
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
            <p className="text-gray-400">Tente ajustar os filtros de busca</p>
          </div>
        )}
      </div>
    </section>
  )
}
