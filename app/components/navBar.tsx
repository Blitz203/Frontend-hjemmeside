import { Coffee } from "lucide-react";
import React from "react";

function NavBar() {
  let links = [
    { name: "home", link: "/" },
    { name: "about", link: "/" },
    { name: "Food catagories", link: "/" },
    {
      /*Make it a dropdown*/
    },
  ];

  return (
    <div className="shadow-md w-full">
      <div className="md:px-10 py-3 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <Coffee className="w-7 h-7 text-blue-600" />
          <div className="font-serif">Cafe Vesuvuis</div>

          <div>
            {/*Links here*/}
            <ul className="flex pl-9 md:pl-0">
              {links.map((link) => (
                <li className="my-7 md:my-0 md:ml-8 ">
                  <a href="/">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
