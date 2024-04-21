/* eslint-disable @next/next/no-img-element */

import React from 'react'

function FirstSection() {
    return (
        <div className="bg-white px-9 pb-10 md:w-full mt-4">
            <div className="flex md:justify-around min-[320px]:max-md:text-center">
                <div className="z-10 md:p-4 lg:p-24 m-auto">
                    <h1 className="text-suno-dark-blue font-extrabold schibsted text-4xl pb-8">
                        Economize Tempo <br className="min-[320px]:max-md:hidden"/> 
                        e Recursos.
                    </h1>
                    <p className="text-suno-dark-blue font-medium schibsted text-xl pb-8">
                        Conheça nossa solução especializada em <br/>
                        talentos de tecnologia, nossa área de expertise.
                    </p>
                    <button className="bg-suno-yellow rounded-3xl text-suno-dark-blue schibsted-bold w-full h-auto text-lg leading-none py-3">FALE COM UM ESPECIALISTA</button>
                </div>
                <div className="flex w-3/4 min-[320px]:max-md:hidden xl:w-2/4">
                    <img className="w-full z-0" src="IMG-HERO.svg" alt="Círculo Amarelo"></img>
                </div>
            </div>
        </div>
    )
}

export default FirstSection