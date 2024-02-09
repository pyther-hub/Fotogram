import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="#45FFCA">
          CamSnap
        </Typography>
      </Box>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px"
      }}>
      <Box
        p="2rem"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography fontSize="25px" fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} paddingBottom="20px" paddingTop="20px" paddingLeft="50px" paddingRight="50px">
          Welcome to CamSnap!
        </Typography>
        <Form />
      </Box>
      </div>
    </Box>
  );
};

export default LoginPage;