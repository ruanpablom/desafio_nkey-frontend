import { gql } from '@apollo/client';

export const JOB_OPS = gql`
  query GetJobOps {
    jobOps {
      id
      title
      description
      location
      jobSalary {
        min
        max
      }
      tags
    }
  }
`;

export const JOB_OP = gql`
  query GetJobOp($id: ID!) {
    jobOp(id: $id) {
      title
      description
      location
      jobSalary {
        min
        max
      }
      tags
    }
  }
`;
