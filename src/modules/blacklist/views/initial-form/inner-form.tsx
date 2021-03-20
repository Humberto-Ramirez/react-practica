import React from 'react';
import {Field, Form, FormikProps} from "formik";
import {Button, Grid} from "@material-ui/core";
import AppInput from "components/app-input/app-input";
import InitialFormValues from "./initial-form-values";

type Props = {}

export default function InnerForm(props: Props & FormikProps<InitialFormValues>) {
    const {handleChange, values, errors} = props
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
                            label="Nombre Completo"
                            value={values.nombreCompleto}
                            error={errors.curp}
                        />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8}>
                        <Field
                            type="text"
                            id="curp"
                            component={AppInput}
                            change={handleChange}
                            label="Curp"
                            value={values.nombreCompleto}
                            error={errors.curp}
                        />
                    </Grid>
                </Grid>
                <Grid spacing={2} direction="row" alignContent="center" justify="center">
                    <Grid item xs={8} sm={8} md={8}>
                        <Button type="submit" variant="contained" color="primary">
                            Buscar
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </div>
    );
}
