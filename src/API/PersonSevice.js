import axios from "axios";

export default class PersonSevice{
    static async getAll(){

        const response = await axios.get('https://jsonplaceholder.typicode.com/post3s');// для вытягивания данных
        return response.data;

    }
}