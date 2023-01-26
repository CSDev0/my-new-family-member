import { useAppDispatch, useAppSelector } from '@app/hooks';
import { RootState } from '@app/store';
import { SelectChangeEvent } from '@mui/material'
import React from 'react'
import { fetchAnimals, fetchRandomAnimals } from '../animalAPI';
import { setSelectedBreedList, setSelectedSubBreedList } from '../animalSlice';
import AnimalFilterComponent from './AnimalFilterComponent'
import { webConfig } from '@config/index';

export default function AnimalFilterLayout() {
    const dispatch = useAppDispatch();
    const animalsState = useAppSelector((state: RootState) => state.animals);
    const { selectedBreedList, selectedSubBreedList, breedWithSubBreedList } = animalsState;

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
        <AnimalFilterComponent
            {...{
                ...animalsState, handleOnChangeBreed, handleOnDeleteBreed,
                handleOnChangeSubBreed, handleOnDeleteSubBreed, applyFilters, resetFilters
            }} />
    )
}
