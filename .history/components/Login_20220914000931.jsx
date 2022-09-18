import { IconButton } from '@material-tailwind/react';
import { DocumentTextIcon } from '@heroicons/react/24/outline'

function Login(){
  return(
    <div className="flex flex-row justify-center items-center">
      <IconButton
        variant="text"
      >
        <DocumentTextIcon />
      </IconButton>
    </div>
  )
}

export default Login;