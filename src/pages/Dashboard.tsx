// File: src/pages/Dashboard.tsx
import React from "react";
import { Typography, Grid, Paper } from "@mui/material";

const Dashboard = () => (
  <div>
    <Typography variant="h4" gutterBottom>
      Dashboard
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">120</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Active Users</Typography>
          <Typography variant="h4">80</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">$12,000</Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
