import { USER_LOCALSTORAGE_KEY } from "shared/consts/localstorage";
import axios from "axios";

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || "",
    },
});
