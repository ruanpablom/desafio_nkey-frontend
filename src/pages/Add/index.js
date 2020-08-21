import React, { useState, useRef } from 'react';
import { CardContent, Button, IconButton } from '@material-ui/core';
import { Add as IconAdd } from '@material-ui/icons';
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';

import { ADD_JOBOP } from '../../graphql/mutation';
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

function Add() {
  const [reqKnowledges, setReqKnowledges] = useState([]);
  const reqInputRef = useRef();
  const formRef = useRef(null);
  const [addJobOp, { data }] = useMutation(ADD_JOBOP);

  const addReqKnowledge = () => {
    setReqKnowledges([...reqKnowledges, reqInputRef.current.value]);
    reqInputRef.current.value = '';
  };

  const deleteChip = (chip) => {
    const chips = reqKnowledges.filter((reqknowledge) => reqknowledge !== chip);
    setReqKnowledges([...chips]);
  };

  const handleSubmit = async (dataForm) => {
    const jobSalary = {
      min: dataForm.min,
      max: dataForm.max,
    };
    const jobOpInput = {
      title: dataForm.title,
      location: dataForm.location,
      tags: reqKnowledges,
      jobSalary: {
        min: Number(dataForm.min),
        max: Number(dataForm.max),
      },
      description: dataForm.description,
    };

    console.log(dataForm);
    try {
      // remove all previous errors
      formRef.current.setErrors({});

      await addSchema.validate(dataForm, {
        abortEarly: false,
      });

      addJobOp({
        variables: {
          jobOpInput,
        },
      });
    } catch (err) {
      console.log(err);
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
        <Title>Add Job Opportunity</Title>
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="title"
            autoFocus
            label="Title"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <Input
            name="location"
            label="Location"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <RequirementsContainer>
            <Input
              name="reqKnowledge"
              inputRef={reqInputRef}
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
          <strong className="fields-description">Job Salary range</strong>
          <SalaryRangeContainer>
            <Input
              name="min"
              label="Min"
              variant="outlined"
              color="secondary"
            />
            <Input
              name="max"
              label="Max"
              variant="outlined"
              color="secondary"
              style={{ marginTop: 0, marginLeft: '1rem' }}
            />
          </SalaryRangeContainer>
          <Input
            name="description"
            label="Description"
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

export default Add;
