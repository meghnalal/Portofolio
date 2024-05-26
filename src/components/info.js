import { ReactComponent as GithubIcon } from "../image/github.svg";
import { ReactComponent as TwitterIcon } from "../image/twitter.svg";
import { ReactComponent as InstagramIcon } from "../image/instagram.svg";
import { ReactComponent as LinkdlinIcon } from "../image/linkedin.svg";
const Info = () => {
  return (
    <div className="flex h-[50px] w-11/12 p-2 bg-background  justify-center content-end rounded-xl  ">
      <a
        href="https://github.com/meghnalal"
        target="_blank"
        className=" fill-background-third mx-2 hover:fill-primary transition-fill"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        href="https://github.com/meghnalal"
        target="_blank"
        rel="noopener noreferrer"
        className="fill-background-third mx-2 hover:fill-primary transition-fill"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/alive_lens/"
        target="_blank"
        rel="noopener noreferrer"
        className="fill-background-third mx-2 hover:fill-primary transition-fill"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/meghna-lal-33565bb9/"
        target="_blank"
        rel="noopener noreferrer"
        className="fill-background-third mx-2 hover:fill-primary transition-fill"
      >
        <LinkdlinIcon />
      </a>
    </div>
  );
};
export default Info;
