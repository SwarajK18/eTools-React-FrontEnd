import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Formik, Field, ErrorMessage, Form, withFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import InsuranceTypeServices from "../../../services/Master/InsuranceType.services";

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
  Label,
  Button,
  Row,
  Col,
  Input,
} from "reactstrap";
import { createInsuranceType, getInsuranceTypeById } from "../../../actions/Masters/insuranceTypeActions";

const AddEditInsuranceType = ({
  AddInsuranceType,
  ShowModel,
  childToParent,
  Type,
  Data,
}) => {
  const dispatch = useDispatch();

  //const { id } = useParams();

  const [show, setShow] = useState(ShowModel);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [id, setId] = useState(0);
  const [initialValues, setInitialValues] = useState({
    insuranceType: "",
  });

  useEffect(() => {
    setShow(ShowModel);
  }, [ShowModel]);

  useEffect(() => {
    if (Data.id) {
      setId(Data.id);
      setInitialValues({
        insuranceType: Data.name,
      });
    } else {
      setId(0);
      setInitialValues({
        insuranceType: "",
      });
    }
  }, [Data]);

  const handleErrorClose = () => {
    setShowErrorPopup(!showErrorPopup);
  };

  //alert(show);
  // Close button
  const handleClose = () => {
    childToParent(!show, false);
    setShow(!show);
    setId(0);
  };

  useEffect(() => {
    if (id !== 0) {
      dispatch(getInsuranceTypeById(id))
        .then((response) => {
          setInitialValues({
            insuranceType: response.results.name,
          });
        })
        .catch((error) => {});
    }
  }, []);

  const validateForm = (values) => {
    if (values.insuranceType === "") {
      setShowErrorPopup(true);
      return { insuranceType: "Insurance type is required" };
    }
    return {};
  };

  async function saveInsuranceType(fields, { setStatus, setSubmitting }) {
    console.log(fields);
    setStatus();
    setShow(false);
    if (id != 0) {
      InsuranceTypeServices
        .updateInsuranceType(id, fields.insuranceType)
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            childToParent(false, true, res.results);
          }, 1000);
        });
    } else {
      InsuranceTypeServices
        .createInsuranceType(id, fields.insuranceType)
        .then((res) => {
          setTimeout(() => {
            childToParent(false, true, res.results);
          }, 1000);
        });
      // await AddVaccineType(id, fields.vaccineType);
      // setTimeout(() => {
      //   childToParent(false, true);
      // }, 1000);
    }

    setId(0);
    setInitialValues({
      insuranceType: "",
    });
    fields.insuranceType = "";
    setSubmitting(false);
  }

  // const FormikApp = withFormik({
  //   mapPropsToValues() {
  //     return {
  //       field1: "no error field1",
  //       field2: "",
  //       field3: ""
  //     };
  //   },
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        insuranceType: Yup.string().required(),
      })}
      validate={validateForm}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={saveInsuranceType}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <Modal isOpen={show} toggle={handleClose}>
          <ModalHeader toggle={handleClose}>{Type} Insurance Type</ModalHeader>
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <Modal isOpen={showErrorPopup} toggle={handleErrorClose}>
                <ModalHeader toggle={handleErrorClose}>Invalid</ModalHeader>
                <ModalBody>
                  <p>{errors.insuranceType}</p>
                </ModalBody>
              </Modal>
              <Row
                // sm={1}
                style={{
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "left",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <FormGroup row>
                  <Label
                    htmlFor="insuranceType"
                    column
                    sm={5}
                    className={"required-field"}
                  >
                    Insurance Type
                  </Label>
                  <Col sm={7}>
                    <Field
                      name="insuranceType"
                      type="text"
                      value={values.insuranceType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={"form-control"}
                      // onChange={trim(email)}
                    />

                    {/* <ErrorMessage
                      name="vaccineType"
                      component="div"
                      className="invalid-feedback"
                    /> */}
                  </Col>
                </FormGroup>
              </Row>

              <ToastContainer />
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary mr-2"
                color="primary"
                size="md"
              >
                Save
              </Button>
              <Button onClick={handleClose} variant="secondary">
                Close
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

// export default AddEditNoteType;

AddEditInsuranceType.propTypes = {
  AddInsuranceType: PropTypes.func.isRequired,
  ShowModel: PropTypes.bool.isRequired,
  // childToParent: propTypes.object,
  // Type: propTypes.any,
  // Data: propTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    AddInsuranceType: (id, insuranceType) => {
      dispatch(createInsuranceType(id, insuranceType));
    },
  };
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProps)(AddEditInsuranceType);

