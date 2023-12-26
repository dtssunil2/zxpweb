import React from "react";

const Team = () => {
  return (
    <>
      <div className="flex flex-wrap mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem]  bg-white m-5">
            <div className="flex-auto block py-8 px-9">
              <div>
                <div className="mb-9">
                  <h1 className="mb-2 text-[1.75rem] text-blue-500 font-semibold text-dark">
                    Our Executive Team
                  </h1>
                  <span className="text-[1.15rem] font-medium text-muted">
                    {" "}
                    Meet our talented team, a dynamic group of experts driven by
                    passion and innovation.{" "}
                  </span>
                </div>
                <div className="flex flex-wrap justify-between w-full">
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <img
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://www.zuehlke.com/sites/default/files/images/pavlina-eskidarova-zuehlke.jpg"
                        alt="avarat image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Samantha Reynolds
                      </a>
                      <span className="block font-medium text-muted">
                        Marketing Manager
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <img
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://assets.website-files.com/636b968ac38dd1495ec4edcd/63c97f9c86d126510abef78e_in-trees_Andrii%20AI%20photo%20avatar%20Dyvo.webp"
                        alt="avarat image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Benjamin Martinez
                      </a>
                      <span className="block font-medium text-muted">
                        Sales Executive
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <img
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://10pearls.com/wp-content/uploads/2023/03/UI-UX-Designer.png"
                        alt="avarat image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Emily Turner
                      </a>
                      <span className="block font-medium text-muted">
                        Customer Support
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <img
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJUx5pihv1JueEnNyL1b6C7kH2K0PVGwA0g&usqp=CAU"
                        alt="avarat image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Divya T
                      </a>
                      <span className="block font-medium text-muted">
                        Development Engineer
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                      <img
                        className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                        src="https://cdn.theorg.com/dfba1bc1-4260-4061-92db-b0e7ced57d32_medium.jpg"
                        alt="avarat image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Olivia Carter
                      </a>
                      <span className="block font-medium text-muted">
                        Creative Director
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
