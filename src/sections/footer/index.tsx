import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-rose-100 to-teal-100 dark:from-rose-100/80 dark:to-teal-100/80 text-stone-900">
      <div className="container mx-auto grid md:flex md:items-center md:justify-between gap-2 md:gap-4 py-3 md:py-6 text-sm">
        <p>
          {`Built by`}
          <Link
            href={"/#"}
            className="font-semibold underline underline-offset-4"
          >
            @o-ploskovytskyy
          </Link>
        </p>
        <p>
          {`The source code is available on `}
          <Link
            href={"https://github.com/MosabShaheen/full-stack"}
            className="font-semibold underline underline-offset-4"
          >
            Github
          </Link>
        </p>
      </div>
    </footer>
  );
}
