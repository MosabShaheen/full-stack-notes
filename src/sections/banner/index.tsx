import Link from "next/link";
export default function Banner() {
  return (
    <section className="grid gap-4 text-center py-10 md:py-16 border-b bg-gradient-to-r from-rose-100 to-teal-100 dark:from-rose-100/80 dark:to-teal-100/80 text-stone-900">
      <h1 className="text-4xl md:text-6xl font-black px-6">Giga Stack ✨</h1>
      <p className="md:text-lg font-semibold text-stone-900 px-6">
        {`The most Twitter influenced stack you've ever seen`}
      </p>
      <div className="flex gap-5 justify-center">
        <Link className="link-d" href="/dashboard">
          Dashboard
        </Link>
        <Link
          className="link-g"
          href={"https://github.com/MosabShaheen/full-stack"}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
