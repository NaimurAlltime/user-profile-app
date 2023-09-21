import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex justify-center items-center">
          <img src="/user-profile-logo.png" alt="user profile" />
          <h2 className="text-3xl font-semibold text-center ml-1">
            User Profile App
          </h2>
        </div>
      </Link>
      <div className="border-t-2 border-gray-600 mx-auto w-72"></div>
    </div>
  );
};

export default Header;
