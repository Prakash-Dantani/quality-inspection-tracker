import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Summary from "../components/Summary";
import InspectionTable from "../components/InspectionTable";
import { useEffect, useState } from "react";
import AddInspectionDialog from "../components/AddInspectionDialog";
import useSummary from "../hooks/useSummary";
import useInspection from "../hooks/useInspection";
import ResolveInspectionDialog from "../components/ResolveInspectionDialog";
import Header from "../components/Header";

const Dashboard = () => {
  const {
    summary,
    loading: summaryLoading,
    error: summaryError,
    fetchSummary,
  } = useSummary(false);

  const {
    inspections,
    loading: inspectionLoading,
    error: inspectionError,
    fetchInspection,
  } = useInspection(false);

  const [filters, setFilters] = useState({
    severity: "",
    status: "",
    machine_id: "",
  });

  useEffect(() => {
    fetchSummary();
  }, []);

  useEffect(() => {
    fetchInspection(filters);
  }, [filters]);

  // Handle create inspection code start

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  // Handle create inspection code end

  // Handle Resolve inspection code start
  const [resolveOpen, setResolveOpen] = useState(false);
  const [selectedInspection, setSelectedInspection] = useState(null);

  const handleResolveOpen = (id) => {
    setSelectedInspection(id);
    setResolveOpen(true);
  };

  const handleResolveClose = () => {
    setResolveOpen(false);
    setSelectedInspection(null);
  };

  // Handle Resolve inspection code end

  return (
    <>
      <Container maxWidth="xl">
        <Box py={4}>
          <Header />

          <Summary
            summary={summary}
            loading={summaryLoading}
            error={summaryError}
          />
          <br />
          <Button
            variant="contained"
            className="pull-right"
            onClick={handleOpen}
          >
            Add Inspection
          </Button>

          <br />
          <InspectionTable
            inspections={inspections}
            loading={inspectionLoading}
            error={inspectionError}
            onResolve={handleResolveOpen}
            filters={filters}
            setFilters={setFilters}
          />

          {/* Add and Resolve dialog start */}
          <AddInspectionDialog
            open={open}
            handleClose={handleClose}
            onSuccess={() => {
              fetchInspection(filters);
              fetchSummary();
            }}
          />
          <ResolveInspectionDialog
            open={resolveOpen}
            handleClose={handleResolveClose}
            inspectionId={selectedInspection}
            onSuccess={() => {
              fetchInspection(filters);
              fetchSummary();
            }}
          />
          {/* Add and Resolve dialog end */}
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
