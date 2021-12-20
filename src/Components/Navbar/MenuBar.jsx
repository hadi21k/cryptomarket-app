import { AiOutlineMenu } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Cryptocurrencies", href: "/coins" },
    { label: "Exchanges", href: "/exchanges" },
    { label: "News", href: "/news" },
  ];
  return (
    <>
      <Menu as="div" className="flex lg:hidden">
        <Menu.Button className="outline-none">
          <AiOutlineMenu className="w-6 h-6" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="bg-[#ffce45] z-10 outline-none rounded absolute right-0 top-[70px] w-[200px]">
            {items.map(({ label, href }, index) => (
              <Link to={href}>
                <Menu.Item
                  as="div"
                  key={index}
                  className="font-medium text-[#141414] "
                >
                  {({ active }) => (
                    <div
                      className={`${
                        active && "text-red-500"
                      } px-2 py-3 transition duration-100`}
                    >
                      {label}
                    </div>
                  )}
                </Menu.Item>
              </Link>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default MenuBar;
