
import React,{ useEffect, useState } from 'react';

	
export default function Detail() {
  // The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
const [posts, setPosts] = useState([])
const [visible, setVisible] = useState(3)
const [searchTerm,  setSearchTerm] = useState("")

//   showMoreItem Function =>  it show the visible amount of element what by default are (3) in useState ,
const showMoreItem = () => {
  //  And  here we increase the number of the element when click button of load More ic clicked!
    setVisible(prv => prv + 3)

}
    
    //  useEffect Hook is tasks like updating the DOM, fetching data from API end-points.
  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json.posts))
  }, [])
  //  const cat = posts.map(value=> value?.categories)
  //          console.log(cat)
	return (
        <div>
          <div className='search container'>
          <h2 className='search-title'>Search</h2>

        <div className='search-bar' >
        <i className="fa-solid fa-magnifying-glass"></i>
         <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
         />
        </div>
          </div>
      
      <div className='cards container'>
          {posts 
          // and here the filter method will track the input searchTerm to target the value for each 
          //  key press to find the correct element  to  filter
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
          //  and here we use  the map array  method to loop an each element  and return or creates a new array
          //  of the posts Api url,for the specified Data or specified element needed to be displayed in the browser page.
           .map((post) => { 
            return(
              <div className='card'>
                <ul key={post.id}>
                  <li className='card-img'><img src={post.author.avatar} alt={post.author.avatar} /></li> 
                        <ul className='info'>
                          <li>title: <span>{post.title}</span></li>
                          <li>category: <span>{post.categories[0].name}</span></li>


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

