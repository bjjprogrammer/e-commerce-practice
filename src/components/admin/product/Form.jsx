import React from "react";

const Form = ({form, onSubmit}) => {
  return (
    <div className="Form">
      <div className="card">
        <div className="card-header text-center">
          <h4>Create Product</h4>
        </div>
        <div className="card-body">
          <form ref={form}>
            <div className="mb-3">
              <label className="form-label">Product</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                name="price"
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter price product"
              />
            </div>
            <div className="mb-3 text-center">
              <button type="button" className="btn btn-success" onClick={onSubmit}>
                Save product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
