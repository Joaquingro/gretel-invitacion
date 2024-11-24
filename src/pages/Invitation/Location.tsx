import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaChurch } from "react-icons/fa";
import { BiParty } from "react-icons/bi";

const Location = () => {
  const position: LatLngExpression = [19.687421, -98.857759];
  const positionChurch: LatLngExpression = [19.68225, -98.86989];


  return (
    <div className="w-full flex flex-col justify-center pt-4 items-center h-full gap-10">
      <div className="max-w-[500px] w-full flex flex-col items-center text-center">
        <h1 className="text-4xl mb-2">Ubicaciones</h1>
        <p className="text-sm ms:text-lg text-rose-400">
          La ceremonia se llevará a cabo en la Parroquia del Divino Redentor en
          San Juan Teotihuacan
        </p>
        <p className="text-sm mb-8 text-purple-700 mt-2 w-full text-center">
          ¡Da click en los marcadores para ver la ubicación en Google Maps!
        </p>
        <p className="text-sm mb-4 flex items-center w-full gap-3">
          Ubicación de la ceremonia{" "}
          <FaChurch size={20} className="text-purple-700" />
        </p>
        {/* El contenedor del mapa respeta el max-w del padre */}
        <MapContainer
          center={positionChurch}
          zoom={15}
          scrollWheelZoom={false}
          zoomControl={false}
          className="w-[85%] h-[150px] rounded-lg border border-rose-400"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Agregamos un marcador en la ubicación */}
          <Marker position={positionChurch}>
            <Popup >
              <p >¡Aquí es donde será la misa! 🙏</p>
              <a
                href={`https://www.google.com/maps?q=${positionChurch[0]},${positionChurch[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-400 !text-white rounded-lg p-2"
              >
                Ver en Google Maps
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="max-w-[500px] w-full flex flex-col items-center gap-5 text-center">
        <p className="text-sm w-full text-left flex items-center gap-3">
          Ubicación de la fiesta{" "}
          <BiParty size={20} className="text-purple-700" />
        </p>
        {/* El contenedor del mapa respeta el max-w del padre */}
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          zoomControl={false}
          className="w-[85%] h-[150px] rounded-lg border border-rose-400"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Agregamos un marcador en la ubicación */}
          <Marker position={position}>
            <Popup>
              <p>¡Aquí es donde es la fiesta! 🎉</p>
              <a
                href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-400 !text-white rounded-lg p-2"
              >
                Ver en Google Maps
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Location;