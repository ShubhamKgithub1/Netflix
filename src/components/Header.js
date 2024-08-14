import {useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = ({ SignInOption, setSignInOption , setErrorMsg,LogOutOption}) => {
  const navigate=useNavigate();
  const handleSignIn =()=>{
    setSignInOption(true); setErrorMsg(null);
  };
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  };
  return (
    <div className="flex items-center justify-between bg-transparent px-8 py-2 w-[65%] mx-auto">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div>
        {SignInOption && (
          <div className=" flex items-center space-x-4">
            <select className="bg-black bg-opacity-50 text-white border border-slate-500 px-4 py-[4px] transition-all transform duration-300 rounded-md">
              <option className="bg-white text-black transition-all transform duration-300">
                English
              </option>
              <option className="bg-white text-black transition-all transform duration-300">
                हिन्दी
              </option>
            </select>
            <button
              className="bg-custom-red text-white text-sm px-4 py-[6px] font-semibold rounded-md active:scale-100 hover:scale-x-[0.97] transition-all duration-150"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        )}
        {LogOutOption&&(
          <div>
            <button
              className="bg-custom-red text-white text-sm px-4 py-[6px] font-semibold rounded-md active:scale-100 hover:scale-x-[0.97] transition-all duration-150"
              
            onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
