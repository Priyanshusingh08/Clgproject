import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const Pricing = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const pricing = [
    {
      name: "Basic",
      price: 50,
      features: ["Unlimited updates", "500MB Storage"],
    },
    {
      name: "Enterprise",
      price: 250,
      features: [
        "Unlimited updates",
        "2GB Storage",
        "Premium Snippets",
        "Subscription Service",
      ],
    },
    {
      name: "Advanced",
      price: 500,
      features: [
        "Unlimited Updates",
        "Unlimited Storage",
        "Premium Snippets",
        "Subscription Service",
        "Webpage Builder",
        "Code Examples",
      ],
    },
  ];

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const checkPlan = () => {
    fetch(url + "/plan/getbyuser/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          if (data) return true;
        });
      }
    });
    return false;
  };

  const purchasePlan = (plan) => {
    if (currentUser === null) {
      Swal.fire({
        icon: "error",
        title: "No Account",
        text: "Login First to purchase",
      });
      navigate("/main/login");
      return;
    }

    if (checkPlan()) {
      Swal.fire({
        icon: "error",
        title: "Already Purchased",
        text: "Plan already purchased",
      });
      navigate("/user/manageplans");
      return;
    }

    fetch(url + "/plan/add", {
      method: "POST",
      body: JSON.stringify({
        user: currentUser._id,
        plan: plan,
        createdAt: new Date(),
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        console.log("Plan Saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Purchased Plan Successfully",
        });
        navigate("/user/manageplans");
      }
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <section draggable="false" className="container pt-5" data-v-271253ee="">
        <section className="mb-10">
          <div
            id="pricing-block-5"
            className="background-radial-gradient text-center text-white"
          >
            <h1 className="fw-bold mb-4" style={{ color: "#d75500" }}>
              Pricing
            </h1>
          </div>
          <div className="row mx-4 mx-md-5">
            <div className="col-lg-4 col-md-12 p-0 py-5">
              <div className="card h-100 rounded-lg-top-end rounded-lg-bottom-end">
                <div className="card-header text-center pt-4">
                  <p className="text-uppercase">
                    <strong>{pricing[0].name}</strong>
                  </p>
                  <h3 className="mb-4">
                    <strong>₹ {pricing[0].price}</strong>
                    <small className="text-muted" style={{ fontSize: "16px" }}>
                      /month
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="btn btn-link w-100 mb-3"
                    style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                    data-ripple-color="primary"
                    onClick={(e) => purchasePlan(pricing[0])}
                  >
                    Buy
                  </button>
                </div>
                <div className="card-body">
                  <ol className="list-unstyled mb-0">
                    {pricing[0].features.map((feature) => (
                      <li className="mb-3">
                        <i className="fas fa-check text-success me-3"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="card h-100 shadow-5" style={{ zIndex: "1" }}>
                <div className="card-header text-center pt-4">
                  <p className="text-uppercase">
                    <strong>{pricing[1].name}</strong>
                  </p>
                  <h3 className="mb-4">
                    <strong>₹ {pricing[1].price}</strong>
                    <small className="text-muted" style={{ fontSize: "16px" }}>
                      /month
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="btn btn-primary w-100 mb-3"
                    onClick={(e) => purchasePlan(pricing[1])}
                  >
                    Buy
                  </button>
                </div>
                <div className="card-body">
                  <ol className="list-unstyled mb-0">
                    {pricing[1].features.map((feature) => (
                      <li className="mb-3">
                        <i className="fas fa-check text-success me-3"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0 py-5">
              <div className="card h-100 rounded-lg-top-end rounded-lg-bottom-end">
                <div className="card-header text-center pt-4">
                  <p className="text-uppercase">
                    <strong>{pricing[2].name}</strong>
                  </p>
                  <h3 className="mb-4">
                    <strong>₹ {pricing[2].price}</strong>
                    <small className="text-muted" style={{ fontSize: "16px" }}>
                      /month
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="btn btn-link w-100 mb-3"
                    style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                    data-ripple-color="primary"
                    onClick={(e) => purchasePlan(pricing[2])}
                  >
                    Buy
                  </button>
                </div>
                <div className="card-body">
                  <ol className="list-unstyled mb-0">
                    {pricing[2].features.map((feature) => (
                      <li className="mb-3">
                        <i className="fas fa-check text-success me-3"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Pricing;
