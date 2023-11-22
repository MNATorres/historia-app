import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import { NavigationProvider } from "./hooks/useNavigation";
import Footer from "./components/Footer";
import Teachers from "./components/Teachers";
import Students from "./components/Students";
import ListStudents from "./components/ListStudents";

function App() {
  return (
    <Box>
      <NavigationProvider>
        <Header />
        <Hero />
        <Main />
        <Students />
        <Teachers />
        <Footer />
      </NavigationProvider>
    </Box>
  );
}

export default App;
