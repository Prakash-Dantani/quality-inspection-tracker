import { Alert, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

import { getInspectionDTColumns } from "../utils/inspection.dt.column";

import { useState } from "react";
import FilterBar from "./FilterBar";
import toast from "react-hot-toast";
import { resolveInspection } from "../api/inspection.api";

export function InspectionTable({ inspections, loading, error, onResolve }) {
  const [filters, setFilters] = useState({
    severity: "",
    status: "",
    machine_id: "",
  });

  /* const handleResolve = async (id) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to resolve this inspection?",
      );

      if (!confirm) return;

      await resolveInspection(id);

      toast.success("Inspection resolved successfully");

      onResolved();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to resolve inspection",
      );
    }
  }; */
  const handleResolve = (id) => {
    onResolve(id);
  };

  const columns = getInspectionDTColumns(handleResolve);

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
    </>
  );
}

export default InspectionTable;
