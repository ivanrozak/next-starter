'use client';
import { decrement, increment, reset } from '@/redux/feature/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';

const DownloadPage = () => {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Counter Page</h1>
      <div>value: {count}</div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <div className="font-thin text-xs">Profil Layanan Dokter</div>
      <div className="font-extralight text-sm">Profil Layanan Dokter</div>
      <div className="font-light text-base">Profil Layanan Dokter</div>
      <div className="font-normal text-lg">Profil Layanan Dokter</div>
      <div className="font-medium text-xl">Profil Layanan Dokter</div>
      <div className="font-semibold">Profil Layanan Dokter</div>
      <div className="font-bold">Profil Layanan Dokter</div>
      <div className="font-extrabold">Profil Layanan Dokter</div>
      <div className="font-black text-[40px]">Profil Layanan Dokter</div>
    </>
  );
};

export default DownloadPage;
