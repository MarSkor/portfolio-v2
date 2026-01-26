import { defineQuery } from "next-sanity";

export const FEATURED_PROJECTS =
  defineQuery(`*[_type == "project" && featured == true && defined(slug.current)]|order(_createdAt desc){
  _id,_createdAt, title, techStack, coverImage, slug
}`);

export const ALL_PROJECTS = defineQuery(`
  *[_type == "project" && ($category == "all" || category->slug.current == $category)] | order(_createdAt desc) {
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
  *[_type == "project" && slug.current == $slug][0]
`);

export const CATEGORIES_DATA = defineQuery(`
  *[_type == "category"]{
    _id, 
    "slug": slug.current, 
    title
  }
`);
