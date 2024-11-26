import React, { useState, useEffect } from "react";
import { GiPeaceDove } from "react-icons/gi";

const Invitation: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2024-12-14T11:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Evento pasado, limpiar el cronómetro
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, []);

  const [currentText, setCurrentText] = useState({
    title: "EUCARISTÍA",
    time: "A LAS 11:00",
  });
  const [fadeClass, setFadeClass] = useState("opacity-100");

  const data = [
    { title: "EUCARISTÍA", time: "A LAS 11:00" },
    { title: "BANQUETE", time: "A LAS 15:00" },
  ];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setFadeClass("opacity-0");

      setTimeout(() => {
        index = (index + 1) % data.length;
        setCurrentText(data[index]);
        setFadeClass("opacity-100");
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 ms:py-0 flex flex-col gap-2 ms:gap-6 sm:items-center w-full h-full text-center">
      <h2 className="text-2xl ms:text-4xl text-rose-400">Mi Bautizo</h2>
      <h1 className="text-5xl ms:text-6xl text-purple-700">Gretel</h1>
      <p className="text-sm ms:text-lg mt-4 text-purple-600 font-light">
        Tenemos el gusto de invitarte en este día tan especial
      </p>

      {/* Detalles */}
      <section className="mt-5 flex items-center w-full text-lg ms:text-2xl text-rose-400 font-light">
        <p className="border-t border-purple-700 border-b 0 py-2 ms:py-3 font-light max-w-[300px] w-full">
          SÁBADO
        </p>
        <span className="px-4">
          <p className="mt-[-20px]">DICIEMBRE</p>
          <p className="text-4xl">14</p>
        </span>
        <div className="max-w-[300px] w-full">
          <p
            className={`text-sm ms:text-lg text-black mt-[-25px] transition-opacity duration-500 ${fadeClass}`}
          >
            {currentText.title}
          </p>
          <p
            className={`border-t border-purple-700 border-b py-2 ms:py-3 transition-opacity duration-500 ${fadeClass}`}
          >
            {currentText.time}
          </p>
        </div>
      </section>

      {/* Familia */}
      <section className="mt-5 flex flex-col ms:flex-row items-center ms:items-start w-full text-xl ms:text-3xl font-light">
        <div>
          <p className="text-lg ms:text-xl py-0 ms:py-3 font-light max-w-[300px] w-full text-purple-700">
            PAPÁS
          </p>
          <p className="text-[16px]">Edith Trujillo Nieves</p>
          <p className="text-[16px]">Ivan Mauricio Guerrero García</p>
        </div>
        <span className="p-5 ms:p-10">
          <GiPeaceDove size={55} className="text-rose-400" />
        </span>
        <div>
          <p className="text-lg ms:text-xl py-0 ms:py-3 font-light max-w-[300px] w-full text-purple-700">
            PADRINO
          </p>
          <p className="text-[16px]">Jesús Joaquin Guerrero García</p>
        </div>
      </section>

      {/* Cronómetro */}
      <footer className="mt-8 ms:mt-0 text-center w-full">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">
          ¡El bautizo será pronto!
        </h2>
        <div className="flex justify-center items-center gap-4 w-full">
          {/* Días */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg ms:text-2xl font-bold text-purple-700 bg-purple-100 rounded-lg px-4 py-2 shadow w-full">
              {timeLeft.days}
            </span>
            <span className="text-sm text-gray-600 mt-2">DÍAS</span>
          </div>
          {/* Horas */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg ms:text-2xl font-bold text-purple-700 bg-purple-100 rounded-lg px-4 py-2 shadow w-full">
              {timeLeft.hours}
            </span>
            <span className="text-sm text-gray-600 mt-2">HORAS</span>
          </div>
          {/* Minutos */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg ms:text-2xl font-bold text-purple-700 bg-purple-100 rounded-lg px-4 py-2 shadow w-full">
              {timeLeft.minutes}
            </span>
            <span className="text-sm text-gray-600 mt-2">MINUTOS</span>
          </div>
          {/* Segundos */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg ms:text-2xl font-bold text-purple-700 bg-purple-100 rounded-lg px-4 py-2 shadow">
              {timeLeft.seconds}
            </span>
            <span className="text-sm text-gray-600 mt-2">SEGUNDOS</span>
          </div>
        </div>
        <p className="text-sm md:text-lg mt-6 text-gray-700">
          Esperamos contar con tu valiosa presencia. ¡Será un día inolvidable!
        </p>
      </footer>
    </div>
  );
};

export default Invitation;
