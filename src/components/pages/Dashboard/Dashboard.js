import React from 'react';
import useFirestore from "hooks/useFirestore";

function Dashboard() {

    const { docs } = useFirestore("bitcoin");
    return (
        <div>
            {docs}
        </div>
    )
}

export default Dashboard
