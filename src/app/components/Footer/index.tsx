const Footer: React.FC = () => {
    return (
        <footer className="bg-suno-dark-blue w-full h-80">
            <div className="pt-10 pb-4 w-[90%] border-b-2 border-white flex m-auto justify-between">
                <img className="w-60" src="LOGO_SUNO_BRASIL_BRANCA.svg" alt="Círculo Amarelo"></img>
                <div className="flex flex-row gap-5">
                    <img className="w-8" src="REDE_LINKEDIN.svg" alt="Círculo Amarelo"></img>
                    <img className="w-8" src="REDE_INSTAGRAM.svg" alt="Círculo Amarelo"></img>
                    <img className="w-8" src="REDE_WHATSAPP.svg" alt="Círculo Amarelo"></img>
                </div>
            </div>
            <div className="px-24 pt-5 flex">
                <div className="mr-[20%]">
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Suno Brasil</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">São Paulo – SP</p>
                </div>
                <div className="mr-[20%]">
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Home</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Quem Somos</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Soluções</p>
                </div>
                <div className="mr-[20%]">
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Sunotech</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">RPO</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Staffing</p>
                </div>
                <div>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Contato</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;