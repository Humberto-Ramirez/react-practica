import InitialFormValues from "modules/blacklist/views/initial-form/initial-form-values";
import { POKE_AXIOS } from "services/config/pokeaxios";

const axiosInstance = POKE_AXIOS;

export default function getPokemon(name: InitialFormValues) {
    return axiosInstance.get(
        `${name.nombre}`
    ).then(
        data => {
            return data;
        }
    ).catch(
        error => {
            return error;
        }
    );
}