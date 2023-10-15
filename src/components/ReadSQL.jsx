import {useState,useEffect} from 'react'

function ReadSQL(){
    const [data,setData] = useState([]);
      

      useEffect(() => {
        
          fetch('http://localhost/apis/api_nft.php/')
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
             
              return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
        }, []);
    return data;

}
export default ReadSQL;