import {useAuthCheck} from "@/hooks/useAuthCheck";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type LayoutType = {
  children?: React.ReactNode;
};

export default function MainLayout({children}: LayoutType) {
  const isChecked = useAuthCheck();

  if (!isChecked) {
    return <p>... loading</p>;
  }

  return (
    <>
      <Navbar />
      <div className=" mx-auto pt-24 bg-background">{children}</div>
      <Footer />
    </>
  );
}
