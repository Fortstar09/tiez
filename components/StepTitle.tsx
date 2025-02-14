import React from "react";

const StepTitle = ({step}: {step:number}) => {
  return (
    <div className="justify-center items-start flex flex-col gap-3">
      <div className="flex justify-between w-full">
        <h1 className="text-white text-[32px] font-normal">
         { step === 1 ? "Ticket Selection": step === 1 ? "Attendee Details":  "Ready"}
        </h1>
        <p className="text-grey text-[16px] leading-normal roboto mt-2">Step {step}/3</p>
      </div>
      <div className="bg-[#0E464F] rounded-[5px] w-full h-1">
        <div className={`bg-[#24A0B5] rounded-[5px] w-${step}/3 h-1`}></div>
      </div>
    </div>
  );
};

export default StepTitle;
