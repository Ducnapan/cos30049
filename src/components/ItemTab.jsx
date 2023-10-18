import '../css/ItemTab.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import UpIcon from '@mui/icons-material/ArrowDropUp';
import DownIcon from '@mui/icons-material/ArrowDropDown';

function ItemTab({name,price,date,transID,tokenID}){
    const [more,setMore] = useState(false);
    return(
       
            <div className='tab-container'>
                <div className='d-flex justify-content-center flex-row'>
                    <p className='mx-2'><strong>Name:</strong> {name}</p>
                    <p className='mx-2'><strong>Price:</strong> {price} ETH</p>
                    <p className='mx-2'><strong>Date:</strong> {date}</p>
                    <Button onClick={() => setMore(!more)}>{more ? (<DownIcon/>):(<UpIcon/>)}</Button>
                    </div>
                    {more &&  (<div className='show-container'>
            <p><strong>Transaction ID:</strong> {transID}</p>
            <p><strong>Token ID:</strong> {tokenID}</p>
          </div>)}

               
            </div>

       

    );
}
export default ItemTab