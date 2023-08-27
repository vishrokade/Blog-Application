import "./singlePost.css"

export default function SinglePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg" 
                    alt=""
                    className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<b>Vishal</b></span>
                    <span className="singlePostDate"> 1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, facilis iste. Alias, quisquam sint. Sapiente consequatur harum mollitia, ipsa soluta ea asperiores distinctio assumenda voluptates quos nemo alias corporis! Reprehenderit?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, facilis iste. Alias, quisquam sint. Sapiente consequatur harum mollitia, ipsa soluta ea asperiores distinctio assumenda voluptates quos nemo alias corporis! Reprehenderit?
              
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, facilis iste. Alias, quisquam sint. Sapiente consequatur harum mollitia, ipsa soluta ea asperiores distinctio assumenda voluptates quos nemo alias corporis! Reprehenderit?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, facilis iste. Alias, quisquam sint. Sapiente consequatur harum mollitia, ipsa soluta ea asperiores distinctio assumenda voluptates quos nemo alias corporis! Reprehenderit?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, facilis iste. Alias, quisquam sint. Sapiente consequatur harum mollitia, ipsa soluta ea asperiores distinctio assumenda voluptates quos nemo alias corporis! Reprehenderit?
                </p>
            </div>
        </div>
    )
}