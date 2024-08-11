import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg')] bg-cover bg-center h-[75vh]">
      <div className="bg-custom-gradient h-full relative">
        <Header />
        <div className="text-white flex flex-col items-center justify-center h-[80%] space-y-6">
          <h1 className="text-5xl font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="text-2xl">Watch anywhere. Cancel anytime.</h3>
          <p className="text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex gap-4">
            <div
              className={`relative border border-slate-400 rounded-md w-96 ${
                isActive ? "bg-custom-input" : "bg-transparent"
              } transition-all duration-300 px-1`}
            >
              <div
                className={`absolute left-3 h-4 ${
                  isActive ? "top-0 text-custom-gray text-sm" : "top-[25%]"
                }  transition-all transform duration-150`}
              >
                Email address
              </div>
              <div>
                <input
                  type="text"
                  className="p-2 mt-3 bg-transparent outline-none w-[100%]"
                  onFocus={() => setIsActive(true)}
                  onBlur={() => setIsActive(false)}
                />
              </div>
            </div>

            <button className="px-6 py-2 bg-[#e50914] text-white text-2xl font-semibold rounded-md">
              Get Started &gt;{" "}
            </button>
          </form>
        </div>
        <div className="absolute bottom-0 h-3 w-[100vw] bg-[rgb(35,35,35)]"></div>
      </div>
    </div>
  );
};

export default Login;
