import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import BlogCard from "./BlogCard";

const BlogSide = () => {
  const info = {
    first: {
      title: "Web Design",
      img: "https://finibus-react.b-cdn.net/images/post/post-1.jpg",
      post: "Posted by, Alen Jodge",
      date: "05 January, 2022",
      header: "Donec a porttitor phari sod tellus Nunc quis erosn.",
      par: "Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent nec neque at dolor ti venenatis consectetur eu quis ex.",
      backgroundImg: "https://finibus-react.b-cdn.net/images/post/post-1.jpg",
    },
    second: {
      title: "Software",
      img: "https://finibus-react.b-cdn.net/images/author/author-2.jpg",
      post: "Posted by, Kim karden",
      date: "05 January, 2022",
      header: "Mekusa a porttitor phari sod tellus algo quis ksro.",
      par: "Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent nec neque at dolor ti venenatis consectetur eu quis ex.",
      backgroundImg: "https://finibus-react.b-cdn.net/images/post/post-2.jpg",
    },
  };
  return (
    <Box flexBasis="65%">
      <Stack direction="row" justifyContent="space-around">
        <BlogCard
          title={info.first.title}
          img={info.first.img}
          post={info.first.post}
          date={info.first.date}
          header={info.first.header}
          par={info.first.par}
          backgroundImg={info.first.backgroundImg}
        />
        <BlogCard
          title={info.second.title}
          img={info.second.img}
          post={info.second.post}
          date={info.second.date}
          header={info.second.header}
          par={info.second.par}
          backgroundImg={info.second.backgroundImg}
        />
      </Stack>
    </Box>
  );
};

export default BlogSide;
