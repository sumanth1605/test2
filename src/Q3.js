import React, {Component} from 'react'

class Q3 extends Component {

  constructor() {
    super();
    this.state = {
      colour: '',
      button_value: '',
    };

    this.convertHexToRGB = this.convertHexToRGB.bind(this);
    this.convertToHex = this.convertToHex.bind(this);
    this.convetRGBToHex = this.convetRGBToHex.bind(this);
    this.handleChangeColour = this.handleChangeColour.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  convertHexToRGB(r, g, b) {
    const value = 'Converted value is ' + parseInt(r, 16) + ',' + parseInt(g, 16) + ',' + parseInt(b, 16);
    //console.log(value)
    this.setState({button_value: value});
  }

  convertToHex (number) {
    return number.toString(16).toUpperCase();
  }

  convetRGBToHex (r, g, b) {
    const value = 'Converted value is #' + (this.convertToHex(r) + this.convertToHex(g) + this.convertToHex(b));
    this.setState({button_value: value});
  }

  handleChangeColour(event) {
    this.setState({colour: event.target.value});
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({colour: ''});
    this.setState({button_value: ''})
  }

  handleSubmit(event) {
    event.preventDefault();

    let { colour } = this.state;
    if(colour !== '' && colour.includes('#') && colour.length === 7) {
      //console.log(colour[1]+colour[2], colour[3]+colour[4], colour[5]+colour[6]);

      this.convertHexToRGB(colour[1]+colour[2], colour[3]+colour[4], colour[5]+colour[6]);
      //window.location.reload();
    }
    else {
      let found = false; 
      //parse string to r, g, b
      //let rgb_c = colour
      let rgb = colour.split(",");
      found = (rgb.length === 3);
      //console.log('rgb ' + rgb[0] + ' ' + rgb[1] + ' ' + rgb[2] + ' found ' + found)
      if(found) {
        this.convetRGBToHex(Number(rgb[0]), Number(rgb[1]), Number(rgb[2]));
        //window.location.reload();
      }
      else {
        alert('Please correct the input to RGB or HEX format');
      }
    }
  }

  render() {
    return (
      
        <form>
          <div className="flex-container">
            <div className="flex-item">
              <h3> Q3 </h3>
              <label className="pa5">Convert HEX (e.g. #AABBCC) to RGB (e.g. 255,155,100) and vice versa</label>
              <input className="ba f5" type="text" value={this.state.colour} onChange={this.handleChangeColour}
              />
            </div>
          </div>
          <div className="flex-container">
            <div className="mt3 flex-item">
                <label className="pa2 br3 f5" name="rgbButton">
                  {this.state.button_value}
                </label>
              </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">
            <input
              className="b mh3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Clear"
              onClick={this.handleClear}
             />
             <input
              className="b mh3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
             />
             </div>
          </div>
        </form>
    );
  }
}

export default Q3