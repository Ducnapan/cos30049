


function TopSeller(){
    
 const default_val = 'N/A';
    return (
        <div className='d-flex justify-content-center flex-column'>
            <h1>Top Seller</h1>
            <div className="d-flex justify-content-center">
            <table className="table table-striped my-5 " style={{width:'70%'}}>
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
      <td>{default_val}</td>
      <td>{default_val}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td style={{backgroundColor:'yellow'}}></td>
      <td>Yellow</td>
      <td>{default_val}</td>
      <td>{default_val}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td style={{backgroundColor:'green'}}></td>
      <td>Green</td>
      <td>{default_val}</td>
      <td>{default_val}</td>
    </tr>
  </tbody>
</table>
</div>
        </div>
    )
}
export default TopSeller