const Footer: React.FC = () => {
    return (
        <footer className="bg-suno-dark-blue w-full h-80">
            <div className="pt-10 pb-4 w-[90%] border-b-2 border-white flex m-auto justify-between">
                <img className="w-10" src="ICON_SUPORTE.svg" alt="Círculo Amarelo"></img>
                <div className="flex flex-row gap-5">
                    <img className="w-10" src="ICON_SUPORTE.svg" alt="Círculo Amarelo"></img>
                    <img className="w-10" src="ICON_SUPORTE.svg" alt="Círculo Amarelo"></img>
                    <img className="w-10" src="ICON_SUPORTE.svg" alt="Círculo Amarelo"></img>
                </div>
            </div>
            <div className="px-24 pt-5 flex">
                <div className="mr-[20%]">
                    <p className="text-white schibsted font-medium text-xl py-px">Suno Brasil</p>
                    <p className="text-white schibsted font-medium text-xl py-px">São Paulo – SP</p>
                </div>
                <div className="mr-[20%]">
                    <p className="text-white schibsted font-medium text-xl py-px">Home</p>
                    <p className="text-white schibsted font-medium text-xl py-px">Quem Somos</p>
                    <p className="text-white schibsted font-medium text-xl py-px">Soluções</p>
                </div>
                <div className="mr-[20%]">
                    <p className="text-white schibsted font-medium text-xl py-px">Sunotech</p>
                    <p className="text-white schibsted font-medium text-xl py-px">RPO</p>
                    <p className="text-white schibsted font-medium text-xl py-px">Staffing</p>
                </div>
                <div>
                    <p className="text-white schibsted font-medium text-xl py-px">Contato</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;