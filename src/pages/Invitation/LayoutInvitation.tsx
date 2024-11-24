import { useEffect, useState } from "react";
import Invitation from "./Invitation";
import Location from "./Location";
import Home from "./Home";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import Soundtrack from "../../assets/Soundtrack.mp3";
const LayoutInvitation = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const audio = new Audio(Soundtrack);
    audio.play().catch((error) => {
      console.error("Error reproduciendo el audio:", error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Soundtrack]);

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
    <div className="flex w-full items-center justify-center h-full px-4 ">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "tween", ease: "easeInOut", duration: 0.5 },
        }}
      >
        <div className="py-8 flex flex-col justify-between px-5 ms:px-10 w-full h-auto ms:h-[800px] bg-white rounded-lg shadow-lg max-w-[550px]">
          <div className="flex w-full items-center gap-2 justify-between">
            <button
              className="flex gap-2 text-xs md:text-[15px] mb-0 font-light text-purple-700 hover:bg-rose-200 p-2 hover:text-white hover:rounded-lg"
              onClick={prevStep}
            >
              <IoIosArrowDropleft /> Volver atrás
            </button>
          </div>

          {renderStepContent()}
          <div className="flex w-full items-center gap-2 justify-end">
            {step != 3 && (
              <button
                className="flex gap-2 text-xs md:text-[15px] mb-0 font-light text-purple-700 hover:bg-rose-200 p-2 hover:text-white hover:rounded-lg"
                onClick={nextStep}
              >
                Siguiente <IoIosArrowDropright />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LayoutInvitation;
