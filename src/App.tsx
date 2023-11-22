import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import { NavigationProvider } from "./hooks/useNavigation";
import Footer from "./components/Footer";
import Teachers from "./components/Teachers";
import Students from "./components/Students";
import Title from "./components/Title";
import PlayGame from "./components/playGame/PlayGame";

function App() {
  return (
    <Box>
      <NavigationProvider>
        <Header />
        <Hero />
        <Title />
        <Main />
        <PlayGame />
        <Students />
        <Teachers />
        <Footer />
      </NavigationProvider>
    </Box>
  );
}

export default App;
