import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";

import SummaryCard from "./SummaryCard";
import useSummary from "../hooks/useSummary";

function Summary() {
  const { summary, error, loading, fetchSummary } = useSummary();

  useEffect(() => {
    fetchSummary();
  }, []);

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
    return <Alert severity="error">Failed to load dashboard summary.</Alert>;
  }

  const cards = [
    { title: "Total", value: summary?.total ?? 0 },
    { title: "Open", value: summary?.open ?? 0 },
    { title: "Resolved", value: summary?.resolved ?? 0 },
    { title: "Critical", value: summary?.critical ?? 0 },
    { title: "Major", value: summary?.major ?? 0 },
    { title: "Minor", value: summary?.minor ?? 0 },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((item) => (
        <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
          <SummaryCard title={item.title} value={item.value} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Summary;
