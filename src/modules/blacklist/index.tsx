import React from "react";
import InitialForm from "./views/initial-form";
import InitialFormValues from "./views/initial-form/initial-form-values";

type Props = {}

export default function BlackList(props: Props) {
    const submitHandler=(values: InitialFormValues)=>{
        console.log(values);
    }

    return (
        <div className="blacklist-main">
            <InitialForm submitHandler={submitHandler}/>
        </div>
    )
}
