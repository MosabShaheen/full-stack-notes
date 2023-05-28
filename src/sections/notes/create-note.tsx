"use client";
import { useState } from "react";
import { createNote, db } from "@/lib/drizzle";

type note = {
  title: string;
  description: string;
};

export default function CreateNote() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState<note>({
    title: "",
    description: "",
  });
  const onChange = (e: any) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const onSubmittAdd = async () => {
    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify(note),
    });
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800 bg-rose-500 text-white hover:bg-rose-600 dark:hover:bg-rose-600 h-10 py-2 px-4"
      >
        Create Note
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
          <div className="data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100"></div>
          <div className="animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 sm:rounded-lg dark:bg-stone-900 sm:max-w-2xl">
            <form onSubmit={onSubmittAdd}>
              <div className="flex flex-col space-y-2 text-center sm:text-left">
                <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50">
                  Create Note
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {`Write your note and click save when you'er done.`}
                </p>
              </div>
              <div className="gird gap-4 py-4">
                <div className="gird gap-3">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Title
                  </label>
                  <input
                    value={note.title}
                    onChange={onChange}
                    required
                    name="title"
                    className="flex  h-10 w-full rounded-md border border-stone-300 bg-transparent py-2 px-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-700 dark:text-stone-50 dark:focus:ring-stone-400 dark:focus:ring-offset-stone-900"
                  />
                </div>
                <div className="grid gap-3">
                  <label className="text-sm mt-5 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Note
                  </label>
                  <textarea
                    onChange={onChange}
                    value={note.description}
                    name="description"
                    className="flex h-20 w-full rounded-md border border-stone-300 bg-transparent py-2 px-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-700 dark:text-stone-50 dark:focus:ring-stone-400 dark:focus:ring-offset-stone-900 min-h-[300px]"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                <button
                  type="submit"
                  className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800 bg-rose-500 text-white hover:bg-rose-600 dark:hover:bg-rose-600 h-10 py-2 px-4"
                >
                  Save note
                </button>
              </div>
            </form>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:focus:ring-stone-400 dark:focus:ring-offset-stone-900 dark:data-[state=open]:bg-stone-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4"
              >
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}