import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Confirm } from "../services/users";

function EmailVerify() {
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState("");
  const navigate = useNavigate();
  const param = useParams();
  useEffect(() => {
    const verifiyEmail = async () => {
      try {
        const { data } = await Confirm(param.id);
        if (!data.err) {
          setMessage("confirm");
          setIcon("grean");
        } else {
          setMessage(data.msg);
          setIcon("red");
        }
      } catch (err) {
        console.log(err);
      }
    };
    verifiyEmail();
  }, [param]);
  console.log(param.id);
  return (
    <>
      {message === "confirm" ? (
        <div>
          <img src={""} alt="succes_img" srcset="" />
          <h2>email virefied</h2>
          <NavLink to={"/login"}>
            <button>se connecter</button>
          </NavLink>
        </div>
      ) : (
        <h1>{message} hhhhhhhhh</h1>
      )}
    </>
  );
}

export default EmailVerify;
