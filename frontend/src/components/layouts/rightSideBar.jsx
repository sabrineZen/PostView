import SuggestedUser from "../SuggestedUser"
function RightSideBar(){
    return(
        <div className="flex self-start  w-200 flex-col gap-8">
            <input
        type="search"
        placeholder=" ⌕ Rechercher..."
        className="w-full h-12 rounded-xl border-gray-800 bg-[#18181F] px-4 text-white outline-none border  focus:border-violet-500"
      />
            <div className="rounded-2xl bg-[#18181F] p-5 shadow-lg border border-gray-800 flex flex-col gap-8 ">
            <p className="flex self-start">Qui suivre</p>
            <SuggestedUser/>
            <SuggestedUser/>

            </div>
        </div>

    )

}
export default RightSideBar