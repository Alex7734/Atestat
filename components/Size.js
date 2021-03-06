import React from 'react';
import './Choice.css'
class Size extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 30};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.parentCallback(this.state.value)
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit} style={{margin:5}}>
            <label>
              Coloane: <input type="number" min="5" max="40" style={{margin:5}} value={this.state.value} onChange={this.handleChange} />
            </label>  <input type="submit" value="GENEREAZA" className="button-2"/> 
          </form>
        );
      }
}

export default Size;