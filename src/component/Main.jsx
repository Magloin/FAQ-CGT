import Cardbis from "./Cardbis"
import Filter from "./filter"

function Main (){
return(
    <div className="  overflow-hidden grid-row-2 row-span-2  overscroll-contain overflow-y-scroll h-full ">
       <div className=" pb-2 m-2 max-h-4/5">
            <h1 className=" flex flex-row justify-center text-center  w-full text-lg font-bold
            md:text-2xl lg:text-2xl xl:text-2xl min-2xl:text-4xl">
            Filtres</h1>
            <hr className="border-[#fee347] border-1 w-5/6 h-.5 mx-auto"/>
            
            <div className="w-80 md:w-full mx-auto ">
                <div className="flex flex-row flex-wrap gap-x-2 pr-4 items-center justify-between 
            md:flex-wrap md:px-2 md:w-full md:gap-x-0 md:justify-between text-center text-xl">
                <Filter/> <Filter/><Filter/><Filter/><Filter/><Filter/><Filter/><Filter/>
                </div>
            </div>
            
            <hr className="border-[#fee347] border-1 w-5/6 h-.5 mx-auto"/>
        </div>

        <div className="mx-auto h-1/2 transition-discrete duration-700 ease-in-out">
            <div className="flex flex-row justify-center flex-wrap overscroll-contain overflow-y-scroll ">
             <Cardbis/> 
             
            </div>
            <hr className="border-[#fee347] border-1 max-w-1/2 h-.5 mx-auto"/>
            
            <div className="text-center whitespace-nowrap text-xs py-4
                md:text-xs
                lg:text-lg">
                <h3 className="font-mono font-bold md:text-lg">Vous ne trouvez pas votre réponse ? </h3>
                <a href="mailto:aesh@cgteduc.fr?subject=Je ne trouve pas le réponse à ma question" className=" md:text-lg underline underline-offset-2 decoration-2  text-blue-500  transition-discrete duration-700 ease-in-out hover:text-cgt-red hover:font-bold"> Contactez-nous !</a>
            </div>
        </div>
    </div>
)

}
export default Main