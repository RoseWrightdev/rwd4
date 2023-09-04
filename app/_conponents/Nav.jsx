export default function Nav () {
    return (
        <>
          <nav className="md:flex hidden justify-between bg-silver select-none">
              <div className="text-purple md:text-2xl   md:px-4 2xl:px-16 2xl:py-3 2xl:border-4 border-silver my-auto md:m-4 m-8 sm:py-2 rounded-lg font-bold bg-silver">RoseWright.dev</div>
                  <span className="flex 2xl:mr-8 2xl:text-2xl">
                    <div className="text-silver md:text-2xl   md:px-4 2xl:px-16 2xl:py-3 2xl:border-4 my-auto md:m-4 m-8 sm:py-2 rounded-lg font-bold border-magenta bg-magenta hover:bg-silver hover:text-magenta transition">Join</div>
                    <div className="text-purple md:text-2xl   md:px-4 2xl:px-16 2xl:py-3 2xl:border-4 my-auto m-8 sm:py-2 rounded-lg font-bold border-silver bg-silver  hover:border-purple hover:bg-purple hover:text-silver transition">about</div>
                  </span>
          </nav>
          <nav className="md:hidden flex justify-between bg-silver select-none">
            <div className="text-purple text-lg p-4 m-1 font-semibold border-2 border-silver">RoseWright.dev</div>
            <span className="flex-row flex">
              <div className="text-silver text-lg p-4 px-6 m-1 bg-magenta hover:bg-silver hover:border-magenta hover:text-magenta border-2 font-semibold rounded-lg transition">Join</div>
              <div className="text-purple text-lg p-4 m-1 bg-silver hover:bg-purple hover:text-silver hover:border-purple border-silver border-2 font-semibold rounded-lg transition">About</div>
            </span>
          </nav>
        </>
    )
}
