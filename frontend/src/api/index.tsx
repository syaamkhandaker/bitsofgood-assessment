import axios from "axios";
/**
 * Returns list of users
 * @returns [users]
 */
export const getUsers = async () => {
  const request = await axios.get("http://localhost:5000/api/bog/users");
  return request;
};

/**
 * returns specific user
 * @param id
 * @returns user
 */
export const getUser = async (id: any) => {
  const request = await axios.get(`http://localhost:5000/api/bog/users${id}`);
  return request;
};
/**
 * Deletes entry within database
 * @param id
 * @returns request
 */
export const deleteUser = async (id: any) => {
  const request = await axios.delete(
    `http://localhost:5000/api/bog/users/${id}`
  );
  return request;
};
/**
 * Edits entry within database
 * @param params
 * @returns new user
 */
export const editUser = async (params: any) => {
  const id = params.id;
  const { name, avatar, hero_project, notes, email, phone, rating, status } =
    params.row;
  const request = await axios.put(
    `http://localhost:5000/api/bog/users/${id}?name=${name}&avatar=${avatar}&hero_project=${hero_project}&notes=${notes}&email=${email}&phone=${phone}&rating=${rating}&status=${status}`
  );
  return request;
};

/**
 * Saves new user to database
 * @param params
 * @returns user
 */
export const saveUser = async (params: any) => {
  const id = params.id;
  const { name, avatar, hero_project, email, phone, rating, status } =
    params.row;
  const request = await axios.post(
    `http://localhost:5000/api/bog/users/${id}?name=${name}&avatar=${avatar}&hero_project=${hero_project}&notes=&email=${email}&phone=${phone}&rating=${rating}&status=${status}`
  );
  return request;
};
