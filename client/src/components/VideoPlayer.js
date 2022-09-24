import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "450px",
    height: "300px",
    borderRadius: "7%",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid #3DC972",
    margin: "10px",
    backgroundColor: "#251C3B",
    borderRadius: "7%",
  },
  name: {
    color: "white",
    fontWeight: "500",
    margin: "10px 0  0 20px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <div>
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
            <Typography className={classes.name}>{name || "Name"}</Typography>
          </Grid>
        </Paper>
      </div>
      {callAccepted && !callEnded && (
        <div>
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className={classes.video}
              />
              <Typography className={classes.name}>
                {call.name || "Name"}
              </Typography>
            </Grid>
          </Paper>
        </div>
      )}
    </Grid>
  );
};

export default VideoPlayer;
