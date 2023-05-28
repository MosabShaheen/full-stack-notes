import Link from "next/link";

export default function Fetching() {
  return (
    <section className="dark:bg-black dark:text-white py-10">
      <div className="container mx-auto">
        <h2 className="mt-10 scroll-m-20 border-b border-b-stone-200 pb-2 text-2xl md:text-3xl font-bold tracking-tight transition-colors first:mt-0 dark:border-b-stone-700 mb-5">
          Fetching
        </h2>
        <p className="leading-7 ">
          {`In this implementation you have `}
          <strong>2 API clients</strong>
          {`. One for `}
          <code className="relative rounded bg-rose-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-stone-900">
            RSC
          </code>
          {` and one for `}
          <code className="relative rounded bg-rose-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-stone-900">
            Client components
          </code>
          {`. Syntax for both are the same, with all typescript hinting features.`}
        </p>
        <div className="mb-10">
          <h4 className="scroll-m-20 text-xl font-bold tracking-tight mb-4">
            To make a RSC api call:
          </h4>
          <pre className="bg-stone-50 rounded mb-5 text-stone-900 dark:bg-opacity-90 overflow-auto">{`
  import { api } from "~/lib/api/server";
  
  export default async function ServerComponent() {
    const data = await api.route.stuff.fetch();
  }
              `}</pre>
          {`Example (watch the code):`}
          <div className="flex p-1 border dark:border-stone-700 rounded mt-2">
            <p className="text-xl">Hello Test RSC TRPC Call</p>
          </div>
        </div>
        <div className="mb-10">
          <h4 className="scroll-m-20 text-xl font-bold tracking-tight mb-4">
            To make a Client api call:
          </h4>
          <pre className="bg-stone-50 rounded mb-5 text-stone-900 dark:bg-opacity-90 overflow-auto">{`
  
  "use client";

  import { api } from "~/lib/api/client";
  
  export default function ClientComponent() {
    const { data, isLoading } = await api.route.stuff.useQuery();
  }
               `}</pre>
          {`Example (watch the code):`}
          <div className="flex p-1 border dark:border-stone-700 rounded mt-2">
            <p className="text-xl">Hello Test Client TRPC Call</p>
          </div>
        </div>
        <div className="mb-10">
          <h4 className="scroll-m-20 text-xl font-bold tracking-tight mb-4">
            Mutation:
          </h4>
          <p className="mb-4">
            The idea is simple - mutate on client and refresh the route on
            success
          </p>
          <pre className="bg-stone-50 rounded mb-5 text-stone-900 dark:bg-opacity-90 overflow-auto">{`
  
  
  const router = useRouter();

  const { mutate, isLoading } = api.route.stuff.useMutation({
    onSuccess() {
      router.refresh();
    },
  });
              `}</pre>
          {`Example (watch the code):`}
        </div>
        <h2 className="mt-10 scroll-m-20 border-b border-b-stone-200 pb-2 text-2xl md:text-3xl font-bold tracking-tight transition-colors first:mt-0 dark:border-b-stone-700 mb-6">
          {`Play with demo dashboard or`}
          <br />
          {`see project code on Github`}
        </h2>
        <div className="flex gap-5">
          <Link href={"/dashboard"} className="link-d">
            Dashboard
          </Link>
          <Link
            href={"https://github.com/MosabShaheen/full-stack"}
            className="link-g"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}
