import React, { useState, useEffect } from "react";

const Invitation: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null); // Permitir null para el estado inicial

  useEffect(() => {
    const eventDate = new Date("2024-12-14T11:00:00");

    const updateDaysLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      setDaysLeft(Math.ceil(difference / (1000 * 60 * 60 * 24))); // Convertir milisegundos a días
    };

    updateDaysLeft(); // Calcular en la carga inicial
    const interval = setInterval(updateDaysLeft, 1000); // Actualizar cada segundo

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
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
        <p className="border-t border-purple-700 border-b 0 py-3 font-light max-w-[300px] w-full">
          SÁBADO
        </p>
        <span className="px-4">
          <p className="mt-[-20px]">DICIEMBRE</p>
          <p className="text-4xl">14</p>
        </span>
        <p className="border-t border-purple-700 border-b py-3 max-w-[300px] w-full">
          A LAS 11:00
        </p>
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
          <i className="fa-solid fa-dove text-5xl text-rose-400"></i>
        </span>
        <div>
          <p className="text-lg ms:text-xl py-0 ms:py-3 font-light max-w-[300px] w-full text-purple-700">
            PADRINO
          </p>
          <p className="text-[16px]">Jesús Joaquin Guerrero García</p>
        </div>
      </section>

      {/* Cronómetro */}
      <footer className="mt-8">
        {daysLeft !== null ? (
          <h2 className="text-xl font-semibold text-purple-700">
            Faltan <strong>{daysLeft}</strong> días para el bautizo
          </h2>
        ) : (
          <p className="text-purple-600">Cargando días restantes...</p>
        )}
        <p className="text-sm ms:text-lg mt-2">
          Esperamos contar con tu valiosa presencia. ¡Será un día inolvidable!
        </p>
      </footer>
    </div>
  );
};

export default Invitation;
