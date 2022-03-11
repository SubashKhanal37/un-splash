
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Fpehabdrvb5rJlaTtTiSheHdkUVyi9K2v8dvOGy6JDs'
    }
})
