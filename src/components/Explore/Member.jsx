import classes from "./Explore.module.css";
import { useState } from "react";

const Member = (props) => {
  const [request, setRequest] = useState(false);

  return (
    <div className="flex flex-col p-[1.5rem] max-w-[23rem] bg-white shadow-md text-gray-700" key={props.alumnus.user_id}>
      <img
        src={props.alumnus.profile_picture || "default-profile-image-url"}
        alt={props.alumnus.name}
        className={classes.img}
      />
      <div className={classes.one}>
        <h2 className={classes.username}>{props.alumnus.name}</h2>
        <span className={classes.position}>
          {props.alumnus.position}, {props.alumnus.company}
        </span>
        <p>Skills: {props.alumnus.skills}</p>
      </div>
      <button
        type="button"
        className={`${classes.button} ${request ? classes.gray : classes.normal}`}
        onClick={() => {setRequest(!request)}}
      >
        {request ? "Requested" : "Connect"}
      </button>
    </div>
  );
};

export default Member;