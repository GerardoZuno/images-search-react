import React from 'react'

const Image = ({image}) => {

    const {largeImageURL, likes, previewURL, tags, views, type} = image
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
           <div className="card" >
               <img 
               src={previewURL}
                alt={type}
                className="card-img-top"
                />

           </div>
        </div>
    )
}

export default Image
