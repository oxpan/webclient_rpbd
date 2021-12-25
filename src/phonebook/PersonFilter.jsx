import React from 'react';
import Select from "./UI/select/Select";
import Button from "./UI/button/Button";

const PersonFilter = ({filter,setFilter}) => {
    return (
        <div>
            <Select
                value={filter.find}
                // onChange={findPerson}
                defaultValue={"поиск"}
                options={[
                    {value:'Find4',name:"по 4 цифрам"},
                    {value:'findFIO',name:"по ФИО"},
                    {value:'findALL',name:"по всем атрибутам"}
                ]}
            />
            {/*пока выбор поиска нерабочий и выдает ошибки. Непаниковать!*/}


            {/*<Input*/}
            {/*    placeholder={'Данные...'}*/}
            {/*/>*/}
            {/*<select name="" id="">*/}
            {/*    <option value="value1">поиск по 4 цифрам</option>*/}
            {/*    <option value="value1">поиск по ФИО</option>*/}
            {/*    <option value="value1">поиск по всем атрибутам</option>*/}
            {/*</select>*/}
            <Button>🔎</Button>
        </div>
    );
};

export default PersonFilter;