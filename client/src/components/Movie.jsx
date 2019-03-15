import React from 'react';

const Movie = (props) => {
  return (
    <tr>
      <td>
        {props.title}
      </td>
    </tr>
  )
}

export default Movie;