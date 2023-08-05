import Axios from "@/_services/caller.service";

let getAllUser = () => {
  return Axios.get("/users");
};

// let getUser = () => {
//   return Axios.get("/users/" + uid);
// };

export const userService = { getAllUser }; 
