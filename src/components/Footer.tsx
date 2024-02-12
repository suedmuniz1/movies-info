import { useTranslation } from "react-i18next";
import { socialMediasInfo } from "../constants/footer";
import { FooterMediaIconButton } from "./FooterMediaIconButton";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white">
      <div className="flex justify-center align-center p-5">
        <span>
          {t("components.footer.credits")}{" "}
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
