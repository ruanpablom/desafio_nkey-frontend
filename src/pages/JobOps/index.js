import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CircularProgress, CardContent } from '@material-ui/core';

import {
  LocationOnOutlined,
  AttachMoneyOutlined,
  Add,
} from '@material-ui/icons';
import { useQuery } from '@apollo/client';

import { JOB_OPS } from '../../graphql/query';

import currencyFormatter from '../../utils/currencyFormatter';

import {
  Container,
  ButtonContainer,
  AddButton,
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
  const history = useHistory();

  if (loading) return <CircularProgress color="primary" />;
  if (error) return <div>ERRO</div>;

  return (
    <Container>
      <ButtonContainer>
        <AddButton
          onClick={() => {
            history.push('/add');
          }}
          color="primary"
        >
          <Add />
        </AddButton>
      </ButtonContainer>
      <JobOpsList>
        {data.jobOps.map((jobOp) => (
          <JobOp key={jobOp.id}>
            <Link to={{ pathname: '/details', state: { id: jobOp.id } }}>
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
                      {currencyFormatter(jobOp.salaryRange.min)} -{' '}
                      {currencyFormatter(jobOp.salaryRange.max)}
                    </span>
                  </Salary>
                  <Description>
                    {jobOp.description}
                    <div>. . .</div>
                  </Description>
                  <ChipsContainer>
                    {jobOp.requirements.map((requirement, id) => (
                      <StyledChip
                        key={id}
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        label={requirement}
                      />
                    ))}
                  </ChipsContainer>
                </CardContent>
              </StyledCard>
            </Link>
          </JobOp>
        ))}
      </JobOpsList>
    </Container>
  );
}

export default JobOps;
