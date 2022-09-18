import { Bars3Icon, CubeTransparentIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";
import Image from "next/image";
import userImg from "../Assets/Avatar.jpg";
import { IconButton } from "@material-tailwind/react";
import {sighOut, useSession } from "next-auth/react";

export default function Header(props) {
  const { Avatar } = props;
  return (
    <div className="sticky z-50 h-16 px-6 py-6 flex flex-row justify-between items-center shadow-md">
      <div className="flex flex-row items-center">
				<IconButton variant="text" color="gray">
        	<Bars3Icon className="h-6 text-gray-600" />
				</IconButton>
        <div className="flex flex-row items-center cursor-pointer pl-4">
          <DocumentTextIcon className="h-8 text-blue-500" />
          <p>Docs</p>
        </div>
      </div>
      <SearchBar />
      <div className="flex flex-row items-center">
				<IconButton variant="text" color="gray" className="mr-2">
        	<Squares2X2Icon className="h-6 text-gray-600" />
				</IconButton>
        {/* user avatar */}
        <div className="h-10 w-10">
          <Image src={userImg} height={40} width={40} alt="user image" objectFit={"cover"} className="rounded-full border-4 border-blue-500" onClick={signOut} />
        </div>
      </div>
    </div>
  );
}
