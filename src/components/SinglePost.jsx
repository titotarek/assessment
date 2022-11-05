
import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SinglePost() {
  const [post, setPosts] = useState(null) // {}
  const { id } = useParams();



  useEffect(() => {
    fetch(`/api/posts/${id}/`)
      .then((response) => response.json())
      .then((json) => setPosts(json.setPosts))
  }, [id]) // <-- used as dependency


    
	return (
        <div>
      <div className='cards container'>
              
            <div className='card'>
                <ul>
                <li><span>Title:</span> {post.id}</li>
                </ul>
           </div>
        
       </div>
    </div>  
	
	)
}


