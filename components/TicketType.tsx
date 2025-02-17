import React from 'react'

const AvailableTickets = [
    {
      id: 1,
      price: "Free",
      access: "Regular ACESS",
      avail: "20/52",
    },
    {
      id: 2,
      price: "$150",
      access: "VIP ACCESS",
      avail: "20/52",
    },
    {
      id: 3,
      price: "$150",
      access: "VVIP ACCESS",
      avail: "20/52",
    },
  ];

interface TicketTypeProps {
    selectedTicket: number | null;
    setSelectedTicket: (ticketId: number) => void;
}

const TicketType = ({selectedTicket, setSelectedTicket}: TicketTypeProps) => {
  return (
    <div className="flex flex-col gap-2">
    <h1 className="text-grey text-base roboto">Select Ticket Type:</h1>
    <div className="flex flex-col md:flex-row  items-start justify-center gap-[25px] border border-lightstroke p-4 rounded-3xl bg-[#052228]">
      {AvailableTickets.map((ticket) => (
        <div
          key={ticket.id}
          className={` w-full md:w-[158px] cursor-pointer flex flex-col items-start hover:bg-[#2C545B] justify-between gap-3 p-3  rounded-xl ${
            selectedTicket === ticket.id
              ? "border-[#197686] border bg-[#12464E]"
              : "border-2 border-[#197686]"
          }`}
          onClick={() => setSelectedTicket(ticket.id)}
        >
          <h1 className="text-white text-2xl leading-[110%] roboto font-semibold">
            {ticket.price}
          </h1>
          <p className="text-base roboto font-normal uppercase text-grey">
            {ticket.access}
            {/* {" ACCESS"} */}
            <span className="block text-[#D9D9D9]">{ticket.avail}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TicketType
