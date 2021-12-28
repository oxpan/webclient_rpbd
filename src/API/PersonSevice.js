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

        let create = {
            lastname:persone.lastname,
            firstname:persone.firstname,
            fathername:persone.fathername
        }


        var json = JSON.stringify(create);
        console.log(json);




        var request = new XMLHttpRequest();
        request.open("POST", "http://192.168.1.92:4567/add/person");
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200)
                console.log(request.responseText);
        }
        request.send(json);

        console.log("JOPA");

        return create;
    }





}