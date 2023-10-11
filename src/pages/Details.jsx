import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return <div>Details</div>;
};

export default Details;
