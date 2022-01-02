import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiUserCircle } from "react-icons/bi";
const ProfileMenu = ({ user, signOutFromGoogle }) => {
  return (
    <div className="relative z-10">
      <Menu as="div">
        <Menu.Button>
          {user.photoURL !== null ? (
            <img
              src={user.photoURL}
              alt={"Hadi Diab"}
              className="w-7 h-7 rounded-full cursor-pointer"
            />
          ) : (
            <BiUserCircle className="w-7 h-7 cursor-pointer" />
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bg-[#ffce45] text-black font-medium rounded w-[160px] flex flex-col h-[100px] top-[40px] right-0">
            <Menu.Item
              as="div"
              className="h-1/2 cursor-pointer px-2 flex items-center"
            >
              Edit Profile
            </Menu.Item>
            <Menu.Item
              onClick={signOutFromGoogle}
              as="div"
              className="h-1/2 cursor-pointer flex items-center px-2"
            >
              Sign out
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
