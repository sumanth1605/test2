import React, {Component} from 'react'

class Q1 extends Component {

  constructor() {
    super();
    this.state = {
      inputArray: '',
      button_value: '',
    };

    this.cleanTheRoom = this.cleanTheRoom.bind(this);
    this.handleChangeInputArray = this.handleChangeInputArray.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChangeInputArray(event) {
    this.setState({inputArray: event.target.value});
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({inputArray: ''});
    this.setState({button_value: ''})
  }

  cleanTheRoom() {
    let l1array = [];
    let { inputArray } = this.state;
    if(inputArray !== '')
    {
      const array = inputArray.replace(/\s/g, '').split(',').sort();
      //console.log('Array: ' + array);

      let currentIndex = 0;
      
      let l1index = 0;

      let stringArray = [];
      let stringIndex = 0;
      let stringFound = false; 

      //string gets at the front when sorted
      while(currentIndex < array.length && array[currentIndex].includes('"'))
      {
        stringFound = true;
        //console.log('Found string: ' + array[currentIndex])
        stringArray[stringIndex++] = array[currentIndex++];
      }

      let arrayOfNumbers = array.slice(currentIndex).map(Number).sort((a, b) => a - b);

      //console.log('arrayOfNumbers ' + arrayOfNumbers);
      currentIndex = 0;
      
      while(currentIndex < arrayOfNumbers.length)
      {
        let l2array = [];
        let l2index = 0;
        
        //console.log('arrayOfNumbers.length ' + arrayOfNumbers.length + ' currentIndex ' + currentIndex)

        //let's handle numbers now
        if(currentIndex < arrayOfNumbers.length)
        {
          l2array[l2index++] = arrayOfNumbers[currentIndex];

          while(currentIndex < arrayOfNumbers.length && arrayOfNumbers[currentIndex] === arrayOfNumbers[currentIndex+1])
          {
            //console.log('currentIndex ' + currentIndex + ' arrayOfNumbers[currentIndex] ' + arrayOfNumbers[currentIndex] + ' arrayOfNumbers[currentIndex+1] ' + array[currentIndex+1])
            l2array[l2index++] = arrayOfNumbers[currentIndex];
            ++currentIndex
          }

          currentIndex++;

          if(l2array.length > 0) {
            //console.log(l2array);
            l1array[l1index++]= l2array;
          }
        }

        //console.log('l1array ' + l1array);
        //console.log(l1array )
      }

      if(stringFound)
      {
        //console.log('stringArray ' + stringArray)
        l1array[l1index++] = stringArray;
      }
      //console.log(l1array)
      this.setState({button_value: this.props.printArray(l1array, false)});
      //alert(l1array)
    }
    return l1array;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.cleanTheRoom();
  }

  render() {
    return (
      
        <form>
          <div className="flex-container">
            <div className="flex-item">
              <h3> Q1 </h3>
              <label className="pa5">Enter the input numbers (separated by comma)</label>
              <input className="ba f5" type="text" value={this.state.inputArray} onChange={this.handleChangeInputArray}
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

export default Q1