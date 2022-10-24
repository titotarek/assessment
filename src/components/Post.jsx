
import React,{ useEffect, useState } from 'react';
	
export default function Post() {
const [posts, setPosts] = useState([])
const [visible, setVisible] = useState(3)

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
      <div className='cards container'>
          {posts.slice(0, visible).map((post) => {
            return(
              
            <div className='card'>
                <ul key={post.id}>
                  <li className='card-img'><img src={post.author.avatar} alt={post.author.avatar} /></li> 
                        <ul className='info'>
                           <li><span>id: {post.id}</span></li>
                           <li><p>Title: {post.title}</p></li>
                          <li><p>Name: {post.author.name}</p></li>
                      </ul>
                </ul>
           </div>
        )
        
      })}
       </div>
              <button  className='btn-load' onClick={showMoreItem}>load more</button>
    
    </div>  
	
	)
}

