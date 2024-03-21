import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador',
};



export default async function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter />

    </div>
  );
}