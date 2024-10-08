import { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const SignUp = () => {
  const [isUserNameActive, setIsUserNameActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [isUserName, setIsUserName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isSignInForm, setisSignInForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleForm = () => {
    setisSignInForm(false);
    setErrorMsg(null);
  };
  const handleSignIn = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrorMsg(message);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg')] bg-cover bg-center h-[85vh]">
      <div className="bg-custom-gradient h-full relative">
        <Header
          SignInOption={!isSignInForm}
          setSignInOption={setisSignInForm}
          setErrorMsg={setErrorMsg}
          LogOutOption={false}
        />
        {/* Login/SignUp section */}
        <div className="h-[85%] flex items-center justify-center">
          {isSignInForm ? (
            <div
              className={`text-white flex flex-col gap-7 justify-between py-14 w-[23%] bg-black bg-opacity-70 px-14 rounded-lg ${
                errorMsg && "outline-[1px] outline-dashed outline-red-600"
              }`}
            >
              <h1 className="text-4xl font-bold text-left">Sign In</h1>
              <form
                className="w-full flex flex-col gap-6 h-[80%] mt-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  ref={email}
                  className={`py-4 border rounded-md px-4 bg-slate-600 bg-opacity-20`}
                  type="text"
                  placeholder="Email address"
                />
                <input
                  ref={password}
                  className="py-4 px-4 border rounded-md bg-slate-600 bg-opacity-20"
                  type="password"
                  placeholder="Password"
                />
                {errorMsg && (
                  <p className="text-red-600 font-normal pt-2">{errorMsg}</p>
                )}

                <button
                  className="bg-custom-red py-2 font-medium w-full rounded-md mt-4 hover:scale-x-[0.97] active:scale-100 transition-all duration-300"
                  onClick={handleSignIn}
                >
                  SignIn
                </button>
              </form>
              <div>
                <span className="text-custom-gray">New to Netflix?</span>
                <span
                  className="font-semibold pl-2 cursor-pointer"
                  onClick={handleForm}
                >
                  Sign up now.
                </span>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-white flex flex-col items-center  space-y-6">
                <h1 className="text-5xl font-bold">
                  Unlimited movies, TV shows and more
                </h1>
                <h3 className="text-2xl">Watch anywhere. Cancel anytime.</h3>
                <p className="text-xl">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className={`flex flex-col items-center gap-6 p-4 rounded-lg ${
                    errorMsg && "outline-[1px] outline-double outline-red-600"
                  }`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`relative border border-slate-400 rounded-md w-64 ${
                        isUserNameActive
                          ? "bg-custom-input"
                          : "bg-black bg-opacity-30"
                      } transition-all duration-300 px-1`}
                    >
                      <div
                        className={`absolute left-3 h-4 ${
                          isUserNameActive
                            ? "top-0 text-custom-gray text-sm"
                            : "top-[25%]"
                        }  transition-all transform duration-150`}
                      >
                        Username
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-2 mt-3 bg-transparent outline-none w-[100%]"
                          onFocus={() => setIsUserNameActive(true)}
                          onChange={(e) => setIsUserName(e.target.value)}
                          onBlur={() =>
                            isUserName
                              ? setIsUserNameActive(true)
                              : setIsUserNameActive(false)
                          }
                        />
                      </div>
                    </div>
                    <div
                      className={`relative border border-slate-400 rounded-md w-64 ${
                        isEmailActive
                          ? "bg-custom-input"
                          : "bg-black bg-opacity-30"
                      } transition-all duration-300 px-1`}
                    >
                      <div
                        className={`absolute left-3 h-4 ${
                          isEmailActive
                            ? "top-0 text-custom-gray text-sm"
                            : "top-[25%]"
                        }  transition-all transform duration-150`}
                      >
                        Email address
                      </div>
                      <div>
                        <input
                          ref={email}
                          type="text"
                          className="p-2 mt-3 bg-transparent outline-none w-[100%]"
                          onFocus={() => setIsEmailActive(true)}
                          // {isFilled && onBlur={() => setIsActive(false)}}
                          onChange={(e) => setIsEmail(e.target.value)}
                          onBlur={() =>
                            isEmail
                              ? setIsEmailActive(true)
                              : setIsEmailActive(false)
                          }
                        />
                      </div>
                    </div>
                    <div
                      className={`relative border border-slate-400 rounded-md w-64 ${
                        isPasswordActive
                          ? "bg-custom-input"
                          : "bg-black bg-opacity-20"
                      } transition-all duration-300 px-1`}
                    >
                      <div
                        className={`absolute left-3 h-4 ${
                          isPasswordActive
                            ? "top-0 text-custom-gray text-sm"
                            : "top-[25%]"
                        }  transition-all transform duration-150`}
                      >
                        Password
                      </div>
                      <div>
                        <input
                          ref={password}
                          type="password"
                          className="p-2 mt-3 bg-transparent outline-none w-[100%]"
                          onFocus={() => setIsPasswordActive(true)}
                          // {isFilled && onBlur={() => setIsActive(false)}}
                          onChange={(e) => setIsPassword(e.target.value)}
                          onBlur={() =>
                            isPassword
                              ? setIsPasswordActive(true)
                              : setIsPasswordActive(false)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {errorMsg && (
                    <p className="text-lg text-red-600 font-medium">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    className="w-[30%] py-2 bg-custom-red text-white text-xl font-medium rounded-md hover:scale-x-[0.97] active:scale-x-95 transition-all duration-300"
                    onClick={handleSignIn}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 h-3 w-full bg-[rgb(35,35,35)]"></div>
      </div>
      {/* Section 1 */}
      <div className="flex h-[65vh] bg-black text-white relative">
        <div className=" flex items-center w-[60%] mx-auto">
          <div className="max-w-[50%] flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Enjoy on your TV</h1>
            <p className="text-[1.5rem] font-normal">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
              className="block w-auto relative z-20"
            />
            <div>
              <video
                className="absolute top-[50%] left-[50%] transform -translate-x-[51%] -translate-y-[54%]"
                width="416"
                autoPlay
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-3 w-full bg-[rgb(35,35,35)]"></div>
      </div>
      {/* Section 2 */}
      <div className="flex h-[65vh] bg-black text-white relative">
        <div className="flex items-center w-[60%] mx-auto">
          <div className="relative">
            <img
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <div className=" flex items-center rounded-lg border p-2 gap-6 w-[70%] absolute bottom-[8%] left-[15%] bg-black">
              <div>
                <img
                  className="h-20"
                  alt=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
              </div>
              <div>
                <div className="text-white">Stranger Things</div>
                <div className="text-blue-800">Downloading...</div>
              </div>
            </div>
          </div>
          <div className="max-w-[50%] flex flex-col gap-4">
            <h1 className="text-5xl font-bold">
              Download your shows to watch offline
            </h1>
            <p className="text-[1.5rem] font-normal">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 h-3 w-full bg-[rgb(35,35,35)]"></div>
      </div>
      {/* Section 3 */}
      <div className="flex h-[65vh] bg-black text-white relative">
        <div className=" flex items-center w-[60%] mx-auto">
          <div className="max-w-[50%] flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Watch everywhere</h1>
            <p className="text-[1.5rem] font-normal">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt=""
              className="block w-auto relative z-10"
            />
            <div>
              <video
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[85%] w-[65%]"
                autoPlay
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-3 w-full bg-[rgb(35,35,35)]"></div>
      </div>
      {/* Secction 4 */}
      <div className="bg-black h-[65vh] flex items-center text-white relative">
        <div className="w-[65%] mx-auto flex items-center">
          <div>
            <img
              src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
              alt=""
            />
          </div>
          <div className="max-w-[50%]">
            <h1 className="text-5xl font-bold">Create profiles for kids</h1>
            <p className="text-[1.5rem] font-normal">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 h-3 w-full bg-[rgb(35,35,35)]"></div>
      </div>
    </div>
  );
};

export default SignUp;
