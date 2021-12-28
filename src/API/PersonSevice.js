import axios from "axios";

export default class PersonSevice{

    static async getAll(){
        const url = 'http://192.168.1.92:4567/find/person/0/0/0/0';
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }//это лишнее не забудь поправить!

    static async getByID(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);// для вытягивания данных
        return response;
    }//это лишнее не забудь поправить!

    static async postAddPerson(persone){

        let create = {
            lastname:persone.lastname,
            firstname:persone.firstname,
            fathername:persone.fathername
        }
        var json = JSON.stringify(create);
        console.log(json);
        const response = await axios.post('http://192.168.1.92:4567/add/person',json);
        return response.data.data.id;
    }

    static async getFind4Person(a,b,c,d){
        const url = 'http://192.168.1.92:4567/find/person/'+a+'/'+b+'/'+c+'/'+d+'';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
        // return null;
    }

    static async getFindFIOPerson(last,first,father){
        const url = 'http://192.168.1.92:4567/find/person/'+last+'/'+first+'/'+father+'/list';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }

    static async getFindFIOphtype(last,first,father,ph,type){
        const url = 'http://192.168.1.92:4567/find/person/'+last+'/'+first+'/'+father+'/'+ph+'/'+type+'';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }

    static async getFindFIOphtypeAddress(last,first,father,ph,type,street,home,apartement){
        const url = 'http://192.168.1.92:4567/find/person/'+last+'/'+first+'/'+father+'/'+ph+'/'+type+'/'+home+'/'+apartement+'/'+street+'';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }

    static async getFindFIOempty(last,first,father){
        const url = 'http://192.168.1.92:4567/find/person/'+last+'/'+first+'/'+father+'/empty';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }

    static async putUpdateAddress(id,homeA,appartementA,streetName){
        const url = 'http://192.168.1.92:4567/update/address/'+id+'';
        console.log(url);

        let create = {
            home:homeA,
            appartement:appartementA,
            street:{
                streetname:streetName
            }
        }
        var json = JSON.stringify(create);
        console.log(json);

        const response = await axios.put(url)
        // для вытягивания
        return response.data;
    }

    static async deleteAddress(id){
        const url = 'http://192.168.1.92:4567/delete/address/'+id+'';
        console.log(url);
        const response = await axios.delete(url)
        // для вытягивания
        return response.data;
    }

    static async postAddPhone(id,number,type){
        const url = 'http://192.168.1.92:4567/add/phone/'+id+'';
        console.log(url);

        let create = {
            number:number,
            phoneType:{
                id:type
            }
        }
        var json = JSON.stringify(create);
        console.log(json);

        const response = await axios.post(url)
        // для вытягивания
        return response.data;
    }

    static async putUpdatePhone(id,pos,number,type){
        const url = 'http://192.168.1.92:4567/update/phone/'+id+'/'+pos+'';
        console.log(url);

        let create = {
            number:number,
            phoneType:{
                id:type
            }
        }
        var json = JSON.stringify(create);
        console.log(json);

        const response = await axios.put(url)
        // для вытягивания
        return response.data;
    }

    static async deletePhone(id,pos){
        const url = 'http://192.168.1.92:4567/delete/phone/'+id+'/'+pos+'';
        console.log(url);
        const response = await axios.delete(url)
        // для вытягивания
        return response.data;
    }

    static async deletePhone(id){
        const url = 'http://192.168.1.92:4567/delete/person/'+id+'';
        console.log(url);
        const response = await axios.delete(url)
        // для вытягивания
        return response.data;
    }
}