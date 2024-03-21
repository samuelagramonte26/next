import { SimpleWidget, WidgetGrid } from "@/components";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: 'My Dashboard',
  description: 'Practica de next js'
}
export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
     <WidgetGrid/>
    </div>
  );
}