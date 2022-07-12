import axios from 'axios';

async function RequestServer(type, url, data) {
    if (type === "get") {
        const result = await axios.get(url, {withCredentials: true});
        return result.data;
    } else if (type === "post") {
        const result = await axios.post(url, data, {withCredentials: true});
        return result.data;
    }
}

export default RequestServer;