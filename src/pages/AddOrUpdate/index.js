import React, { useState, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { CardContent, Button, IconButton } from '@material-ui/core';
import { Add as IconAdd } from '@material-ui/icons';
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';

import { ADD_JOBOP, UPDATE_JOBOP } from '../../graphql/mutation';
import { JOB_OPS } from '../../graphql/query';
import addSchema from '../../YupSchemas/add';

import {
  Title,
  SalaryRangeContainer,
  Input,
  StyledForm,
  RequirementsContainer,
  ChipsContainer,
  StyledChip,
  StyledCard,
} from './styles';

function AddOrUpdate() {
  const location = useLocation();
  const history = useHistory();
  const [reqKnowledges, setReqKnowledges] = useState(
    (location.state && location.state.jobOp.requirements) || []
  );
  const reqInputRef = useRef(null);
  const formRef = useRef(null);
  const [addJobOp] = useMutation(ADD_JOBOP, {
    onCompleted: () => {
      formRef.current.reset();
      setReqKnowledges([]);
    },
  });
  const [updateJob] = useMutation(UPDATE_JOBOP, {
    onCompleted: () => {
      history.push('/details', { id: location.state.jobOp.id });
    },
  });

  const addReqKnowledge = () => {
    setReqKnowledges([...reqKnowledges, reqInputRef.current.value]);
    reqInputRef.current.value = '';
  };

  const deleteChip = (chip) => {
    const chips = reqKnowledges.filter((reqknowledge) => reqknowledge !== chip);
    setReqKnowledges([...chips]);
  };

  const handleSubmit = async (dataForm) => {
    const jobOpInput = {
      title: dataForm.title,
      location: dataForm.location,
      requirements: reqKnowledges,
      salaryRange: {
        min: Number(dataForm.min),
        max: Number(dataForm.max),
      },
      description: dataForm.description,
      experience: dataForm.experience,
      ocupation: dataForm.ocupation,
    };

    console.log(dataForm.description);

    try {
      // remove all previous errors
      formRef.current.setErrors({});

      await addSchema.validate(dataForm, {
        abortEarly: false,
      });

      const update = (cache) => {
        const cachedQuery = cache.readQuery({ query: JOB_OPS });

        const newJob = [...cachedQuery.jobOps, jobOpInput];
        cache.writeQuery({
          query: JOB_OPS,
          data: { ...cachedQuery, jobOps: newJob },
        });
      };

      if (location.state && location.state.update) {
        updateJob({
          variables: {
            id: location.state.jobOp.id,
            jobOpInputUpdate: jobOpInput,
          },
          update,
        });
      } else {
        addJobOp({
          variables: {
            jobOpInput,
          },
          update,
        });
      }
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <Title>
          {location.state && location.state.update ? 'Update' : 'Add'} Job
          Opportunity
        </Title>
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="title"
            autoFocus
            label="Title"
            fullWidth
            defaultValue={location.state && location.state.jobOp.title}
            variant="outlined"
            color="secondary"
          />
          <Input
            name="location"
            defaultValue={location.state && location.state.jobOp.location}
            label="Location"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <RequirementsContainer>
            <Input
              ref={reqInputRef}
              name="reqKnowledge"
              label="Required Knowledges"
              fullWidth
              variant="outlined"
              color="secondary"
            />
            <IconButton onClick={addReqKnowledge}>
              <IconAdd color="primary" />
            </IconButton>
          </RequirementsContainer>
          <ChipsContainer>
            {reqKnowledges.map((reqKnowledge) => (
              <StyledChip
                key={reqKnowledge}
                size="medium"
                variant="outlined"
                color="secondary"
                label={reqKnowledge}
                onDelete={() => deleteChip(reqKnowledge)}
              />
            ))}
          </ChipsContainer>
          <Input
            name="experience"
            defaultValue={location.state && location.state.jobOp.experience}
            label="Experience"
            variant="outlined"
            color="secondary"
          />
          <Input
            name="ocupation"
            defaultValue={location.state && location.state.jobOp.ocupation}
            label="Ocupation"
            variant="outlined"
            color="secondary"
          />
          <strong className="fields-description">Job Salary range</strong>
          <SalaryRangeContainer>
            <Input
              name="min"
              defaultValue={
                location.state && location.state.jobOp.salaryRange.min
              }
              label="Min"
              variant="outlined"
              color="secondary"
            />
            <Input
              name="max"
              label="Max"
              defaultValue={
                location.state && location.state.jobOp.salaryRange.max
              }
              variant="outlined"
              color="secondary"
              style={{ marginTop: 0, marginLeft: '1rem' }}
            />
          </SalaryRangeContainer>
          <Input
            name="description"
            label="Description"
            defaultValue={location.state && location.state.jobOp.description}
            multiline
            rows={10}
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <Button
            className="submit"
            type="submit"
            variant="outlined"
            color="secondary"
          >
            SUBMIT
          </Button>
        </StyledForm>
      </CardContent>
    </StyledCard>
  );
}

export default AddOrUpdate;
