import React from "react";
import SectionHeading from "./SectionHeading";
import NewsBlogItem from "./NewsBlogItem";

const NewsBlogs = ({ isDark, newsBlogs }) => {
  return (
    <section id="news-blogs">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle={"News & blogs"}
          title={"Latest news & blogs"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          }
        />
        <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {newsBlogs &&
            newsBlogs.map((newsBlog) => (
              <NewsBlogItem key={newsBlog.id} data={newsBlog} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlogs;
