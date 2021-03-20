import React from "react";
import {FormikErrors, withFormik} from "formik";
import InitialFormValues from "./initial-form-values";
import InnerForm from "./inner-form";

type Props = {
    submitHandler: any;
}

const FormControl = withFormik<Props, InitialFormValues>(
    {
        mapPropsToValues: props => {
            return {}
        },
        validateOnChange: true,
        validate: (values: InitialFormValues) => {
            let errors: FormikErrors<InitialFormValues> = {};
            return errors;
        },
        handleSubmit: (values, actions) => {
            actions.setSubmitting(false);
            actions.props.submitHandler(values);
        }
    }
)(InnerForm);
export default function InitialForm(props: Props) {
    return (
        <div className="initial-form">

        </div>
    )
}