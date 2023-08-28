import { useNavigate } from "react-router-dom";

export const HandleRowSelection = (event: any) => {
  const navigate = useNavigate();
  navigate(`/table/user?id=${event.id}`);
};
