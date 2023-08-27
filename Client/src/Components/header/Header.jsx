import "./header.css"

export default function Header(){
    return(

        <div className="header">
           <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
           </div>
           <img 
                className="headerImg" 
                src="https://cdn.pixabay.com/photo/2023/08/06/18/55/building-8173603_1280.jpg"
                alt=""
            />
        </div>

    )
}