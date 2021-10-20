import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";

function ServiceDetails() {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data[serviceId - 1]));
  }, [serviceId]);
  console.log(serviceId);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div class="row row-cols-1 mx-auto w-50  row-cols-md-1 my-5">
          <h1 className="mb-5">{services?.name} Service Details</h1>
          <div class="col">
            <div class="card text-center">
              <img
                src={
                  window.location.origin +
                  `/serviceImage/service${serviceId}.jpg`
                }
                class="card-img-top mx-auto"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{services?.name}</h5>
                <p class="card-text">{services?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
