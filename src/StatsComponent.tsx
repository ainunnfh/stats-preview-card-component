import React from "react";

const StatsComponent = () => {
  return (
    <>
      <div className="flex flex-col p-6 m-auto items-center justify-center h-screen bg-[#090b1a]">
        <div className="relative">
          <img
            src="./image-header-mobile.jpg"
            alt=""
            className="w-full h-full object-cover rounded-t-md"
          />
          <div className="absolute inset-0 bg-[#aa5cdb] rounded-t-md opacity-50"></div>
        </div>

        <div className="bg-[#1b1938] rounded-b-md flex flex-col p-6 gap-3 w-full">
          {/* title */}
          <div className="text-white text-2xl font-bold text-center font-lexend ">
            <p>
              Get
              <span className="text-[#aa5cdb] whitespace-pre"> insights </span>
              that <br />
              help your business <br />
              grow.
            </p>
          </div>

          {/* paragraph */}

          <p className="text-sm text-[#ffffffbf] text-center text-custom font-inter">
            Discover the benefits of data <br />
            analytics and make better decisions <br />
            regarding revenue, customer <br />
            experience, and overall efficiency.
          </p>

          {/* stats */}

          <div className="flex flex-col gap-3 text-white items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-xs font-inter text-[#ffffff99] uppercase">
                C&nbsp;o&nbsp;m&nbsp;p&nbsp;a&nbsp;n&nbsp;i&nbsp;e&nbsp;s
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">314</p>
              <p className="text-xs font-inter text-[#ffffff99] uppercase">
                T&nbsp;e&nbsp;m&nbsp;p&nbsp;l&nbsp;a&nbsp;t&nbsp;e&nbsp;s
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">12M</p>
              <p className="text-xs font-inter text-[#ffffff99] uppercase">
                Q&nbsp;u&nbsp;e&nbsp;r&nbsp;i&nbsp;e&nbsp;s
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsComponent;
