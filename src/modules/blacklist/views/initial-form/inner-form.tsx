import { Button, Grid } from '@material-ui/core';
import AppInput from 'components/app-input';
import { Field, Form, FormikProps } from 'formik';
import React from 'react';
import InitialFormValues from './initial-form-values';

type Props = {

}

export default function InnerForm(props: Props & FormikProps<InitialFormValues>) {

    const { handleChange, values, errors, isSubmitting } = props;

    return(
        <div className="inner-initial-form">
            <Form noValidate>
                <Grid container spacing={2} direction="row" alignContent="center" justify="center">
                    <Grid item xs={8} sm={8} md={8}>
                        <Field
                            type="text"
                            id="nombreCompleto"
                            component={AppInput}
                            change={handleChange}
                            label="Nombre completo"
                            value={values.nombreCompleto}
                            error={!!errors.nombreCompleto}
                        />
                        {errors.nombreCompleto && `${errors.nombreCompleto} ejemplo`}
                    </Grid>
                    <Grid item xs={8} sm={8} md={8}>
                        <Field
                            type="text"
                            id="curp"
                            component={AppInput}
                            change={handleChange}
                            label="Curp"
                            value={values.curp}
                            error={!!errors.curp}
                        />
                        {errors.curp && `${errors.curp} ejemplo`}
                    </Grid>
                </Grid>
                <Grid container spacing={2} direction="row" alignContent="center" justify="center">
                    <Grid item xs={8} sm={8} md={8}>
                        <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                            Buscar
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </div>
    );
}