import React from "react";
import Image from "next/image";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Stack
      spacing={3}
      useFlexGap
      sx={{ justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <Image
        alt="old picture of Tyler Jones"
        src="/images/sixth-grade.jpeg"
        height={400}
        width={400}
      />

      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography sx={{ fontSize: "4rem" }}>404</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>
          Sorry, don't have this page. Here's my first day of 6th grade for your
          troubles.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default NotFound;
