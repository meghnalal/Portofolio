import Header from "../components/header";
import { ReactComponent as GithubIcon } from "../image/github.svg";
import { ReactComponent as TwitterIcon } from "../image/twitter.svg";
import { ReactComponent as InstagramIcon } from "../image/instagram.svg";
import { ReactComponent as LinkdlinIcon } from "../image/linkedin.svg";
import { ReactComponent as ArrayIcon } from "../image/arrow_down.svg";
import About from "../components/about";
import Image from "../components/image";
import SkillsIcon from "../components/skillsicon";
import Experiences from "../components/experiences";
import DropdownMenu from "../components/dropdown";
import Contact from "../components/contact";

function Home() {
  return (
    <div className="bg-background h-auto flex font-thin flex-col justify-center items-center space-y-24  ">
      <Header />
      <div className="flex flex-col h-[80vh] sm:h-[50vh] items-center font-mainFont">
        <h1 className="font-broadacre-3 text-8xl mb-6 text-background-third ">
          Hello! <code className="font-broadacre-3">I'm Meghna Lal</code>
        </h1>

        <h3 className="font-thin text-xl text-text-contrast-green mb-8 ">
          Versatility -- Innovation -- Industry Insight -- Hard Worker --
          Continuous Learner
        </h3>
      </div>
      <div className="bg-background-third h-auto flex-col w-11/12 flex rounded-xl items-center">
        <div className=" border-b-[1px] border-background">
          <h2 className="text-xl text-center text-background pt-4 ">
            <ul>
              <li className="inline-block mr-4">
                a{" "}
                <p className="font-broadacre-text text-2xl inline">
                  Full Stack Developer
                </p>
                <p className=" font-broadacre text-xl inline">
                  {" "}
                  passionate about turning ideas into powerful tech solutions.
                </p>
              </li>
              <li className="mr-4 font-broadacre">
                From crafting{" "}
                <p className="font-broadacre-text text-2xl inline">
                  innovative SaaS products{" "}
                </p>
                for JaguarLandRover to{" "}
                <p className="font-broadacre  text-xl inline">
                  {" "}
                  developing software
                </p>{" "}
                that delivers in cars
              </li>
              <li className="text-2xl font-broadacre-text mb-4">
                I bring concepts to life through code.
              </li>
            </ul>
          </h2>
          <div className="flex justify-center items-center pb-6 ">
            <div className=" flex justify-center items-center h-[33px] w-[60px] border-[1px] rounded-2xl fill-background ">
              <ArrayIcon />
            </div>
          </div>
        </div>
        {/* ABOUT SECTION */}
        <div className="flex justify-start w-11/12 pt-4 ">
          <div className="flex-col w-11/12 pt-4 ">
            <h1 className="font-broadacre-3 text-8xl mb-6 text-background  ">
              About
            </h1>
            <Image />
          </div>
          <About />
        </div>
        <SkillsIcon />
      </div>
      <div className="flex-col font-mainFont w-11/12 pt-5 px-4 border-t-[1px] border-background-third">
        <h3 className=" font-broadacre-text text-xl text-text-contrast-green  ">
          The companies I worked with
        </h3>
        <h1 className="font-broadacre-3 text-8xl pb-14 text-background-third ">
          Experiences
        </h1>
        {/* EXPERIENCE */}
        <Experiences />
        {/* CONTACT */}
        <div className="bg-background-third h-auto flex-col w-full  flex rounded-xl  ">
          <h1 className="font-broadacre-3 text-8xl pb-14 text-background ">
            Say Hello!
          </h1>
          s
          <Contact />
        </div>
        {/* <DropdownMenu/> */}
      </div>
      <div className="flex justify-center p-2  ">
        <a
          href="https://github.com/meghnalal"
          target="_blank"
          className="fill-text-contrast-green mx-2 hover:fill-primary transition-fill"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://github.com/meghnalal"
          target="_blank"
          rel="noopener noreferrer"
          className="fill-text-contrast-green mx-2 hover:fill-primary transition-fill"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.instagram.com/alive_lens/"
          target="_blank"
          rel="noopener noreferrer"
          className="fill-text-contrast-green mx-2 hover:fill-primary transition-fill"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/meghna-lal-33565bb9/"
          target="_blank"
          rel="noopener noreferrer"
          className="fill-text-contrast-green mx-2 hover:fill-primary transition-fill"
        >
          <LinkdlinIcon />
        </a>
      </div>
    </div>
  );
}

export default Home;
