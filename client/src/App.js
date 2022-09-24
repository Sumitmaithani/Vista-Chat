import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notification from "./components/Notification";

import logo from './assests/logo.png';

const useStyles = makeStyles((theme) => ({
  logo_container:{
    margin: "20px"
  },
  logo:{
    width:"200px"
  },

  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
     
      <div className={classes.logo_container}>
        <img className={classes.logo} src={logo} />
      </div>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </div>
  );
};

export default App;
