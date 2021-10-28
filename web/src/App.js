import {Switch,Route,useHistory,} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Login from "./components/login/index"
import Signup from "./components/signup/index"
import Dashboard from "./components/dashboard/index"
import Profile from "./components/profile/index";

function App() {

  let history = useHistory();

  return (
    <>
      

   <Box sx={{ flexGrow: 1 }} >
      <AppBar textalign="center" position="static" > 
        <Toolbar textAlign="center"
        >
      
          {/* <Button style={{textAlign:"center"}} variant="h1" color="inherit"onClick={() => { history.push("/") }}>Dashboard</Button> */}
          <Button style={{textAlign:"center"}}variant="h6"color="inherit"onClick={() => { history.push("/login") }}>Login</Button>
          <Button  style={{textAlign:"center"}}variant="h6"color="inherit"onClick={() => { history.push("/signup") }}>Signup</Button>
 <Button  style={{textAlign:"center"}}variant="h6"color="inherit"onClick={() => { history.push("/profile") }}>Post</Button>
        </Toolbar>
      </AppBar>
    </Box>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>


        <Route exact path="/profile">
          <Profile />
        </Route>



        <Route exact path="/">
          <Dashboard />
        </Route>


        <Route exact path="/**">
          <Dashboard />
        </Route>
      </Switch>

    </>
  );
}

export default App;