import React from 'react'

function UploadAvatar() {
    return (
        <div>
            <form>
                <label htmlFor="avatar">Upload picture:</label>
                <input type="file" name="avatar"/>
            </form>
        </div>
    )
}

export default UploadAvatar
