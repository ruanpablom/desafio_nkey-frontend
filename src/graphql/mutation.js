import { gql } from '@apollo/client';

export const ADD_JOBOP = gql`
  mutation AddJobOp($jobOpInput: JobOpInput!) {
    addJobOp(jobOpInput: $jobOpInput) {
      id
    }
  }
`;
