import { ComponentChildren } from "https://esm.sh/v99/preact@10.11.0/src/index.d.ts";
import Head from "./Head.tsx";

export default function postlaytout(
  { children }: { children: ComponentChildren },
) {
  return (
    <>
      <Head />

      <div className="cursor-default prose text-black md:prose-xl px-5 md:px-10 md:m-auto py-10">
        <a className="hover-underline no-underline" href="/#blog">Home</a>
        {children}
        <a className="hover-underline no-underline" href="/#blog">Home</a>
      </div>
    </>
  );
}
