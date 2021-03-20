import React from 'react';
import {Field, Form, FormikProps} from "formik";
import {Grid} from "@material-ui/core";
import AppInput from "components/app-input/app-input";
import InitialFormValues from "./initial-form-values";

type Props = {}

export default function InnerForm(props: Props & FormikProps<InitialFormValues>) {
    const {handleChange, values} = props
    return (
        <div className="inner-form">
            <Form noValidate>
                <Grid container spacing={2} direction="row" alignContent="center" justify="center">
                    <Grid item xs={8} sm={8} md={8}>
                        <Field
                            type="text"
                            id="nombreCompleto"
                            component={AppInput}
                            change={handleChange}
                            value={values.nombreCompleto}
                        />

                    </Grid>
                </Grid>
            </Form>
        </div>
    );
}
