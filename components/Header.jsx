import Image from "next/Image";
import {
  SearchIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div class="sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-lg">
      {/* header left */}
      <div className="flex items-center ">
        <Image
          src="http://assets.stickpng.com/thumbs/58e91965eb97430e819064f5.png"
          layout="fixed"
          width={50}
          height={50}
          className="cursor-pointer"
        />
        <div className="flex p-2 items-center bg-gray-100 ml-2 rounded-full ">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            className="hidden md:inline-flex outline-none placeholder:text-lg placeholder-gray-500 bg-transparent ml-2 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>

        <div className="flex flex-grow justify-center ">
          <div className="flex space-x-6 md:space-x-2 ">
            <HeaderIcon Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        <div className="flex items-center sm:space-x-2 justify-end">
          <p className="font-semibold pr-3 whitespace-nowrap">Saeed's ash</p>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
