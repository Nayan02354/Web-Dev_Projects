import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Settings = () => {
  const { user } = useAuth();

  const [isEditable, setIsEditable] = useState(false);

    const hancleSave = 

  return (
    <>
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <img src={user.photo} alt="" className="w-full h-full object-cover" />
      </div>

      <div>
        <div>user.fullName</div>

        <div>user.email</div>

        <div>user.phone</div>
      </div>

      {
        isEditable === true ? (
        <>
            <button onClick={() => setIsEditable(true)} className="border p-3">
        Cancel
      </button>

          <button onClick={() => setIsEditable(true)} className="border p-3">
        Save
      </button>
        </>
        )

  

      <button onClick={() => setIsEditable(true)} className="border p-3">
        Edit
      </button>
         

    </>
       };
  );
};

export default Settings;
