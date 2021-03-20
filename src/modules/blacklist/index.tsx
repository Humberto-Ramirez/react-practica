import React from 'react';
import { getPeople } from 'services/blacklist/blacklist';
import InitialForm from './views/initial-form';
import InitialFormValues from './views/initial-form/initial-form-values';

type Props = {

}

export default function Blacklist(props: Props) {

    const submitHandler = (values: InitialFormValues) => {
        getPeople(
            values
        ).then(
            response => {
                console.log(response);
                console.log(response.data);
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    return (
        <div className="blacklist-main">
            <InitialForm submitHandler={submitHandler}/>
        </div>
    );
}