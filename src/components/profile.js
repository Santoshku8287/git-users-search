import React from 'react';

const profileProps = props => {

    const {avatar_url, login, bio, location, email, html_url, repos_url, public_repos, followers} = props.profile;
     
    return ( 
            <div className="ui centered card">
                    <div className="image">
                        <a href={html_url}><img alt={login} src={avatar_url} width="100%"/></a>
                    </div>
                    <div className="content">
                        <a className="header" href={html_url}>{login}</a>
    {bio ? (<div className="description">{bio}</div>): (<div></div>)}
                    </div>
                    {email? 
                        (<div className="extra content">
                            <i className="location arrow icon"></i>
                            Location: {email}
                        </div>) : (<div></div>)
                    }
                    {location? 
                        (<div className="extra content">
                            <i className="location arrow icon"></i>
                            Location: {location}
                        </div>) : (<div></div>)
                    }
                    {public_repos? 
                        (<div className="extra content">
                            <a href={repos_url}>
                            <i className="book icon"></i>
                            Repositories: {public_repos}
                            </a>
                        </div>) : (<div></div>)
                    }
                    {followers? (
                        <div className="extra content">
                            <a>
                            <i className="users icon"></i>
                            Followers: {followers}
                            </a>
                        </div>
                    ) : (<div></div>)}
            </div>
        )
    
}

export default profileProps;