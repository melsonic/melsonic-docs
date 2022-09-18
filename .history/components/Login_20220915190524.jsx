import { Button } from "@material-tailwind/react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import gdocs from "../Assets/gdocs.png";
import Image from "next/image";

function Login() {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <Image 
          src={gdocs}
          height="120"
          // width="90"
        />
        <Button
          variant="filled"
          onClick={signIn}
          className="mt-8 px-8"
        >
          <h4>login</h4>
        </Button>
      </div>
    </div>
  );
}

export default Login;
