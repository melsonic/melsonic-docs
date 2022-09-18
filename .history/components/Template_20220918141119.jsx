import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import blankdoc from "../Assets/docs-blank.png";
import { IconButton } from "@material-tailwind/react"
import { propTypesError } from "@material-tailwind/react/types/components/input";

function Template(props) {
  console.log(props);
  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex flex-row justify-between">
        <p>Start a new Document</p>
        <IconButton
          variant="text"
          color="gray"
          className="rounded-full"
        >
          <EllipsisVerticalIcon className="h-6" />
        </IconButton>
      </div>
      <div className="my-8">
        <div className="w-36 h-44 border-2 border-gray-300 bg-white hover:border-blue-500 cursor-pointer" onClick={props.handleOpen} >
          <Image src={blankdoc} alt="blank docs template" layout="responsive" objectFit="cover"/>
        </div>
        <h3 className="my-2 font-medium">blank</h3>
      </div>
    </div>
  );
}

export default Template;
