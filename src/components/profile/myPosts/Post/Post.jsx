import s from "./Post.module.css";


const Post = (props) => {
   return (
     <div className={s.post}>
       <div className={s.item__avatar}>
         <img src="https://steamuserimages-a.akamaihd.net/ugc/843713478602365394/D8A204A7ADD021CA5E4100F3420881D2F6240505/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" />
         <div className={s.item}>{props.messages}</div>
       </div>
       <div>{props.like}Likes</div>
     </div>
   );
}

export default Post;