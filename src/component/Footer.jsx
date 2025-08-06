function Footer () {
    return (
    <footer className=" h-24 absolute  left-0 w-full">
        <div className="flex flex-row  bg-cgt-red justify-items-center justify-around  text-zinc-50" >
             
             {/* Contact mail*/}

             <div className="px-2   sm:px-8 w-1/3">
                <h3 className="underline font-serif text-cgt-yellow text-shadow-lg/30 text-center text-base sm:text-xl sm:font-bold md:text-base lg:text-xl xl:text-2xl sm:uppercase pt-2">
                    Contact
                </h3>
                <h4 className="font-sans  text-center text-xs sm:text-base md:text-base lg:text-lg xl:text-xl sm:font-bold pt-5 md:pt-7 lg:pt-8 xl:pt-5 ">
                    <a href="mailto:aesh@cgteduc.fr?subject=Prise de contact" className= " underline underline-offset-2 decoration-2 text-blue-400 hover:decoration-cgt-yellow hover:text-cgt-yellow visited:text-purple-900 lg:text-xl transition-discrete duration-700 ease-in-out ">
                        <span className=" text-xs md:text-lg lg:text-xl xl:text-2xl  transition duration-500 ease-in-out whitespace-nowrap  ">Prendre contact</span>
                    </a>
                </h4> 
            </div>

            {/* réseaux sociaux */}

             <div className="px-2 sm:px-8 w-1/3" >
                    <h3 className="underline font-serif text-cgt-yellow text-shadow-lg/30 text-shadow-black text-center text-base sm:text-xl sm:font-bold sm:uppercase md:text-base md:leading-4.5 lg:text-xl xl:text-2xl md:pt-3 lg:pt-3.5 pt-2" >Réseau</h3> 
                     <div className="mt-4 lg:mt-0">
                        <h4 className="font-sans  text-xs px-2 max-sm:text-base pt-1  sm:pt-6 md:pt-4 sm:font-bold text-center ">
                            <a href="https://www.facebook.com/CollectifnationalAESHCGTEducAction" target="_blank" className=" flex flex-row justify-center items-center text-blue-400 ">
                            <img src="./img/facebook.png" alt="logo facebook" className="lg:mt-4.5 size-4 xl:size-7" /><span className=" underline underline-offset-2 decoration-2 px-1 text-xs md:text-lg lg:text-xl lg:pt-5 xl:text-2xl hover:decoration-cgt-yellow hover:text-cgt-yellow  transition duration-500 ease-in-out">Facebook</span></a>
                    </h4>
                </div>
            </div> 

            {/* Lien utile*/}  

            <div className="px-2 sm:px-8 w-1/3">
                <h3 className=" underline font-serif text-cgt-yellow text-shadow-lg/30 text-center text-base sm:text-xl sm:font-bold md:text-base lg:text-xl lg:font-bold xl:text-2xl sm:uppercase pt-2 lg:pt-2 ">Liens Utiles</h3>
                <div className="mt-5">
                <h4 className="font-sans text-xs sm:text-base xl:text-xl sm:font-bold lg:text-bold lg:text-xl text-center">
                    <a href="https://www.cgteduc.fr/syndicalisation/" className="underline underline-offset-2 decoration-2 text-blue-400 visited:texte-purple-900 md:text-lg lg:text-xl hover:decoration-cgt-yellow hover:text-cgt-yellow transition duration-500 ease-in-out whitespace-nowrap">Adhésion CGT</a>
                </h4>
                <h4 className="font-sans text-xs sm:text-base xl:text-xl sm:font-bold text-center pb-2">
                    <a href="https://www.cgteduc.fr/category/aesh/" className="underline underline-offset-2 decoration-2 text-blue-400 hover:underline visited:text-purple-900 md:text-ld lg:text-xl hover:decoration-cgt-yellow hover:text-cgt-yellow transition duration-500 ease-in-out whitespace-nowrap">Actualité AESH
                    </a>
                </h4>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer