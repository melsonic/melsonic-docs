import { Button } from "@material-tailwind/react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <DocumentTextIcon className="text-white h-44 w-36 bg-blue-600 rounded-2xl" />
        <div className="text-xl text-gray-600">
          <strong>Google</strong>
          <span className="pl-2">Docs</span>
        </div>
        <Button
          variant="filled"
          onClick={signIn}
          className="mt-8"
        >
          <h3>login</h3>
        </Button>
      </div>
    </div>
  );
}

export default Login;
