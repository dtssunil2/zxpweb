import React, { useState } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
const PricingComponent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="bg-white ">
        <div className="container px-28 py-8 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold ">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 ">No Contracts. No surorise fees.</p>
            </div>
            <div className="overflow-hidden p-0.5 mt-6 ">
              <button
                onClick={() => setToggle(false)}
                className={`focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 ${
                  toggle ? "bg-transparent" : "bg-blue-500"
                } rounded-lg hover:bg-gray-200`}
              >
                Monthly
              </button>
              <button
                onClick={() => setToggle(true)}
                className={`focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 ${
                  toggle ? "bg-blue-500" : "bg-transparent"
                } rounded-lg hover:bg-gray-200`}
              >
                Yearly
              </button>
            </div>
          </div>

          {toggle ? (
            <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
                <p className="text-lg font-medium ">Intro</p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $205 <span className="text-base font-normal ">/ Year</span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">All limited links</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleLine className="w-5 h-5 text-gray-400" />
                    <span className="mx-4 ">Own analytics platform</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleLine className="w-5 h-5 text-gray-400" />

                    <span className="mx-4 ">Optimize hashtags</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>

              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
                <p className="text-lg font-medium ">Base</p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $313 <span className="text-base font-normal ">/ Year</span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">All limited links</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Own analytics platform</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Optimize hashtags</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>

              <div className="px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-gray-600">
                <p className="text-lg font-medium text-gray-100">Popular</p>
                <h4 className="mt-2 text-4xl font-semibold text-gray-100">
                  $515{" "}
                  <span className="text-base font-normal text-gray-400">
                    / Year
                  </span>
                </h4>
                <p className="mt-4 text-gray-300">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />
                    <span className="mx-4 text-gray-300">
                      All limited links
                    </span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 text-gray-300">
                      Own analytics platform
                    </span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />
                    <span className="mx-4 text-gray-300">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 text-gray-300">
                      Optimize hashtags
                    </span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 text-gray-300">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>

              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
                <p className="text-lg font-medium ">Exterprise</p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $799 <span className="text-base font-normal ">/ Year</span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">All limited links</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Own analytics platform</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />
                    <span className="mx-4 ">Optimize hashtags</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
                <p className="text-lg font-medium ">Intro</p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $19 <span className="text-base font-normal ">/ Month</span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">All limited links</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Own analytics platform</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Optimize hashtags</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>

              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
                <p className="text-lg font-medium ">Base</p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $39 <span className="text-base font-normal ">/ Month</span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />
                    <span className="mx-4 ">All limited links</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Own analytics platform</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />
                    <span className="mx-4 ">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Optimize hashtags</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>

              <div className="px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-gray-600">
                <p className="text-lg font-medium text-gray-100">Popular</p>
                <h4 className="mt-2 text-4xl font-semibold text-gray-100">
                  $99{" "}
                  <span className="text-base font-normal text-gray-400">
                    / Month
                  </span>
                </h4>
                <p className="mt-4 text-gray-300">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 text-gray-300">
                      All limited links
                    </span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 text-gray-300">
                      Own analytics platform
                    </span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 text-gray-300">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 text-gray-300">
                      Optimize hashtags
                    </span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />
                    <span className="mx-4 text-gray-300">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>

              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
                <p className="text-lg font-medium ">Exterprise</p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $199 <span className="text-base font-normal ">/ Month</span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">All limited links</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Own analytics platform</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Chat support</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Optimize hashtags</span>
                  </div>

                  <div className="flex items-center">
                    <RiCheckboxCircleFill className="w-5 h-5 text-blue-500" />

                    <span className="mx-4 ">Unlimited users</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
