import React from 'react';
import '../App.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: '\u2764',
            active: "grey",
            count: 1
        };
        this.handleClick = this.handleClick.bind(this);
      }

      increment() {
        this.setState(prevState => ({ count: prevState.count + 1 }), this.loadData)
        // ((state) => {
        //     return {count: 1}
        //   });
        
        // this.setState(prevState => ({
        //     count: 1,
        // }), this.loadData)
      }

      decrement() {
        this.setState(prevState => ({ count: prevState.count - 1 }), this.loadData)
        // ((state) => {
        //     return {count: 0}
        //   });
        
        // this.setState(prevState => ({
        //     count: -1,
        // }), this.loadData)
      }

      handleClick(id) {
            if (this.state.active === "grey") {
                this.setState({
                    favorite: '\u2764',
                    active: "red",
                    // count: this.state.count+1
                });
                this.props.handleStateChange(this.state.count);
                this.increment();
                console.log(this.state.count)
            } else {
                this.setState({
                    favorite: '\u2764',
                    active: "grey",
                    // count: this.state.count+1
                });
                this.props.handleStateChange(this.state.count);
                this.decrement();
                console.log(this.state.count)
            }
            
        }        

    render() {
        
        const {title, body} = this.props;
        return (
            <div>
                {/* <Menu total={this.state.count} /> */}
                <h3> {title} </h3>
                <p><i> {body} </i></p>
                <button className="btn btn-primary" style={{"background":this.state.active}} onClick={this.handleClick}>{this.state.favorite}</button>
            </div>
          );
      }
    }  

export default Title;