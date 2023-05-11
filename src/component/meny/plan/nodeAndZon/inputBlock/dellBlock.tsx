import React, {useState} from 'react';

const DellBlock = ({setVisible, setMyModal, setName}) => {

    console.log("Рендер DellBlock ____________________________________")
    const [dellA, setDellA] = useState('')
    const [dellB, setDellB] = useState('')
    return (
        <div>
            <div>
                <h6>
                    Удаление ребра
                </h6>
                <div>
                    <br/>
                    Название первой точки:
                    <input type="text" placeholder="Название первой точки" value={dellA} onChange={event => setDellA(event.target.value)} />
                    <br/>
                    Название второй точки:
                    <input type="text" placeholder="Название второй точки" value={dellB} onChange={event => setDellB(event.target.value)} />
                    <button onClick={()=>{setMyModal(true);
                        setDellA('');
                        setDellB('');
                        const mass = [];
                        mass.push(dellA, dellB)
                        setName(mass)}}>Удалить ребро</button>
                    <button onClick={()=>{setVisible(false); setDellA(''); setDellB('')}}>Отменить удаление</button>
                </div>
            </div>
        </div>
    );
};

export default DellBlock;