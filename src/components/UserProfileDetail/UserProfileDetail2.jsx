const UserProfileDetail = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-6">
      <h2>UserProfileDetail</h2>
      <div className="md:flex gap-5 justify-center items-center">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
          {/* profile Photo */}
          <img
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.209329912.1680195530&semt=ais"
            alt="profile"
            className="w-full h-[400px] object-contain"
          />
        </div>
        {/* profile info */}
        <div>
          <h4>Name: Naimur Rahman</h4>
          <p>Email: naim22315@gmail.com</p>
          <p>Phone: +01983835382</p>
          <p>Profession: Full Stack Developer</p>
          <p>Location: Konabari, Gazipur, Dhaka</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetail;
