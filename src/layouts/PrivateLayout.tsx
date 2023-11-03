import {useEffect} from "react";
import {useRouter} from "next/router";
import {useAppSelector} from "@/redux/hooks";
import {useAuthCheck} from "@/hooks/useAuthCheck";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type LayoutType = {
  children?: React.ReactNode;
};

export default function PrivateLayout({children}: LayoutType) {
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const isChecked = useAuthCheck();
  useEffect(() => {
    if (isChecked) {
      if (!user.email) {
        router.push("/login");
      }
    }
  }, [isChecked, user.email, router]);

  if (!isChecked) {
    return <p>... loading</p>;
  }

  return (
    <>
      <Navbar />

      <div className={`mx-auto pt-24 bg-background`}>{user?.email && children}</div>
      <Footer />
    </>
  );
}
