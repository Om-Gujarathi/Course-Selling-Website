import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <center>
      <div>
        <div
          style={{
            marginTop: 100,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome back!
          </Typography>
          <Typography variant="h5" gutterBottom>
            Please Log in to continue
          </Typography>
          <br />
        </div>
        <Card
          variant="outlined"
          style={{
            width: 400,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              label="Password"
              variant="outlined"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <Button
              variant="contained"
              style={{
                maxWidth: 100,
              }}
              onClick={() => {
                fetch("http://localhost:3000/admin/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    username: email,
                    password: password,
                  },
                })
                  .then((res) => res.json())
                  .then((data) => {
                    localStorage.setItem("token", data.token);
                  });
              }}
            >
              Log in
            </Button>
          </div>
        </Card>
      </div>
    </center>
  );
}

export default Login;
