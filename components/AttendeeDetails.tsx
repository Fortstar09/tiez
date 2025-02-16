import React, { useCallback, useState } from "react";
import StepTitle from "./StepTitle";
import { PersonalInfo } from "./PersonalInfo";
import { CloudDownload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
// import { Image } from "cloudinary-react";


interface AttendeeDetailsProps {
    step: number;
    setStep: (step: number) => void;
}

const AttendeeDetails: React.FC<AttendeeDetailsProps> = ({ step, setStep }) => {

    const [uploadedFiles, setUploadedFiles] = useState("");
   
    const onDrop = useCallback((acceptedFiles: File[]) => {        
        console.log(uploadedFiles);

        const url = `https://api.cloudinary.com/v1_1/$dsns1khez/upload`;


    
        acceptedFiles.forEach(async (acceptedFile: File) => {
        //   const { signature, timestamp } = await getSignature();
    
          const formData = new FormData();
          formData.append("file", acceptedFile);
          formData.append(
             "upload_preset",
             "ml_default"
          );
          formData.append("api_key", "595733815843823");
    
          const response = await fetch(url, {
            method: "post",
            body: formData,
          });
          const data = await response.json();
            
            console.log(data);
            console.log(data.url);
            
            const ticketInfo = JSON.parse(localStorage.getItem('ticketInfo') || '{}');
            ticketInfo.imgurl = data.url;
            localStorage.setItem('ticketInfo', JSON.stringify(ticketInfo));
            setUploadedFiles(data.url);
        });
      }, []);
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false,
      });

    return (
        <div className="flex justify-between flex-col gap-8">
            <StepTitle step={step} />
            <div className="p-6 border-1 border border-stroke rounded-[32px] w-full">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col justify-center gap-8 px-6 pt-6 pb-12 rounded-3xl bg-[#052228] border border-[#07373F]">
                        <h2 className="text-white text-base roboto leading-normal">Upload Picture</h2>
                        <div className="relative w-[508] h-[200px] bg-[#000000]/20">
                            {uploadedFiles ? (
                                <Image
                                src={uploadedFiles}
                                width={240}
                                height={240}
                                alt="avatar"
                                className={`border-[#24A0B5]/50 absolute -bottom-5 right-32 flex flex-col items-center justify-center gap-4 border-4 bg-[#0E464F] rounded-[30px]`} />
                                
                            ) : (
                                    
                                <div {...getRootProps()} className={`${isDragActive ? "border-[#24A0B5]" : "border-[#24A0B5]/50"} absolute -bottom-5 right-32 flex flex-col items-center justify-center gap-4 px-6 py-[72px] border-4 bg-[#0E464F] rounded-[30px]`}>
                                    <input  {...getInputProps()} />
                                    <CloudDownload className="text-white" />
                                    <p className="max-w-[192px] text-white text-center text-base roboto leading-normal">Drag & drop or click to upload</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-[#0E464F] w-full h-1"></div>
                    <PersonalInfo setStep={setStep} />
                    {/* <pre>{JSON.stringify(ticketData, null, 2)}</pre> */}
                </div>
            </div>
        </div>
    );
};

export default AttendeeDetails;
