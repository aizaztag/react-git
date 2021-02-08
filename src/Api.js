import axios from 'axios';


export const fetchData =  () =>  {
     const  userPromise =  fetchUser();
     const  postsPromise =  fetchPosts();
     const  photosPromise =  fetchPhotos();
     return  {
         user:wrapPromise(userPromise),
         posts:wrapPromise(postsPromise),
         photos:wrapPromise(photosPromise)
     }
}

 const wrapPromise = (promise) => {
      let  status =  'pending';
      let result  ;
      let suspender = promise.then(
          res => {
               status = 'success';
               result = res
          },
          err => {
               status = 'error';
               result = err
          },
      );
      return {
          read() {
            if (status === "pending") {
                throw suspender;
              } else if (status === "error") {
                throw result;
              }
              return result;
          }
        }
      }


const fetchUser = () => {
    console.log('fetching user')
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
     .then(res => res.data)
     .catch(err => console.log('error' , err))
};

const fetchPosts = () => {
    console.log('fetching user')
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
     .then(res => res.data)
     .catch(err => console.log('error' , err))
};
const fetchPhotos = () => {
    console.log('fetching user')
    return axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
     .then(res => res.data)
     .catch(err => console.log('error' , err))
};

