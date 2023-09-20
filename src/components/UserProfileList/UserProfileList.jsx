import UserProfileCard from "../UserProfileCard/UserProfileCard";

const UserProfileList = () => {
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      coverPhoto: "https://via.placeholder.com/800x200", // Example cover photo URL
      profilePhoto: "https://via.placeholder.com/150", // Example profile photo URL
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      coverPhoto: "https://via.placeholder.com/800x200", // Example cover photo URL
      profilePhoto: "https://via.placeholder.com/150", // Example profile photo URL
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      coverPhoto: "https://via.placeholder.com/800x200", // Example cover photo URL
      profilePhoto: "https://via.placeholder.com/150", // Example profile photo URL
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      coverPhoto: "https://via.placeholder.com/800x200", // Example cover photo URL
      profilePhoto: "https://via.placeholder.com/150", // Example profile photo URL
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      coverPhoto: "https://via.placeholder.com/800x200", // Example cover photo URL
      profilePhoto: "https://via.placeholder.com/150", // Example profile photo URL
    },
    // Add more user objects here
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-6">
      {users.map((user, index) => (
        <UserProfileCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserProfileList;
