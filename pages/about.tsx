import React from "react";
import AppLayout from "../component/AppLayout";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@material-ui/core";
const about = () => {
  const isXs = useMediaQuery("(max-width:768px)");
  const style = {};
  return (
    <div>
      <AppLayout>
        <Box>
          <Box
            display="flex"
            sx={{
              width: "100%",
              height: "100vh",
              backgroundColor: "white",
              display: "center",
              opacity: [0.5, 0.4, 0.3],
            }}
          >
            <div>fdffdsf</div>
          </Box>
        </Box>
      </AppLayout>
    </div>
  );
};

export default about;
