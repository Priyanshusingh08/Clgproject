import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-muted my-3">Dashboard</h3>
      <div className="row">
        <div className="col-md-3 mt-4">
          <div className="card border border-primary">
            <div className="card-header">
              <p className="text-primary font-weight-bold">Users</p>
            </div>
            <div className="card-body">
              <p className="display-4 text-muted">2,456</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card border border-primary">
            <div className="card-header">
              <p className="text-primary font-weight-bold">Users</p>
            </div>
            <div className="card-body">
              <p className="display-4 text-muted">2,456</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card border border-primary">
            <div className="card-header">
              <p className="text-primary font-weight-bold">Users</p>
            </div>
            <div className="card-body">
              <p className="display-4 text-muted">2,456</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card border border-primary">
            <div className="card-header">
              <p className="text-primary font-weight-bold">Users</p>
            </div>
            <div className="card-body">
              <p className="display-4 text-muted">2,456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
