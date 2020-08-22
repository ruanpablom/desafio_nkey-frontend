import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  location: Yup.string().required(),

  min: Yup.number().required(),
  max: Yup.number().required(),

  // eslint-disable-next-line react/forbid-prop-types
  requirements: Yup.array(),
  ocupation: Yup.string().required(),
  experience: Yup.string().required(),
});
