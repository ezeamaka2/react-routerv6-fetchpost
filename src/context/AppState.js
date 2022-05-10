import React, {useState, useEffect} from 'react'
import AppContext from './app-context';

const AppState = ({children}) => {
    const [posts, setPost] = useState([]);


  useEffect(() =>{
    const fetchPost = async () => {
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await posts.json();
      setPost(data)
    } 
    fetchPost()
  }, [])
  return (
    <AppContext.Provider value={{posts}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState