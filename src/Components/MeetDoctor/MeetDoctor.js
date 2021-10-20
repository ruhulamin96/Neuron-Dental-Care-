import React from "react";
import doctor1 from "../../images/doctor1.jpg";
import doctor2 from "../../images/doctor2.jpg";
import doctor3 from "../../images/doctor3.jpg";
function MeetDoctor() {
  return (
    <div>
      <div className="container  my-5">
        <div className="row">
          <h1 className="text-primary text-center">Meet Our Doctor</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src={doctor1} class="card-img-top rounded" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center text-primary">
                    Paul Hill <br />{" "}
                    <span className="text-success">Dentist-therapist</span>
                  </h5>
                  <p class="card-text text-center">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Nullam vel erat vitae
                    lectus dictum lacinia. Sed nec dolor at lacus sagittis
                    ultrices a et lorem.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={doctor2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center text-primary">
                    Megan Clark
                    <br />
                    <span className="text-success">Dentist-consultant </span>
                  </h5>
                  <p class="card-text text-center">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Nullam vel erat vitae
                    lectus dictum lacinia. Sed nec dolor at lacus sagittis
                    ultrices a et lorem.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={doctor3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center text-primary">
                    Matthew Brooks
                    <br />
                    <span className="text-success">Dentist-surgeon</span>
                  </h5>
                  <p class="card-text text-center">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Nullam vel erat vitae
                    lectus dictum lacinia. Sed nec dolor at lacus sagittis
                    ultrices a et lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetDoctor;
