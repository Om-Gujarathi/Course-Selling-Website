import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import userState from "../recoil/UserState";
import { useRecoilState } from "recoil";
import API_END_POINT from "../../utility";

function Appbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(userState);

  useEffect(() => {
    axios
      .get(`${API_END_POINT}/admin/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.username) {
          setUsername(res.data.username);
        }
      })
      .catch((err) => {
        setUsername("");
      });
  }, []);
  if (username === null) {
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
          <CircularProgress
            style={{
              margin: 10,
            }}
          />

          <CircularProgress
            style={{
              margin: 10,
            }}
          />
        </div>
      </div>
    );
  }
  if (username === "") {
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
          style={{
            minHeight: 45,
            margin: 5,
          }}
          onClick={() => {
            navigate("/addcourse");
          }}
        >
          Add Course
        </Button>

        <Button
          style={{
            maxWidth: 100,
            margin: 5,
          }}
          onClick={() => {
            navigate("/courses");
          }}
        >
          Courses
        </Button>

        <Button
          variant="contained"
          style={{
            maxWidth: 100,
            margin: 5,
          }}
          onClick={() => {
            localStorage.setItem("token", null);
            navigate("/login");
            setUsername("");
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
