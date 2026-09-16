import { Paper, Grid, TextField, MenuItem, Button } from "@mui/material";

function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFilters({
      severity: "",
      status: "",
      machine_id: "",
    });
  };

  return (
    <Paper sx={{ p: 2, my: 3 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            select
            name="severity"
            label="Severity"
            value={filters.severity}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Critical">Critical</MenuItem>
            <MenuItem value="Major">Major</MenuItem>
            <MenuItem value="Minor">Minor</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            select
            name="status"
            label="Status"
            value={filters.status}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="Resolved">Resolved</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            name="machine_id"
            label="Machine ID"
            value={filters.machine_id}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }} display="flex" alignitems="center">
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FilterBar;
