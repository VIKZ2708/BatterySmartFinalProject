
import { TextField, Button, Container } from "@material-ui/core";
//? Import Yup ValistaionSchema
import Checkbox from "@material-ui/core/Checkbox";
import { validatinSchema } from "./validation";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//?Import Formik validation
import { useFormik } from "formik";
import axios from 'axios';
import Select from "@material-ui/core/Select";


const PersonalForm = () => {
  //? create the instance of useFomrik hook
  const formik = useFormik({
    initialValues: {
        name:"",
        pricesig:'',
        criteria:'',
        value:'',
        emailId:'',
        activedays:'',
        phoneNumber:''
    },
    validationSchema: validatinSchema,
    onSubmit: (values) => {

        axios.request({
            method: 'post',
            url: 'http://localhost:3000/entries/create',
            data: {values},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
          console.log(res);
          console.log(res.data);
        })
          
        // handleReset();
        setTimeout(() => {
          // submit to the server
          window.location.reload(false);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
    },
  });


  return (
    <Container maxWidth="md">
        <div className="w-200 bg-white dark:text-white-200 ">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          required
          margin="dense"
          type="text"
          name="name"
          id="name"
          label="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          helperText={formik.touched.name && formik.errors.name}
          error={formik.errors.name && formik.touched.name}
        />
        <div className="mt-4 dark:text-gray-500">Criteria </div>

          <List>
        <ListItem alignItems="center" >
        <div className="mt-1 dark:text-gray-500"> Lesser than </div>
          <Checkbox
            checked={formik.values.criteria}
            inputProps={{ "aria-label": "primary checkbox" }}
            id="criteria"
            name="criteria"
            label="Criteria"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.criteria}    />
            <div className="mt-1 dark:text-gray-500"> Greater than </div>

            <Checkbox
            checked={!formik.values.criteria}
            inputProps={{ "aria-label": "primary checkbox" }}
            id="criteria"
            name="criteria"
            label="Criteria"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={!formik.values.criteria}/>
        </ListItem>
        </List>
        <TextField
          fullWidth
          required
          margin="dense"
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          label="Mobile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          error={formik.errors.phoneNumber && formik.touched.phoneNumber}
        />
        <TextField
          fullWidth
          required
          margin="dense"
          type="number"
          name="value"
          id="value"
          label="Value"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.value}
          helperText={formik.touched.value && formik.errors.value}
          error={formik.errors.value && formik.touched.value}
        />

        {/* <TextField
         
          margin="dense"
          type="text"
          id="pricesig"
          label="Price Signal"
          name="pricesig"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.pricesig}
          helperText={formik.touched.pricesig && formik.errors.pricesig}
          error={formik.errors.pricesig && formik.touched.pricesig}
        /> */}

<div className="mt-4 dark:text-gray-500">Price Signal </div>

        <Select
                           fullWidth
                           required
          id="pricesig"
          value={formik.values.pricesig}
          onChange={formik.handleChange}
          label="Price Signal"
          name="pricesig"
          defaultValue={'Dk-1'}

                >
                  <option value='Dk-1'>Dk-1</option>
                  <option value={'Dk-2'}>Dk-2r</option>
                  <option value={'Dk-3'}>Dk-3</option>
                </Select>

        <TextField
          fullWidth
          required
          margin="dense"
          type="text"
          id="emailId"
          label="Email"
          name="emailId"
          sx={{ input: { color: 'white' } }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.emailId}
          helperText={formik.touched.emailId && formik.errors.emailId}
          error={formik.errors.emailId && formik.touched.emailId}
        />
        <TextField
        sx={{ input: { color: 'white' } }}
          fullWidth
          required
          margin="dense"
          type="activedays"
          id="activedays"
          label="Active Days"
          name="activedays"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.activedays}
          helperText={formik.touched.activedays && formik.errors.activedays}
          error={formik.errors.activedays && formik.touched.activedays}
        />
        <div className="mt-10">
        <Button variant="contained" color="primary" type="sumbit">
          Submit
        </Button>
        </div>
      </form>
      </div>
    </Container>
  );
}

export default PersonalForm;
