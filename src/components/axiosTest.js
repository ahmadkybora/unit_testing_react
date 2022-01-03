import axios from 'axios';
import React from 'react';

export const woops = () => {
    return axios.get("http://localhost:3030")
                .then(res => res.data)
                .catch(er => er);
}

const AxiosTest = () => {
    return (<div>{woops()}</div>);
}
 
export default AxiosTest;