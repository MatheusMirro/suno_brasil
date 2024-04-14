import React from 'react'

function ServicesSection() {
    return (
        <div className="h-full bg-suno-gray md:p-10">
            <div className="flex justify-center ml-12 min-[320px]:max-md:flex-col">
                <div className="mr-20 min-[320px]:max-md:text-center">
                    <h3 className="text-suno-acqua text-5xl font-extrabold schibsted mb-5">
                        R&S<br />
                        Hunting<br />
                        Alocação
                    </h3>
                    <p className="text-suno-dark-blue text-xl">
                        Temos a solução certa para<br />
                        cada demanda e personalizada<br />
                        para atender às necessidades<br />
                        específicas da sua empresa.
                    </p>
                </div>
                <div className="flex flex-col min-[320px]:max-md:text-center">
                    <div className="flex md:flex-row items-center gap-8 md:my-2 min-[320px]:max-md:my-5 min-[320px]:max-md:flex-col min-[320px]:max-md:w-[60%] min-[320px]:max-md:ml-4">
                        <img className="md:w-[30%]" src="SUNOTECH.svg" alt="Círculo Amarelo"></img>
                        <p className="text-suno-dark-blue text-xl">
                            Serviço de Alocação e Hunting para TI com<br />
                            toda a potência de nossa expertise no<br />
                            competitivo merecado de tecnologia.
                        </p>
                    </div>
                    <div className="flex md:flex-row items-center gap-8 md:my-2 min-[320px]:max-md:my-5 min-[320px]:max-md:flex-col min-[320px]:max-md:w-[60%] min-[320px]:max-md:ml-4">
                        <img className="md:w-[30%]" src="SUNOSTAFFING.svg" alt="Círculo Amarelo"></img>
                        <p className="text-suno-dark-blue text-xl">
                            Recrutamento de vagas administrativas,<br />
                            técnicas e operacionais. Atendemos demandas<br />
                            permanentes, temporárias e CLT.
                        </p>
                    </div>
                    <div className="flex md:flex-row items-center gap-8 md:my-2 min-[320px]:max-md:my-5 min-[320px]:max-md:flex-col min-[320px]:max-md:w-[60%] min-[320px]:max-md:ml-4">
                        <img className="md:w-[30%]" src="SUNORPO.svg" alt="Círculo Amarelo"></img>
                        <p className="text-suno-dark-blue text-xl">
                            RPO end-to-end - Serviço de recrutamento<br />
                            terceirizado que abrange todas as fases, da<br />
                            abertura ao fechamento da vaga.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection