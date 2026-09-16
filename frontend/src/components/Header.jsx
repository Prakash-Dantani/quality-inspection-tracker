import { Grid, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <Grid container alignitems="center" spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box display="flex" justifycontent="center">
            <img
              src="https://www.arvind.com/themes/custom/arvind_custom/components/layout/header/img/Aravind_new_logo.svg"
              alt="Arvind Limited"
              style={{
                maxWidth: "180px",
                height: "auto",
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <Typography variant="h4" fontWeight={700}>
            Quality Inspection Tracker
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Manufacturing Quality Inspection Dashboard
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
