import React from 'react'
import{
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



const TicketAmount = ({selectedNum, setSelectedNum }: { selectedNum: number, setSelectedNum: (value: number) => void }) => {
   

    return (
        <div className="flex flex-col gap-2 items-start justify-center">
            <p className="text-base text-grey leading-normal roboto">
                Number of Tickets
            </p>
            <Select value={selectedNum.toString()} onValueChange={(value) => setSelectedNum(Number(value))}>
                <SelectTrigger className="w-full text-base text-grey border-[#07373F] leading-normal roboto p-3 focus:border-[#07373F]">
                    <SelectValue placeholder="1" className="" />
                </SelectTrigger>
                <SelectContent>
                    {Array.from({ length: 9 }, (_, i) => (
                        <SelectItem
                            key={i + 1}
                            value={(i + 1).toString()}
                            className="text-base leading-normal roboto"
                        >
                            {i + 1}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export default TicketAmount
