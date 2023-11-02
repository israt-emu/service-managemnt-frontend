import {MapIcon} from "lucide-react";
import {FaAddressCard, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPinterest, FaTwitter} from "react-icons/fa";
import {MdEmail, MdLocationOn, MdPhone} from "react-icons/md";

const Footer = () => {
  return (
    <section className="py-10 mt-10 md:py-16 bg-gray-800 text-gray-100 font-mono">
      <div className="flex flex-col justify-center pt-6 lg:pt-0 mb-5">
        <div className="flex justify-center space-x-4">
          <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50">
            <FaInstagram />
          </a>
          <a rel="noopener noreferrer" href="#" title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50">
            <FaPinterest />
          </a>
          <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50">
            <FaTwitter />
          </a>
          <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50">
            <FaFacebook />
          </a>
          <a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
          <div className="flex items-center justify-center px-5 bg-secondary text-white ">
            <MdLocationOn className="text-xl" />
          </div>
          <div className="flex flex-col items-start justify-between p-3">
            <p className="text-gray-700 font-semibold">Mohammadpur</p>
            <p className="text-xl font-semibold">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
          <div className="flex items-center justify-center px-5 bg-secondary text-white ">
            <MdEmail className="text-xl" />
          </div>
          <div className="flex flex-col items-start justify-between p-3">
            <p className="text-gray-700 font-semibold">info@gmail.com</p>
            <p className="text-xl font-semibold">info@gmail.com</p>
          </div>
        </div>
        <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
          <div className="flex items-center justify-center px-5 bg-secondary text-white ">
            <MdPhone className="text-xl" />
          </div>
          <div className="flex flex-col items-start justify-between p-3">
            <p className="text-gray-700 font-semibold">+88 01883960078</p>
            <p className="text-xl font-semibold">+88 01883960078</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
