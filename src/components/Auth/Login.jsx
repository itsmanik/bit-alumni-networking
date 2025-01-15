import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Both username and password are required");
      return;
    }
    try {
      const response = await axiosInstance.post("/api/login", {
        username,
        password,
      });

      const { access_token } = response.data;
      localStorage.setItem("jwtToken", access_token);

      navigate(`/signup/${params.id}`);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex border border-gray-300 shadow-md text-gray-800 flex-col max-w-md min-w-[25rem] px-10 pt-7 pb-5 rounded-md sm:px-10 bg-white">
        <div className="mb-8 text-center">
          <h1 className="my-1 text-4xl font-bold text-[#3A843A]">Log In</h1>
          <p className="text-sm text-gray-600">Log into your account</p>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form noValidate onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm text-gray-700">
                Enter Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="jenkins"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3A843A]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm text-gray-700">
                Enter Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3A843A]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-[#3A843A] text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Log In
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                rel="noopener noreferrer"
                to={"/signup"}
                className="hover:underline text-[#3A843A] font-semibold"
              >
                Sign Up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
