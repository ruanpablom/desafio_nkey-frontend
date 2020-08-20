import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { JOB_OP } from '../../graphql/query';

import { Container } from './styles';

function Details() {
  const location = useLocation();
  const history = useHistory();
  const { loading, error, data } = useQuery(JOB_OP, {
    variables: { id: location.params },
  });

  if (loading) return <CircularProgress color="primary" />;

  if (error) {
    history.push('/');
    return <div />;
  }

  return <Container>{data.jobOp.tags}</Container>;
}

export default Details;
