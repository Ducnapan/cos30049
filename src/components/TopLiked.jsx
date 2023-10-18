import { useState,useEffect } from 'react';
import NFT from './NFT'
import axios from 'axios'
//Show top bid
function TopLiked(){
     const [data, setData] = useState([]);

      useEffect(() => {
        
        const url = 'http://localhost/api/api_nft.php/';
        //const url = './src/api/nft.json';
        
          axios.get(url)
            .then((response) => {
              if (!response.data) {
                throw new Error('Network response was not ok');
              }
             
              return response.data;
            })
            .then((data) => setData(data.filter((item) =>
            item.owner.toLowerCase() === "none")))
            .catch((error) => console.error('Error fetching data:', error));
        }, []);
         //Most liked feature
    const sortedData = data.slice().sort((a, b) => b.likes - a.likes);

    // Take the top 3 items with the most 'likes'
    const top3Items = sortedData.slice(0, 3);
    return (
      <div className='d-flex flex-column justify-content-center my-5'>
      <h1>Top Liked NFTs</h1>
       <div className="d-flex flex-row justify-content-center my-2">
       {top3Items.map((item, index) => (
           <NFT 
              key={`nft_${index}`}
              id = {item.id}
               name = {item.name}
                color = {item.color}
                price = {item.price}
                views = {item.views}
                likes = {item.likes}
           />
          ))}
        
       
</div>
       </div>
       
    )
}
export default TopLiked