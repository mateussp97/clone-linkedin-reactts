import React, { useState, useEffect } from "react";
import AdBanner from "../AdBanner";
import DesktopHeader from "../DesktopHeader";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import MobileHeader from "../MobileHeader";
import RightColumn from "../RightColumn";
import { Container } from "./styles";

const Layout: React.FC = () => {
  //! Cria os estados para guardar o valor de isLoading
  const [isLoading, setIsLoading] = useState(true);

  //! Cria um useEffect para colocar um setTimeout dentro dele
  useEffect(() => {
    //! Esse setTimeout faz com que isLoading seja 'false' depois de 1 segundo
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <span>
        <AdBanner />
      </span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;
