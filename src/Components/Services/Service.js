import React from "react";
import { Link } from "react-router-dom";

function Service(props) {
  const { name, img, desc,id } = props.service;
  return (
    <div>
      <div class="col">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{desc.slice(0,200)}</p>
            <Link to={`/service/${id}`} ><button className="btn btn-primary w-100">Get Service</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
