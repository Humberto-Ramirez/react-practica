import axios, { AxiosInstance } from "axios";

const TOKEN: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyREIiOnsidXNlcklkIjo5MiwidXNlcm5hbWUiOiJzdW1iZWNhdDAyIiwiY2xpZW50SWQiOiJzdW1iZWNhdDAyIiwic2ljIjoiNTE5OTgwMDUifSwiaXNzIjoiYmFub3J0ZS13b3Jrc3BhY2VzLWFwaSIsImlhdCI6MTYxMDY2NTc3NiwiZXhwIjoxNjEwNzA4OTc2fQ.IMAuXeSBg-_SfFn_IFeQ2d-00AFz6aON2OdGj_yz2ZoRbyNW8hCjLPJ_orvfrJ_TRJ8_RuFiphvKEx5SCUfIpJsa8_eBg7cL_uls8eI3yJ5mI_39jUMPO9Xr00RTHclsZ9KI0i5YMnpW6ucIc_aLwgsvu3JfHNtL1CTf5yK_pdyU5cxy1JBYtWfVCPat38n4u_0eUuJNPJejy-tzNa_06PtmS9Lj58bf7tntnhBywu8LItEVh5egr_sZLCXktYpEvalr_wHVBHII-qAseLAOX9p6xD1T9yDlWj5261SdSR2-TBK2Z83rXLIyU1TrqQ78Y19SiFjdx-4aZS9UZH-Q5A';

export const POKE_AXIOS: AxiosInstance = 
axios.create(
    {
        responseType: 'json'
    }
);

POKE_AXIOS.interceptors.request.use(
    async config => {
        config.baseURL = 'https://pokeapi.co/api/v2/pokemon';
        config.headers = { 
            'Accept': ' application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${TOKEN}`
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);