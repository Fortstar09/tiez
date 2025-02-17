import StepTitle from "./StepTitle";
import TicketTitle from "./TicketTitle";
import TicketType from "./TicketType";
import TicketAmount from "./TicketAmount";
import { useEffect, useState } from "react";



interface TicketSelectionProps {
  step: number;
  NextStep: () => void;
}

const TicketSelection: React.FC<TicketSelectionProps> = ({ step, NextStep }) => {
    const [selectedTicket, setSelectedTicket] = useState(1);
    const [selectedNum, setSelectedNum] = useState(1);

    const handleNext = () => {
        const ticketInfo = JSON.parse(localStorage.getItem('ticketInfo') || '{}');
        setSelectedTicket(ticketInfo.ticket || 1);
        setSelectedNum(ticketInfo.ticketNum || 1);
        NextStep();
    };

    useEffect(() => {
        const ticketInfo = {
            ticket: selectedTicket,
            ticketNum: selectedNum
        };
        const existingData = JSON.parse(localStorage.getItem('ticketInfo') || '{}');
        const updatedData = { ...existingData, ...ticketInfo };
        localStorage.setItem('ticketInfo', JSON.stringify(updatedData));
    }, [selectedTicket, selectedNum]);

    const handleBack = () => {
        setSelectedTicket(0);
        setSelectedNum(0);
    };


  return (
    <div className="flex justify-between flex-col gap-8">
      <StepTitle step={step} />
      <div className="md:p-6 md:border md:border-stroke rounded-[32px] w-full">
        <div className="flex flex-col gap-8">
          <TicketTitle />
          <div className="bg-[#0E464F] w-full h-1"></div>
          <TicketType
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
          />
          <TicketAmount
            selectedNum={selectedNum}
            setSelectedNum={setSelectedNum}
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <button
              className="py-3 bg-transparent border flex justify-center items-center w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] text-base leading-normal font-normal"
             onClick={handleBack}
            >
              Cancel
            </button>
            <button
              className="py-3 flex justify-center items-center w-full text-white bg-[#24A0B5]  rounded-[8px] text-base leading-normal font-normal"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
