import React, { useEffect, useState } from "react";
import Home1 from "./Home1";

const Home = () => {
    const [document, setDocument] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setDocument(data));
    }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-8 pl-3">
       {
                document.map(topics =><Home1
                key={topics.id}
                topics={topics}
                >
                </Home1>)
       }
    </div>
  );
};

export default Home;
