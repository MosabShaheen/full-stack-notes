import Link from "next/link";

export default function Features() {
  return (
    <section className="dark:bg-black dark:text-white py-10">
      <div className="container mx-auto">
        <h2 className="mt-10 scroll-m-20 border-b border-b-stone-200 pb-2 text-2xl md:text-3xl font-bold tracking-tight transition-colors first:mt-0 dark:border-b-stone-700 mb-5">
          Features
        </h2>
        <p className="max-w-2xl mb-6">
          {"Inspired by "}
          <Link
            target="blank"
            href={"https://giga-stack.vercel.app/"}
            className="font-bold text-rose-400 underline"
          >
            Giga stack
          </Link>
          {" and "}
          <Link
            target="blank"
            href={"https://create.t3.gg/"}
            className="font-bold text-rose-400 underline"
          >
            T3 stack
          </Link>
          {` project, I created this example of experimental edge stack full of sweet and fancy features for you to play with. Shout out to a bunch of open source solutions on the GitHub which I combined here.`}
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <Link href={"https://nextjs.org/"} target="blank" className="box">
            <strong className="text-2xl">Next.js</strong>
            <p>{`Next.js 13 with App Directory, edge runtime. React server components`}</p>
          </Link>
          <Link href={"https://trpc.io/"} target="blank" className="box">
            <strong className="text-2xl">tRPC</strong>
            <p>{`End-to-end typesafe APIs. Best DX for writing full-stack with Next.js (and more)`}</p>
          </Link>
          <Link href={"https://clerk.com/"} target="blank" className="box">
            <strong className="text-2xl">Clerk (Auth)</strong>
            <p>{`User Management, authentication, very nice API, security`}</p>
          </Link>
          <Link
            href={
              "https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/mysql-core/README.md"
            }
            target="blank"
            className="box"
          >
            <strong className="text-2xl">Drizzle ORM</strong>
            <p>{`If you know SQL, you know Drizzle ORM", TypeScript, db push with drizzle-kit`}</p>
          </Link>
          <Link
            href={"https://planetscale.com/"}
            target="blank"
            className="box"
          >
            <strong className="text-2xl">PlanetScale</strong>
            <p>{`MySQL, branching, JS Serverless Driver `}</p>
          </Link>
          <Link href={"https://ui.shadcn.com/"} target="blank" className="box">
            <strong className="text-2xl">Shadcn/ui</strong>
            <p>{`UI components built using Radix UI and styled with Tailwind CSS.`}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
