import React, { Component } from 'react';
import { recipeData } from '../data/tempDetails';
import { Link } from 'react-router-dom';

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: recipeData,
      id,
      loading: false
    };
  }

  render() {
    console.log('singlepages')
    const {
      image_url,
      title,
      publisher,
      publisher_url,
      source_url,
      ingredients
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h2 className='text-uppercase text-orange text-center'>
                loading recipe...
              </h2>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Link
              to='/recipes'
              className='btn btn-warning md-5 text-capitalize'
            >
              back to recipes list
            </Link>
            <img
              src={image_url}
              className='d-block w-100'
              style={{ maxHeight: '30rem' }}
              alr='recipe'
            />
          </div>
          {/* info */}
          <div className='col-10 mx-auto col-md-6 my-3'>
            <h6 className='text-uppercase'>{title}</h6>
            <h6 className='text-warning text-text-capitalize text-slanted'>
              provied by {publisher}
            </h6>
            <a
              href={publisher_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mt-2 text-capitalize'
            >
             publisher webpage
            </a>

            <a
              href={source_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mt-2 mx-2 text-capitalize'
            >
              recipe url
            </a>

            <ul className='list-group mt-4'>
              <h2 className='mt-3 mb-4'>Ingredients</h2>
              {
                ingredients.map((item,index) => {
                  return (
                    <li key={index} className='list-group-item text-slanted'>
                      {item}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRecipe;
