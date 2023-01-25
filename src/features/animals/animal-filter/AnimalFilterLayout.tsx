import { useAppDispatch, useAppSelector } from '@app/hooks';
import { RootState } from '@app/store';
import { Button, Grid, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'
import { fetchAnimals, fetchRandomAnimals } from '../animalAPI';
import { setSelectedBreedList, setSelectedSubBreedList } from '../animalSlice';
import AnimalFilterComponent from './AnimalFilterComponent'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { webConfig } from '@config/index';

export default function AnimalFilterLayout() {
    const dispatch = useAppDispatch();
    const { breedList, selectedBreedList, subBreedList, selectedSubBreedList, breedWithSubBreedList } = useAppSelector((state: RootState) => state.animals);

    const handleOnChangeBreed = (event: SelectChangeEvent<any>) => {
        const { value } = event.target;
        dispatch(setSelectedBreedList(value));
    };

    const handleOnDeleteBreed = (e: React.MouseEvent, value: string) => {
        e.preventDefault();
        const filteredBreedList = selectedBreedList.filter((v) => v !== value)
        const filteredSubBreedList = selectedSubBreedList.filter((v) => !breedWithSubBreedList[value].includes(v));

        dispatch(setSelectedBreedList(filteredBreedList));
        dispatch(setSelectedSubBreedList(filteredSubBreedList));
    };

    const handleOnChangeSubBreed = (event: SelectChangeEvent<any>) => {
        const { value } = event.target;
        dispatch(setSelectedSubBreedList(value));
    };

    const handleOnDeleteSubBreed = (e: React.MouseEvent, value: string) => {
        e.preventDefault();
        const filtered = selectedSubBreedList.filter((v) => v !== value)
        dispatch(setSelectedSubBreedList(filtered));
    };

    const applyFilters = () => {
        if (selectedBreedList.length <= 0 && selectedSubBreedList.length <= 0) {
            return fetchRandomAnimals(webConfig.fetchQuantity);
        }
        return fetchAnimals(selectedBreedList, selectedSubBreedList, webConfig.fetchQuantity, breedWithSubBreedList);
    }
    const resetFilters = () => {
        dispatch(setSelectedBreedList([]));
        dispatch(setSelectedSubBreedList([]));
        fetchRandomAnimals(webConfig.fetchQuantity);
    }

    return (
        <>
            <Grid container spacing={2} mt={20} alignItems="stretch" >
                <Grid item xs={12} sm={6} md={6} lg={5}>
                    <AnimalFilterComponent {...{
                        label: 'Breed', handleOnChange: handleOnChangeBreed, handleOnDelete: handleOnDeleteBreed,
                        elements: breedList, currentValues: selectedBreedList
                    }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <AnimalFilterComponent {...{
                        label: 'Sub-breed', handleOnChange: handleOnChangeSubBreed, handleOnDelete: handleOnDeleteSubBreed,
                        elements: subBreedList, currentValues: selectedSubBreedList
                    }} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={2} justifyContent="start" display="flex">
                    <Button size='large' color="secondary" fullWidth variant='contained' onClick={() => applyFilters()}>Apply filters</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={1} justifyContent="start" display="flex">
                    <Button size='large' color="primary" fullWidth variant='outlined' onClick={() => resetFilters()}><RestartAltIcon /></Button>
                </Grid>
            </Grid>
        </>
    )
}
