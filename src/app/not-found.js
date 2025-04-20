import React from "react";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{ justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <Grid>
        <Image
          alt="old picture of Tyler Jones"
          src="/images/sixth-grade.jpeg"
          height={500}
          width={500}
        />
      </Grid>
      <Grid>
        <Typography variant="h1">404</Typography>
      </Grid>
      <Grid>
        <Typography>
          Sorry, don't have this page. Here's my first day of 6th grade for your
          troubles.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
