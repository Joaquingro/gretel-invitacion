import cross from "../../assets/bautizo.png";

const Home = () => {
  return (
    <div className="py-10 xs:py-0 flex flex-col w-full items-center text-center">
      <div className="max-w-[500px] w-full flex flex-col items-center h-full gap-5">
        <h1 className="text-2xl xs:text-4xl">
          ¡Bienvenido, es un gusto saludarte el día de hoy!
        </h1>
        <img src={cross} alt="Imagen de cruz" className="w-[250px]" />
        <p className="mt-12 text-rose-400 text-xs xs:text-lg">
          Si estas viendo esto significa que eres uno de nuestros invitados
        </p>
        <h1 className="text-2xl xs:text-3xl">¡Para el bautizo de Gretel!</h1>
      </div>
    </div>
  );
};

export default Home;
