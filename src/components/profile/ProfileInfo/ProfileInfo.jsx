import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content_background}>
                <img src='https://i.ucrazy.ru/files/i/2012.6.5/1338913960_f88c636ee0178de20d2dead9e01.jpg'/>
            </div>
            <div className={s.content_avatar}>
                <img src='https://cdn.fishki.net/upload/post/2020/07/22/3375916/14305.jpg'/>
            </div>
        </div>
    );
}

export default ProfileInfo;