import { gql } from '@apollo/client';

export const ADD_JOBOP = gql`
  mutation AddJobOp($jobOpInput: JobOpInput!) {
    addJobOp(jobOpInput: $jobOpInput) {
      id
    }
  }
`;

export const DELETE_JOBOP = gql`
  mutation DeleteJobOp($id: ID!) {
    deleteJobOp(id: $id)
  }
`;
