import React from 'react';
import { CircularProgress, IconButton } from '@material-ui/core';
import {
  AttachMoneyOutlined,
  BusinessOutlined,
  LocationOnOutlined,
  Work,
  Delete,
} from '@material-ui/icons';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { JOB_OP } from '../../graphql/query';

import {
  Container,
  Title,
  InfosContainer,
  Info,
  StyledCard,
  StyledChip,
  StyledCardContent,
  ChipsContainer,
  Description,
} from './styles';

import currencyFormatter from '../../utils/currencyFormatter';

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

  return (
    <Container>
      <StyledCard>
        <StyledCardContent>
          <Title>{data.jobOp.title}</Title>
          <InfosContainer>
            <Info>
              <small>Salary Range</small>
              <span className="container">
                <AttachMoneyOutlined />
                {currencyFormatter(data.jobOp.jobSalary.min)} -{' '}
                {currencyFormatter(data.jobOp.jobSalary.max)}
              </span>
            </Info>
            <Info>
              <small>Ocupation Area and City</small>
              <span className="container">
                <BusinessOutlined />
                TODO
              </span>
              <span className="container">
                <LocationOnOutlined />
                {data.jobOp.location}
              </span>
            </Info>
            <Info>
              <small>Requirements</small>
              <span className="container">
                <Work />
                TODO
              </span>
              <ChipsContainer>
                {data.jobOp.tags.map((tag) => (
                  <StyledChip
                    key={tag}
                    size="medium"
                    variant="outlined"
                    color="secondary"
                    label={tag}
                  />
                ))}
              </ChipsContainer>
            </Info>
          </InfosContainer>
          <IconButton>
            <Delete size="large" />
          </IconButton>
        </StyledCardContent>
      </StyledCard>
      <StyledCard>
        <StyledCardContent>
          <Title>Job Description</Title>
          <Description>
            <h3
              dangerouslySetInnerHTML={{
                __html: data.jobOp.description.replace('\n', '<br>'),
              }}
            />
          </Description>
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
}

export default Details;
