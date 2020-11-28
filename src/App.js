import "./App.css";
import "../src/assets/fonts/fonts.css";
import '@brainhubeu/react-carousel/lib/style.css';
import { Grid } from "@material-ui/core";
import HeaderBar from "./layouts/HeaderBar";
import SideNavbar from "./layouts/SideNavbar";
import Services from "./components/services/Services";
import Main from "./components/hero_area/Main";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Grid>
      <HeaderBar />
      <Grid container>
        <SideNavbar />
        <Main/>
        <Services />
      </Grid>
      <Footer/>
    </Grid>
  );
}

export default App;
