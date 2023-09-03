export default function Nav () {
    return (
        <nav className="flex justify-between bg-silver select-none">
            <div className="text-purple 2xl:text-2xl  2xl:mx-8 2xl:px-16 2xl:py-3 2xl:border-4 my-2 sm:text-xl m-8 sm:py-2 rounded-lg font-bold border-silver bg-silver">RoseWright.dev</div>
                <span className="flex 2xl:mr-8 sm:mr-4 2xl:text-2xl sm:text-xl">
                    <div className="text-silver 2xl:mx-8 my-2 sm:mx-4 2xl:px-16 px-8 2xl:py-3 sm:py-2 rounded-lg font-bold 2xl:border-4 border-magenta bg-magenta hover:bg-silver hover:text-magenta transition">join</div>
                    <div className="text-purple 2xl:mx-8 my-2 sm:mx-4 2xl:px-16 px-8 2xl:py-3 sm:py-2 rounded-lg font-bold 2xl:border-4 border-silver bg-silver hover:border-purple transition">contact</div>
                </span>
        </nav>
    )
}