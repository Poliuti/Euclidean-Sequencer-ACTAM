import { useState, useEffect } from 'react';

const useFetchDelete = (url) => {


  useEffect(() => {
    
    fetch(url,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })

      
    
  }, [url])

  
}
 
export default useFetchDelete;