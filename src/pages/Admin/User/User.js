import React, { useEffect, useState } from "react";
import PageTitle from "@/components/admin/PageTitle";
import { userService } from "@/_services/users.service";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAllUser()
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <PageTitle title="Utilisateur" subtitle1="List" />
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Noms</th>
            <th scope="col">Prenoms</th>
            <th scope="col">Emails</th>
            <th scope="col">Date de creation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
