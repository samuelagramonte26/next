'use client'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import {  IoCartOutline } from "react-icons/io5"
export const WidgetGrid = () => {
    const count = useAppSelector((state)=>state.counter.count)
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget subtitle='Cantidad de articulos' title={count.toString()} label='carrito de compras'  href='/dashboard/counter' icon={<IoCartOutline size={70} className='text-blue-600'/>} />
        </div>
    )
}
