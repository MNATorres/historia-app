import React, { createContext, useContext } from "react";

interface INavigationProp {
  children: React.ReactNode;
}

interface INavigationContext {
  scrollToSection: (sectionId: string) => void;
}

export const NavigationContext = createContext<INavigationContext>({
  scrollToSection: () => {},
});

export const NavigationProvider = ({ children }: INavigationProp) => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationValue = {
    scrollToSection,
  };

  return (
    <NavigationContext.Provider value={navigationValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  return context;
};
