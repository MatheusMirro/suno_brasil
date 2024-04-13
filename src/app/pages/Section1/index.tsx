import React from 'react'

function Section1() {
    return (
        <div className="h-full flex">
            <div className="w-full flex flex-col items-center justify-center bg-suno-gray">
                <h1 className="schibsted text-5xl text-center text-suno-dark-blue my-9 font-extrabold">
                    Somos uma consultoria de<br />
                    recrutamento, seleção e alocação<br />
                    de talentos que fazem a diferença.
                </h1>
                <button className="w-80 h-11 absolute mb-[13%] bg-suno-acqua rounded-3xl text-suno-dark-blue schibsted-bold z-10">FALE COM UM ESPECIALISTA</button>
                <img className="h-auto w-2/6 bottom-2.5" src="CIRCULO_AMARELO.svg" alt="Círculo Amarelo" />
                <div className="bg-white w-full absolute mt-[13%] p-10">
                    <h2 className="text-suno-acqua text-center text-5xl font-extrabold schibsted mb-5">R&S inteligente e assertivo<br />
                        com suporte de ponta-a-ponta.
                    </h2>
                    <p className="text-suno-dark-blue text-center schibsted m-2 text-xl">
                        A Suno Brasil promove fits perfeitos em todas as áreas, nos setores público e privado. Com brilho nos olhos e tecnologia<br />
                        no DNA, aplicamos nossa vasta experiência no mercado de TI para garantir recrutamento, seleção e alocação de<br />
                        talentos com assertividade e gestão eficiente de tempo e recursos.
                    </p>
                    <p className="text-suno-dark-blue text-center schibsted m-2 text-xl">
                        Da seleção ao onboarding, incluindo o acompanhamento mensal, feedbacks e trilhas de capacitação dos profissionais,<br />
                        nosso time de especialistas garante suporte de ponta a ponta e um recrutamento que impulsiona resultados.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section1