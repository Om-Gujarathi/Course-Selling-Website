import { useState } from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {courses.map((course) => {
        return <CourseCard course={course} key={course._id}></CourseCard>;
      })}
    </div>
  );
}

function CourseCard(props) {
  return (
    <Card sx={{ minWidth: 300, margin: 5 }}>
      <CardActionArea onClick={() => {}}>
        <CardMedia
          component="img"
          sx={{ height: 250, maxWidth: 300 }}
          image={props.course.imageLink}
          title={props.course.title}
          alt="Course Image"
        />
        <CardContent>
          <Typography variant="h5" align="center">
            {props.course.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Courses;
