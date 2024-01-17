import React from 'react'

const Footer = ({length}) => {
    let tDay = new Date();
  return (
    <footer>
      <p>
         {length} catalogue of movies|copyright &copy; {tDay.getFullYear()}
      </p>  
    </footer>
        
  )
}

export default Footer