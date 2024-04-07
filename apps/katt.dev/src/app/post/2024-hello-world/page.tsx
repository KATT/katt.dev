import { JsonLd } from "@/ui/JsonLd";
import { Tweet } from "react-tweet";
import { PostAuthor } from "../ui/PostAuthor";

const postDate = "2024-04-06";

const headline = "Hello world";
const author: React.ComponentProps<typeof PostAuthor> = {
  name: 'Alex "KATT" Johansson',
  title: "Creator of tRPC",
  avatarSrc: "https://github.com/KATT.png",
  href: "https://twitter.com/alexdotjs",
};

export default function Page() {
  return (
    <>
      <article className="prose dark:prose-invert">
        <h1>{headline}</h1>
        <div>
          <time dateTime={postDate}>
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(postDate))}
          </time>
        </div>

        <p>Hi, here's a tweet:</p>

        <div className="not-prose">
          <Tweet id="1594623014267658242" />
        </div>

        <div className="not-prose">
          <PostAuthor {...author} />
        </div>
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline,
          datePublished: postDate,
          dateModified: postDate,
          author: {
            "@type": "Person",
            name: author.name,
            url: author.href,
          },
        }}
      />
    </>
  );
}
