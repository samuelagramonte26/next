'use client';

import { ResponseJson } from '@/app/api/counter/route';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { decrement, increment, initialicedState } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

const getCounterValue = async (): Promise<number> => {


  const response: ResponseJson = await fetch('/api/counter').then(res => res.json());

  return response.count;
}


export const CartCounter = () => {

  const count = useAppSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getCounterValue().then(res => dispatch(initialicedState(res)))
  }, [dispatch])

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}
