import PostLayout from "../components/PostLayout.tsx";

export default function Page() {
  return (
    <PostLayout>
      <h2 class="font-sans">
        Over-abstraction is dangerous (asp dot net rant as a js rookie)
      </h2>
      <p className="text-gray-500 text-right">Dec 7, 2022</p>

      <img src="/abs.jpg"></img>

      <p>
        I came across this thing called abstraction when learning oops concepts.
        It is actually a very good way of simplifying things in programming, but
        here I'm talking about a different abstraction.
      </p>

      <p>
        I hate it when frameworks and libraries abstract the actual meaning of
        the underlying protocol by abstracting it in an unmannered way.
      </p>

      <p>
        Most of my attention is on HTTP libraries, something like asp dot net
        changes the way you look at a client-server architecture. Redirect and
        Transfer, which I learned today at the college completely changed the
        way I look at HTTP in the javascript world.
      </p>

      <p>
        On StackOverflow I got this question asked about a decade ago (of course
        cuz the syllabus has not been updated since){" "}
      </p>
      <span>
        <a
          class="no-underline hover-underline"
          href="https://stackoverflow.com/questions/224569/server-transfer-vs-response-redirect"
        >
          Server.Transfer Vs. Response.Redirect
        </a>
      </span>

      <p>
        I will read out the accepted answer,
      </p>
      <blockquote>
        “Response.Redirect simply sends a message HTTP 302 down to the browser.”
        <br></br>
        <br></br>
        “Server.Transfer happens without the browser knowing anything, the
        browser requests a page, but the server returns the content of another.”
      </blockquote>

      <p>
        why on earth do you want to return the content of another page if you
        are requesting the page?
      </p>

      <p>
        Now imagine not knowing anything about other frameworks and you just
        learned transfer. Now try learning other frameworks something like
        express or koa. How the documentation will explain the transfer to you?
        That does not exist as HTTP spec it's just another <b>caveat</b>{" "}
        of a framework that you have to remember when changing technologies.
      </p>

      <p>
        Also, these frameworks leave .aspx or .php in the browser URL, tricking
        a new learner into thinking that the browser is running c# or PHP. It is
        not taught or simply left out in training sessions that browsers only
        understand HTML and these frameworks are converting their verbose
        languages into HTML.
      </p>
      <p>
        The same goes for template engines. Write things in a newly created
        verbose language so we can convert them to HTML that the browser can
        understand, in place of directly writing HTML which is easy to write.
        that is a clear over-abstraction and should be avoided.
      </p>
      <p>
        This is just a point of view and doesn't mean I oppose any of the
        technologies but it just doesn't fit in my mind well !
      </p>
    </PostLayout>
  );
}
