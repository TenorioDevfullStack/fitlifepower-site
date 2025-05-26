import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Privacidade
              </span>
            </h1>
            <p className="text-lg text-gray-600">Última atualização: Janeiro de 2024</p>
          </div>

          <Card className="p-8">
            <CardContent className="pt-0 prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
                  <p className="text-gray-600 leading-relaxed">
                    A FitLifePower ("nós", "nosso" ou "empresa") está comprometida em proteger e respeitar sua
                    privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos
                    suas informações quando você visita nosso site fitlifepower.com.br.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        2.1 Informações Fornecidas Voluntariamente
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Nome e endereço de email (quando você se inscreve em nossa newsletter)</li>
                        <li>Informações de contato (quando você nos envia uma mensagem)</li>
                        <li>Comentários e feedback que você nos fornece</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        2.2 Informações Coletadas Automaticamente
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Endereço IP e informações do dispositivo</li>
                        <li>Tipo de navegador e sistema operacional</li>
                        <li>Páginas visitadas e tempo gasto no site</li>
                        <li>Dados de cookies e tecnologias similares</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Para fornecer e melhorar nossos serviços</li>
                    <li>Para enviar newsletters e comunicações promocionais (com seu consentimento)</li>
                    <li>Para responder às suas perguntas e solicitações</li>
                    <li>Para analisar o uso do site e melhorar a experiência do usuário</li>
                    <li>Para cumprir obrigações legais</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas
                    seguintes situações:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Com seu consentimento explícito</li>
                    <li>Para cumprir obrigações legais ou responder a processos legais</li>
                    <li>Para proteger nossos direitos, propriedade ou segurança</li>
                    <li>
                      Com prestadores de serviços que nos ajudam a operar o site (sob acordos de confidencialidade)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Links de Afiliados</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Nosso site contém links de afiliados para produtos na Shopee. Quando você clica nesses links e faz
                    uma compra, podemos receber uma comissão. Isso não afeta o preço que você paga. As informações que
                    você fornece durante a compra são regidas pela política de privacidade da Shopee, não pela nossa.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Usamos cookies para melhorar sua experiência em nosso site. Cookies são pequenos arquivos de texto
                    armazenados em seu dispositivo. Você pode configurar seu navegador para recusar cookies, mas isso
                    pode afetar a funcionalidade do site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Segurança</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas
                    informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Seus Direitos</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Acesso às suas informações pessoais</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Exclusão de dados pessoais</li>
                    <li>Portabilidade de dados</li>
                    <li>Revogação do consentimento</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Retenção de Dados</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos
                    nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Menores de Idade</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente informações
                    pessoais de menores. Se tomarmos conhecimento de que coletamos informações de um menor, tomaremos
                    medidas para excluir essas informações.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Alterações nesta Política</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
                    significativas publicando a nova política em nosso site com uma nova data de "última atualização".
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contato</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em
                    contato conosco:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">
                      <strong>Email:</strong> privacidade@fitlifepower.com.br
                      <br />
                      <strong>Endereço:</strong> São Paulo, SP - Brasil
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
