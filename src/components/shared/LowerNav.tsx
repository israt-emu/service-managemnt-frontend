import Link from "next/link";
import logo from "../../../assets/logo.png";
import {ShoppingBasket} from "lucide-react";
import Image from "next/image";
import {Button} from "../ui/button";
import {useAppSelector} from "@/redux/hooks";
import {useGetSingleCartQuery} from "@/redux/features/cart/cartApi";
const LowerNav = () => {
  const {user} = useAppSelector((state) => state?.auth);
  const {data} = useGetSingleCartQuery(user.id);
  const cartTotal = data?.data?.products?.length;
  return (
    <div className="h-full w-full bg-white container">
      <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto">
        <div className="flex items-center gap-1">
          <Image className="w-12" width={200} height={50} src={logo} alt="logo" />
          <p className="text-secondary font-serif font-semibold">
            DREAMY <br />
            EVENTS
          </p>
        </div>
        <div className="text-dark">
          <ul className="flex items-center">
            <li className="">
              <Button variant="link" asChild className="text-gray-900">
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild className="text-gray-900">
                <Link href="/services">Services</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild className="text-gray-900">
                <Link href="/bookings">Bookings</Link>
              </Button>
            </li>

            {user.role !== "user" && user.role && (
              <li>
                <Button variant="link" asChild className="text-gray-900">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </li>
            )}
            {/* //cart  */}
            <li>
              <Link href="/cart" className="text-gray-900 flex items-center">
                <ShoppingBasket />
                <p>({cartTotal})</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
