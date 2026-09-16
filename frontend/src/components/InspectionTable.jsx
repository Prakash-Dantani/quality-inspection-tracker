import { Alert, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

import useInspection from "../hooks/useInspection";
import { inpectionDTColumns } from "../utils/inspection.dt.column";
import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";

function InspectionTable() {
  const { inspections, loading, error, fetchInspection } = useInspection();

  const [filters, setFilters] = useState({
    severity: "",
    status: "",
    machine_id: "",
  });
  useEffect(() => {
    fetchInspection(filters);
  }, [filters]);

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
      <DataGrid
        rows={inspections}
        columns={inpectionDTColumns}
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
    </>
  );
}

export default InspectionTable;
