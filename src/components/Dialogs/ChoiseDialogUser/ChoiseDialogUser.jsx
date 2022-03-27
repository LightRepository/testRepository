import s from "./../Dialogs.module.css";

import {NavLink} from "react-router-dom";


let DataDialogs = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Gena"},
    {id: 3, name: "Pudj"},
    {id: 4, name: "Duf"},
    {id: 5, name: "Stray"},
    {id: 6, name: "Meepo"},
]


const DialogItem = (props) => {
    return (
        <div className={s.dialogs_item + " " + s.active}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

let DialogsElements = DataDialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

const DialogsUser = (props) => {
    return (
            <div className={s.dialogs_item}>
                {DialogsElements}

            </div>
    );
}

export default DialogsUser;