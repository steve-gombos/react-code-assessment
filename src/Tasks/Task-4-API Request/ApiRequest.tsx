import { useState, useEffect } from "react";
import { User } from "./User";

export const ApiRequest: React.FC = () => {
  const [users, setUsers] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <div title="totalUsers">Total Users: </div>
    </>
  );
};
