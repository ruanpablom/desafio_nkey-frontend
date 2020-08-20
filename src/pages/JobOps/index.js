import React from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress, CardContent } from '@material-ui/core';

import { LocationOnOutlined, AttachMoneyOutlined } from '@material-ui/icons';
import { useQuery } from '@apollo/client';

import { JOB_OPS } from '../../graphql/query';

import currencyFormatter from '../../utils/currencyFormatter';

import {
  JobOpsList,
  JobOp,
  StyledCard,
  Title,
  Location,
  Salary,
  ChipsContainer,
  StyledChip,
  Description,
} from './styles';

function JobOps() {
  const { loading, error, data } = useQuery(JOB_OPS);

  if (loading) return <CircularProgress color="primary" />;
  if (error) return <div>ERRO: {error}</div>;

  return (
    <JobOpsList>
      {data.jobOps.map((jobOp) => (
        <JobOp key={jobOp.id}>
          <Link to={{ pathname: '/details', params: jobOp.id }}>
            <StyledCard>
              <CardContent>
                <Title>{jobOp.title}</Title>
                <Location>
                  <LocationOnOutlined />
                  <span>{jobOp.location}</span>
                </Location>
                <Salary>
                  <AttachMoneyOutlined />
                  <span>
                    {currencyFormatter(jobOp.jobSalary.min)} -{' '}
                    {currencyFormatter(jobOp.jobSalary.max)}
                  </span>
                </Salary>
                <Description>
                  <span
                    id="desc"
                    dangerouslySetInnerHTML={{ __html: jobOp.description }}
                  />
                  <div>. . .</div>
                </Description>
                <ChipsContainer>
                  {jobOp.tags.map((tag) => (
                    <StyledChip
                      key={tag}
                      size="medium"
                      variant="outlined"
                      color="secondary"
                      label={tag}
                    />
                  ))}
                </ChipsContainer>
              </CardContent>
            </StyledCard>
          </Link>
        </JobOp>
      ))}
    </JobOpsList>
  );
}

export default JobOps;
