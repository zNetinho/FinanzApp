import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type Props<T = unknown> = {
  src: string | undefined;
  alt: string | undefined;
} & T;

function Photo(props: Props<React.ElementType<{ src: string | null }>>) {
  const { src = "https://github.com/shadcn.png", alt = "@shadcn" } = props;

  return (
    <Avatar className="cursor-pointer">
      <AvatarImage
        src={src}
        alt="@shadcn"
      >
      </AvatarImage>
      <AvatarFallback>NF</AvatarFallback>
    </Avatar>
  );
}

export default Photo;
