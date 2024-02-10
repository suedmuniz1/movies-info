import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="bg-cyan-950 text-white">
      <div className="flex justify-center align-center p-5">
        <span>
          Designed and developed by:{" "}
          <strong className="text-cyan-300">Sued Nepomuceno Muniz</strong>
        </span>
        <div className="ml-10 flex gap-5 items-center">
          <a
            href="http://github.com/suedmuniz1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              size={26}
              className="cursor-pointer ease delay-150 duration-300 hover:text-cyan-500 transition hover:-translate-y-1 hover:scale-110"
            />
          </a>
          <a
            href="http://linkedin.com/in/suedmuniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin
              size={26}
              className="cursor-pointer ease delay-150 duration-300 hover:text-cyan-500 transition hover:-translate-y-1 hover:scale-110"
            />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram
              size={26}
              className="cursor-pointer ease delay-150 duration-300 hover:text-cyan-500 transition hover:-translate-y-1 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
