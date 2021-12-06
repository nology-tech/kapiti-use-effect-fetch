import React, { useState, useEffect } from "react";

import User from "../../components/User/User";
import RangeSlider from "../../components/RangeSlider/RangeSlider";

const UserGallery = () => {
  const [userArray, setUserArray] = useState([]);
  const [userRange, setUserRange] = useState(10);

  // useEffect() -> 2 params -> function and array
  // array -> dependency array -> if this changes the useeffect will run
  useEffect(() => {
    console.log("the use effect has been called");
    const URL = `https://randomuser.me/api/?results=${userRange}`;
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(userObject => {
        // console.log(userObject.results);
        setUserArray(userObject.results);
      });
  }, [userRange]);

  const userJSX = userArray.map((user, index) => {
    // console.log("user" + index)
    return <User key={"user" + index} name={user.name.first + " " + user.name.last} imgURL={user.picture.large} />;
  });

  const handleUserRange = event => {
    // console.log(event.target.value);
    setUserRange(event.target.value);
  };

  // console.log("UserGallery is on the page");

  return (
    <div>
      <h1>Users</h1>
      <p>User Range : {userRange}</p>
      <p>User Count : {userArray.length}</p>
      <RangeSlider handleUserRange={handleUserRange} userRange={userRange} />
      <div>{userJSX}</div>
    </div>
  );
};

export default UserGallery;
