function Cardbis(){
    return( 
    <div id="accordion-collapse" data-accordion="collapse" className="m-2">
        <h2 id="accordion-collapse-heading-1">
            <button type="button" className=" bg-stone-300 flex flex-row w-full  items-center justify-between p-2  font-medium rtl:text-right border-black border-b-2  border-2 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span className="text-sm md:text-lg lg:text-xl xl:text-2xl text-left text-black font-bold font-serif underline decoration-2 whitespace-nowrap">
                    Qu'est ce que le droit de retrait ?
                </span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
        </h2>
        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div className="bg-stone-200 border-black border-l-2 border-r-2 border-b-2 rounded-b-xl ">
                <p className="text-black p-1.5 text-sm md:text-lg lg:text-xl xl:text-2xl text-left hyphens-auto">
                    Le droit de retrait est une disposition permettant à l'agent qui a un motif raisonnable de penser que la situation de travail à laquelle il est confronté présente un danger grave et imminent pour sa vie ou sa santé, ou qui constate une défectuosité dans les systèmes de protection, de se retirer de son poste de travail ... 
                </p>
            </div>
        </div>
    </div>

    )

}
export default Cardbis