import { UilInstagram } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import Gambar1 from "../assets/gue.jpg";
import Gambar2 from "../assets/sy.jpg";

export const Header = () => {
  let instagram = "https://www.instagram.com/cellinerysh/";
  let twitter = "https://twitter.com/fvmikags?t=6ACu37c5VNWRXDJrIfR2Yg&s=08";
  let linkedIn = "https://www.linkedin.com/in/cellineregia/";
  let github = "https://github.com/CellineLin";
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[url('../src/assets/bg.png')] bg-cover">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">
                Hi! 👋
              </p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              CELLINE REGIA
              <br className="md:block" />
              YASSHINTA{" "}
            </h2>
            <p className="text-gray-700 text-base md:text-m">
              An undergraduate 2nd year student at SMK Telkom Malang majoring in
              Software Engineer with Node React JS expertise.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a href={instagram}>
              <UilInstagram />
            </a>

            <a href={twitter}>
              <UilTwitter />
            </a>

            <a href={linkedIn}>
              <UilLinkedin />
            </a>

            <a href={github}>
              <UilGithub />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img className="self-potrait" src={Gambar1} alt="" />
          </div>
          <div className="w-5/12 lg:-ml-18">
            <img className="self-potrait" src={Gambar2} alt="" />
          </div>
        </div>
      </div>
      <a
        href="#abt"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110 will-change-scroll"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  );
};

export default Header;
