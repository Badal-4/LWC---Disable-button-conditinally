
import {LightningElement,api} from 'lwc';
export default class InputTableCell extends LightningElement 
{
  disableBtn = true;
  field1;

  handleChange(event)
  {
     const val = event.target.value;
     console.log(val.length);
    
     this.disableBtn = val.length != 0 ? false : true;
     
  }
  handleClick(event)
  {
    alert("Clicked");
  }
}
