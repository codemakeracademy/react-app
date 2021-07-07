import React from "react";

/*
const el = documnet.getEle...
el.className
 */


export class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message1: 'Hi!!'
        };
        this.clickListener = () => {
            this.setState({message1: 'Hi!!'});
            if(this.myA.current) {
                this.myA.current.textContent = '000000';
                this.myA.current.style.color = 'red';
            }
        }
        window.addEventListener("click", this.clickListener, false);
        this.myA = React.createRef();
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUpdate(nextProps, nextState, nextContext) {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    componentWillUnmount() {
        window.removeEventListener("click", this.clickListener);
    }

    render() {
        return (
            <>
                <a ref={this.myA}>!!!!</a>
                <h1 onClick={(event) => {
                    event.stopPropagation();
                    this.setState({message1: '12345'})
                    this.props.changeMessage();
                }}>
                    {this.state.message1} {this.props.message}
                </h1>
            </>
        )
    }
}
