import {NavLink} from 'react-router-dom'
import '../css/NFT.css'
//An individual template for collection
function Collection({name, color ,price,volume}){
    const setCollect = () =>{
        sessionStorage.setItem("collection",name)
    }
    return (
        <div className="item-container-2 mx-4">
            <NavLink onClick = {setCollect}  className='nav-box' to='/cos30049/collectionlisting'>
        <div  className="item-img" style={{backgroundColor:color}}></div>
        <h5 className='my-4'>{name}</h5>
        <div className='d-flex flex-row justify-content-center'>
            <div className='d-flex flex-column me-4 mb-3 text-start'>
                <h6>Avg. Price</h6>
                <h6>{price} ETH</h6>
            </div>
            <div className='d-flex flex-column text-start'>
                <h6>Volume</h6>
                <h6>{volume} ETH</h6>
            </div>

        </div>
      </NavLink>
      <div className='buy-btn'><h4>See More </h4></div>
      
        </div>
    )
}
export default Collection