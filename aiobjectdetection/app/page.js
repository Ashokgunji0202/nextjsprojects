
import ObjectDetection from "@/components/Object-detection";
import "./globals.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter md:px-6 text-center">
        Thief Detection Alarm
      </h1>
      <ObjectDetection/>
    </main>
  );
}