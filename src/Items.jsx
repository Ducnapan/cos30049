import './Items.css'
import NFT from './NFT'
function Items(){
    return (
        <div >
        <div className = 'd-flex justify-content-center flex-column'>
        <div className='container justify-content-center '>
        <div className = 'blog'>
            <h3 className='py-3'>Popular Items</h3>
            <div className="d-flex flex-row justify-content-center my-3 py-5">
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
        <div className = 'blog'>
            <h3 className='py-3'>New Items</h3>
            <div className="d-flex flex-row justify-content-center my-3 py-5">
          <NFT name = 'Police covered in Yellow paint'
               color = 'yellow'
               price = {0.15}
          />
          <NFT name = 'Teacher covered in Green paint'
               color = 'teal'
               price = {0.15} 
          />
          <NFT name = 'Doctor covered in orange paint'
               color = 'orange'
               price = {0.15} 
          /> 
         
         </div> 
        </div>

        </div>
       
        </div>
        </div>
    )
}
export default Items