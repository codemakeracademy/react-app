import React from "react";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import {getBeers} from "../../services/beers.service";

export class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            isLoaded: false,
            search: ''
        }
        this.onSearchChanged = this.onSearchChanged.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.getData();
    }

    componentDidMount() {
        this.getData();
    }

    onSearchChanged(event) {
        const searchString = event.target.value;
        this.props.history.push(`/beers?query=${searchString}`)
    }

    getData() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const query = searchParams.get("query");
        if(this.state.search !== query) {
            this.setState(Object.assign(this.state, {search: query}));
            getBeers(query).then(data => {
                this.setState({beers: data, isLoaded: true});
            });
        }
    }


    renderList() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        } else if (this.state.isLoaded && this.state.beers.length === 0) {
            return (
                <div><h2>No Beers</h2></div>
            )
        } else {
            return (
                <ul>
                    {this.state.beers.map(beer => {
                        return <BeerListItem key={beer.id} beer={beer} />
                    })}
                </ul>
            )
        }
    }

    render() {
        return (
        <div>
            <input type="search" value={this.state.search} onChange={this.onSearchChanged}/>
            {
                this.renderList()
            }
        </div>
        )
    }
}

export class BeerListItem extends React.Component {
    render() {
        const beer = this.props.beer;
        return (
            <li>
                <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
            </li>
        )
    }
}

export default withRouter(Beers);

