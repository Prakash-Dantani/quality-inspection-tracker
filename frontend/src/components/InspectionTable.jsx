import {
  Alert,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import InspectionCard from "./InspectionCard";

import { getInspectionDTColumns } from "../utils/inspection.dt.column";

// import { useState } from "react";
import FilterBar from "./FilterBar";

export function InspectionTable({
  inspections,
  loading,
  error,
  onResolve,
  filters,
  setFilters,
}) {
  // const [filters, setFilters] = useState({
  //   severity: "",
  //   status: "",
  //   machine_id: "",
  // });

  const handleResolve = (id) => {
    onResolve(id);
  };

  const columns = getInspectionDTColumns(handleResolve);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Failed to load Inspection table.</Alert>;
  }

  return (
    <>
      <FilterBar filters={filters} setFilters={setFilters} />

      {isMobile ? (
        <Box mt={2}>
          {inspections.length === 0 ? (
            <Alert severity="info">No inspections found.</Alert>
          ) : (
            inspections.map((inspection) => (
              <InspectionCard
                key={inspection.id}
                inspection={inspection}
                onResolve={handleResolve}
              />
            ))
          )}
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            overflowX: "auto",
          }}
        >
          <DataGrid
            rows={inspections}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                paginationModel: {
                  page: 0,
                  pageSize: 5,
                },
              },
            }}
          />
        </Box>
      )}
    </>
  );
}

export default InspectionTable;
