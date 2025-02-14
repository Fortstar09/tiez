"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

const FormSchema = z.object({
  textarea: z
    .string()
    .min(10, {
      message: "special request must be at least 10 characters.",
    })
    .max(160, {
      message: "special request must not be longer than 40 characters.",
    }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
});


export function PersonalInfo({setStep}: {setStep: (step: number) => void}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
    

function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const storedData = localStorage.getItem('ticketInfo');
    if (storedData) {
        const ticketInfo = JSON.parse(storedData);
        ticketInfo.name = data.name;
        ticketInfo.email = data.email;
        ticketInfo.imgurl = "www.placeholder.com";
        ticketInfo.message = data.textarea;
        localStorage.setItem('ticketInfo', JSON.stringify(ticketInfo));
        setStep(3);
    } else {
        const newTicketInfo = {
            name: data.name,
            email: data.email,
            imgurl: "www.placeholder.com",
            message: data.textarea,
        };
        localStorage.setItem('ticketInfo', JSON.stringify(newTicketInfo));
    }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-normal roboto leading-normal">
                Enter your name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="w-full px-3 py-5 text-base roboto text-white bg-[#08252B] border-[#07373F] rounded-[12px] active:bg-[#08252B] focus:bg-[#08252B]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-normal roboto leading-normal">
                Enter your name
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="email"
                    {...field}
                    placeholder="hello@avioflagos.io"
                    className="w-full pr-3 pl-12 py-5 text-base text-grey bg-[#08252B] border-[#07373F] rounded-[12px] active:bg-[#08252B] roboto focus:bg-[#08252B] placeholder:text-base placeholder:text-grey placeholder:font-light invalid:border-pink-500 invalid:text-pink-600"
                  />
                  <Mail
                    className="absolute top-[25%] left-3 text-white"
                    size={20}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* textarea */}

        <FormField
          control={form.control}
          name="textarea"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-normal roboto leading-normal">
                Special request?
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Text Area"
                  className="w- h-[127px] resize-none px-3 py-3 text-base roboto text-white bg-[#08252B] border-[#07373F] rounded-[12px] active:bg-[#08252B] focus:bg-[#08252B]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<div className="flex justify-between gap-4 items-center">
            <button
              className="py-3 bg-transparent border flex justify-center items-center w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] text-base leading-normal font-normal"
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button type="submit"
              className="py-3 flex justify-center items-center w-full text-white bg-[#24A0B5]  rounded-[8px] text-base leading-normal font-normal"
                      //   onClick={() => { updateTicketData("defaultKey", "defaultValue"); NextStep(); }}
                    //   onClick={() => setStep(3)}
            >
              Get My Ticket
            </button>
          </div>
      </form>
    </Form>
  );
}
