import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Dante Cady</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad2.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Coventry</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Rhode Island</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Taken</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arnell Milhouse</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arnell Milhouse</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arnell Milhouse</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arnell Milhouse</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arnell Milhouse</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arnell Milhouse</span>
          </div>
        </div>

      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
