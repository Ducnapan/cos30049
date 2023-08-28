import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
function RateBar(){
    return (
        <div className="d-flex flex-column my-5 justify-content-center">
            <h1>Crypto Calculator</h1>
            <div className="d-flex flex-row justify-content-center my-5">
            <div className="input-group" style={{width:'30%'}}>
  <input type="text" className="form-control" aria-label="Text input with dropdown button"></input>
  <Dropdown>
      <MenuButton style={{backgroundColor:"#eeeeee"}}>BTC</MenuButton>
      <Menu >
        <MenuItem>ETH</MenuItem>
        <MenuItem>DODGE</MenuItem>
      </Menu>
    </Dropdown>
</div>
<div className="btn btn-disabled"> = </div>
<div className="input-group" style={{width:'30%'}}>
  <input type="text" className="form-control" aria-label="Text input with dropdown button" disabled></input>
  <Dropdown>
      <MenuButton style={{backgroundColor:"#eeeeee"}}>USD</MenuButton>
      <Menu>
        <MenuItem>AUD</MenuItem>
        <MenuItem>VND</MenuItem>
      </Menu>
    </Dropdown>
</div>
</div>
        </div>

    )
}
export default RateBar