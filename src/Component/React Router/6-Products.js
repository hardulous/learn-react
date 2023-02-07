
import React , {useEffect} from 'react'
import { Link , Outlet , NavLink } from 'react-router-dom';

const Products = () => {

  console.log("Products Render");

  useEffect(()=>{

    return()=>{
      console.log("Products Unmounted")
    }

  },[])

  return (

    <>
      

      <h1>Products Component</h1>

      <input type="search" placeholder='search products' />
      
      {/* adding links for nested route */}
      <ul style={{
          display:'flex',
          justifyContent:'space-between',
          width:'200px',
          listStyleType:'none'
      }}>

        {/* Relative links  */}

          <li>
            <NavLink to='featured'>Featured</NavLink>
          </li>

          <li>
            <NavLink to='new'>New</NavLink>
          </li>

          {/* Absolute links  */}
 
          {/* <li>
            <Link to='/products/featured'>Featured</Link>
          </li>

          <li>
            <Link to='/products/new'>New</Link>
          </li> */}

      </ul>
      
      {/* here but for nested Route component to show we need to specify the position in products where we want to show that nested component and for this we Outlet component  */}
      <Outlet/> 

      <p>My Name is Aman Bisht</p>
    
    </>

  )

}

export default Products

// make sure for nested route never use forward slash / that is /new and /featured

// here by this we have changed only a portion of component or ui by nested route feature 