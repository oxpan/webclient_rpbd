import axios from "axios";

export default class PersonSevice{
    static async getAll(){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');// для вытягивания данных
            return response.data;
        }catch (e) {
            console.log(e);
        }
    }
}