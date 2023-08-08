import Sidebar from "../../Components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return(
        <div className="settings">
            <div className="settingsWrapper">

                <div className="settingsTitles">
                    <span className="updateAccount"> update your account</span>
                    <span className="deleteAccount">delete account</span>
                </div>

                <form className="settingForm">
                    <label>profile picture</label>
                    <div className="settingProfile">
                        <img 
                            src="/images/profile.png" alt="" 
                        />

                        <label htmlFor="fileInput">
                            <i className="settingProfileIcon fa-solid fa-user"></i>
                        </label>

                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder="Vishal"/>
                    <label>Email</label>
                    <input type="text" placeholder="vishal@gmail.com"/>
                    <label htmlFor="">Password</label>
                    <input type="password" />

                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}