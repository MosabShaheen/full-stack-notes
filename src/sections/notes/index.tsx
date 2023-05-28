import CreateNote from "./create-note";
import { sql } from "@vercel/postgres";
import { db, createNote } from "@/lib/drizzle";
import GetNotes from "./getNotes";


export default async function Notes() {
  const { rows } = await sql`SELECT * from note`;
  return (
    <div className="min-h-screen container mx-auto px-6 text-white">
      <h2 className="pt-5 scroll-m-20 border-b border-b-stone-200 pb-2 text-2xl md:text-3xl font-bold tracking-tight transition-colors first:mt-0 dark:border-b-stone-700 mb-5 flex items-center justify-between">
        My notes
        <CreateNote />
      </h2>
      {!rows.length && (
        <div className="grid gap-3 items-center justify-items-center px-6 py-16 border rounded">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Create my first note
        </h3>
        <CreateNote />
      </div>
      )}
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
      {/* @ts-expect-error Server Component */}
      <GetNotes/>
    </div>
  );
}