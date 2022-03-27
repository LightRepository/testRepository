import s from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props) => {
    let MyProfilePosts = props.data.map( (post) => <Post messages={post.message} like={post.likeCount}/>);
    return (
        <div>
            <div className={s.content_myPost}>
                my posts
                <div>New post</div>
            </div>
            {MyProfilePosts}
        </div>
    );
}





export default MyPosts;