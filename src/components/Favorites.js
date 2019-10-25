import * as React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { GET_FAVORITES } from './actions';

class Favorites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    return (
      <div className="row">



        {(this.props.favorites || []).map(favorite => {
          return (
            <div className="post-preview" key={favorite.id}>

              <p className="post-title">
                <p>{favorite.post_txt}</p>
              </p>

              <p className="post-meta">Posted by
                          on {favorite.date_posted}
              </p>
              <hr />

            </div>
          )
        })}

      </div>









    )
  }


}

const mapStateTopProps = (state) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFavorites: () => {
      dispatch({ type: GET_FAVORITES });
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Favorites);
