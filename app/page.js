import Image from "next/image";
import logo from "../public/airport-transfer/at-1.webp";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Image src={logo} width={500} height={500} alt="Logo" />
    </div>
  );
}
