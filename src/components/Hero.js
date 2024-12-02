import HeroImg from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "Im a Full Stack developer and designer",
    social: {
      twitter: "https://x.com/nimiSha071",
      facebook: "https://www.facebook.com/shamini.siva.33",
      linkedIn: "https://www.linkedin.com/in/shamini-sivarasa-3a1413108/",
    },
  };
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      {/* <div className="md: w-1/2 flex-col"> */}
      <div className="md:w-1/2 flex-col">
        <h1 className="text-white text-6xl font-hero-font">
          Hi, <br />
          I'm <span className="text-black">Shamini</span>
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-5">
          <a href={config.social.twitter} className="pr-5 hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a href={config.social.facebook} className="pr-5 hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
          <a href={config.social.linkedIn} className=" hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>

      <img className="md:w-1/3" src={HeroImg} />
      {/* <img className="md: w-1/3" src={HeroImg} /> */}
    </section>
  );
}
