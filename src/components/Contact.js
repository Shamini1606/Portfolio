// import ResumeImg from "../assets/resume.jpg";

export default function Contact() {
  const config = {
    email: "shaminisiva16@gmail.com",
    phone: "+94710184423",
  };

  return (
    <section
      className="flex flex-col bg-primary px-5 py-32 text-white"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl  border-b-4 text-white border-secondary mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss more in detail, please contact me.
        </p>
        <p className="py-2">
          <span className="font-bold">Email : </span>
          {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Contact No : </span>
          {config.phone}
        </p>
      </div>
    </section>
  );
}
