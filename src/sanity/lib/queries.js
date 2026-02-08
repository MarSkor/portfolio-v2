import { defineQuery } from "next-sanity";

export const FEATURED_PROJECTS =
  defineQuery(`*[_type == "project" && featured == true && defined(slug.current)]|order(_createdAt desc){
  _id,_createdAt, title, techStack, coverImage, slug, "categoryName": category->title
}`);

export const ALL_PROJECTS = defineQuery(`
  *[_type == "project" && ($category == "all" || category->slug.current == $category)] | order(_createdAt asc) {
    _id, 
    _createdAt, 
    title, 
    techStack, 
    livePreviewLink, 
    githubLink, 
    description, 
    coverImage, 
    slug
  }
`);

export const PROJECT_DATA_BY_SLUG = defineQuery(`
    *[_type == "project" && slug.current == $slug][0]{
    _id,
    slug,
    title,
    description,
    _createdAt,
    body[]{
        ...,
        (_type == "image") => {
          ...,
          asset->
        }
      },
    "categoryName": category->title,
    collaboration,
    coverImage,
    date,
    excerpt,
    featured,
    githubUrl,
    liveUrl,
    "platformType": platforms,
    projectGallery,
    role,
    techStack
  }
`);

export const CATEGORIES_DATA = defineQuery(`
  *[_type == "category"]{
    _id, 
    "slug": slug.current, 
    title
  }
`);
