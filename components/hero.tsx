import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Zap, Shield } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme seu{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Corpo
                </span>{" "}
                e sua{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Vida</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra os melhores produtos fitness, suplementos e equipamentos para alcançar seus objetivos.
                Qualidade garantida e preços incríveis!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#produtos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 w-full sm:w-auto"
                >
                  Ver Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/categoria/suplementos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-700 hover:bg-green-50 w-full sm:w-auto"
                >
                  Categorias
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Foco Total</h3>
                <p className="text-sm text-gray-600">Produtos selecionados</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Resultados</h3>
                <p className="text-sm text-gray-600">Eficácia comprovada</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Confiança</h3>
                <p className="text-sm text-gray-600">Marcas reconhecidas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-green-200 p-8">
              {/* BANNER PRINCIPAL: Coloque a imagem em public/images/banner/hero-banner.jpg */}
              <img
                src="/images/banner/hero-banner.jpg"
                alt="Produtos Fitness"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
