import { FormikErrors, withFormik } from 'formik';
import React from 'react';
import InitialFormValues from './initial-form-values';
import InnerForm from './inner-form';


type Props = {
    submitHandler: any;
}

const REGEX_CURP = /^[A-Z]{1}[AEIOUX]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/;

const FormControl = withFormik<Props, InitialFormValues>(
    {
        mapPropsToValues: props => {
            return {
                nombreCompleto: '',
                curp: ''
            }
        },
        validateOnChange: true,
        validate: (values: InitialFormValues) => {
            let errors: FormikErrors<InitialFormValues> = {};
            console.log('Formulario', values);
            // validaciones
            if (values.nombreCompleto.length < 10) {
                errors.nombreCompleto = "Longitud insuficiente";
            }
            if (values.curp && !REGEX_CURP.test(values.curp)) {
                errors.curp = "Formato de Curp inv\u00E1lido";
            }
            return errors;
        },
        handleSubmit: (values, actions) => {
            actions.setSubmitting(false);
            actions.props.submitHandler(values);
        }
    }
) (InnerForm);

export default function InitialForm(props: Props) {
    const {submitHandler} = props;

    return (
        <div className="initial-form">
            <FormControl submitHandler={submitHandler}/>
        </div>
    );
}