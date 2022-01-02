import { AiOutlineMenu } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const items = [
    { label: "Home", href: "/" },
    { label: "Cryptocurrencies", href: "/coins" },
    { label: "News", href: "/news" },
  ];
  return (
    <>
      <Menu as="div" className="flex lg:hidden relative">
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
          <Menu.Items className="bg-[#ffce45] z-10 outline-none rounded absolute origin-top-right right-0 top-[40px] w-[200px]">
            {items.map(({ label, href }, index) => (
              <Link to={href} key={index}>
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
