import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Confirm } from "../../services/users";

function Welcome() {
  const userEmail = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState("");
  useEffect(() => {
    Confirm(userEmail.id)
      .then(({ data }) => {
        if (!data.err) {
          setMessage("ok");
          setIcon("grean");
        } else {
          setMessage(data.msg);
          setIcon("red");
        }
      })
      .catch((err) => {
        navigate("/");
      });
  });
  return (
    <>
   <h2>acount confirmation :</h2>
   <p>an email </p> <b>{userEmail}</b>
      <img src={`/img/${icon}_icon.png`} alt=''/>
      <p>check your email and back to proceed!</p>
      <NavLink to={`/login/${userEmail}`}></NavLink>
    </>
  );
}

export default Welcome;
