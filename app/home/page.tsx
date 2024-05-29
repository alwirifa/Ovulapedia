"use client"


import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const calculateCycleDetails = (startDate: string | number | Date) => {
  const cycleLength = 28; // default cycle length
  const lutealPhaseLength = 14;

  const lastPeriod = startDate;
  const nextPeriod = new Date(startDate);
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

  const ovulation = new Date(startDate);
  ovulation.setDate(ovulation.getDate() + cycleLength - lutealPhaseLength);

  const fertileWindowStart = new Date(ovulation);
  fertileWindowStart.setDate(fertileWindowStart.getDate() - 5);
  const fertileWindowEnd = ovulation;

  return {
    nextPeriod,
    fertileWindowStart,
    fertileWindowEnd,
    lastPeriod,
    ovulation
  };
};

const Page = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [cycleDetails, setCycleDetails] = useState(calculateCycleDetails(new Date()));
  const router = useRouter();

  const handleDateChange = (event: { target: { value: string | number | Date; }; }) => {
    const date = new Date(event.target.value);
    setStartDate(date);
    setCycleDetails(calculateCycleDetails(date));
  };

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-sky-500 p-4'>
      <div className='mb-8'>
        <h1 className='text-5xl font-semibold text-white text-center'>
          Kenali dan kendalikan <br /> siklus menstruasimu
        </h1>
      </div>
      <div className='mb-8'>
        <input
          type='date'
          value={startDate.toISOString().substr(0, 10)}
          onChange={handleDateChange}
          className='p-2 border rounded'
        />
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <div className='bg-white p-4 rounded shadow-lg'>
          <h2 className='text-xl font-semibold'>Next Period</h2>
          <p>{cycleDetails.nextPeriod.toDateString()}</p>
        </div>
        <div className='bg-white p-4 rounded shadow-lg'>
          <h2 className='text-xl font-semibold'>Fertile Window</h2>
          <p>{cycleDetails.fertileWindowStart.toDateString()} - {cycleDetails.fertileWindowEnd.toDateString()}</p>
        </div>
        <div className='bg-white p-4 rounded shadow-lg'>
          <h2 className='text-xl font-semibold'>Last Period</h2>
          <p>{cycleDetails.lastPeriod.toString()}</p>
        </div>
        <div className='bg-white p-4 rounded shadow-lg'>
          <h2 className='text-xl font-semibold'>Ovulation</h2>
          <p>{cycleDetails.ovulation.toDateString()}</p>
        </div>
      </div>
      <button onClick={handleLogout} className='mt-5 px-4 py-3 rounded-md text-white text-sm font-semibold bg-pink-500 '>Logout</button>
    </div>
  );
};

export default Page;
