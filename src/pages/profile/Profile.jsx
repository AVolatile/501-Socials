import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      <Topbar />
      <div className="profile">
      <Sidebar />
      <div className="profileRight">
<div className="profileRightTop">
    <div className="profileCover">

    <img className="profileCoverImg" src={`${PF}post/wallpaper 2.jpg`} alt="" />
    <img className="profileUserImg" src={`${PF}post/d9.jpg`} alt="" />
    </div>
    <div className="profileInfo">
        <h4 className="profileInfoName">Anthony Volatile</h4>
        <span className="profileInfoDesc">Software Intern at 501 database</span>

    </div>

</div>
<div className="profileRightBottom">
      <Feed/>
      <Rightbar profile/>
</div>
      </div>
      </div>
      
    </>
  )
}
