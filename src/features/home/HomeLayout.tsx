import { useAppDispatch, useAppSelector } from '@app/hooks'
import AnimalFilterLayout from '@features/animals/animal-filter/AnimalFilterLayout'
import AnimalListLayout from '@features/animals/animal-list/AnimalListLayout'
import { fetchAnimals, fetchBreedList, fetchRandomAnimals } from '@features/animals/animalAPI'
import { setSelectedBreedList, setSelectedSubBreedList, setSubBreedList } from '@features/animals/animalSlice'
import HeaderLayout from '@features/Header/HeaderLayout'
import { Box, Container, Grid, SelectChangeEvent } from '@mui/material'
import React from 'react'
import HomeComponent from './HomeComponent'



fetchBreedList();

export default function HomeLayout() {
    const dispatch = useAppDispatch();


    return (
        <Container>
            <Grid container spacing={0}>

                <HeaderLayout />
                <AnimalFilterLayout />
                <AnimalListLayout />

                {/* <AnimalCardComponent /> */}
                <HomeComponent />
            </Grid>
        </Container>
    )
}
