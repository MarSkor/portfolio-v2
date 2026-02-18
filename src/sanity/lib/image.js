import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source) => {
  return builder.image(source);
};

export const urlForImage = (image, width) => {
  const imageBuilder = urlFor(image);
  if (width) {
    return imageBuilder.width(width).url();
  }

  return imageBuilder.url();
};

export const sanityLoader = ({ src, width, quality }) => {
  if (!src) {
    if (process.env.NODE_ENV === "development") {
      console.warn("sanityLoader: src is missing");
    }
    return "";
  }

  let imageSource;
  try {
    imageSource = typeof src === "string" ? JSON.parse(src) : src;
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.warn("sanityLoader: failed to parse src", src);
    }
    return "";
  }

  if (!imageSource?.asset) return "";
  return urlFor(imageSource)
    .width(width)
    .quality(quality || 75)
    .fit("clip")
    .auto("format")
    .url();
};
