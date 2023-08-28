/*import { useState, useEffect } from 'react';
import axios from 'axios';*/


function TopCrypto(){
    /*const [cryptoPrice, setCryptoPrice] = useState(null);
    const symbol = 'BTCUSDT';

    useEffect(() => {
      // Replace 'BTCUSDT' with the symbol of the cryptocurrency you want to fetch.
      
      const apiUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=${symbol}';
  
      axios.get(apiUrl)
        .then(response => {
          setCryptoPrice(response.data.price);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);*/
 const default_val = 'N/A';
    return (
        <div className='d-flex justify-content-center flex-column'>
            <h1>Top cryptocurrencies</h1>
            <div className="d-flex justify-content-center">
            <table className="table table-striped my-5 " style={{width:'70%'}}>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Latest Price</th>
      <th scope="col">24h Change</th>
      <th scope="col">Market Cap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">BTC</th>
      <td>$25934.92</td>
      <td>{default_val}</td>
      <td>{default_val}</td>
    </tr>
    <tr>
      <th scope="row">ETH</th>
      <td>$1642.64</td>
      <td>{default_val}</td>
      <td>{default_val}</td>
    </tr>
    <tr>
      <th scope="row">BNB</th>
      <td>$216.5</td>
      <td>{default_val}</td>
      <td>{default_val}</td>
    </tr>
  </tbody>
</table>
</div>
        </div>
    )
}
export default TopCrypto