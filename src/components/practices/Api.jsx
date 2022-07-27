import React, { useState, useEffect } from 'react'



const Api = () => {
    const [users, setUsers] = useState([]);

 

    const f = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    };
  
    useEffect(() => {
      f();
    }, []);
    return (
      <div className="App">
        <h1>Hello ReqRes users!</h1>
        <div className="flex">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                  <img key={user.avatar} src={user.avatar} alt="avatar"/>
                </div>
              );
            })}
        </div>
      </div>
    );
}

export default Api