import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Edyoda = () => {
    const [blog, setblog] = useState([]);
    useEffect(()=>{
        axios("https://api.edyoda.com/v1/blog/")
        .then(res =>  setblog(res.data))

    },[])
    return ( <>
        
        {blog.map(item=>(
            <div className="card" style="width: 18rem;">
            <img src={item.small_image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-title">{`${item.authorname}|05 Jul 2019`}</h6>
              <p className="card-text">{item.description}</p>
              
              
            </div>
          </div>
        ))}
    </> );
}
 
export default Edyoda;