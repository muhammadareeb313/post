import axios from 'axios';
import { useEffect, useState } from 'react';
import { useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';

import { baseUrl } from "./../../core"


const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),

});





function Profile() {

    const [post, setpost] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/profile`)
            .then(res => {

                let arr = [];
                res.data.forEach((element) => {
                    arr.unshift(element);

                });
                console.log(arr);

                setpost([...arr]);
                console.log(post);

            }).catch((err) => { console.log(err) })
            ;
        return () => {
            console.log("error");
        };

    }, [post]);





    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',

        },
        onSubmit: function (values) {
            axios.post(`${baseUrl}/api/v1/profile`, {
                name: values.name,

            })
                .then((res) => {
                    console.log("res: ", res.data);
                })
        }
    });



//     function del(id) {
//         axios.post(`${baseUrl}/api/v1/profile`, {
//             delid: id,

//         })
//         .then((res) => {
//             console.log("res: ", res.data);
//         })
// }
      
    return (

        <div style={{ margin: "2rem" }}>
            <h1 style={{ textAlign: "center" }}>Profile</h1>

            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>

                    <TextField
                        fullWidth
                        color="primary"
                        id="outlined"
                        label="Full Name"
                        variant="outlined"

                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}


                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />


                    <Button fullWidth variant="contained" color="primary" type="submit">add</Button>
                </Stack>

            </form>
            {
                post.map((ele, id) => {
                    return (
                        <div key={id}>
                        <h1 style={{ textAlign: "center" }}>
                           {ele.name}

</h1>

                        {/* <button onClick={() => { del(ele.id) }}>Delete</button> */}
                        </div>
                    )
                })
            }




        
        </div>



    );
}

export default Profile;