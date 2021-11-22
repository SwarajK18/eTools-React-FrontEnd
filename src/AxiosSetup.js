import axios from 'axios';
// import i18n from 'src/i18n';
import apiUrl from './AppConfiguration';
//import authService from './services/auth.service';

// export function translateCell(cell) {
//   return i18n.t(cell);
// }

const AxiosSetup = () => {
  // This flag enables the Http Request to carry all Cookies present on browser for this app.
  axios.defaults.withCredentials = true;

  axios.defaults.baseURL = apiUrl; // process.env.REACT_APP_SECRET_API_URL;
//   axios.interceptors.request.use((config) => {
//     const user = authService.getUserFromStorage();
//     if (user) {
//       config.headers.Authorization = `Bearer ${user.accessToken}`;
//     }
//     return config;
//   });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();
      if (error.response) {
        switch (error.response.status) {
          case 500: // INTERNAL_SERVER_ERROR
            message = "Internal Server Error";
            break;
          case 401: // UNAUTHORIZED
            message = "Unauthorized";
            break;
          case 403: // FORBIDDEN
            message = "Forbidden";
            break;
          case 414: // REQUEST_TOO_LONG:
            message ="RequestToLong";
            break;
          case 400: // BAD_REQUEST:
            // message = translateCell('ErrorStrings.BadRequest');
            break;
          case 409: // CONFLICT:
            message = "Conflict";
            break;
          default:
            break;
        }
      }
      error.message = message;
      return Promise.reject(error);
    }
  );
  return null;
};

export default AxiosSetup;
