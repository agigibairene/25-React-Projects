import "./style.css";
export default function User({userInfo}){
    return (
        <div className="user">
            <div>
                <img src={userInfo} alt="user image"/>
            </div>
        </div>
    )
}