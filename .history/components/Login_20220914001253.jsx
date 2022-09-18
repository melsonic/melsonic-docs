import { IconButton } from "@material-tailwind/react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <DocumentTextIcon className="text-white h-32 w-24 bg-blue-600" />
      </div>
    </div>
  );
}

export default Login;
