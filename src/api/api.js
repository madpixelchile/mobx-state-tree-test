

import axios from 'axios';
import { flow } from 'mobx-state-tree';

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getData = async (endpoint) => {
    try {
        const response = await axios({
            url: `${API_BASE_URL}${endpoint}`,
        });
        return {
            ok: true,
            data: response.data
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error
        }
    }
}


export const getDataByPage = flow(function *(pageNumber){
    try {
        const response = yield axios({
            url: `${API_BASE_URL}/?limit=10&offset=${pageNumber}`,
        });
        return {
            ok: true,
            data: response.data
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error
        }
    }
})