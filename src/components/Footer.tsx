import { socialMediasInfo } from "../constants/footer";
import { FooterMediaIconButton } from "./FooterMediaIconButton";

export const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center align-center p-5">
        <span>
          Designed and developed by:{" "}
          <strong className="text-cyan-300">Sued Nepomuceno Muniz</strong>
        </span>
        <div className="ml-10 flex gap-5 items-center">
          {socialMediasInfo.map(({ socialMedia, link }) => (
            <FooterMediaIconButton
              key={socialMedia}
              socialMedia={socialMedia}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
