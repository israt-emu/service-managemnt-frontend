import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {DropdownMenuSeparator} from "@/components/ui/dropdown-menu";
import {DropdownMenuLabel} from "@/components/ui/dropdown-menu";
import {DropdownMenuItem, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent} from "@/components/ui/dropdown-menu";

import {userLoggedOut} from "@/redux/features/auth/authSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {useGetSingleUserQuery} from "@/redux/features/auth/authApi";
import Link from "next/link";
import {DivideIcon, MailIcon, PhoneIcon, SearchIcon} from "lucide-react";
import {DividerVerticalIcon} from "@radix-ui/react-icons";

const UpperNav = () => {
  const {user} = useAppSelector((state) => state?.auth);
  const {data: userData} = useGetSingleUserQuery(user?.id);

  const dispatch = useAppDispatch();
  //log out
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };
  return (
    <header className=" py-3 gradient text-gray-200">
      <div className="container flex justify-between h-9 mx-auto">
        <div className="flex items-center">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-1">
            <MailIcon className="w-5" />
            <p>info@gmail.com</p>
          </a>
          <DividerVerticalIcon className="" />
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-1">
            <PhoneIcon className="w-4" />
            <p>+88 01883960078</p>
          </a>
        </div>
        <div className="flex items-center md:space-x-4">
          <div className="relative mr-4">
            <span className="absolute inset-y-0 left-0 flex items-center">
              <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                <SearchIcon className="w-5" />
              </button>
            </span>
            <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-8 text-sm sm:w-auto focus:outline-none bg-transparent border-b border-white text-gray-100 " />
          </div>
          {/* login signup btton render depending on users email  */}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* login signup btton render depending on users email  */}
              {!user?.email && (
                <>
                  <Link href="/login">
                    <DropdownMenuItem className="cursor-pointer">Login</DropdownMenuItem>
                  </Link>
                  <Link href="/register">
                    <DropdownMenuItem className="cursor-pointer">Sign up</DropdownMenuItem>
                  </Link>
                </>
              )}
              {user?.email && (
                <>
                  <DropdownMenuItem className="cursor-pointer font-semibold font-serif">{userData?.data?.name?.firstName}</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button title="Open menu" type="button" className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default UpperNav;
