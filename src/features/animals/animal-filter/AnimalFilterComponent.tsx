import { Button, Grid } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SelectChipsComponent from '@common/select-chips/SelectChipsComponent';
import { IAnimalFilterComponentProps } from './AnimalFilterComponent.interfaces';


export default function AnimalFilterComponent(
    { breedList, selectedBreedList, subBreedList, selectedSubBreedList, handleOnChangeBreed,
        handleOnDeleteBreed, handleOnDeleteSubBreed, handleOnChangeSubBreed, applyFilters, resetFilters }
        : IAnimalFilterComponentProps) {

    return (
        <Grid container spacing={2} mt={20} alignItems="stretch" >
            <Grid item xs={12} sm={6} md={6} lg={5}>
                <SelectChipsComponent {...{
                    label: 'Breed', handleOnChange: handleOnChangeBreed, handleOnDelete: handleOnDeleteBreed,
                    elements: breedList, currentValues: selectedBreedList
                }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                <SelectChipsComponent {...{
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
    )
}