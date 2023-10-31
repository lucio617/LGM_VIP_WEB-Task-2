import { Card } from "./Card";
import { useState,useEffect } from "react";

export function All() {
    const [allUsers, setAllUsers] = useState([])
  

    const search=""
    const loadData = async () => {
     
        let response = await fetch("https://reqres.in/api/users?page=1", {
            method: "GET",
            // headers: {
            //     "Content-Type": "application/json",
            // },
        });
      
        response = await response.json();
        console.log(response.data)
        

        // console.log(response)
        setAllUsers(response.data)
    };
    useEffect(() => {
        loadData();
    }, []);

    if (allUsers.length === 0) {
        return <div>Loading...</div>;
      }
    return (
        <div>
            <div className="section" style={{display:"flex",alignItems:"center",justifyContent:'center'}}>
                <h1>All Users</h1>
            </div>
            <div className="subheader2">
                {allUsers.map((user) => {
                    return (
                        <div><Card first_name={user.first_name} last_name={user.last_name} email={user.email} img_src={user.avatar}></Card></div>

                    )
                })}

            </div>
        </div>
    )
}