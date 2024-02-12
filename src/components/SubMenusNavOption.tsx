import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

type SubMenusNavOptionProps = {
  name: string;
  path: string;
};

export const SubMenusNavOption: React.FC<SubMenusNavOptionProps> = ({
  name,
  path,
}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div className="mr-10 h-3/4 flex items-center text-2xl">
      <Link
        to={path}
        className={`${
          pathname === path ? "active" : ""
        }  transition ease duration-300 hover:text-cyan-600 delay-150 hover:-translate-y-1`}
      >
        {t(`categories.${name}`)}
      </Link>
    </div>
  );
};
