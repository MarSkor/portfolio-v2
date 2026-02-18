import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source) => {
  return builder.image(source);
};

export const urlForImage = (image, width) => {
  const builder = urlFor(image);
  if (width) {
    return builder.width(width).url();
  }

  return builder.url();
};

export const sanityLoader = ({ src, width, quality }) => {
  if (!src) return "";

  let imageSource;
  try {
    imageSource = typeof src === "string" ? JSON.parse(src) : src;
  } catch {
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
