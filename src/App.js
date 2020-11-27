import './App.css';
import '../src/assets/fonts/fonts.css'
import { Grid } from '@material-ui/core';
import HeaderBar from './layouts/HeaderBar';

function App() {
  return (
    <div className="App">
      <Grid>
        <HeaderBar/>
      </Grid>
    </div>
  );
}

export default App;
