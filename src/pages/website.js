import React, { useState } from 'react';
import Header from '../components/SideBar';
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Website = () => {
  const navigate = useNavigate();

  const GetStarted = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white text-primary-color font-lato h-screen"> {/* Added h-screen */}
    <div>
      <Header/>
    </div>
    <div className="w-full flex flex-col items-center justify-start py-8 px-4 md:px-8 box-border bg-[url('/public/frame-617126@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[64px] text-base-white h-full"> {/* Added h-full */}
      <div className="flex flex-col items-center justify-start gap-4 md:gap-8"> {/* Adjusted gap */}
        <div className="max-w-[90%] md:max-w-[934px] relative leading-[150%] capitalize font-extrabold text-xl md:text-21xl">
          <span>A smart way to manage your</span>
          <span className="text-primary-color"> solar energy usage </span>
        </div>
        <div className="max-w-[90%] md:max-w-[1328px] relative text-5xl leading-[150%] capitalize font-medium mt-1 lg:mt-10">
          Lorem ipsum dolor sit amet consectetur. Blandit tellus netus mollis scelerisque vitae dignissim mi velit. Fermentum fusce nec quam curabitur eget eros enim in ut. Donec cum enim integer urna gravida scelerisque suspendisse fringilla sed. Aliquet ac amet sed.
        </div>
        <div className="flex items-start justify-center md:justify-start"> {/* Adjusted alignment */}
          <div className="w-[200px] rounded-81xl bg-primary-color flex items-center justify-center py-4 px-6 box-border text-xl mt-6 lg:mt-14 cursor-pointer" onClick={GetStarted}> 
            <b className="relative capitalize">Create Account</b>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Website;

