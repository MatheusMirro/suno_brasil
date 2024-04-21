/* eslint-disable @next/next/no-img-element */
import React from 'react'

function ReasonSection() {
    return (
        <div className="bg-suno-gray px-9 pb-10 md:w-full bg-suno-blue-circle bg-('url['/public/CIRCULO_FUNDO.svg']')">
            <h1 className="text-center text-suno-dark-blue font-extrabold schibsted text-4xl mb-8">
                Por que escolher a Sunotech?
            </h1>
            <img className="m-auto absolute w-full z-0 
                            min-[320px]:max-[1024px]:left-[1%] 
                            min-[320px]:max-[374px]:bottom-[-160%] 
                            min-[375px]:max-[424px]:bottom-[-140%]
                            min-[425px]:max-[677px]:bottom-[-125%]
                            min-[678px]:max-[767px]:bottom-[-115%]
                            min-[768px]:max-[1023px]:bottom-[-145%]
                            min-[1024px]:max-[1440px]:bottom-[-200%]
                            min-[1441px]:max-[1780px]:bottom-[-215%]
                            min-[1441px]:w-[95%]
                            min-[1781px]:top-[145%]"
                            // This is a mess, I have no idea what is happening
                            src="CIRCULO_FUNDO.svg" alt="Círculo fundo"></img>
            <div className="flex min-[320px]:max-md:flex-col md:flex-wrap xl:px-20 gap-7">
                <div className="bg-white border rounded-3xl min-[320px]:max-[1024px]:p-7 lg:p-10 break-words mb-3 lg:w-[48%] z-10">
                    <img className="min-[320px]:max-[1024px]:w-[20%] lg:w-[15%] my-3" src="ICON-EXPERTISE.svg" alt="Icone Expertise"></img>
                    <h2 className="text-suno-dark-blue text-lg font-bold schibsted mb-3 lg:text-2xl">
                        Expertise comprovada
                    </h2>
                    <p className="text-suno-dark-blue font-medium schibsted pb-8 min-[320px]:max-md:text-sm md:text-base lg:text-xl">
                        Nosso serviço de outsourcing de TI é personalizado para
                        atender às necessidades específicas de cada vaga. Assim,
                        permitimos que nossos clientes possam se concentrar
                        em seus principais negócios, reduzir custos
                        operacionais, acessar conhecimentos especializados em
                        TI e manter-se atualizados com as últimas tecnologias e
                        melhores práticas do setor.
                    </p>
                </div>
                <div className="flex flex-col justify-center bg-white border rounded-3xl min-[320px]:max-[1024px]:p-7 lg:p-10 break-words mb-3 lg:w-[49%] z-10">
                    <img className="min-[320px]:max-[1024px]:w-[20%] lg:w-[15%] my-3" src="ICON-FLEX-ESCALABILIDADE.svg" alt="Icone Escalabilidade"></img>
                    <h2 className="text-suno-dark-blue text-lg font-bold schibsted mb-3 lg:text-2xl">
                        Flexibilidade e escalabilidade
                    </h2>
                    <p className="text-suno-dark-blue font-medium schibsted pb-8 min-[320px]:max-md:text-sm md:text-base lg:text-xl">
                        Oferecemos a flexibilidade necessária para atender às
                        demandas variáveis do seu negócio. Seja um projeto de
                        curto prazo ou uma equipe permanente, estamos
                        prontos para atender suas necessidades.
                    </p>
                </div>
                <div className="flex flex-col justify-center bg-white border rounded-3xl min-[320px]:max-[1024px]:p-7 lg:p-10 break-words mb-3 lg:w-[48%] z-10">
                    <img className="min-[320px]:max-[1024px]:w-[20%] lg:w-[15%] my-3" src="ICON-INOVACAO.svg" alt="Icone Inovação"></img>
                    <h2 className="text-suno-dark-blue text-lg font-bold schibsted mb-3 lg:text-2xl">
                        Inovação constante
                    </h2>
                    <p className="text-suno-dark-blue font-medium schibsted pb-8 min-[320px]:max-md:text-sm md:text-base lg:text-xl">
                        A tecnologia está em constante evolução, e nós também.
                        Mantemos nossa equipe atualizada com as últimas
                        tendências e melhores práticas para garantir que você
                        esteja sempre à frente da curva.
                    </p>
                </div>
                <div className="flex flex-col justify-center bg-white border rounded-3xl min-[320px]:max-[1024px]:p-7 lg:p-10 break-words mb-3 lg:w-[49%] z-10">
                    <img className="min-[320px]:max-[1024px]:w-[20%] lg:w-[15%] my-3" src="ICON-PERSONALIZACAO.svg" alt="Icone Personalização"></img>
                    <h2 className="text-suno-dark-blue text-lg font-bold schibsted mb-3 lg:text-2xl">
                        Personalização de soluções
                    </h2>
                    <p className="text-suno-dark-blue font-medium schibsted pb-8 min-[320px]:max-md:text-sm md:text-base lg:text-xl">
                        Não acreditamos em soluções “tamanho único”.
                        Trabalhamos em estreita colaboração com você para
                        entender suas necessidades específicas e personalizar
                        uma equipe de profissionais que se encaixe
                        perfeitamente em sua cultura e objetivos.
                    </p>
                </div>
            </div>
            <h3 className="text-center text-suno-dark-blue font-extrabold schibsted text-2xl xl:px-20 mt-10">
                Se você está pronto para elevar sua equipe de TI a um novo nível, não espere
                mais! Entre em contato conosco agora para descobrir como podemos ajudar
                a transformar sua organização com o talento de TI de classe mundial.
            </h3>
        </div>
    )
}

export default ReasonSection