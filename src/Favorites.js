import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { GET_FAVORITES } from './actions';
import Button from './components/Button';

class Favorites extends Component {

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
	  
	   <h1>Favorites posts</h1>

        <div className="col-lg-12 col-md-10 mx-auto">
          {
            (this.props.favorites || []).map(favorite => {
              return (
                <div className="post-preview" key={favorite.id}>

                  <p className="blockquote">
                    <blockquote>
                      <p>{favorite.post_txt}</p>
                    </blockquote>

                  </p>


                  <Button alertType="btn btn-success" icon="fa fa-heart" count={favorite.likes} caption="Like" />

                  <p className="post-meta">Posted by
                            on {favorite.date_posted}
                  </p>

                  <hr />

                </div>
              )
            })
          }
        </div>
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
