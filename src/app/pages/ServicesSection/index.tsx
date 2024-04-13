import React from 'react'

function ServicesSection() {
    return (
        <div className="h-full bg-suno-gray p-10">
            {/* TODO: Change images */}
            <div className="flex justify-center">
                <div className="mr-20">
                    <h3 className="text-suno-acqua text-5xl font-extrabold schibsted mb-5">
                        R&S<br/>
                        Hunting<br/>
                        Alocação
                    </h3>
                    <p className="text-suno-dark-blue text-xl">
                        Temos a solução certa para<br/>
                        cada demanda e personalizada<br/>
                        para atender às necessidades<br/>
                        específicas da sua empresa.
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-8 my-2">
                        <img className="w-[10%]" src="CIRCULO_AMARELO.svg" alt="Círculo Amarelo"></img>
                        <p className="text-suno-dark-blue text-xl">
                            Serviço de Alocação e Hunting para TI com<br/>
                            toda a potência de nossa expertise no<br/>
                            competitivo merecado de tecnologia.
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-8 my-2">
                    <img className="w-[10%]" src="CIRCULO_AMARELO.svg" alt="Círculo Amarelo"></img>
                        <p className="text-suno-dark-blue text-xl">
                            Recrutamento de vagas administrativas,<br/>
                            técnicas e operacionais. Atendemos demandas<br/>
                            permanentes, temporárias e CLT.
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-8 my-2">
                    <img className="w-[10%]" src="CIRCULO_AMARELO.svg" alt="Círculo Amarelo"></img>
                        <p className="text-suno-dark-blue text-xl">
                        RPO end-to-end - Serviço de recrutamento<br/>
                        terceirizado que abrange todas as fases, da<br/>
                        abertura ao fechamento da vaga.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection