import {NavLink} from 'react-router-dom'

//Show the top sellign collection
function TopSeller(){
    
 
    return (
        <div className='d-flex justify-content-center flex-column'>
            <h1>Top Seller</h1>
            <div className="d-flex justify-content-center ">
             
            <table className="table table-striped my-3 " style={{width:'70%'}}>
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col"></th>
      <th scope="col">Collections</th>
      <th scope="col">Floor Price</th>
      <th scope="col">Volume</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td style={{backgroundColor:'red'}}></td>
      <td>Red</td>
      <td>0.25</td>
      <td>212</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td style={{backgroundColor:'yellow'}}></td>
      <td>Yellow</td>
      <td>0.35</td>
      <td>212</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td style={{backgroundColor:'green'}}></td>
      <td>Green</td>
      <td>0.65</td>
      <td>400</td>
    </tr>
  </tbody>
</table>

</div>
<NavLink to='/cos30049/collections'><h5>See More</h5></NavLink>
        </div>
    )
}
export default TopSeller