import React, { useEffect } from "react";
import swal from "sweetalert";

const SweetAlert = (paramObj) => {
  useEffect(() => {
    switch (paramObj.type) {
      case "Add":
      case "Edit":
      case "Delete":
        swal({
          title: paramObj.title,
          text: paramObj.msg,
          button: "Ok",
        }).then((value) => {
          paramObj.callback(value);
        });
        break;
      case "Confirm":
        swal({
          title: paramObj.title,
          text: paramObj.msg,
          buttons: ["Cancel", "Ok"],
        }).then((value) => {
          paramObj.callback(value);
        });
      default:
        break;
    }
  }, []);
  return <div></div>;
};

export default SweetAlert;
