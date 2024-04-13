import React from 'react'

function CardsSection() {
    return (
        <div className="bg-suno-light-yellow px-9 pb-10">
            <h2 className="text-3xl text-center text-suno-dark-blue font-bold p-10">
                Conhecemos bem o mercado e estamos sempre atualizados com <br />
                as melhores tecnologias. Por isso, desempenhamos um papel <br />
                crucial na identificação e aquisição de talentos estratégicos para <br />
                organizações que buscam preencher cargos de alto nível.
            </h2>
            <div className="grid grid-cols-5 gap-1 align-middle">
                <div className="card border-b-suno-acqua">
                    <img className="h-auto w-2/6 bottom-2.5 m-auto pt-5" src="ICON_SUPORTE.svg" alt="Círculo Amarelo"></img>
                    <p className="schibsted text-suno-dark-blue font-bold text-xl p-10">
                        Suporte desde o briefing<br />
                        da posição até a<br />
                        administração de pessoal.
                    </p>
                </div>
                <div className="card border-b-suno-acqua">
                    <img className="h-auto w-2/6 bottom-2.5 m-auto pt-5" src="ICON_EQUIPE.svg" alt="Círculo Amarelo"></img>
                    <p className="schibsted text-suno-dark-blue font-bold text-xl p-10">
                        Equipe especializada em<br />
                        perfis técnicos
                    </p>
                </div>
                <div className="card border-b-suno-acqua">
                    <img className="h-auto w-2/6 bottom-2.5 m-auto pt-5" src="ICON_AVALIACAO.svg" alt="Círculo Amarelo"></img>
                    <p className="schibsted text-suno-dark-blue font-bold text-xl p-10">
                        Avaliação acuarada de<br />
                        qualificação técnica, soft<br />
                        skills e fit cultural
                    </p>
                </div>
                <div className="card border-b-suno-acqua">
                    <img className="h-auto w-2/6 bottom-2.5 m-auto pt-5" src="ICON_ACOMPANHAMENTO.svg" alt="Círculo Amarelo"></img>
                    <p className="schibsted text-suno-dark-blue font-bold text-xl p-10">
                        Acompanhamento contínuo<br />
                        e desenvolvimento<br />
                        profissional ao longo de<br />
                        toda a jornada
                    </p>
                </div>
                <div className="card border-b-suno-acqua">
                    <img className="h-auto w-2/6 bottom-2.5 m-auto pt-5" src="ICON_FEEDBACK.svg" alt="Círculo Amarelo"></img>
                    <p className="schibsted text-suno-dark-blue font-bold text-xl p-10">
                        Feedbacks construtivos e<br />
                        trilhas de capacitação
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardsSection