import { CircularProgress, Grid } from '@mui/material';
import React from 'react'
import AnimalCardComponent from '../animal-card/AnimalCardComponent';
import { IAnimal } from '../animalSlice';

export interface IAnimalListComponentProps {
    list: IAnimal[];
    isLoading: boolean;
}
export default function AnimalListComponent({ list, isLoading }: IAnimalListComponentProps) {
    return (
        <>
            {isLoading ?
                <Grid container justifyContent="center" alignItems="center" height={"70vh"}>
                    <CircularProgress size={60} />
                </Grid>
                :
                <Grid container spacing={3} mt={10} justifyContent="center">
                    {list.map((animal) =>
                        <Grid key={`${animal.imageUrl}-${animal.name}`} item lg={4}>

                            <AnimalCardComponent animal={animal} />

                        </Grid>
                    )}
                </Grid>
            }
        </>
    )
}
