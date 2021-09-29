import { useState, useEffect } from 'react';

const useFetchPost = (url, elementToJson) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  if (elementToJson === []) {elementToJson = null};

  useEffect(() => {
    console.log("useFetch is running")
      fetch(url,{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(elementToJson),
        
      })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    
      
  }, [url, elementToJson]);

  return { data, isPending, error };
}
 
export default useFetchPost;