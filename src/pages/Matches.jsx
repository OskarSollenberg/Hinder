import { useContext } from "react";
import { ContextProvider } from "../context/context";
import { Link } from "react-router-dom";

function Matches() {
  const { matches } = useContext(ContextProvider);

  return (
    <div className="relative overflow-hidden w-screen p-10">
      <h1 className="text-3xl font-bold ">Your Matches</h1>
      <Link to="/mainpage">
        <button className="w-full my-5 py-2 bg-pink-500 max-w-[15rem] shadow-small text-white font-semibold rounded-lg hover:bg-[#ff6a7b] hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-[#660066] focus:ring-opacity-50 transition-all duration-300 ease-in-out">
          GO BACK HOME
        </button>
      </Link>

      <div className="w-screen flex flex-col text-center">
        <div className=" flex flex-wrap">
          {matches.length > 0 ? (
            matches.map((user, index) => {
              return (
                <div
                  key={index}
                  className={`w-56 h-76 m-3 rounded-xl overflow-hidden relative group cursor-pointer flex hover:shadow-medium`}
                  onClick={() => {
                    handleImageClick(user);
                  }}
                >
                  <img
                    src={user.image}
                    alt={`Picture ${user.name}`}
                    className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105 "
                  />
                  <div className="absolute inset-x-3 bottom-1">
                    <p className="text-white font-semibold">{user.name}</p>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
                </div>
              );
            })
          ) : (
            <div>You don't have any matches yet! ❤️‍🔥</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Matches;
