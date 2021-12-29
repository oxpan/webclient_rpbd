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

    static async getFindFIOphtype(person){
        const url = 'http://192.168.1.92:4567/find/person/'+
            person.lastname+'/'+
            person.firstname+'/'+
            person.fathername+'/'+
            person.ph+'/'+
            person.type+'';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }

    static async getFindFIOphtypeAddress(person){
        const url = 'http://192.168.1.92:4567/find/person/'+
            person.lastname+'/'+
            person.firstname+'/'+
            person.fathername+'/'+
            person.ph+'/'+
            person.type+'/'+
            person.home+'/'+
            person.apartment+'/'+
            person.street+'';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }

    static async getFindFIOempty(person){
        const url = 'http://192.168.1.92:4567/find/person/'+person.lastname+'/'+person.firstname+'/'+person.fathername+'/empty';
        console.log(url);
        const response = await axios.get(url)
        // для вытягивания
        return response.data;
    }

    static async putUpdateAddress(pers){
        const url = 'http://192.168.1.92:4567/update/address/'+pers.id+'';
        console.log(url);

        let create = {
            home:pers.home,
            appartement:pers.appartement,
            street:{
                streetname:pers.street
            }
        }
        var json = JSON.stringify(create);
        console.log(json);

        const response = await axios.put(url,json);
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

    static async postAddPhone(pers){
        const url = 'http://192.168.1.92:4567/add/phone/'+pers.id+'';
        console.log(url);

        let create = {
            number:pers.number,
            phoneType:{
                id:pers.type
            }
        }
        var json = JSON.stringify(create);
        console.log(json);

        const response = await axios.post(url,json);
        // для вытягивания
        return response.data;
    }

    static async putUpdatePhone(pers){
        console.log(pers);
        const url = 'http://192.168.1.92:4567/update/phone/'+pers.id+'/'+pers.inumber+'';
        console.log(url);

        let create = {
            number:pers.number,
            phoneType:{
                id:pers.type
            }
        }
        var json = JSON.stringify(create);
        console.log(json);

        const response = await axios.put(url,json);
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

    static async deletePerson(id){
        const url = 'http://192.168.1.92:4567/delete/person/'+id+'';
        console.log(url);
        const response = await axios.delete(url)
        // для вытягивания
        return response.data;
    }

    static async putUpdateFIO(pers){
        console.log(pers);
        const url = 'http://192.168.1.92:4567/update/person/'+pers.lastname+'/'+pers.firstname+'/'+pers.fathername+'/'+pers.id+'';
        console.log(url);


        const response = await axios.put(url)
        // для вытягивания
        return response.data;
    }
}