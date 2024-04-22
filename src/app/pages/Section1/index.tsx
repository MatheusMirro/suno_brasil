/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Section1() {
    return (
        <div className="relative w-full">
            <div id="about" className="flex flex-col items-center justify-center bg-suno-gray">
                <h1 className="schibsted min-[320px]:max-[425px]:text-4xl text-5xl text-center text-suno-dark-blue my-9 font-extrabold">
                    Somos uma consultoria de<br />
                    recrutamento, seleção e alocação<br />
                    de talentos que fazem a diferença.
                </h1>
                <button className="min-[320px]:max-[519px]:relative w-80 h-11 absolute lg:mb-[13%] bg-suno-acqua rounded-3xl text-suno-dark-blue schibsted-bold z-10 md:mb-[30%] min-[520px]:max-[770px]:mb-[40%] min-[1024px]:max-[1240px]:mb-[30%]">FALE COM UM ESPECIALISTA</button>
                <img className="min-[320px]:max-[560px]:absolute min-[520px]:max-[560px]:top-[50%] lg:max-md:mt-[85px] h-auto md:w-[80%] lg:w-2/6 lg:bottom-2.5 min-[1024px]:max-[1240px]:w-[60%]" src="CIRCULO_AMARELO.svg" alt="Círculo Amarelo" />
                <div className="min-[320px]:max-[519px]:relative min-[520px]:max-[560px]:relative min-[520px]:max-[560px]:z-10 bg-white absolute lg:w-full lg:mt-[13%] lg:p-10 md:mt-[30%] min-[320px]:max-[770px]:mt-[25%] min-[1024px]:max-[1500px]:mt-[20%]">
                    <h2 className="text-suno-acqua text-center text-5xl font-extrabold schibsted mb-5 p-5">R&S inteligente e assertivo<br />
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