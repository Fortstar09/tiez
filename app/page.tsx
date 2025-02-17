import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-[120px] md:pt-[150px]">
        <Form />
      </div>
    </>
  );
}
