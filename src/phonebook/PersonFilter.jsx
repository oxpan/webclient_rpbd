import React from 'react';
import Select from "./UI/select/Select";


const PersonFilter = ({filter,setFilter}) => {
    return (
        <span>
            <Select
                value={filter}
                onChange={fill => setFilter(fill) }
                defaultValue={"поиск"}
                options={[
                    {value:'Find4',name:"по 4 цифрам"},
                    {value:'findFIO',name:"по ФИО"},
                    {value:'findALL',name:"по всем атрибутам"}
                ]}
            />
        </span>
    );
};

export default PersonFilter;