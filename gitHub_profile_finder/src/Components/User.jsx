/* eslint-disable react/prop-types */
import "./style.css";
export default function User({userInfo, displayInfo}){

    const dateCreated = new Date(userInfo.created_at);
    const day = dateCreated.getDate();
    const month = dateCreated.getMonth();
    const year = dateCreated.getFullYear();

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];


    return (
        <div className={displayInfo ? "user" : "hidden"}>
            <div>
                <img src={userInfo?.avatar_url} alt="user image"/>
            </div>
            <div className="details">
                <div className="dates">
                    <a href={`https://github.com/${userInfo?.login}`} target="_blank">{userInfo.login}</a>
                    <p><span>User Joined on</span> {`${day} ${monthNames[month]}, ${year}`}</p>
                </div>
                <p><span>Public Repos</span> {userInfo?.public_repos}</p>
                <p><span>Followers</span> {userInfo?.followers}</p>
                <p><span>Following</span> {userInfo?.following}</p>
            </div>
        </div>
    )
}