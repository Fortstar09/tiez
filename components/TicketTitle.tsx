import React from "react";

const TicketTitle = () => {
  return (
    <div className="ticket-bg p-6 border-x border-b rounded-[24px] md:max-w-full  border-[#07373F] ">
      <div className="flex flex-col md:justify-center md:items-center gap-2 ">
        <h1 className="road text-5xl md:text-[62px]  leading-none text-grey font-normal">
          Techember Fest ”25
        </h1>
        <p className="text-center max-w-[239px] md:max-w-[340px] text-base leading-nomral text-grey font-normal roboto">
          Join us for an unforgettable experience at BintoMap! Secure your
          spot now.
        </p>
        <div className="flex gap-2 flex-col md:flex-row mt-8  text-grey roboto leading-normal text-base text-center mb-[2px]">
          <p>📍 04 Rumens road, Ikoyi, Lagos</p>
          <p className="hidden md:flex">| |</p>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default TicketTitle;
