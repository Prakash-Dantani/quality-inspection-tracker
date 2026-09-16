import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Summary from "../components/Summary";
import InspectionTable from "../components/InspectionTable";
import { useState } from "react";
import AddInspectionDialog from "../components/AddInspectionDialog";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Container maxWidth="xl">
        <Box py={4}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Quality Inspection Tracker
          </Typography>

          <Summary />
          <br />
          <Button
            variant="contained"
            className="pull-right"
            onClick={handleOpen}
          >
            Add Inspection
          </Button>

          <AddInspectionDialog open={open} handleClose={handleClose} />
          <br />
          <InspectionTable />
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
