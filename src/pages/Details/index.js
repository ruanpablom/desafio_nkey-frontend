import React, { useState } from 'react';
import {
  CircularProgress,
  IconButton,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import {
  AttachMoneyOutlined,
  BusinessOutlined,
  LocationOnOutlined,
  Work,
  Delete,
  Edit,
} from '@material-ui/icons';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { JOB_OP, JOB_OPS } from '../../graphql/query';
import { DELETE_JOBOP } from '../../graphql/mutation';

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
  StyledModal,
  DeleteButton,
} from './styles';

import currencyFormatter from '../../utils/currencyFormatter';

function Details() {
  const location = useLocation();
  const history = useHistory();
  const [openModal, setOpenModal] = useState();
  const { loading, error, data } = useQuery(JOB_OP, {
    variables: { id: location.state.id },
  });
  const [deleteJobOp] = useMutation(DELETE_JOBOP, {
    variables: { id: location.state.id },
  });

  if (loading) return <CircularProgress color="primary" />;

  if (error) {
    history.push('/');
    return <div />;
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleEdit = () => {
    history.push('/add', { update: true, jobOp: data.jobOp });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteJobOp = () => {
    deleteJobOp({
      update: (cache) => {
        const cachedQuery = cache.readQuery({ query: JOB_OPS });
        const filteredData = cachedQuery.jobOps.filter(
          ({ id: itemId }) => itemId !== location.state.id
        );

        cache.writeQuery({
          query: JOB_OPS,
          data: { ...cachedQuery, jobOps: filteredData },
        });
      },
    });
    history.push('/');
  };

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
          <div>
            <IconButton>
              <Edit onClick={handleEdit} size="large" />
            </IconButton>
            <IconButton onClick={handleOpenModal}>
              <Delete size="large" />
            </IconButton>
            <StyledModal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <Card>
                <CardContent>
                  <h3>Do you really want delete this Job Opportunity?</h3>
                  <CardActions>
                    <DeleteButton
                      variant="contained"
                      onClick={handleDeleteJobOp}
                    >
                      DELETE
                    </DeleteButton>
                  </CardActions>
                </CardContent>
              </Card>
            </StyledModal>
          </div>
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
