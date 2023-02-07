
import axios from 'axios'
import React , { useReducer,useEffect }from 'react'

const intialState = {

    loading : true,
    error : '',
    posts : []
}

const reducer = (state,action)=>{

    switch (action.type) {
        case 'FETCH_SUCCESS':
            
            return {
                loading:false,
                error:'',
                posts:action.value
            }
    
        case 'FETCH_ERROR':
            
            return {
                loading:false,
                error:action.value,
                posts:[]
            }
        default:
            
            return state;
    }
}

const UseReducerFetch1 = () => {

  const [State, dispatch] = useReducer(reducer,intialState)

  console.log(State);

  // Fetching Posts
  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(respose=>{
        
        dispatch({type:'FETCH_SUCCESS',value:respose.data})

    })
    .catch(error=>{

        dispatch({type:'FETCH_ERROR',value:'There is something wzrong in fetching the data'})

    })

  }, [])
  

  return (

    <>
       
       <h1>UseReducer Fetch Api - 1</h1>

      {
        
        State.loading ? <h3>Loading Please Wait</h3> :

        State.error ? <h3>{State.error}</h3> :

          <ul>
            {
                  State.posts.map((post,index)=>{
                    
                   return index < 10 ? <li key={post.id}>{post.title}</li> : null

                  })
            }
          </ul> 


      } 

    </>

  )

}

export default UseReducerFetch1

// here using useReducer hook my state will be object with property loading which is boolean ,error which is string and post which is array of post comes from API 

// if we perform above same functionality using only useState hook then we have to create 3 different state variable but by using useReducer() we have acheive this complex functionality easily by only one state of component 