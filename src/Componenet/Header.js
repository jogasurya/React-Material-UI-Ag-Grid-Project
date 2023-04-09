import React from "react";
import "../styles.css";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <div className="header">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            User Management
          </Typography>
          <Button color="inherit" sx={{ marginLeft: "auto" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
