import React from 'react';
const Image = ({ imageUrl, altText }) => { 
    return <img src={imageUrl} alt={altText} className="rounded-image" />; };
     Image.defaultProps = { altText: "Image de joueur" };
export default Image;
