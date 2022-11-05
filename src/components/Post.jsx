
import React,{ useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import About from "./About"

	
export default function Post() {
const [posts, setPosts] = useState([])
const [visible, setVisible] = useState(3)
const [searchTerm,  setSearchTerm] = useState("")


const showMoreItem = () => {
    setVisible(prv => prv + 3)

}

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json.posts))
  }, [])
   
           
	return (
        <div>
          <div className='search container'>
          <h2 className='search-title'>Search</h2>

        <div className='search-bar' >
        <i class="fa-solid fa-magnifying-glass"></i>
         <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
         />
        </div>
          </div>
  
      <div className='cards container'>
          {posts 
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
            return false;
          })
          .slice(0, visible)
           .map((post) => { 
            return(
              
              <div className='card'>
                <ul key={post.id}>
                  <li className='card-img'><img src={post.author.avatar} alt={post.author.avatar} /></li> 
                        <ul className='info'>
               <Link to={`/single-post/${post.id}`}>
                           <li><span>Title:</span> {post.title}</li>
                     
                 </Link>

                      </ul>
                </ul>
           </div>
        )
        
      })}
       </div>
              <button  className='btn-load' onClick={showMoreItem}>load more</button>
              {/* <About/> */}
    </div>  
	
	)
}

