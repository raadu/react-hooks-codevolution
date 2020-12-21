import {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios 
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
          console.log("Error: ", err);
        })
    },[]);
    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return(
                        <li key={posts.id}>
                            {post.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
 
export default DataFetching;