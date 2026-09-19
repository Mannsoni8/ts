import axios, { type AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get('https://example.com/data')
    .then(responce => {
        console.log(responce.data)
    })

const fetchData = async () => {
    try {
        const res: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

        console.log("Todo", res.data)
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message)
            if (error.response) {
                console.log(error.response.status)
            }
        }
    }
}