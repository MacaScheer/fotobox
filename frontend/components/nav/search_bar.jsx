import React from "react";
import { Link, withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      matches: []
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        searchField: "",
        matches: []
      });
    }
  }

  update() {
    return e => {
      let userMatches = this.props.users.filter(user =>
        user.username.toUpperCase().includes(e.target.value.toUpperCase())
      );
      if (!e.target.value) userMatches = [];
      this.setState({
        matches: userMatches,
        searchField: e.target.value
      });
    };
  }
  render() {
    let searchPlaceholder = window.innerWidth > 800 ? "Search Other Boxes" : "Search"
    return (
      <div className="user-search-results">
        <input
          className="user-search-lrg"
          type="text"
          placeholder={searchPlaceholder}
          onChange={this.update()}
          value={this.state.searchField}
        />
          {/* <input
          className="user-search-sml"
          type="text"
          placeholder="Search Other Boxes"
          onChange={this.update()}
          value={this.state.searchField}
        /> */}
        <div className="outer-results">
          {this.state.matches.length ? (
            <div className="search-results-container">
              <ul className="search-results-list">
                {this.state.matches.map(user => {
                  return (
                    <li className="search-results-li" key={user.id}>
                      <Link
                        className="search-result-user"
                        to={`/users/${user.id}`}
                      >
                        <img
                          className="search-result-image"
                          src={user.photo_url}
                        />
                        <div className="search-result-username">
                          {user.username}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
