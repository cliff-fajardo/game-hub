import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0587eb3ff48f436387605dbe25f23ef7'
    }
})