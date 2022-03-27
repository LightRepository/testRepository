import s from "./../Dialogs.module.css";

const Message = (props) =>{
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

let DataMessages = [
    {message: "Hola!"},
    {message: "Hello!"},
    {message: "Привет!"},
    {message: "Когда макетик сделаешь?"},
    {message: "Ук"},
    {message: "Рф"},
]

let MessagesElement = DataMessages
    .map(m => <Message message={m.message}/>);


const Messages = (props) => {
    return (
            <div className={s.messages}>
                {MessagesElement}
            </div>
    );
}

export default Messages;