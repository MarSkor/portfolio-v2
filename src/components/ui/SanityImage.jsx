"use client";

import { sanityLoader } from "@/sanity/lib/image";
import Image from "next/image";

const SanityImage = ({ src, blurDataURL, quality, ...props }) => {
  const serializedSrc = typeof src === "object" ? JSON.stringify(src) : src;
  return (
    <Image
      {...props}
      src={serializedSrc}
      quality={quality || 75}
      loader={sanityLoader}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
    />
  );
};

export default SanityImage;
