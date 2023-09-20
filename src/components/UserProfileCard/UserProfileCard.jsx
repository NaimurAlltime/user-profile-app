import { BsArrowRightShort } from "react-icons/bs";

const UserProfileCard = ({ user }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Cover Photo */}
      <img
        src={user.coverPhoto}
        alt="Cover"
        className="w-full h-40 object-cover"
      />

      {/* User Details */}
      <div className="p-4">
        {/* Profile Photo */}
        <div className="flex items-center absolute bottom-[20%] left-[35%] justify-center">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white"
          />
        </div>

        <h2 className="text-xl font-semibold mt-4">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* Details Button */}
      <button className="absolute bottom-4 flex items-center justify-center right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Details
        <BsArrowRightShort className="text-xl  font-medium" />
      </button>
    </div>
  );
};

export default UserProfileCard;
