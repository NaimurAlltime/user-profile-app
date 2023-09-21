const UserProfileDetail = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="md:flex items-center gap-12  bg-white rounded-lg overflow-hidden shadow-lg p-2 md:p-5">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Cover Photo */}
          <img
            src="https://img.freepik.com/free-photo/young-hispanic-male-model-wearing-blue-shirt-black-jacket-posing-near-stone-wall_181624-34763.jpg?size=626&ext=jpg&ga=GA1.1.209329912.1680195530&semt=ais"
            alt="Cover"
            className="w-full h-[200px] md:h-[270px] object-cover"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex items-center gap-2 font-semibold text-gray-700 text-xl">
            <img src="/card.png" className="h-5" alt="" />
            <h4>Name: Naimur Rahman</h4>
          </div>
          <div className="flex items-center gap-2 font-medium text-lg text-gray-700 mt-1">
            <img src="/gmail.png" className="h-5" alt="" />
            <p>Email: naim22315@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 font-medium text-lg text-gray-700 mt-1">
            <img src="/phone-call.png" className="h-5" alt="" />
            <p>Phone: +01983835382</p>
          </div>
          <div className="flex items-center gap-2 font-medium text-lg text-gray-700 mt-1">
            <img src="/mortarboard.png" className="h-5" alt="" />
            <p>Education: BSc in Computer Science and Engineering</p>
          </div>
          <div className="flex items-center gap-2 font-medium text-lg text-gray-700 mt-1">
            <img src="/couple.png" className="h-5" alt="" />
            <p>Married Status: Single</p>
          </div>
          <div className="flex items-center gap-2 font-medium text-lg text-gray-700 mt-1">
            <img src="/policeman.png" className="h-5" alt="" />
            <p>Profession: Full Stack Developer</p>
          </div>
          <div className="flex items-center gap-2 font-medium text-lg text-gray-700 mt-1">
            <img src="/map.png" className="h-5" alt="" />
            <p>Location: Konabari, Gazipur, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetail;
