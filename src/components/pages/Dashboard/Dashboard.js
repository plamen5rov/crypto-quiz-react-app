import React from "react";
import useFirestore from "hooks/useFirestore";
import { useAuth } from "../../utils/AuthContext";

function Dashboard() {
  const { currentUser } = useAuth();
  console.log('User: ', currentUser.email);
  
  const { docs } = useFirestore("bitcoin");
  console.log('Docs: ', docs);
  return (
    <div>
      alert(currentUser);
     
    </div>
  );
}

export default Dashboard;
