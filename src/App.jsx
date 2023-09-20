import "./App.css";
import UserProfileList from "./components/UserProfileList/UserProfileList";

function App() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <img src="/user-profile-logo.png" alt="user profile" />
          <h2 className="text-3xl font-semibold text-center ml-1">
            User Profile App
          </h2>
        </div>
        <div className="border-t-2 border-gray-600 mx-auto w-72"></div>
        <div>
          <UserProfileList />
        </div>
      </div>
    </>
  );
}

export default App;
