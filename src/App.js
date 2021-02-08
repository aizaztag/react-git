  import './App.css';
  import React , {Suspense} from 'react';
  import ProfilePage from './ProfilePage'
  import {fetchData} from './Api'

  const resource = fetchData(); 

  
  function App() {
    return (
      <div className="App">


    <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
        <Suspense fallback={<h1>Loading User ... </h1>}>
           <ProfileDetails />
         </Suspense>
          <Suspense fallback={<h1>Loading Posts ... </h1>}>
           <ProfilePosts />
         </Suspense>
          <Suspense fallback={<h1>Loading Posts ... </h1>}>
           <ProfilePhotos />
         </Suspense>
      </ErrorBoundary>


         
      </div>
    );
  }

  const ProfileDetails = () => {
         const user = resource.user.read();
         return(
             <ul>
               <li>username : {user.username}</li>
             </ul>
         );
  } 
  
  const ProfilePosts = () => {
         const posts = resource.posts.read();
         
         return(
          <ul>
            {posts.map(post => (
               <li key={post.id}>
                 {post.title}
               </li>
            ))}
         </ul>);
  } 
  
  const ProfilePhotos = () => {
         const photos = resource.photos.read();
         console.log('photo' , photos)
         return(
          <ul>
            {photos.map(photo => (
               <li key={photo.id}>
                <img src={photo.thumbnailUrl} />
               </li>
            ))}
         </ul>);
  } 


  class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
      return {
        hasError: true,
        error
      };
    }
    render() {
      if (this.state.hasError) {
        return this.props.fallback;
      }
      return this.props.children;
    }
  }

  export default App;




  
 