function Header () {
    return (
        <div className="col-end-3 h-24 sticky top-0 z-20">
            <div className="flex flex-row  bg-cgt-red w-full justify-around justify-items-center h-24 bg-gradient-to-r from-red-700 to-cgt-red">
                <img src="./img/logo-unsen.png" alt="logo CGT" className="w-1/4 max-md:w- object-contain p-4 lg:p-2 xl:p-1 "/>
                <h1 className=" text-cgt-yellow text-shadow-lg/30 w-2/3 text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold  pt-5 sm:pt-6 text-center leading-5 font-serif">FAQ CGT AESH
                <br/>
                <p className="font-sans  text-zinc-50 py-2 sm:pt-4 text-center text-sm  xl:text-2xl sm:text-xl text-shadow-lg/30 text-shadow-black">Trouvez des réponses claires en un clic</p> 
                </h1>
                <img src="./img/logo-aesh.png" alt="logo CGT" className="w-1/4 object-contain p-4 lg:p-2 xl:p-1"/>
            </div>
        </div>
    )

}
export default Header