import "./App.css";
import "../src/assets/fonts/fonts.css";
import { Grid } from "@material-ui/core";
import HeaderBar from "./layouts/HeaderBar";
import SideNavbar from "./layouts/SideNavbar";
import Services from "./components/Services";

function App() {
  return (
    <Grid>
      <HeaderBar />
      <Grid container>
        <SideNavbar />
        <Services/>
      </Grid>
    </Grid>
  );
}

export default App;
