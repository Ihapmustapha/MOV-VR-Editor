import React from 'react';
import ReactDOM from 'react-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

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

        this.sendRequest(this.state.value, this.onResults);
        event.preventDefault();

    }

    onResults( data ) {
    console.log(data);
      
    while ( document.getElementById('SearchResults').childNodes.length ) {

        document.getElementById('SearchResults').removeChild( document.getElementById('SearchResults').firstChild );
      }


     var assets = data.assets;

        if ( assets ) {

            for ( var i = 0; i < assets.length; i ++ ) {

                var asset = assets[ i ];

                //var image = createImage( asset );
                var image = document.createElement( 'img' );
                image.src = asset.thumbnail.url;
                image.style.width = '35px';
                image.style.height = '30px';
               
               // ReactDOM.render(image, document.getElementById('SearchResults'));
                document.getElementById('SearchResults').append( image );


      }
     }
    }
    sendRequest(keyword, callback) {
        var url = `https://poly.googleapis.com/v1/assets?keywords=${keyword}&format=OBJ&key=AIzaSyAmZnf3PlWn87yeCUimjQsIyvdSRo2QUP0`;
        var request = new XMLHttpRequest();

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
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit" >submit</button>
                <span id="SearchResults">images here</span>
            </form>
            
           
            </div>
        
        );
    }
}

//ReactDOM.render(<Inventory />, document.getElementById('temp'));

export default Inventory;
