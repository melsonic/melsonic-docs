import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <>
      <div className="h-9 pl-2 bg-gray-200 flex flex-row items-center rounded-md focus-within:shadow-md w-2/4">
        <MagnifyingGlassIcon className="h-6 text-gray-800" />
        <input placeholder="Search" className="w-full h-full rounded-md bg-gray-200 border-gray-200 text-xs border-2 focus:outline-none pl-2" />
      </div>
    </>
  );
}

export default SearchBar;
