import LowerNav from "./LowerNav";
import UpperNav from "./UpperNav";

const Navbar = () => {
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10 text-black">
      <UpperNav />
      <LowerNav />
    </nav>
  );
};
export default Navbar;
