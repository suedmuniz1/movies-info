import { IconType } from "react-icons";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const mediasIcons: Record<string, IconType> = {
  github: BsGithub,
  linkedin: BsLinkedin,
  instagram: BsInstagram,
};

type FooterMediaIconButtonProps = {
  socialMedia: string;
  link: string;
};

export const FooterMediaIconButton: React.FC<FooterMediaIconButtonProps> = ({
  socialMedia,
  link,
}) => {
  const footerIcon = () => {
    const Icon = mediasIcons[socialMedia];

    if (!Icon) return <></>;

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon
          size={26}
          className="cursor-pointer ease delay-150 duration-300 hover:text-cyan-500 transition hover:-translate-y-1 hover:scale-110"
        />
      </a>
    );
  };

  return footerIcon();
};
