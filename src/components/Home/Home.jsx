import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Main section of the homepage */}
      <section className="text-[#434343] -translate-y-14 h-[100%] lg:overflow-hidden">
        {/* Container for the layout */}
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          
          {/* Left section containing the heading and description */}
          <div className="flex flex-col justify-center p-6 text-center rounded-sm flex-1 lg:text-left">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Career <span className="text-green-600">Growth</span> Through
              Alumni <span className="text-green-600">Mentorship</span> and
              Networking
            </h1>
            
            {/* Subheading/Paragraph explaining the platform */}
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500">
              Connect with alumni for career advice, mentorship, and networking
              opportunities.
              <br className="hidden md:inline lg:hidden" />
            </p>
            
            {/* Call-to-action buttons */}
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              {/* Button for signing up */}
              <Link
                to="/signup"
                className="px-8 py-3 text-lg font-semibold rounded bg-orange-600 text-white hover:bg-orange-700"
              >
                Get Started
              </Link>
              
              {/* Button for exploring alumni */}
              <Link
                to="/explore"
                className="px-8 py-3 text-lg font-semibold border rounded border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Explore Alumni
              </Link>
            </div>
          </div>
          
          {/* Right section containing the logo */}
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/b2/Birsa_Institute_of_Technology_Sindri_logo.png"
              alt="BIT Sindri Logo"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
