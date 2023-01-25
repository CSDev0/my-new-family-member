import { useAppSelector } from '@app/hooks';
import { RootState } from '@app/store';
import React from 'react'
import AnimalListComponent from './AnimalListComponent'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { fetchRandomAnimals } from '../animalAPI';

fetchRandomAnimals(30);
export default function AnimalListLayout() {

    const { list, isLoadingList} = useAppSelector((state: RootState) => state.animals);

    return (
        <>
            <LazyLoadComponent>
                <AnimalListComponent {...{ list, isLoading: isLoadingList }} />
            </LazyLoadComponent>
        </>
    )
}
