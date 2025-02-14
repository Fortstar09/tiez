import React from "react";

const TicketTitle = () => {
  return (
    <div className="ticket-bg p-6 border-x border-b rounded-[24px] border-[#07373F] ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="road text-[62px] leading-none text-grey font-normal">
          Techember Fest ”25
        </h1>
        <p className="text-center max-w-[340px] text-base leading-nomral text-grey font-normal roboto">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <div className="flex gap-2 justify-center text-grey roboto leading-normal text-base items-center mb-[2px]">
          <p>📍 04 Rumens road, Ikoyi, Lagos</p>
          <p>| |</p>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default TicketTitle;
