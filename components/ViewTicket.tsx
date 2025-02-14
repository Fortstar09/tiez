import React from "react";
import StepTitle from "./StepTitle";
import Image from "next/image";

interface ViewTicketProps {
  step: number;
  setStep: (step: number) => void;
}

const ViewTicket: React.FC<ViewTicketProps> = ({ step, setStep }) => {
  return (
    <div className="flex justify-between flex-col gap-8">
      <StepTitle step={step} />
      <div className="flex flex-col roboto text-white gap-4 text-center">
        <h1 className="text-[32px] font-normal">Your Ticket is Booked!</h1>
        <p className="text-base">
          Check your email for a copy or you can download
        </p>
      </div>
      <div className="flex justify-center items-center px-[152px] py-[32px]">
        <div className="relative">
          <Image
            src="/images/TICKET.svg"
            width={300}
            height={600}
            alt="ticket"
            className="w-full"
          />
          <div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col p-[20px] items-center justify-center gap-5 border border-[#24A0B5] rounded-2xl">
              <div className="flex flex-col gap-1 items-center justify-center">
                <h1 className="road text-[34px] text-center leading-none text-grey font-normal">
                  Techember Fest ”25
                </h1>
                <div className="flex flex-col gap-1 justify-center text-grey roboto leading-normal text-[10px] items-center mb-[2px]">
                  <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p>March 15, 2025 | 7:00 PM</p>
                </div>
              </div>
                          <div className="w-[140px] h-[140px] bg-orange-600 border-4 border-[#24A0B5]/50 rounded-xl"></div>
                          <div>
                              
                          </div>
            </div>
            <Image
              src="icons/Bar code.svg"
              width={236}
              height={68}
              className="absolute bottom-4 left-8"
              alt="barcode"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button
          className="py-3 bg-transparent border flex  justify-center items-center w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] text-base leading-normal font-normal"
          onClick={() => setStep(1)}
        >
          Book Another Ticket
        </button>
        <button
          type="submit"
          className="py-3 flex justify-center items-center w-full text-white bg-[#24A0B5]  rounded-[8px] text-base leading-normal font-normal"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default ViewTicket;
