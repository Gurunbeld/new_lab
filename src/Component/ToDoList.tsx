import React, {useState} from 'react';

type ListElement = {
    name:string,
    description:string
}
const ToDoList = () => {
    const[name, setName] = useState("");
    const[description, setDescription] = useState("");
    const[list, setList] = useState<ListElement[]>([]);

    const addElement = () => {
        setList([{
            name:name,
            description:description
        }])
    }
    return (
        <div>
            <input type="text" placeholder={"name"} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder={"description"} onChange={(e) => setDescription(e.target.value)}/>

            <div>
                <button onClick={addElement}></button>
            </div>
        </div>
    );
};

export default ToDoList;