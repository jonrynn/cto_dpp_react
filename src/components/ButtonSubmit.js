import React, { Fragment, useEffect } from "react";
import axios from "axios";

const ButtonSubmit = (props) => {
  let response = null;
  const new_user = {
    petName: props.petName,
    petOwner: props.petOwner,
    petType: props.petType,
  };
  const postCart = async () => {
    await axios
      .post("http://127.0.0.1:5000/user/" + props.petID, new_user)
      .then((res) => {
        console.log("submitted");
        //console.log("posted item id = " + res.data.items[0].itemID);

        return res.data;
      })
      .catch((err) => {
        alert("Order was rejected: " + err.response);
        return "Order was rejected: " + err.response;
      });
  };

  return (
    <div className="narrow my-5">
      <button
        disabled={false}
        className="btn btn-lg btn-block btn-primary rounded"
        type="submit"
        onClick={postCart}
      >
        Submit new Pet
      </button>
    </div>
  );
};

export default ButtonSubmit;
