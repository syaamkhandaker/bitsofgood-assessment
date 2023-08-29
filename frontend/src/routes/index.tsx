import { Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import Home from "../components/Home";
import Table from "../containers/Table";
import Error from "../components/ErrorPage";
import UserPage from "../containers/User";
import { getUsers } from "../api";
import { useEffect, useState } from "react";
import { Images } from "../assets";

export default function RoutesContainer() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const response = await getUsers();

      if (!response) {
        navigate("/error");
      }
      setUsers(response.data);
      const visits: any = {};
      if (!localStorage.getItem("visits")) {
        for (let x in response.data) {
          visits[response.data[x].id] = 0;
        }
        localStorage.setItem("visits", JSON.stringify(visits));
      }
      setLoading(false);
    };
    init();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex justify-center mt-10">
          <div className="w-full h-screen flex justify-center mt-10">
            <img src={Images.Loading} className="w-20 h-20" alt="" />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/table" element={<Table data={users} />}></Route>
          <Route path="/table/user" element={<UserPage data={users} />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
}
