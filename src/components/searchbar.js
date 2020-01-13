import React from 'react';

class SearchBar extends React.Component{
    
    state = {
        search: ''
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render(){
        return(
            <div>
                <div className="ui segment">
                    <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
                        <div className="field">
                            <label>Profile Search</label>
                            <input type="text" placeholder="Search..." value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;