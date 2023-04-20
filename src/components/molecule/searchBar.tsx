import Image from "next/image";

export function SearchBar() {
    const search = '/search.svg';

    return (
        <div className='h-full w-full bg-gray flex justify-between items-center px-8 rounded-2xl'>
            <span className="flex items-center gap-x-8">
                <img className="h-8" src={search} alt="img" />
                <span className=" text-unfocused-font text-2xl">Search...</span>
                {/* <input type="text" /> */}
            </span>
            <img className="h-12" src="/options.svg" alt="" />
        </div>
    )
}