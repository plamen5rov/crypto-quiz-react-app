import React from 'react';
import UploadAvatar from '../UploadAvatar/UploadAvatar';// eslint-disable-next-line
import style from "./Profile.module.css";

function Profile() {
    return (
        <div>
            <h1 style={{padding: 50}}>User Profile Page</h1>
            <UploadAvatar />

        </div>
    )
}

export default Profile
