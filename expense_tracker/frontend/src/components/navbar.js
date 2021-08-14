import React, { Component } from "react";
import { render } from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

//const useStyles = makeStyles({
//  root: {
//    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //borderRadius: 3,
    //border: 0,
    //color: 'white',
    //height: 48,
    //padding: '0 30px',
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//  },
//});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function ClassesNesting() {
  const classes = useStyles();

  return (
    <Drawer 
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      //classes={{
        //root: classes.root, 
        // class name, e.g. `classes-nesting-root-x`
        //label: classes.label, 
        // class name, e.g. `classes-nesting-label-x` 
      //}}
    >
        <AllInclusiveIcon />
      cool
    </Drawer>
  );
}

const navDiv = document.getElementById("nav");
render(<ClassesNesting />, navDiv);