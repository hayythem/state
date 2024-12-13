import React, { useState } from "react";

function Profile() {
  const [fullName, setfullName] = useState("Haythem Neji");
  const [bio, setbio] = useState(
    "Emancipate yourselves from mental slavery None but ourselves can free our minds."
  );
  const [imgSrc, setimgSrc] = useState("./images/me.jpg");
  const [profession, setprofession] = useState("Networker");
    const [show, setshow] = useState(true);

   function handleimg() {
    setshow(!show)
}

  return (
    <div>
          {/* <button onClick={handleimg}> {show ? "HIDE" : "SHOW"} </button>
      {show ? (
        <div>
          <h1> {fullName} </h1>
          <p> {bio} </p>
          <img src={imgSrc} alt="" width="400px" />
          <h5> {profession} </h5>
        </div>
      ) : null} */}
    </div>
  );
}

export default Profile;
