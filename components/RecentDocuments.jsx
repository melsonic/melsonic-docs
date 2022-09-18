import { FolderIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

function RecentDocuments() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col">

      {/* header */}
      <div className="flex flex-row px-8 py-4 items-center justify-between">
        <h3 className="font-medium">Recent Documents</h3>
        <div className="flex fles-row items-center text-gray-800">
          <h3 className="pr-4">Date Created</h3>
          <IconButton variant="text" color="gray" className="rounded-full">
            <FolderIcon className="h-6" />
          </IconButton>
        </div>
      </div>

      {/* map for recent documents */}
      {/* will do later first let me implement firebase authentication */}

    </div>
  );
}

export default RecentDocuments;
