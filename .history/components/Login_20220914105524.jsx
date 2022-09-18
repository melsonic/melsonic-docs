import { Button } from "@material-tailwind/react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <DocumentTextIcon className="text-white h-32 w-28 bg-blue-600 rounded-2xl" />
        <Button
          variant="filled"
          className="pt-[-2"
        >
          <h3>login</h3>
        </Button>
      </div>
    </div>
  );
}

export default Login;
