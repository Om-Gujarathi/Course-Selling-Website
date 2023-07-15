import { useParams } from "react-router-dom";
function EditCourse() {
  const { courseId } = useParams();
  return <div>{courseId}</div>;
}

export default EditCourse;
