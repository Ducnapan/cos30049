import './Items.css'
import Collection from './Collection'
function Collections(){
    return (
        <div >
        <div className = 'd-flex justify-content-center'>
        <div className='container d-flex justify-content-center flex-column align-items-center my-5'>
        <div className = 'blog'>
            <h3 className='py-3'>Popular Collections</h3>
            <div className="d-flex flex-row justify-content-center my-3 py-5">
          <Collection name = 'Red'
               color = 'red'
               price = {0.25}
               volume={231}
          />
          <Collection name = 'Yellow'
               color = 'yellow'
               price = {0.35} 
               volume={212}
          />
          <Collection name = 'Green'
               color = 'green'
               price = {0.65} 
               volume={400}
          /> 
         </div>
        </div>
        <div className = 'blog my-5'>
            <h3 className='py-3'>New Collections</h3>
            <div className="d-flex flex-row justify-content-center my-3 py-5">
          <Collection name = 'Vanta'
               color = 'black'
               price = {0.45}
               volume={200}
          />
          <Collection name = 'Bronze'
               color = '#CD7F32'
               price = {0.75} 
               volume={320}
          />
          <Collection name = 'Ocean'
               color = 'blue'
               price = {0.85} 
               volume={270}
          /> 
         
         </div> 
        </div>

        </div>
       
        </div>
        </div>
    )
}
export default Collections