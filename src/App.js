import "./App.css";
import "../src/assets/fonts/fonts.css";
import { Grid } from "@material-ui/core";
import HeaderBar from "./layouts/HeaderBar";
import SideNavbar from "./layouts/SideNavbar";

function App() {
  return (
    <Grid>
      <HeaderBar />
      <Grid container>
        <SideNavbar />
      </Grid>
    </Grid>
  );
}

export default App;
