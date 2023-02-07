
import React, { useEffect } from 'react'
import { Link , Outlet , useSearchParams} from 'react-router-dom'

const Users = () => {
  
  console.log('Users Render')

  useEffect(()=>{
      
    return ()=>{
        console.log('Users UnMounted')
    }
  },[])
  
  // useSearchParams : here this hook is similar to useState hook in behaviour but instead of storing state in memory though it is saved on URL of browser , this hook return 2 value one is query string object and 2nd is a function to set searchParams

  const [SearchParams,setSearchParams] = useSearchParams();
  
  // here getting query string property filter value 
  const ShowActiveUsers = SearchParams.get('filter');

  console.log(ShowActiveUsers);
  
  return (

    <>
    
      <h1>Users Component</h1>
      
      <ul>
          <li><Link to="1">Aman</Link></li>
          <li><Link to="2">Acey</Link></li>
          <li><Link to="3">Puru</Link></li>
          <li><Link to="admin">Admin</Link></li>
      </ul>

      <Outlet/>

      {/* on click of below button we will add and remove query string params filter */}
      <div>
        <button onClick={()=>{

           setSearchParams({filter:'active',add:true})

        }}>Active Users</button>
        <button onClick={()=>{

           setSearchParams({add:false});

        }}>Reset Filter</button>
      </div>

      {/* here based on filter if true we will show this */}

      {ShowActiveUsers ==='active' ? 
        
        <h5>Showing Active Users</h5>

       : <h5>Showing All Users</h5>

      }  

    </>

  )

}

export default Users