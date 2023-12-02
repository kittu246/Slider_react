import React, { useState,useEffect } from "react";
import { shortList, list, longList } from "../data";
import { ImQuotesRight } from "react-icons/im";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
const Courosel = () => {
  const [users, setUsers] = useState(list);
  const [CurrentUser,setCurrentUser] = useState(0);

  useEffect(()=>{
   let intervalId = setInterval(()=>{nextUser()},2000);
   return () =>{clearInterval(intervalId)}
  },[CurrentUser])

  function prevUser(){
    if(CurrentUser <=0){
        setCurrentUser(users.length-1)
     
    }
    else{
        setCurrentUser(CurrentUser-1)
    }
    

  }

  function nextUser(){
    if(CurrentUser >=users.length-1){
        setCurrentUser(0)
      
    }
    else{
        setCurrentUser(CurrentUser+1)
    }
   

  }
  return (
    <section className="userContainer">
      {users.map((user,index) => {
        const { id, image, name, title, quote } = user;

        return (
          <div key={id} className="user" style={{transform:`translateX(${(index -CurrentUser)*100}%)`, opacity:CurrentUser == index ? 1:0, visibility: CurrentUser == index ? "visible":"hidden" }} >
            <img src={image} />
            <h2>{name}</h2>
            <h5>{title}</h5>
            <p>{quote}</p>

            <ImQuotesRight className="quoteIcon" />
          </div>
        );
      })}
      <button className="less" onClick={prevUser}><FaLessThan /></button>
      <button className="greater" onClick={nextUser}><FaGreaterThan /></button>
    </section>
  );
};

export default Courosel;
