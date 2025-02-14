import React from "react";
import TicketTitle from "./TicketTitle";
import StepTitle from "./StepTitle";
import { PersonalInfo } from "./PersonalInfo";


interface AttendeeDetailsProps {
    step: number;
    setStep: (step: number) => void;
}

const AttendeeDetails: React.FC<AttendeeDetailsProps> = ({ step, setStep }) => {
    return (
        <div className="flex justify-between flex-col gap-8">
            <StepTitle step={step} />
            <div className="p-6 border-1 border border-stroke rounded-[32px] w-full">
                <div className="flex flex-col gap-8">
                    <TicketTitle />
                    <div className="bg-[#0E464F] w-full h-1"></div>
                    <PersonalInfo setStep={setStep} />
                    {/* <pre>{JSON.stringify(ticketData, null, 2)}</pre> */}
                </div>
            </div>
        </div>
    );
};

export default AttendeeDetails;
