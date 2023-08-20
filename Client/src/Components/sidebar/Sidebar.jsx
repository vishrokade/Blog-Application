import "./sidebar.css"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItems">
                <span className="sidebarTitles">ABOUT ME</span>
                <img src="/images/profile.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero eius et veritatis error cum amet doloribus officiis asperiores quia reiciendis fugit, tempore hic placeat quis nobis velit consequuntur atque.</p>
            </div>
            <div className="sidebarItems">
            <span className="sidebarTitles">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>

            <div className="sidebarItems">
                <span className="sidebarTitles">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}