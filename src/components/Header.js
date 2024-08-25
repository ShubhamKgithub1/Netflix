import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = ({
  SignInOption,
  setSignInOption,
  setErrorMsg,
  LogOutOption,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    setSignInOption(true);
    setErrorMsg(null);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div
      className={`flex items-center justify-between px-10 py-2 w-[65%] mx-auto ${
        LogOutOption ? "w-[95vw] " : "bg-transparent"
      }`}
    >
      <img className="w-44" src={LOGO} alt="logo" />
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
              onClick={handleClick}
            >
              Sign In
            </button>
          </div>
        )}
        {LogOutOption && (
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
