import React, { useEffect, useState } from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { Tabs } from "antd";
import { Card } from "antd";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

function Second() {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [vile, setVile] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/job/${name}`);
      setData(response.data);
    };
    fetchData();
  }, [name]);

  const position = [33.886917, 9.537499];

  const filteredData = data.filter((item) => {
    if (
      (vile === "" || item.vile === vile) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      <NavBar />
      <div className="container m-auto text-center mt-10">
        <p className="uppercase text-2xl">- {name} -</p>
      </div>

      <div className="">
        <div className="container m-auto ">
          <div className="flex justify-center items-center mb-5 flex-wrap">
            <input
              type="text"
              placeholder="Search"
              className="border rounded p-2 w-60"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="border rounded p-2 ml-3"
              value={vile}
              onChange={(e) => setVile(e.target.value)}
            >
              <option value="">Localisation</option>
              <option value="monastir">monastir</option>
              <option value="sousse">Sousse</option>
              <option value="tunis">Tunis</option>
            </select>
          </div>

          <Tabs defaultActiveKey="1" className="text-center">
            <Tabs.TabPane tab="List" key="1">
              <div className="flex justify-between flex-wrap">
                {filteredData.map((item) => (
                  <div key={item.id} className="mb-7">
                    <Card
                      title={item.name}
                      style={{
                        width: 700,
                      }}
                      className="shadow-2xl mt-7 text-xl"
                    >
                      <div className="ml-3">
                        <div className="flex mb-3 ">
                          <FaMapMarkerAlt className="mr-2" />
                          <p>{item.localisation}</p>
                        </div>
                        <div className="flex mb-3 ">
                          <BsFillTelephoneFill className="mr-2" />
                          <p>+216 {item.phone}</p>
                        </div>
                        <div className="flex ">
                          <MdEmail className="mr-2" />
                          <p>{item.email}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Map" key="2">
              <MapContainer center={position} zoom={7}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((item) => (
                  <Marker position={[item.latitude, item.longitude]}>
                    <Popup>{item.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}
let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

export default Second;
