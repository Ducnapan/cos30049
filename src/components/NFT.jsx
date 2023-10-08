import {NavLink} from 'react-router-dom'
import Shopping from '@mui/icons-material/AddShoppingCart';
import '../css/NFT.css'
//in dividual template for NFT
function NFT({name, color ,price}){
    const storeData = ()=>{
        sessionStorage.setItem('item-name',name);
        sessionStorage.setItem('item-color',color);
        sessionStorage.setItem('item-price',price);
       


    };
    

    return (
        <div className="item-container mx-4" onClick={storeData}>
            <NavLink className='nav-box' to='/cos30049/details'>
        <div  className="item-img" style={{backgroundColor:color}}></div>
        <h5 className='item-title my-2'>{name}</h5>
        <table className='mx-2 my-3'>
        <thead>
         <tr>
          <th> Price</th>
          <th></th>
         </tr>
        </thead>
         <tbody>
         <tr>
          <td>{price} ETH</td>
          <td></td>
         </tr>
         </tbody>
      </table>
      </NavLink>
      <div className='buy-btn'><h4>Buy Now <Shopping /></h4></div>
      
        </div>
    )
}
export default NFT