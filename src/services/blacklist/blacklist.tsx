import InitialFormValues from "modules/blacklist/views/initial-form/initial-form-values";
import { AXIOS_SERVICE } from "services/config/axios-setup";


const axiosInstance = AXIOS_SERVICE;

export const getPeople = (values: InitialFormValues) => {
    return axiosInstance.get(
        `/v1/searchs/personas/fisicas`,
        {params: values}
    ).then(
        data => {
            return data;
        }
    ).catch(
        error => {
            return error;
        }
    )
}