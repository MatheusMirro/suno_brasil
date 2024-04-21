const Header: React.FC = () => {
    return (
        <header className="bg-white">
          <nav className="container mx-auto px-6 py-3 h-20 pt-6">
            <div className="flex items-center justify-between">
              <div className="text-suno-dark-blue text-2xl">
                <img className="lg:w-80 min-[320px]:w-[80%]" src="LOGO_SUNO_BRASIL.svg" alt="Logo da loja"/> 
              </div>
              <div className="min-[320px]:max-[1024px]:hidden min-[1024px]:max-[1279px]:">
                <ul className="flex items-center space-x-8">
                  <li><a href="/" className="schibsted font-medium text-2xl text-suno-dark-blue">Home</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Quem Somos</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Soluções</a></li>
                  <li><a href="/sunotech" className="schibsted font-medium text-2xl text-suno-dark-blue">Sunotech</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Clientes</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Contato</a></li>
                </ul>
              </div>
              <div className="lg:hidden">
                <button className="outline-none mobile-menu-button">
                  <svg className="w-6 h-6 text-suno-dark-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mobile-menu hidden lg:hidden">
              <ul className="mt-4 space-y-4">
                  <li><a href="/" className="schibsted font-medium text-2xl text-suno-dark-blue">Home</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Quem Somos</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Soluções</a></li>
                  <li><a href="/sunotech" className="schibsted font-medium text-2xl text-suno-dark-blue">Sunotech</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Clientes</a></li>
                  <li><a href="#" className="schibsted font-medium text-2xl text-suno-dark-blue">Contato</a></li>
              </ul>
            </div>
            
          </nav>
        </header>
    );
};

export default Header;