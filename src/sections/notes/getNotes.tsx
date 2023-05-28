"use client"
import { useState, useEffect } from 'react';
import { CallDatabase } from './callDtabase';

const GetNotes = async() => {
  const [data, setData] = useState();
  const { rows } = await CallDatabase()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const {rows} = await CallDatabase(); // Path to your API route
  //       console.log(rows)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {rows.map((row) => (
        <div
          key={row.id}
          className="grid md:flex md:items-center gap-5 md:justify-between border dark:border-stone-700 rounded p-4"
        >
          <div>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              {row.title}
            </h3>
            <p className="line-clamp-2">{row.description}</p>
          </div>
          <div className="grid grid-cols-2 md:flex gap-4">
            <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:bg-stone-800 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800 bg-transparent border border-stone-200 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100 h-10 py-2 px-4">
              Edit
            </button>
            <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800 bg-white dark:bg-stone-900 border border-red-600 text-red-600 dark:text-white hover:text-white hover:bg-red-600 dark:hover:bg-red-600 h-10 py-2 px-4">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetNotes;
