import React from 'react';
import service from './api/getData';
import SearchBar from './components/searchbar';
import Profile from './components/profile';

class App extends React.Component{

  state = {profile: []}

  onSearchSubmit = async term => {
    const response = await service.get(`/users/${term}`);
    this.setState({profile: response.data});
  }

  render(){
    return(
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Profile profile={this.state.profile}/>
      </div>
    )
  }
}

export default App;