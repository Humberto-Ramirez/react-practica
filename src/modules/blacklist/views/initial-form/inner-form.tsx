import React from 'react';
import {Form} from "formik";
import {Grid} from "@material-ui/core";

type Props = {}

export default function InnerForm({}: Props) {
    return (
        <div className="inner-form">
            <Form noValidate>
                <Grid container spacing={2} direction={row} alignContent="center" justify="center">
                    <Grid item xs={8} sm={8} md={8}>

                    </Grid>
                </Grid>
            </Form>
        </div>
        );
}
