import { useNavigate } from "react-router-dom";

/**
 * Helper function to navigate to new url with user id
 * @param event
 */
export const HandleRowSelection = (event: any) => {
  const navigate = useNavigate();
  navigate(`/table/user?id=${event.id}`);
};
