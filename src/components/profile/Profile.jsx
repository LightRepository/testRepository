import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";





const Profile = (dataAt) => {
   return (
      <div className={s.content}>
        <ProfileInfo />
        <MyPosts data={dataAt.data}/>
    </div>
   );
}

export default Profile;