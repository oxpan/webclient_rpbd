import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Loader from "./UI/Loader/Loader";

const FindForm = ({finds4,findFIO,findFIOph,findFIOEmpty,findALL,filter}) => {

    const [findVar,setFindVar] = useState({
        find4:'',
        findF:'',
        findI:'',
        findO:'',
        findStreet:'',
        findHome:'',
        findApartment:'',
        findPhone:'',
        findPhType:''
    })
    const [isLoad,setLoad] = useState(false);

    const personFindALL = (e) => {
        e.preventDefault();

        if (findVar.findI === '' || findVar.findF === '' || findVar.findO === '')return;

        if (findVar.findPhType !== '' && findVar.findPhone !== ''){

            if (findVar.findStreet !== '' && findVar.findHome !== '' && findVar.findApartment !== ''){

                const fiALL = {
                    lastname: findVar.findF,
                    firstname:findVar.findI,
                    fathername:findVar.findO,
                    ph:findVar.findPhone,
                    type:findVar.findPhType,
                    street:findVar.findStreet,
                    home:findVar.findHome,
                    apartment: findVar.findApartment
                }
                setLoad(true);
                setTimeout(()=> {
                    setLoad(false);
                    findALL(fiALL);
                },1000)
                setFindVar({findF: '',findI: '',findO: '',ph:'',findPhType: '',findStreet: '',findHome: '',findApartment: ''});
            }else {
                const fiPh = {
                    lastname: findVar.findF,
                    firstname:findVar.findI,
                    fathername:findVar.findO,
                    ph:findVar.findPhone,
                    type:findVar.findPhType
                }
                setLoad(true);
                setTimeout(()=> {
                    setLoad(false);
                    findFIOph(fiPh);
                },1000)
                setFindVar({findF: '',findI: '',findO: '',ph:'',findPhType: ''});
            }
        }else {
            const fiEmpty = {
                lastname: findVar.findF,
                firstname:findVar.findI,
                fathername:findVar.findO
            }
            setLoad(true);
            setTimeout(()=> {
                setLoad(false);
                findFIOEmpty(fiEmpty);
            },1000)
            setFindVar({findF: '',findI: '',findO: ''});
        }

    }
    const personFindFIO = (e) => {
        e.preventDefault();
        setLoad(true);
        setTimeout(()=> {
            setLoad(false);
            findFIO(findVar.findF.trim(), findVar.findI.trim(), findVar.findO.trim());
        },1000)
        setFindVar({findF: '',findI: '',findO: ''});
    }
    const personFind4 = (e) => {
        e.preventDefault();
        const number = findVar.find4;
        if (number.length > 4 || number === '')return;
        setLoad(true);
        var a,b,c,d;
        if (number[1] === undefined){
            a = '0';
            b = '0';
            c = '0';
            d = number[0];
        } else if (number[2] === undefined){
            a = '0';
            b = '0';
            c = number[0];
            d = number[1];
        }else if (number[3] === undefined){
            a = '0';
            b = number[0];
            c = number[1];
            d = number[2];
        } else {
            a = number[0];
            b = number[1];
            c = number[2];
            d = number[3];
        }
        setTimeout(()=> {
            setLoad(false);
            finds4(a,b,c,d);
        },1000)
        setFindVar({find4: ''});
    }

    return (
        <div>
            {
                isLoad
                    ?
                    <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
                    :

                    <div>
                        {filter === 'findALL'
                            ?
                            <div>
                                <label>??????:</label>
                                <Input
                                    type={"text"}
                                    placeholder={"??????????????:"}
                                    value={findVar.findF}
                                    onChange={e => setFindVar({...findVar, findF: e.target.value})}
                                />
                                <Input
                                    type={"text"}
                                    placeholder={"??????:"}
                                    value={findVar.findI}
                                    onChange={e => setFindVar({...findVar, findI: e.target.value})}
                                />
                                <Input
                                    type={"text"}
                                    placeholder={"????????????????:"}
                                    value={findVar.findO}
                                    onChange={e => setFindVar({...findVar, findO: e.target.value})}
                                />

                                <hr style={{margin: '15px 0'}}/>
                                <label>??????????:</label>
                                {
                                    findVar.findI !== '' && findVar.findO !== '' && findVar.findF !== ''
                                        ?
                                        <div>
                                            <Input
                                                type={"text"}
                                                placeholder={"??????:"}
                                                disabled={false}
                                                value={findVar.findPhType}
                                                onChange={e => setFindVar({...findVar, findPhType: e.target.value})}
                                            />

                                            <Input
                                                type={"text"}
                                                placeholder={"??????????:"}
                                                disabled={false}
                                                value={findVar.findPhone}
                                                onChange={e => setFindVar({...findVar, findPhone: e.target.value})}
                                            />
                                        </div>
                                        :

                                        <div>

                                            <Input
                                                type={"text"}
                                                placeholder={"??????:"}
                                                value={''}
                                                disabled={true}
                                            />

                                            <Input
                                                type={"text"}
                                                placeholder={"??????????:"}
                                                disabled={true}
                                                value={''}
                                            />
                                        </div>
                                }

                                <hr style={{margin: '15px 0'}}/>
                                <label>??????????:</label>
                                {
                                    findVar.findPhType !== '' && findVar.findPhone !== ''
                                        ?
                                        <div>
                                            <Input
                                                type={"text"}
                                                placeholder={"??????????:"}
                                                disabled={false}
                                                value={findVar.findStreet}
                                                onChange={e => setFindVar({...findVar, findStreet: e.target.value})}
                                            />

                                            <Input
                                                type={"text"}
                                                placeholder={"??????:"}
                                                disabled={false}
                                                value={findVar.findHome}
                                                onChange={e => setFindVar({...findVar, findHome: e.target.value})}
                                            />

                                            <Input
                                                type={"text"}
                                                placeholder={"????????????????:"}
                                                disabled={false}
                                                value={findVar.findApartment}
                                                onChange={e => setFindVar({...findVar, findApartment: e.target.value})}

                                            />
                                        </div>
                                        :
                                        <div>
                                            <Input
                                                type={"text"}
                                                placeholder={"??????????:"}
                                                disabled={true}
                                                value={''}
                                            />

                                            <Input
                                                type={"text"}
                                                placeholder={"??????:"}
                                                disabled={true}
                                                value={''}
                                            />

                                            <Input
                                                type={"text"}
                                                placeholder={"????????????????:"}
                                                disabled={true}
                                                value={''}
                                            />
                                        </div>
                                }


                                <hr style={{margin: '15px 0'}}/>
                                <Button onClick={personFindALL}>?????????? ??????????????</Button>
                            </div>
                            : filter === 'Find4'
                                ?
                                <div>
                                    <label>?????????????? 4 ?????????? ???? ????????????</label>
                                    <Input
                                        type={"text"}
                                        placeholder={"??????????:"}
                                        value={findVar.find4}
                                        onChange={e => setFindVar({...findVar, find4: e.target.value})}
                                    />

                                    <hr style={{margin: '15px 0'}}/>

                                    <Button onClick={personFind4}>?????????? ??????????????</Button>
                                </div>
                                : filter === 'findFIO'
                                    ?
                                    <div>
                                        <label>??????:</label>
                                        <Input
                                            type={"text"}
                                            placeholder={"??????????????:"}
                                            value={findVar.findF}
                                            onChange={e => setFindVar({...findVar, findF: e.target.value})}
                                        />

                                        <Input
                                            type={"text"}
                                            placeholder={"??????:"}
                                            value={findVar.findI}
                                            onChange={e => setFindVar({...findVar, findI: e.target.value})}
                                        />

                                        <Input
                                            type={"text"}
                                            placeholder={"????????????????:"}
                                            value={findVar.findO}
                                            onChange={e => setFindVar({...findVar, findO: e.target.value})}
                                        />

                                        <hr style={{margin: '15px 0'}}/>
                                        <Button onClick={personFindFIO}>?????????? ??????????????</Button>
                                    </div>
                                    :
                                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                                        <h1>???</h1>
                                    </div>
                        }
                    </div>
            }
        </div>
    );
};

export default FindForm;