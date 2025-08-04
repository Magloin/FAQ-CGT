function Card() {
    return (
        <div className="w-70 my-2  shrink-0 overflow-x-hidden">
            <div className="h-20 border-2 hover:border-l-cgt-red hover:border-l-4 hover:bg-cgt-yellow overflow-scroll bg-stone-200 rounded-xl rounded-xl-cgt-red transiton  duration-200 delay-100 ease-in-out">
                <div className="overflow-hidden">
                    <h1 className="text-cgt-red text-base lg:text-lg hover:font-bold px-4 pt-5">Qu'est ce que le droit de retrait ?</h1>
                    <p className=" pl-4 pt-11">Le droit de retrait est une disposition permettant à l'agent qui a un motif raisonnable de penser que la situation de travail à laquelle il est confronté présente un danger grave et imminent pour sa vie ou sa santé, ou qui constate une défectuosité dans les systèmes de protection, de se retirer de son poste de travail ...</p>
                </div>
            </div>
        </div>
    )
}
export default Card