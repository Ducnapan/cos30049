import NFT from './NFT'
function TopBid(){
    return (
      <div className='d-flex flex-column justify-content-center my-5'>
      <h1>Top Bid NFTs</h1>
       <div className="d-flex flex-row justify-content-center my-2">
          <NFT name = 'Man covered in Blue paint'
               color = 'aqua'
               price = {0.15}
          />
          <NFT name = 'Woman covered in Purple paint'
               color = 'purple'
               price = {0.15} 
          />
          <NFT name = 'Child covered in pink paint'
               color = 'violet'
               price = {0.15} 
          />
        
       
</div>
       </div>
       
    )
}
export default TopBid