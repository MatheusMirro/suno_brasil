import React from 'react'

function SolutionSection() {
    return (
        <div className="bg-suno-gray px-9 py-10 md:w-full">
            <h1 className="text-center text-suno-dark-blue font-extrabold schibsted text-4xl">Soluções Sunotech</h1>
            <div className="flex min-[320px]:max-md:flex-col justify-around my-5 gap-5 xl:px-20 md:flex-wrap lg:flex-nowrap">
                <div className="bg-white border border-b-8 rounded-3xl border-b-suno-acqua min-[320px]:max-[1024px]:p-5 lg:p-10 break-words z-10">
                    <h2 className="text-suno-acqua font-extrabold schibsted min-[320px]:max-md:text-2xl min-[320px]:max-md:text-center md:text-3xl mb-3 lg:text-4xl">ALOCAÇÃO</h2>
                    <p className="text-suno-dark-blue font-medium schibsted pb-8 min-[320px]:max-md:text-sm md:text-base lg:text-xl">
                        Nosso serviço de outsourcing de TI
                        é personalizado para atender às
                        necessidades específicas de cada
                        vaga. Assim, permitimos que nossos
                        clientes possam se concentrar em
                        seus principais negócios, reduzir
                        custos operacionais, acessar
                        conhecimentos especializados em
                        TI e manter-se atualizados com as
                        últimas tecnologias e melhores
                        práticas do setor.
                    </p>
                </div>
                <div className="bg-white border border-b-8 rounded-3xl border-b-suno-acqua min-[320px]:max-[1024px]:p-5 lg:p-10 break-words z-10">
                    <h2 className="text-suno-acqua font-extrabold schibsted min-[320px]:max-md:text-2xl min-[320px]:max-md:text-center md:text-3xl mb-3 lg:text-4xl">HUNTING</h2>
                    <p className="text-suno-dark-blue font-medium schibsted pb-8 min-[320px]:max-md:text-sm md:text-base lg:text-xl">
                        Conhecemos bem o mercado
                        e as suas tecnologias, e
                        desempenhamos um papel crucial
                        na identificação e aquisição de
                        talentos estratégicos para
                        organizações que buscam
                        preencher cargos de alto nível.
                        Nossa consultoria de Hunting
                        garante que os candidatos
                        apresentados sejam altamente
                        qualificados e adequados à cultura
                        da organização.
                    </p>
                </div>
                <div className="bg-white border border-b-8 rounded-3xl border-b-suno-acqua min-[320px]:max-[1024px]:p-5 lg:p-10 break-words z-10">
                    <h2 className="text-suno-acqua font-extrabold schibsted min-[320px]:max-md:text-2xl min-[320px]:max-md:text-center md:text-3xl mb-3 lg:text-4xl">CONSULTORIA</h2>
                    <p className="text-suno-dark-blue font-medium schibsted pb-8 min-[320px]:max-md:text-sm md:text-base lg:text-xl">
                        Contamos com uma equipe
                        de profissionais especializados,
                        oferecendo orientação e assistência
                        em várias áreas relacionadas à
                        tecnologia da informação.
                        Adaptamos seus serviços às suas
                        necessidades individuais. Nosso
                        objetivo principal é garantir que a
                        tecnologia seja um facilitador eficaz
                        para o crescimento e sucesso dos
                        negócios, otimizando os recursos
                        existentes e sugerindo melhorias
                        estratégicas.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SolutionSection