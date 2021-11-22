import axios from "axios";

const createInsuranceType = (id, insuranceType) => {
  return axios
    .post(`insuranceType`, {
      id: id,
      name: insuranceType,
    })
    .then((response) => {
      return response.data;
    });
};

const updateInsuranceType = (id, name) => {
  return axios
    .put(`insuranceType`, {
      id,
      name,
    })
    .then((response) => {
      return response.data;
    });
};

const deleteInsuranceType = (id) => {
  return axios
    .delete(`insuranceType/${id}`)
    .then((response) => {
      return response;
    });
};

const getAllInsuranceType = () => {
  return axios.get(`insuranceType`).then((response) => {
    console.log(response);
    return response.data.results;
  });
};
const getInsuranceTypeById = (id) => {
  return axios
    .get(`insuranceType?Id=${id}`, {
      id,
    })
    .then((response) => {
      return response.data;
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createInsuranceType,
    updateInsuranceType,
    deleteInsuranceType,
    getAllInsuranceType,
    getInsuranceTypeById,
};
