import React from 'react'

function Section1() {
    return (
        <div className="h-full flex">
            <div className="w-full flex flex-col items-center justify-center bg-suno-gray">
                <h1 className="schibsted-bold text-5xl text-center text-suno-dark-blue my-9 font-extrabold">
                     Somos uma consultoria de<br/>
                     recrutamento, seleção e alocação<br/>
                     de talentos que fazem a diferença.
                </h1>
                {/* TODO: Change button font to Lora*/}
                <button className="w-80 h-11 bg-suno-acqua rounded-3xl mt-12 text-suno-dark-blue schibsted-bold z-10">FALE COM UM ESPECIALISTA</button>
                <img className="h-auto absolute w-2/6 bottom-2.5" src="CIRCULO_AMARELO.svg" alt="Círculo Amarelo"/> 
            </div>
        </div>
    )
}

export default Section1