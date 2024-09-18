import React from "react";
import Blog_card from "./Blog_card_components/Blog_card";
import Section_title from "../Section_title/Section_title";
import Section_title_desc from "../Section_title_desc/Section_title_desc";

function Blog_section() {
  const Blog_content = [
    {
      blog_img: "assets/img/Blog-img/frontend-min.jpg",
      blog_title: "Getting Started with Frontend Development",
      blog_desc:
        "Write a beginner-friendly post explaining what frontend development is, covering basic concepts like HTML, CSS, JavaScript, and popular frameworks like React",
    },
    {
      blog_img: "assets/img/Blog-img/react-min.jpg",
      blog_title: "Why React.js is the Future of Frontend Development",
      blog_desc:
        "Highlight the advantages of using React for frontend development, including its component-based architecture, virtual DOM, and ecosystem. Include some examples of projects you've built with React",
    },
    {
      blog_img: "assets/img/Blog-img/responsive-min.jpg",
      blog_title: "Responsive Web Design: Tips and Best Practices",
      blog_desc:
        "Discuss how to create responsive websites using techniques such as media queries, flexible grids, and modern CSS frameworks like Bootstrap or Tailwind CSS.",
    },
    // {
    //   blog_img: "assets/img/Blog-img/Tailwind-CSS-vs-Bootstrap-min.jpeg",
    //   blog_title: "Tailwind CSS vs Bootstrap: Which Should You Choose?",
    //   blog_desc:
    //     "Compare the two popular CSS frameworks, discussing their pros and cons, and how to choose the right one based on the project. You can include your personal experiences with both.",
    // }
  ];
  return (
    <section className="blog_section mt-32 px-5 md:px-10">
      <Section_title title={"Blogs"} />
      <Section_title_desc title_desc= {"Exploring Frontend"}/>
      <div className="blog_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-14">
        {Blog_content.map((blog, index) => (
          <Blog_card
            key={index}
            blog_img={blog.blog_img}
            blog_title={blog.blog_title}
            blog_desc={blog.blog_desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog_section;
