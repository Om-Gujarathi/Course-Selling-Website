import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <Typography variant="h6">Coursera</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          style={{
            maxWidth: 100,
            margin: 5,
          }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </Button>

        <Button
          variant="contained"
          style={{
            maxWidth: 100,
            margin: 5,
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
