"use client";
import { useState, useEffect } from "react";
import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";
import ViewTicket from "./ViewTicket";

const Form = () => {
    const [step, setStep] = useState(1);

    // Initialize ticketInfo object
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ticketInfo = {
        name: "",
        email: "",
        message: "",
        imgurl: "",
        ticket: 0,
        step: step,
        ticketNum: 0,
    };

    // Store ticketInfo in local storage
    useEffect(() => {
        const storedTicketInfo = JSON.parse(localStorage.getItem("ticketInfo") || "{}");
        localStorage.setItem("ticketInfo", JSON.stringify({ ...storedTicketInfo, step }));
    }, [step]);

    const nextStep = () => {
        setStep((curr) => curr + 1);
    };

    const renderStepComponent = () => {
        if (step === 1) {
            return <TicketSelection step={step} NextStep={nextStep} />;
        } else if (step === 2) {
            return <AttendeeDetails step={step} setStep={setStep} />;
        } else {
            return <ViewTicket step={step} setStep={setStep} />;
        }
    };

    return (
        <main className="flex justify-center items-center px-5 md:px-0 pb-12">
            <div className="p-6 md:p-12 bg-[#041E23] border-[#0E464F] border rounded-[32px] md:rounded-[40px]">
            <section>{renderStepComponent()}</section>
            </div>
        </main>
    );
};

export default Form;
