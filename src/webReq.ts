import axios from "axios";

axios.get('https://example.com/data')
    .then(responce => {
        console.log(responce.data)
    })