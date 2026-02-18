import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const profile = defineType({
  type: "document",
  title: "Profile",
  name: "profile",
  icon: UserIcon,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "learning",
      title: "Learning",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "hobbies",
      title: "Hobbies",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 6,
        }),
        defineField({
          name: "hobbyImage",
          title: "Cover Image for Hobbies",
          type: "image",
          options: {
            hotspot: true,
            metadata: ["lqip", "palette"],
          },
          fields: [
            defineField({
              name: "altText",
              title: "Alternative text",
              type: "string",
              validation: (Rule) =>
                Rule.required().warning("Please provide alt text."),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "toolbox",
      title: "Toolbox",
      type: "object",
      fields: [
        defineField({
          name: "design",
          title: "Design",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        }),
        defineField({
          name: "development",
          title: "Development",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        }),
        defineField({
          name: "other",
          title: "Other Tools",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "x",
          title: "X URL",
          type: "url",
          initialValue: "https://x.com/",
        },
        {
          name: "twitch",
          title: "Twitch URL",
          type: "url",
          initialValue: "https://twitch.com/",
        },
        {
          name: "behance",
          title: "Behance URL",
          type: "url",
          initialValue: "https://behance.com/",
        },
        {
          name: "dribbble",
          title: "Dribbble URL",
          type: "url",
          initialValue: "https://dribbble.com/",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "shortBio",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "New Profile",
        subtitle: subtitle || "No headline set",
        media: UserIcon,
      };
    },
  },
});
