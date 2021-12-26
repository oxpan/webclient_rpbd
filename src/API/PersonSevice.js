import axios from "axios";

export default class PersonSevice{
    static async getAll(){

        const response = await axios.get('https://jsonplaceholder.typicode.com/post344s');// для вытягивания данных
        return response.data;

    }

    static async getByID(id){

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);// для вытягивания данных
        return response;

    }
}