import Image from "next/image";
import { ReactNode } from "react";

export function PostAuthor(props: {
  name: string;
  title: ReactNode;
  avatarSrc: string;
  href: string;
}) {
  return (
    <div className="relative mt-8 flex items-center gap-x-4">
      <Image
        src={props.avatarSrc}
        alt={props.name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <div className="text-sm leading-6">
        <p className="font-semibold text-muted">
          <a href={props.href}>
            <span className="absolute inset-0"></span>
            {props.name}
          </a>
        </p>
        <p className="text-fg">{props.title}</p>
      </div>
    </div>
  );
}
