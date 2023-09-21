import { useEffect, useState } from "react";
import UserProfileCard from "../UserProfileCard/UserProfileCard";

const UserProfileList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("userProfiles.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-6">
      {users.map((user, index) => (
        <UserProfileCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserProfileList;
