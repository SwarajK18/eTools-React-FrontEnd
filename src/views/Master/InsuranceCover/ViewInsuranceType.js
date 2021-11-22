import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DropdownButton, Dropdown, Button, Table } from "react-bootstrap";
import AddEditInsuranceType from "./AddEditInsuranceType";
import SweetAlert from "../../../components/SweetAlert";
import Page from "../../../components/Page";
import {
     deleteInsuranceType, 
     getAllInsuranceType 
    } from "../../../actions/Masters/insuranceTypeActions";
import ReactTable from "../../../components/ReactTable";

const ViewInsuranceType = () => {
  const [insuranceType, setInsuranceType] = useState([]);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [type, setType] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [alertOptions, setAlertOptions] = useState({});
  const [itemForDelete, setItemForDelete] = useState({});

  const onConfirm = () => {
    setShowPopup(false);
  };

  const handleShow = () => {
    setShow(true);
    setData({});
    setType("Add");
  };

  const editShow = (item) => {
    setShow(true);
    setData(item);
    setType("Edit");
  };

  const childToParent = (childdata, success, msg = null) => {
    setShow(childdata);
    if (success) {
      if (type == "Edit")   setAlertOptions({
        title: "",
        type,
        msg: msg
          ? msg
          : type === "Edit"
          ? "Insurance type updated successfully !"
          : "Insurance type added successfully",
        callback: (value) => {
          console.log(value);
          setShowPopup(false);
        },
      });

      setShowPopup(true);
    }
    // useEffect(() => {
    dispatch(getAllInsuranceType())
      .then((response) => {
        console.log(response);
        setInsuranceType(response);
      })
      .catch((error) => {
        // snackbar.showError(error);
      });
  };
  useEffect(() => {
    // handleShow = handleShow.bind(this);
    dispatch(getAllInsuranceType())
      .then((response) => {
        console.log(response);
        setInsuranceType(response);
      })
      .catch((error) => {
        // snackbar.showError(error);
      });
  }, []);

  const onDeleteConfirm = (item) => {
    console.log("in delete mm");
    dispatch(deleteInsuranceType(item.id))
      .then((response) => {
        // setPopUpTitle("Vaccine type deleted successfully !");
        dispatch(getAllInsuranceType()).then((response) => {
          console.log(response);
          setInsuranceType(response);
        });
        setAlertOptions({
          title: "",
          type: "Delete",
          msg: response.results,
          callback: (value) => {
            console.log(value);
            setShowPopup(false);
          },
        });
        setShowPopup(true);
      })
      .catch((error) => {
        alert("Insurance Type not deleted successfully..");
      });
  };

  const onDelete = (item) => {
    // eslint-disable-next-line

    setAlertOptions({
      title: "Delete Insurance Type",
      type: "Confirm",
      msg: "Are you sure u want to delete the Insurance Type ConfirmDelete",
      callback: (value) => {
        console.log(value);
        setShowPopup(false);
        if (value) {
          onDeleteConfirm(item);
        }
      },
    });
    setShowPopup(true);
  };

  function linkFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title="Action"
        style={{ textAlign: "left", color:"secondary", cursor: "pointer", lineHeight: "normal" }}
      >
        <Dropdown.Item onClick={() => editShow(cell)}> Edit</Dropdown.Item>

        <Dropdown.Item onClick={() => onDelete(cell)}>Delete</Dropdown.Item>
      </DropdownButton>
    );
  }
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        Filter: false,
        accessor: linkFormatter,
      },
      {
        Header: "Insurance Type",
        accessor: "name", // accessor is the "key" in the data
      },
    ],
    []
  );
  const insurancetypelist = React.useMemo(() => insuranceType);

  return (
    <Page title="Insurance Type">
       {showPopup}
      {showPopup && (
        <SweetAlert
          type={alertOptions.type}
          msg={alertOptions.msg}
          title={alertOptions.title}
          callback={alertOptions.callback}
        ></SweetAlert>

      )}
      <AddEditInsuranceType
        Type={type}
        Data={data}
        ShowModel={show}
        childToParent={childToParent}
      />
      <Button className="btn btn-primary mt-2 ml-5 text-end" onClick={handleShow} >
        + Insurance Type
      </Button>
      <ReactTable
        columns={columns}
        data={insurancetypelist}
        //  fetchData={fetchData}
        //  pageCount={pageCount}
      />
    </Page>
  );
};

export default ViewInsuranceType;
