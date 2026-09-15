import { Card, CardContent, Typography } from "@mui/material";

function SummaryCard({ title, value }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" fontWeight={700}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
