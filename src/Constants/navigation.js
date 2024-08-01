import { FaHome } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";


export const navigation = [
    { name: "Tv Shows", href: "tv",icon:<PiTelevisionSimpleBold />
  },
    { name: "Movies", href: "movie",icon:<BiSolidMoviePlay /> }
  ];
  export const mobileNavigation =[
    {
      name: "Home",
      href: "/",
      icon: <FaHome />
    }
    ,...navigation,
    {
        name:"search",
        href: "/search",
        icon: <IoIosSearch/>
    }
  ]