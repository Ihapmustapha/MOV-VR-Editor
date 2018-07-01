import React from 'react';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'poly' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendRequest(this.state.value, this.props.onRequestHandler);
  }

  sendRequest(keyword, callback) {
    const url = `https://poly.googleapis.com/v1/assets?keywords=${keyword}&format=OBJ&key=AIzaSyAmZnf3PlWn87yeCUimjQsIyvdSRo2QUP0`;
    const request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.addEventListener('load', function (event) {
      callback(JSON.parse(event.target.response));
    });
    request.send(null);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search For Things:</label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" >submit</button>
          <div id="SearchResults">images here</div>
        </form>
      </div>
    );
  }
}

//ReactDOM.render(<Inventory />, document.getElementById('inventory'));
export default Inventory;
