import './NFT.css'
function NFT({name, color ,price}){

    return (
        <div className="item-container mx-4">
        <div  className="item-img" style={{backgroundColor:color}}></div>
        <h5 className='my-2'>{name}</h5>
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
        </div>
    )
}
export default NFT