import { ProjectsIcon, GithubIcon, LinkIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const project = defineType({
  type: "document",
  name: "project",
  title: "Project",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Short description",
      type: "text",
      rows: 3,
      description: "Short summary of the project.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "altText",
          title: "Alternative text",
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
          },
        }),
      ],
    }),
    defineField({
      name: "projectGallery",
      title: "Project Gallery",
      type: "array",
      of: [{ type: "image" }],
      description: "Additional images of the projects.",
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "role",
      title: "My Role",
      type: "string",
      description: "e.g. Frontend Developer, Full-stack, UI Designer",
    }),
    defineField({
      name: "collaboration",
      title: "Collaboration",
      type: "string",
      description: "Solo project, team project, hackathon, client work, etc.",
    }),
    defineField({
      name: "githubUrl",
      title: "Github Repository",
      type: "url",
      icon: GithubIcon,
    }),
    defineField({
      name: "liveUrl",
      title: "Live Demo URL",
      type: "url",
      icon: LinkIcon,
    }),
    defineField({
      name: "date",
      title: "Project Date",
      type: "date",
      description: "Date of completion.",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
    defineField({
      name: "projectTimeline",
      title: "Project Timeline",
      type: "string",
      description:
        "Project duration or sprint length (e.g. Jan to Mar 2024, 2 weeks)",
    }),
    defineField({
      name: "platforms",
      title: "Platforms",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Web", value: "web" },
          { title: "Responsive", value: "responsive" },
          { title: "Mobile App", value: "mobile" },
          { title: "Desktop App", value: "desktop" },
        ],
      },
      description: "What platform(s) was this project designed/built for?",
      validation: (Rule) => Rule.max(1),
    }),
    defineField({
      name: "body",
      title: "Detailed Project Description.",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "featured",
      title: "Featured Project?",
      type: "boolean",
      initialValue: false,
      description: "To be displayed on the home page or not.",
    }),
  ],
  preview: {
    select: {
      slug: "slug",
      title: "title",
      media: "coverImage",
      description: "excerpt",
      tags: "tags",
    },
  },
});
