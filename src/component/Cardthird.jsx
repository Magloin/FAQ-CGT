function Cardthird() {
    return(
        <div className="m-2 space-y-2 w-70">
            <div className="group flex flex-col gap-2 rounded-lg bg-stone-200 p-5 text-cgt-red" tabindex="1">
                <div className="flex cursor-pointer items-center justify-between">
                    <span className="px-2 text-xs text-cgt-red font-bold"> Qu'est ce que le droit de retrait </span>
                    <img src="./img/fleche-vers-le-haut.png" className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180 text-cgt-red"/>
                </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    </div>
    )
}

export default Cardthird