import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Stack
} from '@mui/material';

const validationSchema = Yup.object({
  confirmation: Yup.string()
    .required('Required')
    .matches(/^[A-Z0-9]{6}$/, 'Must be 6 uppercase letters/numbers'),
  firstName: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z]+$/, 'Only letters allowed'),
  lastName: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z]+$/, 'Only letters allowed')
});

export default function CheckInForm({ onSubmit, loading }) {
  const formik = useFormik({
    initialValues: {
      confirmation: '',
      firstName: '',
      lastName: ''
    },
    validationSchema,
    onSubmit: values => onSubmit({
      ...values,
      confirmation: values.confirmation.toUpperCase()
    })
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Confirmation Number"
          name="confirmation"
          value={formik.values.confirmation}
          onChange={e => formik.setFieldValue('confirmation', e.target.value.toUpperCase())}
          error={formik.touched.confirmation && Boolean(formik.errors.confirmation)}
          helperText={formik.touched.confirmation && formik.errors.confirmation}
          disabled={loading}
        />

        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          disabled={loading}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          fullWidth
        >
          {loading ? 'Processing...' : 'Check In'}
        </Button>
      </Stack>
    </form>
  );
}
