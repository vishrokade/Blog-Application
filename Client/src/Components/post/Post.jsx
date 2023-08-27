import { Link } from "react-router-dom/dist"
import "./post.css"

export default function Post(){
    return(
        <div className="post">
           <img className="postImg"
                src="https://cdn.pixabay.com/photo/2023/08/02/14/21/cloud-8165401_1280.jpg" 
                alt="" 
            />

            <div className="postInfo">
                <div className="postCats">
                   <span className="postCat">Music</span>
                   <span className="postCat">Life</span>
                </div>
                
                <Link className ="link" to="/post/:postID"><span className="postTitle">Lorem ipsum dolor</span></Link>
                <hr />
                <span className="postDate"> abhi abhi dale hai</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus nihil et numquam autem laboriosam excepturi itaque beatae recusandae quasi nesciunt tenetur tempore eos minus, quod, officiis iure maiores in Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, debitis. Explicabo quam, dicta molestias totam et laboriosam perspiciatis! Ea tempore totam adipisci harum eos minima obcaecati natus accusantium necessitatibus non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus nihil et numquam autem laboriosam excepturi itaque beatae recusandae quasi nesciunt tenetur tempore eos minus, quod, officiis iure maiores in Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, debitis. Explicabo quam, dicta molestias totam et laboriosam perspiciatis! Ea tempore totam adipisci harum eos minima obcaecati natus accusantium necessitatibus non
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus nihil et numquam autem laboriosam excepturi itaque beatae recusandae quasi nesciunt tenetur tempore eos minus, quod, officiis iure maiores in Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, debitis. Explicabo quam, dicta molestias totam et laboriosam perspiciatis! Ea tempore totam adipisci harum eos minima obcaecati natus accusantium necessitatibus non</p>
        </div>
    )
}
