import Image from "next/image";
import { Tweet } from "react-tweet";

export default function Page() {
  return (
    <>
      <article className="prose-lg">
        <h1>
          We need to talk about <code>useFormState()</code>
        </h1>
        <div>
          <time dateTime="2024-04-06">April 6, 2024</time>
        </div>
        <div className="not-prose">
          <a
            href="https://twitter.com/jullerino"
            target="_blank"
            rel="noopener noreferrer"
            className="avatar__photo-link"
          >
            <Image
              src="https://github.com/KATT.png"
              width={50}
              height={50}
              alt="Alex Johansson"
              className="rounded-full"
            />
          </a>
        </div>

        <p>Hi</p>

        <div className="not-prose">
          <Tweet id="1775835646491283604" />
        </div>
      </article>
    </>
  );
}
