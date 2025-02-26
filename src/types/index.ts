export interface HeaderProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export interface HomePageProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export interface Items {
  description?: string;
  id?: string;
  imageSrc: string;
  techIcons?: string[];
  title?: string;
  link?: string;
  repository?: string;
}
export interface Context {
  isInnerWidthMore768: boolean;
  setIsInnerWidthMore768: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenNavigation: boolean;
}
