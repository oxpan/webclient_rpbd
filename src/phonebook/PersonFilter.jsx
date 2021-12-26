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

            <Button>🔎</Button>
        </div>
    );
};

export default PersonFilter;