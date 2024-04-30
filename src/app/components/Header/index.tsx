import { useState } from "react";

const Header: React.FC = () => {
    const [showHeader, setShowHeader] = useState(false)
    return (
        <header className="bg-white w-full z-50">
          <nav className="container mx-auto h-20 pt-6">
            <div className="flex items-center justify-between px-6 py-3">
              <div className="text-suno-dark-blue text-2xl">
                <img className="lg:w-80 min-[320px]:w-[80%]" src="LOGO_SUNO_BRASIL.svg" alt="Logo da loja"/> 
              </div>
              <div className="min-[320px]:max-[1024px]:hidden">
                <ul className="flex items-center space-x-8">
                  <li><a href="/" className="schibsted font-medium text-2xl text-suno-dark-blue">HOME</a></li>
                  <li><a href="#about" className="schibsted font-medium text-2xl text-suno-dark-blue">QUEM SOMOS</a></li>
                  <li><a href="#solutions" className="schibsted font-medium text-2xl text-suno-dark-blue">SOLUÇÕES</a></li>
                  <li><a href="/sunotech" className="schibsted font-medium text-2xl text-suno-dark-blue">SUNOTECH</a></li>
                  <li><a href="#contact" className="schibsted font-medium text-2xl text-suno-dark-blue">CONTATO</a></li>
                </ul>
              </div>
              <div className="xl:hidden">
                <button className="outline-none" onClick={() => setShowHeader(!showHeader)}>
                  <svg className="w-6 h-6 text-suno-dark-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={`xl:hidden z-20 absolute flex justify-end w-full bg-white ${showHeader? '': 'hidden'} duration-300 ease-out transition-all`}>
              <ul className="mt-4 space-y-4">
                  <li><a href="/" className="schibsted font-medium text-2xl text-suno-dark-blue">HOME</a></li>
                  <li><a href="#about" className="schibsted font-medium text-2xl text-suno-dark-blue">QUEM SOMOS</a></li>
                  <li><a href="#solutions" className="schibsted font-medium text-2xl text-suno-dark-blue">SOLUÇÕES</a></li>
                  <li><a href="/sunotech" className="schibsted font-medium text-2xl text-suno-dark-blue">SUNOTECH</a></li>
                  <li><a href="#contact" className="schibsted font-medium text-2xl text-suno-dark-blue">CONTATO</a></li>
              </ul>
            </div>
            
          </nav>
        </header>
    );
};

export default Header;