import axios from "axios";
import { BrowserRouter as Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";


const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [value, setValue] = useState("NONE");

  const filteredItems = posts.filter((item) =>
    item.title.toLocaleLowerCase().includes(filterText)
  );
  let sortItems;
  const itemsToDisplay = sortItems ? sortItems : filteredItems;

  const handleClick = () => {
    
    if (value === "NONE") {
      sortItems = posts.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        else return 0;
      });
      
      setValue("ASC"); 
    }
    else if (value === "ASC") {
      sortItems = posts.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
        else if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
        else return 0;
      });
      
      setValue("DESC");
      
    }
    else if (value === "DESC") {
      sortItems = posts.sort((a, b)=>{return a.id -b.id;});
      
      setValue("NONE");
      
    }
    
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setPosts(response.data);

        setIsLoading(false);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  console.log("post= ", posts);

  if (isloading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Search by title"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
          />
        </div>
        <table>
          <tr>
            <th>Id</th>
            <th onClick={handleClick}>Title {value}</th>
            <th>Actions</th>
          </tr>

          {itemsToDisplay.map((post) => (
            <tr Key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <Link to={`/PostDetail/${post.id}`}>View Detail</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
};
export default PostsPage;
