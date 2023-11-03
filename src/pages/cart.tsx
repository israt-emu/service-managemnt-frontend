import CartCard from "@/components/card/CartCard";
import Error from "@/components/shared/Error";
import {ICart} from "@/interfaces/cart";
import PrivateLayout from "@/layouts/PrivateLayout";

import {useGetSingleCartQuery} from "@/redux/features/cart/cartApi";
import {useAppSelector} from "@/redux/hooks";
import Link from "next/link";

const Cart = () => {
  const {user} = useAppSelector((state) => state.auth);
  const {data, isLoading, isError} = useGetSingleCartQuery(user.id);
  //let decide what to render
  console.log(data);
  let content = null;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }
  if (!isLoading && isError) {
    content = <Error message="No Services in cart!" />;
  }
  if (!isLoading && data?.data?.length === 0) {
    content = <h1 className="font-semibold font-serif text-xl">No Services in cart!</h1>;
  }
  if (!isLoading && data?.data?.length > 0) {
    content = data?.data?.length > 0 && data?.data?.map((cart: ICart, i: number) => <CartCard cart={cart} key={i} />);
  }
  return (
    <PrivateLayout>
      <div className="w-6/12 mx-auto py-12 ">
        <div className="flex items-center mb-3">
          <p className="text-xl font-semibold font-serif">Your Service Cart:</p>
        </div>
        <ul className="flex flex-col divide-y divide-gray-700 ">{content}</ul>
        <div className="space-y-1 text-right">
          <p className="font-mono">
            Total amount:
            <span className="font-semibold">{data?.data?.reduce((acc: any, cart: ICart) => acc + cart.quantity * cart.price, 0).toFixed(2)}৳</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4 mt-3">
          <Link href={"/services"}>
            <button type="button" className="px-6 py-2 border border-secondary rounded-md">
              Back to Services
            </button>
          </Link>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Cart;
