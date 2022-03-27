import s from "./Dialogs.module.css";

import Messages from "./Messages/Messages";
import DialogsUser from "./ChoiseDialogUser/ChoiseDialogUser";

let DataMessages = [
    {message: "Hola!"},
    {message: "Hello!"},
    {message: "Привет!"},
    {message: "Когда макетик сделаешь?"},
    {message: "Ук"},
    {message: "Рф"},
]


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsUser/>
            <Messages data={DataMessages}/>
        </div>
    );
}

export default Dialogs;