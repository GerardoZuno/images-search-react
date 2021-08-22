import React from 'react'

function Error({message}) {
    return (
        <p className="my-3 p-4 text-center  alert alert-primary">
           {message} 
        </p>
    )
}

export default Error
