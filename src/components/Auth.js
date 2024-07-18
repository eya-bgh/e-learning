import React, { useState } from 'react';
import signup from '../assets/signup.png';
import signin from '../assets/signin.png';
import { useNavigate } from 'react-router-dom';

const Auth = ({ showModal, onClose, openSignIn }) => {
  const navigate = useNavigate();

  if (!showModal) {
    return null;
  }

  const handleSignUpClick = () => {
    
    navigate('/profile');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-slate-600 shadow-md rounded-none flex max-w-2xl w-full relative z-10">
        {/* Left Side */}
        <div className="w-1/2 bg-cover p-8" style={{ backgroundImage: `url(${signup})` }}>
          <h2 className="font-caprasimo font-thin text-3xl mt-[30%] mb-[20%] text-white text-center">
            Already <br /> have an <br /> account
          </h2>
          <p className="font-montserrat text-xs text-center mt-[24%] mb-[20%] text-white tracking-wide relative z-10">
            Login with your account and <br /> access your courses, mentors <br /> and more!
          </p>
          <button
            className="relative w-48 h-8 py-1 px-3 border mt-2 ml-10 border-black text-black font-semibold bg-white flex items-center justify-center"
            onClick={openSignIn}
          >
            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-yellow z-0"></span>
            <span className="absolute inset-0 border border-black bg-white z-10"></span>
            <span className="relative z-20 font-caprasimo text-xl font-normal">Sign In</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-white">
          <h2 className="text-5xl font-caprasimo mb-2">Sign Up</h2>
          <p className="text-sm font-caprasimo mt-2 ml-10">with</p>
          <div className="flex space-x-4 mb-4">
            <button className="relative w-32 h-8 py-1 px-3 border mt-2 ml-8 border-black text-black font-semibold bg-white">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-inter text-sm flex items-center justify-center">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2 w-5" />Gmail
              </span>
            </button>
            <button className="relative w-28 h-8 py-1 px-3 border mt-2 mr-2 border-black text-black font-semibold bg-white">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-inter text-sm flex items-center justify-center">
                <img src="https://img.icons8.com/color/16/000000/facebook.png" alt="Facebook" className="mr-2 w-5" />Facebook
              </span>
            </button>
          </div>
          <p className="text-sm font-caprasimo mb-7 ml-10">Or</p>
          <form className="w-full max-w-xs ml-10 -mt-10">
            <div className="mb-4">
              <input type="text" placeholder="Full Name" className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 mt-8 ml-8 text-xs font-montserrat" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="E-mail address" className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Password" className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Confirm password" className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat" />
            </div>
            <div className="mb-4">
              <input type="tel" placeholder="Phone number (+216)" className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat" />
            </div>
            <div className="mb-4 flex items-center ml-8">
              <input type="checkbox" className="mr-2 w-6 h-4" />
              <p className="text-xs font-inter">
                I understand and agree to the <button className="text-purp">Terms and privacy conditions</button>
              </p>
            </div>
            <button
              className="relative w-48 h-8 py-1 px-3 border mt-2 ml-8 border-black text-black font-semibold bg-white flex items-center justify-center"
              onClick={handleSignUpClick}
            >
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-caprasimo text-xl font-normal">Sign Up</span>
            </button>
          </form>
          <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl font-bold">X</button>
        </div>
      </div>
    </div>
  );
};

const SignIn = ({ showModal, onClose, openSignUp }) => {
  const navigate = useNavigate();

  if (!showModal) {
    return null;
  }

  const handleSignInClick = () => {
    // Add your sign-in logic here
    navigate('/profile'); // Navigate to profile page after sign-in
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-slate-600 shadow-md rounded-none flex max-w-2xl w-full relative z-10">
        {/* Left Side */}
        <div className="w-1/2 bg-cover p-8" style={{ backgroundImage: `url(${signin})` }}>
          <h2 className="font-caprasimo font-thin text-3xl mt-[30%] mb-[20%] text-white text-center">
            Don't have an <br /> account?
          </h2>
          <p className="font-montserrat text-xs text-center mt-[24%] mb-[20%] text-white tracking-wide relative z-10">
            Sign up with your account and <br /> access your courses, mentors <br /> and more!
          </p>
          <button
            className="relative w-48 h-8 py-1 px-3 border mt-2 ml-10 border-black text-black font-semibold bg-white flex items-center justify-center"
            onClick={openSignUp}
          >
            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
            <span className="absolute inset-0 border border-black bg-white z-10"></span>
            <span className="relative z-20 font-caprasimo text-xl font-normal">Sign Up</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-white">
          <h2 className="text-5xl font-caprasimo mb-11 mr-7">Sign In</h2>
          <form className="w-full max-w-xs ml-4 -mt-10">
            <div className="mb-4">
              <input type="text" placeholder="E-mail address" className="border p-2 border-gray-400 shadow-shdInset h-10 w-48 mt-8 ml-8 text-xs font-montserrat" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Password" className="border p-2 border-gray-400 shadow-shdInset h-10 w-48 ml-8 text-xs font-montserrat" />
              
            </div>
            <div>
              <p className="text-darkblue font-montserrat text-xs -mt-3 ml-36">Forgot password?</p>
            </div>
            <button
              className="relative w-48 h-8 py-2 px-3 border mt-8 ml-8 border-black text-black font-semibold bg-white flex items-center justify-center"
              onClick={handleSignInClick}
            >
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-yellow z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-caprasimo text-2xl font-normal">Sign In</span>
            </button>
          </form>
          <p className="text-sm font-caprasimo mt-4 ml-2">Or use</p>
          <div className="flex space-x-4 mb-4">
            <button className="relative w-32 h-8 py-1 px-3 border mt-2 ml-2 border-black text-black font-semibold bg-white">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-yellow z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-inter text-sm flex items-center justify-center">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2 w-5" />Gmail
              </span>
            </button>
            <button className="relative w-28 h-8 py-1 px-3 border mt-2 mr-2 border-black text-black font-semibold bg-white">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-yellow z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-inter text-sm flex items-center justify-center">
                <img src="https://img.icons8.com/color/16/000000/facebook.png" alt="Facebook" className="mr-2 w-5" />Facebook
              </span>
            </button>
          </div>
          <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl font-bold">X</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  const closeSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className="App">
      <button onClick={openSignIn} className="relative h-10 w-36 py-1 px-3 border mt-2 ml-28 border-black text-black font-semibold bg-white">
        <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
        <span className="absolute inset-0 border border-black bg-white z-10"></span>
        <span className="relative z-20 font-caprasimo text-[26px] font-normal">Login</span>
      </button>
      
      <Auth showModal={showSignUp} onClose={closeSignUp} openSignIn={openSignIn} />
      <SignIn showModal={showSignIn} onClose={closeSignIn} openSignUp={openSignUp} />
    </div>
  );
};

export default App;
