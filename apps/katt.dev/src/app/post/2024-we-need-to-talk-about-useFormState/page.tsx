import { Tweet } from "react-tweet";
import { PostAuthor } from "../ui/PostAuthor";
import { JsonLd } from "@/ui/JsonLd";

const postDate = "2024-04-06";
export default function Page() {
  return (
    <>
      <article className="prose dark:prose-invert">
        <h1>
          What's up with the <code>state</code> of <code>useFormState</code>?
        </h1>
        <div>
          <time dateTime={postDate}>
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(postDate))}
          </time>
        </div>

        <p>Hi</p>

        <div className="not-prose">
          <Tweet id="1775835646491283604" />
        </div>

        <div className="not-prose">
          <PostAuthor
            name='Alex "KATT" Johansson'
            title="Creator of tRPC"
            avatarSrc="https://github.com/KATT.png"
            href="https://twitter.com/alexdotjs"
          />
        </div>
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "What's up with the state of useFormState?",
          datePublished: "2024-04-06",
          dateModified: "2024-04-06",
          author: {
            "@type": "Person",
            name: 'Alex "KATT" Johansson',
            url: "https://twitter.com/alexdotjs",
          },
        }}
      />
    </>
  );
}
