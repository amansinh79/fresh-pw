import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<{ html: string }> = {
  async GET(_req, ctx) {
    const ua = _req.headers.get("user-agent");
    let figlet;
    if (ua?.includes("Instagram")) {
      figlet = "prefer using chrome";
    } else {
      figlet = await (await fetch(_req.url + "me.txt")).text();
    }
    if (!figlet) {
      return new Response("not found", { status: 404 });
    }
    return ctx.render({ html: figlet });
  },
};

export default function Page(props: PageProps<{ html: string }>) {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amansinh Parmar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/output.css" />
      </head>
      <div className="cursor-default prose text-black md:prose-xl px-5 md:px-10 md:m-auto py-10">
        <div className="flex flex-col md:flex-row items-center md:my-10  text-center md:text-left">
          <p
            className="me not-prose bg-black bg-clip-text"
            dangerouslySetInnerHTML={{ __html: props.data.html }}
          >
          </p>
        </div>
        <div className="w-full">
          <h1 className="font-sans">Amansinh Parmar</h1>
          <p>Hey, I&#39;m a CS Student from Gujarat, India 🇮🇳.</p>
          <p>
            I learned to program by studying internet tutorials and developing
            stuff that sometimes work sometimes don&#39;t. It&#39;s difficult to
            progress when you don&#39;t have a clear path, which is one of the
            things that makes programming so fascinating. You won&#39;t know
            what you&#39;re doing until you do it.
          </p>
          <p>
            I began with C language in college, then java, and finally settled
            on javascript (Typescript too). I love js because of two things,
          </p>
          <ol>
            <li>Great Community. (dozens of modules to get work done)</li>
            <li>Learn once write anywhere.</li>
          </ol>
          <p>And a BIG HEART to Node and Deno ❤️</p>
          <p>
            Next, I want to learn Databases and Devops, but things don&#39;t
            always go according to plan.
          </p>
          <p>When i&#39;m not programming things,</p>
          <ul>
            <li>I am typing (Top speed : 112 wpm 10 words)</li>
            <li>I enjoy playing MOBA, RTS, Open World Story Games.</li>
            <li>Listening to random music</li>
          </ul>
          <p>
            distrohopper : ubuntu(1 year) -{">"} fedora(6 months) -{">"}{" "}
            openSuse(current)
          </p>
          <p>
            I also like{" "}
            <a
              className="hover-underline no-underline"
              href="https://en.wikipedia.org/wiki/Vim_(text_editor)"
            >
              Vim
            </a>{" "}
            alot. I'm still learning it, cause i can't quit.{" "}
          </p>
          <p>
            <em>
              <strong>Thank you for being here!</strong>
            </em>
          </p>
          <p>
            GitHub{" "}
            <a
              className="hover-underline no-underline"
              href="https://github.com/amansinh79"
            >
              @amansinh79
            </a>
          </p>
          <p>
            Stackoverflow{" "}
            <a
              className="hover-underline no-underline"
              href="https://stackoverflow.com/users/12173339/timbersaw"
            >
              @timbersaw
            </a>
          </p>
          <p>
            MonkeyType{" "}
            <a
              className="hover-underline no-underline"
              href="https://monkeytype.com/profile/solvencino79"
            >
              @solvencino79
            </a>
          </p>
          <p>
            Email{" "}
            <a
              className="hover-underline no-underline"
              href="mailto:harshparamar84@gmail.com"
            >
              harshparamar84@gmail.com
            </a>
          </p>
          <p className="text-center pt-5 md:pt-10">
            Build with{" "}
            <span>
              <a
                className="hover-underline no-underline"
                href="https://deno.land"
              >
                Deno
              </a>
            </span>{" "}
            ,{" "}
            <span>
              <a
                className="hover-underline no-underline"
                href="https://fresh.deno.dev"
              >
                Fresh
              </a>
            </span>{" "}
            ,{" "}
            <span>
              <a
                className="hover-underline no-underline"
                href="https://tailwindcss.com/"
              >
                Tailwindcss
              </a>
            </span>.
          </p>
        </div>
      </div>
    </>
  );
}
