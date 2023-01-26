import { useAppSelector } from '@app/hooks';
import { RootState } from '@app/store';
import React, { useEffect } from 'react'
import AnimalListComponent from './AnimalListComponent'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { fetchRandomAnimals } from '../animalAPI';
import { webConfig } from '@config/index';

export default function AnimalListLayout() {

    const { list, isLoadingList} = useAppSelector((state: RootState) => state.animals);
    useEffect(() => {
            fetchRandomAnimals(webConfig.fetchQuantity);
        
    }, []);

    return (
        <>
            <LazyLoadComponent>
                <AnimalListComponent {...{ list, isLoading: isLoadingList }} />
            </LazyLoadComponent>
        </>
    )
}
