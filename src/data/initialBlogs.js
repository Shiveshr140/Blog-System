import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const initialBlogs = [
  {
    id: "205c4e8d-e0a2-4485-9dd3-9305605b44dc",
    title: "Technlogies used are React router, Tailwind, Context Api",
    tags: "React, Web Development",
    author: "Shivesh",
    reposted: true,
    createdAt: fromToday(-8),
    content: `In this blog post, I’ll walk you through the technologies I used to build my blog application and how they helped create a dynamic, responsive, and seamless user experience. React Router is the backbone of navigation in my blog application. It allows users to seamlessly move between different pages, such as the homepage, detailed blog posts, and category-specific views. Styling the application was made effortless with Tailwind CSS. Its utility-first approach allowed me to:
             Create responsive designs with minimal effort. The application works seamlessly across all devices.`,
  },
  {
    id: "205c4e8d-e0a2-4485-9dd3-9305695b40gc",
    title: "Should we apply filters while searching?",
    tags: "Web Development",
    author: "Shivesh",
    reposted: false,
    createdAt: fromToday(-10),
    content:
      "I have not removed filters during searching, which means users can search while filters are still applied. Applying filters while searching depends on the use case and user experience. Filters can narrow down results, making it easier for users to find what they're looking for.",
  },
  {
    id: "106f55cb-5c3c-4df4-b047-fec2ef785046",
    title: "I haved used Advanced React pattern to make these modal windows",
    tags: "React",
    author: "Shivesh",
    reposted: false,
    createdAt: fromToday(-12),
    content:
      "I have used advanced React patterns to implement these modal windows, specifically leveraging the compound components pattern. This approach allows for modular and reusable components while maintaining flexibility and ease of customization. Using compound components ensures better maintainability and enhances the user experience across the application.",
  },

  {
    id: "1b3a9efc-e6ba-4c95-9999-ce58f56eff14",
    title: "What if you are not author of the blog?",
    tags: "React, Web Development",
    author: "Shivesh Rajput",
    createdAt: fromToday(-13),
    reposted: false,
    content:
      "If you are not the author of a blog post, your actions are limited to ensure the integrity of the author's content. You can read the post and, if you find it interesting, repost it to share with others. However, you will not have the ability to delete or edit the post, as these actions are restricted to the original author. This approach maintains ownership and accountability for the content while encouraging community engagement.",
  },
];
