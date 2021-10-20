import React, { useEffect, useState } from "react";
import Service from "./Service";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="text-primary text-center">Our Services</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
