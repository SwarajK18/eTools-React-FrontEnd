import { CREATE, UPDATE, DELETE, ERROR, VIEW } from "../typeActions";

import InsuranceTypeServices from "../../services/Master/InsuranceType.services";

export const createInsuranceType = (id, insuranceType) => (dispatch) => {
  return InsuranceTypeServices.createInsuranceType(id, insuranceType).then(
    (response) => {
      console.log(response);
      dispatch({
        type: CREATE,
        payload: { data: response },
      });
      return Promise.resolve(response.data);
    },
    (error) => {
      dispatch({
        type: ERROR,
        payload: {
          data: null,
          error: error.message,
        },
      });
    }
  );
};

export const updateInsuranceType = (id, insuranceType) => async (dispatch) => {
  return await InsuranceTypeServices.updateInsuranceType({ id, insuranceType }).then(
    (data) => {
      dispatch({
        type: UPDATE,
        payload: { data: data },
      });
      return Promise.resolve(data);
    },
    (error) => {
      dispatch({
        type: ERROR,
        error: error.message,
      });
      return Promise.reject();
    }
  );
};

export const deleteInsuranceType = (id) => (dispatch) => {
  return InsuranceTypeServices.deleteInsuranceType(id).then(
    (data) => {
      dispatch({
        type: DELETE,
        payload: { data: data },
      });
      return Promise.resolve(data.data);
    },
    (error) => {
      dispatch({
        type: ERROR,
        error: error.message,
      });
      return Promise.reject();
    }
  );
};

export const getAllInsuranceType = () => async (dispatch) => {
  return await InsuranceTypeServices.getAllInsuranceType().then(
    (data) => {
      console.log(data);
      dispatch({
        type: VIEW,
        payload: { data: data, error: "" },
      });
      return Promise.resolve(data);
    },
    (error) => {
      dispatch({
        type: ERROR,
        payload: { error: error.message },
      });
      return Promise.reject();
    }
  );
};

export const getInsuranceTypeById = (id) => async (dispatch) => {
  return await InsuranceTypeServices.getInsuranceTypeById(id).then(
    (data) => {
      console.log(data);
      dispatch({
        type: VIEW,
        payload: { data: data, error: "" },
      });
      return Promise.resolve(data);
    },
    (error) => {
      dispatch({
        type: ERROR,
        payload: { error: error.message },
      });
      return Promise.reject();
    }
  );
};
