import { useState } from "react";
import Invitation from "./Invitation";
import Location from "./Location";
import Home from "./Home";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import Soundtrack from "../../assets/Soundtrack.mp3";
import { GiFlowers } from "react-icons/gi";
import { PiFlowerFill } from "react-icons/pi";
const LayoutInvitation = () => {
  const [step, setStep] = useState(1);
  const colors = [
    "text-red-500",
    "text-pink-500",
    "text-purple-500",
    "text-yellow-500",
    "text-blue-500",
  ];

  const renderStepContent = () => {
    switch (step) {
      case 2:
        return <Invitation />;
      case 3:
        return <Location />;
      case 1:
      default:
        return <Home />;
    }
  };

  const prevStep = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    }
  };

  const nextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  return (
    <div className="flex w-full items-center justify-center px-4 py-5">
      <audio src={Soundtrack} autoPlay loop>
        Tu navegador no soporta el elemento de audio.
      </audio>
      {Array.from({ length: 20 }).map((_, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = Math.random() * 2 + 1; // Tamaño entre 1x y 3x
        const randomDuration = Math.random() * 3 + 4; // Duración de 4s a 7s
        const randomDelay = Math.random() * 2; // Retraso de 0s a 2s
        const randomPosition = Math.random() * 100; // Posición inicial horizontal

        return (
          <PiFlowerFill
            key={index}
            className={`absolute ${randomColor} animate-flower z-0`}
            style={{
              left: `${randomPosition}%`,
              top: `0`,
              fontSize: `${randomSize}rem`,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`,
            }}
          />
        );
      })}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "tween", ease: "easeInOut", duration: 0.5 },
        }}
        className="relative z-10"
      >
        <div className="py-8 flex flex-col justify-between px-5 ms:px-10 w-full h-auto ms:h-[900px] bg-white rounded-3xl shadow-lg max-w-[550px]">
          <div className="flex w-full items-center gap-2 justify-between">
            <button
              className="flex gap-2 items-center text-xs md:text-[15px] font-light bg-rose-300 p-2 text-white rounded-lg hover:bg-rose-400"
              onClick={prevStep}
            >
              <IoIosArrowDropleft /> Volver atrás
            </button>
            <GiFlowers size={45} className="text-purple-700" />
          </div>

          {renderStepContent()}
          <div className="flex w-full items-center gap-2 justify-between">
            <GiFlowers size={45} className="text-purple-700" />

            {step != 3 && (
              <button
                className="flex gap-2 items-center text-xs md:text-[15px] font-light bg-rose-300 p-2 text-white rounded-lg hover:bg-rose-400"
                onClick={nextStep}
              >
                Siguiente <IoIosArrowDropright className="mt-0" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LayoutInvitation;
