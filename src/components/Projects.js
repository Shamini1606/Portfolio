import websiteImg1 from "../assets/ecommerce-websites.jpg";
import websiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "A E commerce website. Built with MERN stack.",
        link: "",
      },
      {
        image: websiteImg2,
        description:
          "Food E commerece website like swiggy, Built with Angular & .Net.",
        link: "",
      },
      {
        image: websiteImg3,
        description: "Basic Blog website Built with Next JS and MongoDB.",
        link: "",
      },
    ],
  };
  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl  border-b-4 border-secondary mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. check them out.{" "}
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project) => (
            // <a href={project.link}>
            <div className="relative">
              <img className="h-[200px] w-[500px]" src={project.image} />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>
                    View project
                  </a>
                </div>
              </div>
            </div>
            // </a>
          ))}
        </div>
      </div>
    </section>
  );
}
