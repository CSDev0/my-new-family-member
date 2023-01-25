import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAnimal {
    imageUrl: string;
    name: string;
}
export interface IBreedWithSubBreed {
    [breed: string]: string[]
}

export interface IAnimalSliceState {
    list: IAnimal[] | [];
    breedList: string[];
    subBreedList: string[];
    breedWithSubBreedList: IBreedWithSubBreed;
    selectedBreedList: string[];
    selectedSubBreedList: string[];
    isLoadingList: boolean,
}
const initialState: IAnimalSliceState = {
    list: [],
    breedList: [],
    subBreedList: [],
    selectedBreedList: [],
    selectedSubBreedList: [],
    breedWithSubBreedList: {},
    isLoadingList: false,
}

export const animalSlice = createSlice({
    name: 'animalSlice',
    initialState,
    reducers: {
        setAnimalList: (state, action) => {
            state.list = action.payload;
        },
        setBreedList: (state, action) => {
            state.breedList = action.payload;
        },
        setSubBreedList: (state, action) => {
            state.subBreedList = action.payload;
        },
        setSelectedBreedList: (state, action) => {
            const arrayOfSelected = action.payload;
            state.selectedBreedList = arrayOfSelected;
            state.subBreedList = arrayOfSelected.flatMap((breed: string) => state.breedWithSubBreedList[breed].flat());
        },
        setSelectedSubBreedList: (state, action) => {
            state.selectedSubBreedList = action.payload;
        },
        setBreedWithSubBreedList: (state, action: PayloadAction<IBreedWithSubBreed>) => {
            state.breedWithSubBreedList = action.payload;
        },
        setIsLoadingList: (state, action: PayloadAction<boolean>) => {
            state.isLoadingList = action.payload;
        }
    },
});

export const { setAnimalList, setBreedList, setSubBreedList, setSelectedBreedList, setSelectedSubBreedList, setBreedWithSubBreedList, setIsLoadingList } = animalSlice.actions;

export default animalSlice.reducer;
