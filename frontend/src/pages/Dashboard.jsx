import { Box, Button, Container, Typography } from "@mui/material";
import Summary from "../components/Summary";
import InspectionTable from "../components/InspectionTable";

const Dashboard = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box py={4}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Quality Inspection Tracker
          </Typography>

          <Summary />
          <br />
          <Button variant="contained" className="pull-right">
            Add Inspection
          </Button>
          <br />
          <InspectionTable />
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
