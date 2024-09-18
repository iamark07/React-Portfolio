import React, { useState } from "react";
import Slider from "react-slick";
import Section_title from "../Section_title/Section_title";
import Section_title_desc from "../Section_title_desc/Section_title_desc";
import Projects_Components from "./Projects_Components/Projects";
import Projects_detail from "./Projects_Components/Projects_detail_component/Projects_detail";
import Projects_full_img from "./Projects_Components/Projects_full_img/Projects_full_img";
import "./Projects_section.css";

function Projects_section() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [is_img_Visible, set_is_img_Visible] = useState(false);

  const projectsData = [
    {
      pro_img: "assets/img/projects-img/restuarent-website.png",
      pro_title: "Restaurant Website",
      pro_detail: "Frontend Website",
      description:
        "I created a modern restaurant frontend website using HTML, CSS, and JavaScript. The site features an elegant design, responsive layout, and interactive elements such as image sliders and smooth scrolling. The menu, contact form, and location map are designed to enhance user experience and showcase the restaurant's offerings.",
      type: "Frontend Website",
      languages: "HTML, CSS, JS",
      country: "India",
      live_url: "https://iamark07.github.io/Restaurant-Website/",
    },
    {
      pro_img: "assets/img/projects-img/Watch-e-commerce.png",
      pro_title: "Watch E-Commerce Website",
      pro_detail: "Frontend Website",
      description:
        "I developed a sleek and responsive WATCH e-commerce website using HTML, CSS, Tailwind CSS, and JavaScript. The site includes dynamic product displays, interactive shopping features, and a smooth, minimalist design. Tailwind CSS enhanced the styling with modern UI components, while JavaScript enabled functionality such as product filtering and cart management.",
      type: "Frontend Website",
      languages: "HTML, CSS, Tailwind CSS, JS",
      country: "India",
      live_url: "https://iamark07.github.io/Watch-e-commerce-website/",
    },
    {
      pro_img: "assets/img/projects-img/Latest-Portfolio.png",
      pro_title: "Latest Portfolio",
      pro_detail: "Frontend Website",
      description:
        "I built a professional portfolio website using HTML, CSS, Tailwind Css, and React js. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while React added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS, Tailwind Css, React.js,",
      country: "India",
      live_url: "https://iamark07.github.io/React-Portfolio/",
    },
    {
      pro_img: "assets/img/projects-img/append-website.png",
      pro_title: "Append Website",
      pro_detail: "Frontend Website",
      description:
        "I built a professional portfolio website using HTML, CSS, Bootstrap, and JavaScript. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while JavaScript added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS, Bootstrap 5, JS",
      country: "India",
      live_url: "https://iamark07.github.io/Append-Bootstrap-website/",
    },
    {
      pro_img: "assets/img/projects-img/Portfolio-website.png",
      pro_title: "Portfolio Website",
      pro_detail: "Frontend Website",
      description:
        "I Created a professional portfolio website using HTML, CSS, Bootstrap, and JavaScript. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while JavaScript added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS, Bootstrap 5, JS",
      country: "India",
      live_url: "https://iamark07.github.io/Portfolio-Website/",
    },
    {
      pro_img: "assets/img/projects-img/edukate-website.png",
      pro_title: "Edukate Website",
      pro_detail: "Frontend Website",
      description:
        "I built a professional portfolio website using HTML, CSS, Bootstrap, and JavaScript. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while JavaScript added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS, Bootstrap 5, JS",
      country: "India",
      live_url: "https://iamark07.github.io/EDUKATE-WEBSITE/",
    },
    {
      pro_img: "assets/img/projects-img/music-player.png",
      pro_title: "Music Player",
      pro_detail: "Frontend Project",
      description:
        "I built a professional portfolio website using HTML, CSS, Bootstrap, and JavaScript. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while JavaScript added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS, jQuery",
      country: "India",
      live_url: "https://iamark07.github.io/Music-Player/",
    },
    {
      pro_img: "assets/img/projects-img/altis-website.png",
      pro_title: "Altis Website",
      pro_detail: "Frontend Website",
      description:
        "I built a professional portfolio website using HTML, CSS, Bootstrap, and JavaScript. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while JavaScript added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS",
      country: "India",
      live_url: "https://iamark07.github.io/ALTIS/",
    },
    {
      pro_img: "assets/img/projects-img/New-Portfolio.png",
      pro_title: "New Portfolio",
      pro_detail: "Frontend Website",
      description:
        "I built a professional portfolio website using HTML, CSS, Bootstrap, and JavaScript. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while JavaScript added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS, Bootstrap 5, jQuery",
      country: "India",
      live_url: "https://iamark07.github.io/New-Portfolio-Website/",
    },
    {
      pro_img: "assets/img/projects-img/saraswati-school.png",
      pro_title: "Saraswati School",
      pro_detail: "Frontend Website",
      description:
        "I built a professional portfolio website using HTML, CSS, Bootstrap, and JavaScript. The site showcases my skills, projects, and experience through a clean, responsive design. Bootstrap ensured quick and efficient layout creation, while JavaScript added interactivity, such as smooth navigation and dynamic project displays, enhancing the overall user experience.",
      type: "Frontend Website",
      languages: "HTML, CSS",
      country: "India",
      live_url: "https://iamark07.github.io/saraswati-vidya-mandir/",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto slide
    autoplaySpeed: 5000, // Time between auto slides (3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsDetailVisible(true);
  };

  const project_img_Click = (project) => {
    setSelectedProject(project);
    set_is_img_Visible(true);
  };

  const closeProjectDetail = () => {
    setIsDetailVisible(false);
  };

  const on_img_Close = () => {
    set_is_img_Visible(false);
  };

  return (
    <section className="Projects_section py-20 px-5 md:px-10 w-100 bg-gradient-to-l from-indigo-950 to-teal-950">
      <Section_title title={"My Projects"} />
      <Section_title_desc title_desc= {"Recent Projects"}/>

      {/* React Slick Carousel */}
      <Slider {...settings} className="projects_container mt-10">
        {projectsData.map((project, index) => (
          <Projects_Components
            key={index}
            pro_img={project.pro_img}
            pro_title={project.pro_title}
            pro_detail={project.pro_detail}
            onClick={() => handleProjectClick(project)}
            on_img_Click={() => project_img_Click(project)}
          />
        ))}
      </Slider>

      {/* Project details component */}
      <Projects_detail
        project={selectedProject}
        onClose={closeProjectDetail}
        isVisible={isDetailVisible}
      />

      {/* Full image display component */}
      <Projects_full_img
        project={selectedProject}
        img_Close={on_img_Close}
        img_Visible={is_img_Visible}
      />
    </section>
  );
}

export default Projects_section;
