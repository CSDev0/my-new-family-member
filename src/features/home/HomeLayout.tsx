import { fetchBreedList } from '@features/animals/animalAPI'
import React, { useEffect } from 'react'
import HomeComponent from './HomeComponent'





export default function HomeLayout() {

    useEffect(() => {
        fetchBreedList();
    }, [])

    return (
        <HomeComponent/>
    )
}
