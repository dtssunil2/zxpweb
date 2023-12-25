import React from "react";

const Blog = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Tech Trends
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    The Rise of Edge Computing
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Discover how edge computing is revolutionizing data
                    processing. From reducing latency to enhancing efficiency,
                    we explore the key benefits and implications of this
                    transformative technology.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Gadgets & Gizmos
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {" "}
                    Unveiling the Latest in Wearable Tech
                  </h1>
                  <p className="leading-relaxed mb-3">
                    From smartwatches to health trackers, delve into the hottest
                    trends in wearable technology. Find out how these devices
                    are not just accessories but integral parts of our
                    lifestyle. Now These days these gadgets controls our
                    lifestyle
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Cybersecurity Insights
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Navigating the Cyber Threat Landscape
                  </h1>
                  <p className="leading-relaxed mb-3">
                    In a world increasingly connected, understanding
                    cybersecurity is paramount. Explore the current cyber
                    threats, learn about preventive measures, and stay informed
                    on how to keep your digital world secure.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
