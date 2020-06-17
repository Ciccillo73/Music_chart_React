import React, {Fragment} from 'react';

const TitleBar = (props) =>{
  return (
    <Fragment>
      <h2>Tops</h2>
      <select onChange={props.handleSelectChange}>
        {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}
      </select>
    </Fragment>
  );
};

export default TitleBar;
