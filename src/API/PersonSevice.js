import axios from "axios";

export default class PersonSevice{

    //добавь конст

    static async getAll(){

        const url = 'http://192.168.1.92:4567/find/person/8/8/8/8';
        const response = await axios.get(url)
        // для вытягивания
        return response.data;

    }










    static async getByID(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);// для вытягивания данных
        return response;
    }

    static async postAddPerson(persone){
        // console.log(persone);

        let pl = {
            lastname:persone.lastname,
            firstname:persone.firstname,
            fathername:persone.fathername
        }
        console.log(pl);
        try {
            const codeRes = await axios.post('http://192.168.1.92:4567/add/person',pl).then(res=>{
                console.log(res);
                console.log(res.data);
            })
        }catch (e) {
            console.log(e);
        }

        // console.log(res);
        return persone;
    }





}