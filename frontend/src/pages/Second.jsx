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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/job/${name}`);
      setData(response.data);
    };
    fetchData();
  }, [name]);
  console.log(data);
  const position = [35.779481194422694, 10.83021625071606];
  return (
    <>
      <NavBar />
      <div className="container m-auto text-center mt-10">
        <p className="uppercase text-2xl">- {name} -</p>
      </div>
      <div className=" ml-">
        <div className="container m-auto  ">
          <Tabs defaultActiveKey="1" className="text-center ">
            <Tabs.TabPane tab="List " key="1">
              <div className="flex justify-between">
                {data.map((item) => (
                  <div key={item.id} className="mb-7 ">
                    <Card
                      title={item.name}
                      style={{
                        width: 700,
                      }}
                      className="shadow-2xl mt-7 text-xl "
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
              <MapContainer center={position} zoom={10}>
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
