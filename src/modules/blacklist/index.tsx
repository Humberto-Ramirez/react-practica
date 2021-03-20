import { Avatar, Grid, Typography } from '@material-ui/core';
import AppModal from 'components/app-modal';
import AppSpinner from 'components/app-spinner';
import React from 'react';
import { getPeople } from 'services/blacklist/blacklist';
import getPokemon from 'services/pokemon/pokemon';
import InitialForm from './views/initial-form';
import InitialFormValues from './views/initial-form/initial-form-values';

type Props = {
    name: string;
}

export default function Blacklist(props: Props) {

    const { name } = props;
    const [names, setNames] = React.useState<any>();
    const [open, setOpen] = React.useState<boolean>(false);
    const [showSpinner, setShowSpinner] = React.useState<boolean>(false);
    const [pokemonInfo, setPokemonInfo] = React.useState<
        {
            name: string,
            height: Number,
            weight: Number,
            experience: Number,
            sprite: string,
        }
    >({
        name: '',
        height: 0,
        weight: 0,
        experience: 0,
        sprite: ''
    })

    const submitHandler = (values: InitialFormValues) => {
        setShowSpinner(true);
        // getPeople(
        //     values
        // ).then(
        //     response => {
        //         console.log(response);
        //         console.log(response.data);
        //         setNames(response.data);
        //     }
        // ).catch(
        //     error => {
        //         console.log(error);
        //     }
        // )
        getPokemon(values).then(
            response => {
                console.log(response.data);
                setPokemonInfo({
                    name: response.data.name,
                    height: response.data.height,
                    weight: response.data.weight,
                    experience: response.data.base_experience,
                    sprite: response.data.sprites.front_default
                })
                setTimeout(
                    () => {
                        setOpen(true);
                        setShowSpinner(false);
                    }, 3000
                )
            }
        )
    }

    const pokemonAvatar = (
        <Grid container spacing={2} alignContent="center" justify="center">
            <Avatar alt="Remy Sharp" src={`${pokemonInfo.sprite}`} />
        </Grid>
    );

    const body = (
        <Grid container spacing={2} alignContent="center" justify="center">
            <Grid item xs={8} sm={8} md={8}>
                <Typography variant="body2" component="p">
                    Altura: {pokemonInfo.height}
                </Typography>
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
                <Typography variant="body2" component="p">
                    Peso: {pokemonInfo.weight}
                </Typography>
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
                <Typography variant="body2" component="p">
                    Experiencia base: {pokemonInfo.experience}
                </Typography>
            </Grid>
        </Grid>
    );

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="blacklist-main">
            <h2>{name}</h2>
            <InitialForm submitHandler={submitHandler}/>
            { open &&
                <AppModal
                    title={pokemonInfo.name}
                    open={open}
                    handleClose={handleClose}
                    node={body}
                    sizeOverride={80}
                    avatar={pokemonAvatar}
                />
            }
            {
                showSpinner &&
                    <AppSpinner
                        open={showSpinner}
                        message="Cargando"
                    />
            }
        </div>
    );
}