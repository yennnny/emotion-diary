import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {}, []);

  return <div>Edit</div>;
};

export default Edit;
