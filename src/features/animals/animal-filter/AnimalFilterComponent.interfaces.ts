import { SelectChangeEvent } from "@mui/material";

export interface IBreedAnimalFilterProps {
    breedList: string[];
    selectedBreedList: string[];
    handleOnChangeBreed: (e: SelectChangeEvent<any>) => void;
    handleOnDeleteBreed: (e: React.MouseEvent, value: string) => void;
}
export interface ISubBreedAnimalFilterProps {
    subBreedList: string[];
    selectedSubBreedList: string[];
    handleOnChangeSubBreed: (e: SelectChangeEvent<any>) => void;
    handleOnDeleteSubBreed: (e: React.MouseEvent, value: string) => void;
}

export interface IAnimalFilterComponentProps extends IBreedAnimalFilterProps, ISubBreedAnimalFilterProps {
    applyFilters: () => void;
    resetFilters: () => void;
}