import { IoGitBranchOutline } from "react-icons/io5";

function SiteVersion() {
    return (
        <div className="absolute bottom-3 flex items-center gap-2 dark:text-gray-200">
            <IoGitBranchOutline />
            <span className="text-sm">1.1.0</span>
        </div>
    );
}

export default SiteVersion;
