import Link from "next/link"
import { Dumbbell, Instagram, Facebook, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">FitLifePower</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sua fonte confiável para produtos fitness, suplementos e equipamentos de qualidade. Transforme seu corpo e
              sua vida com os melhores produtos do mercado.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categoria/suplementos" className="text-gray-400 hover:text-green-500 transition-colors">
                  Suplementos
                </Link>
              </li>
              <li>
                <Link href="/categoria/equipamentos" className="text-gray-400 hover:text-green-500 transition-colors">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link href="/categoria/roupas-fitness" className="text-gray-400 hover:text-green-500 transition-colors">
                  Roupas Fitness
                </Link>
              </li>
              <li>
                <Link href="/categoria/acessorios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Acessórios
                </Link>
              </li>
              <li>
                <Link href="/categoria/lutas" className="text-gray-400 hover:text-green-500 transition-colors">
                  Lutas
                </Link>
              </li>
              <li>
                <Link href="/categoria/musculacao" className="text-gray-400 hover:text-green-500 transition-colors">
                  Musculação
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-green-500 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-gray-400 hover:text-green-500 transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/dicas-fitness" className="text-gray-400 hover:text-green-500 transition-colors">
                  Dicas Fitness
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-gray-400 hover:text-green-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Receba as melhores ofertas e dicas fitness diretamente no seu email.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <button className="w-full px-3 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-md hover:from-green-700 hover:to-green-600 transition-colors">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 FitLifePower.com.br - Todos os direitos reservados.
            <span className="block mt-1">
              Este site contém links de afiliado. Podemos receber comissão por compras realizadas através dos nossos
              links.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
