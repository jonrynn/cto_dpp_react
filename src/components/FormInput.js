import React, { Fragment, useEffect } from "react";

const FormInput = (props) => {
  const { labelText, required, onBlurHandler, id } = props;

  const wasSubmitButtonClicked = props.wasSubmitButtonClicked;

  return (
    <div className="container-fluid wide">
      <div className="row">
        <div className="col-lg-9 overflow-hidden" id="primary-content">
          <form className="needs-validation" noValidate>
            <div className="introduction my-4">
              <h2>Input Form</h2>
              <p>Input pet name, owner name, pet type</p>
            </div>
            <div className="form-row">
              <div className="col-6">
                <label htmlFor="petID">Pet ID</label>
                <input
                  className="form-control form-control-lg rounded"
                  id="petID"
                  type="number"
                  minLength="2"
                  maxLength="40"
                  onChange={props.petIDHandler}
                />
              </div>
              <div className="col-6">
                <label htmlFor="petName">Pet Name</label>
                <input
                  className="form-control form-control-lg rounded"
                  id="petName"
                  type="text"
                  minLength="2"
                  maxLength="40"
                  onChange={props.petNameHandler}
                />
              </div>
              <div className="col-6">
                <label htmlFor="petOwner">Pet Owner</label>
                <input
                  className="form-control form-control-lg rounded"
                  id="petOwner"
                  type="text"
                  minLength="2"
                  maxLength="40"
                  onChange={props.petOwnerHandler}
                />
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="petType">Pet Type</label>
                {required && (
                  <span className="text-danger mx-1" aria-hidden="true">
                    *
                  </span>
                )}
                <input
                  className={`form-control form-control-lg rounded }`}
                  id="petType"
                  type="text"
                  minLength="2"
                  maxLength="25"
                  onChange={props.petTypeHandler}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
