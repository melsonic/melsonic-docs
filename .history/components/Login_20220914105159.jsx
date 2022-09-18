import { IconButton } from "@material-tailwind/react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <div>
        <DocumentTextIcon className="text-white h-32 w-28 bg-blue-600 rounded-3xl" />
      </div>
    </div>
  );
}

export default Login;
