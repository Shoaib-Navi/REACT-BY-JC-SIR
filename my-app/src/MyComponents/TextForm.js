import React from 'react';

export default function TextForm() {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-6 col-lg-4">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </div>
    </div>
  );
}
