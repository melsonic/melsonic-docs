import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import blankdoc from "../Assets/docs-blank.png";
import { IconButton } from "@material-tailwind/react"

function Template() {
  return (
        <div className="w-36 h-44 border-2 border-gray-300 bg-white hover:border-blue-500 cursor-pointer" onClick={handleOpen}>
          <Image src={blankdoc} alt="blank docs template" layout="responsive" objectFit="cover"/>
        </div>
  );
}

export default Template;
