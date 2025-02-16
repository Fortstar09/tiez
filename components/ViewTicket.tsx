import React from "react";
import StepTitle from "./StepTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ViewTicketProps {
  step: number;
  setStep: (step: number) => void;
}

const ViewTicket: React.FC<ViewTicketProps> = ({ step, setStep }) => {


  interface TicketInfo {
    imgurl: string;
    name: string;
    email: string;
    ticket: number;
    ticketNum: number;
    message?: string;
  }

  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);

  useEffect(() => {
    const storedTicketInfo = localStorage.getItem("ticketInfo");
    if (storedTicketInfo) {
      setTicketInfo(JSON.parse(storedTicketInfo));
    }
  }, []);



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
            width={0}
            height={100}
            alt="ticket"
            className="w-[300px] h-[600px] md:w-full md:h-full "
          />
          <div>
            <div className="absolute bottom-32 left-4 flex flex-col items-center justify-center p-[14px] gap-5 border border-[#24A0B5] rounded-2xl">
              <div className="flex flex-col gap-1 items-center justify-center">
                <h1 className="road text-[34px] text-center leading-none text-grey font-normal">
                  Techember Fest ”25
                </h1>
                <div className="flex flex-col gap-1 justify-center text-grey roboto leading-normal text-[10px] items-center mb-[2px]">
                  <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p>March 15, 2025 | 7:00 PM</p>
                </div>
              </div>
              <Image src={ticketInfo?.imgurl || '/images/default.jpg'} width={140} height={140} alt='user image' className="border-4 border-[#24A0B5]/50 rounded-xl"/>
              <div className="flex flex-col w-fit justify-center roboto items-center p-1 border border-[#133D44] bg-[#08343C] rounded-[8px]">
                <div className="flex justify-center gap-2 items-start  border-b border-[#12464E]">
                  <div className="flex flex-col gap-1 p-1  border-r border-[#12464E] w-[108px]">
                    <p className="text-[10px] font-light text-white/50 leading-normal roboto">Enter your name</p>
                    <h2 className="text-xs leading-normal text-white font-medium">{ticketInfo?.name }</h2>
                  </div>
                  <div className="flex flex-col gap-1 p-1  w-[108px]">
                    <p className="text-[10px] font-light text-white/50 leading-normal roboto">Enter your email *</p>
                    <h2 className="text-xs leading-normal text-white font-medium truncate">{ticketInfo?.email}</h2>
                  </div>
                </div>
                <div className="flex gap-2 border-b border-[#12464E]">
                  <div className="flex flex-col gap-1 p-1 border-r border-[#12464E] w-[108px]">
                    <p className="text-[10px] font-light text-white/50 leading-normal roboto">Ticket Type:</p>
                    <h2 className="text-xs leading-normal text-white font-medium">{ticketInfo?.ticket === 1 ? 'Free': ticketInfo?.ticket === 2 ? 'VIP': 'VVIP' }</h2>
                  </div>
                  <div className="flex flex-col gap-1 p-1 w-[108px]">
                    <p className="text-[10px] font-light text-white/50 leading-normal roboto">Ticket for :</p>
                    <h2 className="text-xs leading-normal text-white font-medium">{ ticketInfo?.ticketNum}</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-2 w-full">
                  <p className="text-[10px] font-normal text-white/50 leading-normal roboto">Special request?</p>
                    <p className="text-xs max-w-[210px] leading-normal text-white font-light">
                    <span className="block">{ticketInfo?.message}</span>
                    </p>
                </div>
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
