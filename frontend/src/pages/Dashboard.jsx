import { Box, Container, Typography } from "@mui/material";
import Summary from "../components/Summary";

const Dashboard = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box py={4}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Quality Inspection Tracker
          </Typography>

          <Summary />
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
