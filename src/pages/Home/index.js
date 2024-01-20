import { useState, useEffect } from 'react';

function Home() {
    const [post, setpost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((res) => setpost(res));
    }, []);

    return (
        <ul>
            {post.map((post1) => (
                <li key={post1.id}>{post1.name}</li>
            ))}
        </ul>
    );
}

export default Home;
