import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { Tabs } from "antd";
import { Card } from "antd";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Second() {
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
              <LoadScript googleMapsApiKey="AIzaSyCBeskUnJsrUU5RFdq4hL-wi-ltxBYJIU4">
                <GoogleMap
                  mapContainerStyle={{ height: "700px", width: "100%" }}
                  center={{ lat: 35.779481194422694, lng: 10.83021625071606 }}
                  zoom={10}
                >
                  {data.map((item) => (
                    <Marker
                      key={item.id}
                      position={{
                        lat: item.latitude,
                        lng: item.longitude,
                      }}
                    />
                  ))}
                </GoogleMap>
              </LoadScript>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}
