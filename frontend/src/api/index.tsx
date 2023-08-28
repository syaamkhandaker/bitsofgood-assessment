import axios from "axios";

export const getUsers = async () => {
  const request = await axios.get("http://localhost:5000/api/bog/users");
  return request;
};

export const getUser = async (id: any) => {
  const request = await axios.get(`http://localhost:5000/api/bog/users${id}`);
  return request;
};

export const deleteUser = async (id: any) => {
  const request = await axios.delete(
    `http://localhost:5000/api/bog/users/${id}`
  );
  return request;
};

export const editUser = async (params: any) => {
  const id = params.id;
  const { name, avatar, hero_project, notes, email, phone, rating, status } =
    params.row;
  const request = await axios.put(
    `http://localhost:5000/api/bog/users/${id}?name=${name}&avatar=${avatar}&hero_project=${hero_project}&notes=${notes}&email=${email}&phone=${phone}&rating=${rating}&status=${status}`
  );
  return request;
};

export const saveUser = async (params: any) => {
  const id = params.id;
  const { name, avatar, hero_project, email, phone, rating, status } =
    params.row;
  const request = await axios.post(
    `http://localhost:5000/api/bog/users/${id}?name=${name}&avatar=${avatar}&hero_project=${hero_project}&notes=&email=${email}&phone=${phone}&rating=${rating}&status=${status}`
  );
  return request;
};
