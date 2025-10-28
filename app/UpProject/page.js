
"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  Divider, Container
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    notes: "",
  });
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.notes) {
      alert("Please fill in all required fields.");
      return;
    }

    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      body.append(key, value)
    );
    if (file) body.append("file", file);

    try {
      setLoading(true);

      // Replace this with your actual endpoint:
      const res = await fetch(
        "https://www.takeoffmonkey.com/wp-admin/admin-ajax.php",
        {
          method: "POST",
          body,
        }
      );

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          notes: "",
        });
        setFile(null);
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />



      <Box sx={{ backgroundColor: "#003720", width: "100%", py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "white" }}
        >
          LET’S GET STARTED
        </Typography>
        <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.3)" }} />

        <Container maxWidth="xl" disableGutters>
          <Grid
            container
            spacing={4}
            sx={{
              px: { xs: 2, sm: 4, md: 8 },
              color: "white",
              alignItems: "flex-start",
            }}
          >
            {/* LEFT COLUMN - FORM */}
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 600, mx: "auto" }}>

                <Paper sx={{ p: 4, backgroundColor: "#003720" }} elevation={3}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} sx={{ backgroundColor: '#fff' }}>
                        <TextField
                          required
                          fullWidth

                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} sx={{ backgroundColor: '#fff' }}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} sx={{ backgroundColor: '#fff' }}>
                        <TextField
                          fullWidth
                          label="Company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} sx={{ backgroundColor: '#fff' }}>
                        <TextField
                          fullWidth
                          label="Project"
                          name="project"
                          value={formData.project}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ backgroundColor: '#fff' }}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={4}
                          label="Notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} >
                        <Button
                          variant="outlined"
                          component="label"
                          color="#fff"
                          fullWidth
                          startIcon={<CloudUploadIcon />}
                        >
                          {file ? file.name : "Upload PDF (up to 2024MB)"}
                          <input
                            type="file"
                            hidden
                            accept="application/pdf"
                            onChange={handleFileChange}
                          />
                        </Button>
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>

                  {success && (
                    <Typography
                      color="success.main"
                      sx={{ mt: 2, textAlign: "center" }}
                    >
                      Your message has been received!
                    </Typography>
                  )}
                </Paper>
              </Box>
            </Grid>

            {/* RIGHT COLUMN - TEXT */}
            <Grid item xs={12} md={6}>
              <Box sx={{ color: "white", maxWidth: 600, mx: "auto" }}>
                <Typography variant="h6">HOW IT WORKS:</Typography>

                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  1. SEND US YOUR PROJECT:
                </Typography>
                <ul>
                  <li >Upload PDFs to our website uploader</li>
                  <li>
                    Email files to{" "}
                    <a
                      href="mailto:projects@takeoffmonkey.com"
                      style={{ color: "#00E676" }}
                    >
                      projects@takeoffmonkey.com
                    </a>
                  </li>
                  <li>
                    Forward an ITB to{" "}
                    <a
                      href="mailto:projects@takeoffmonkey.com"
                      style={{ color: "#00E676" }}
                    >
                      projects@takeoffmonkey.com
                    </a>
                  </li>
                </ul>

                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  2. WE CONFIRM YOUR PROJECT:
                </Typography>
                <ul>
                  <li>
                    Your project is received, reviewed, and entered into production
                  </li>
                  <li>Our team executes and performs an initial review</li>
                  <li>Two Senior Estimators peer-review the project</li>
                  <li>Your completed work is placed in a private link</li>
                </ul>

                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  3. YOU RECEIVE YOUR PROJECT:
                </Typography>
                <ul>
                  <li>
                    A link to the completed project is shared via email (before
                    noon CST)
                  </li>
                  <li>
                    Turnaround: 48 hrs for takeoffs, 75 hrs for irrigation design
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />


    </>
  )
}
