import React from "react";

const StatsComponent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-row-reverse p-6 m-auto items-center justify-center h-screen bg-[#090b1a]">
        <div className="relative">
          <img
            src="./image-header-mobile.jpg"
            alt=""
            className="w-full h-full object-cover md:w-[300px] md:h-[243px] md:block md:rounded-r-md"
          />
          <div className="absolute inset-0 bg-[#aa5cdb] md:rounded-r-md opacity-50"></div>

          {/* <img src="" alt="" /> */}
        </div>

        <div className="bg-[#1b1938] md:rounded-l-md flex flex-col p-6 gap-3 w-full md:w-[400px]">
          {/* title */}
          <div className=" text-white text-2xl font-bold text-center font-lexend ">
            <p className="md:hidden">
              Get
              <span className="text-[#aa5cdb]"> insights </span>
              that <br />
              help your business <br />
              grow.
            </p>

            <p className="sm: hidden md:block md:text-start">
              Get
              <span className="text-[#aa5cdb]"> insights </span>
              that help <br />
              your business grow.
            </p>
          </div>

          {/* paragraph */}

          <p className="md:hidden block text-sm text-[#ffffffbf] text-center text-custom font-inter md:text-start">
            Discover the benefits of data <br />
            analytics and make better decisions <br />
            regarding revenue, customer <br />
            experience, and overall efficiency.
          </p>
          <p className="sm: hidden md:block text-sm text-[#ffffffbf] text-center text-custom font-inter md:text-start">
            Discover the benefits of data analytics and make <br />
            better decisions regarding revenue, customer <br />
            experience, and overall efficiency.
          </p>

          {/* stats */}

          <div className="flex flex-col gap-3 text-white items-center justify-center md:justify-start md:flex-row ">
            <div className="flex flex-col items-center md:items-start justify-center">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-xs font-inter text-[#ffffff99] uppercase">
                C&nbsp;o&nbsp;m&nbsp;p&nbsp;a&nbsp;n&nbsp;i&nbsp;e&nbsp;s
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start justify-center">
              <p className="text-2xl font-bold">314</p>
              <p className="text-xs font-inter text-[#ffffff99] uppercase">
                T&nbsp;e&nbsp;m&nbsp;p&nbsp;l&nbsp;a&nbsp;t&nbsp;e&nbsp;s
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start justify-center">
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
