import { apis, endpoints } from "@config/index";
import Axios from 'axios';
import { IAnimal, IBreedWithSubBreed, setAnimalList, setBreedList, setBreedWithSubBreedList, setIsLoadingList, setSubBreedList } from "./animalSlice";
import { dispatch } from "@app/store";

const petKinds = { DOG: 'Dog', CAT: 'Cat' };


export async function fetchBreedList() {
    const result: any = await Axios.get(endpoints.DOG_CEO_API.BREEDS_LIST_ALL());
    let breedWithSubBreedList = result.data.message;
    let breedList = Object.keys(breedWithSubBreedList);
    dispatch(setBreedList(breedList));
    dispatch(setBreedWithSubBreedList(breedWithSubBreedList));
}

export const fetchRandomAnimals = async (quantity: number) => {
    dispatch(setIsLoadingList(true));
    try {
        let animals: IAnimal[] = [];
        const petNames: string[] = await fetchRandomPetNames(petKinds.DOG, quantity);
        const result: any = await Axios.get(endpoints.DOG_CEO_API.IMAGES_RANDOM(quantity));
        const images = result.data.message;

        for (const [index, value] of petNames.entries()) {
            animals.push({ name: value, imageUrl: images[index] })
        }
        dispatch(setAnimalList(animals));
    } catch (e) {
        console.error(e);
    }
    dispatch(setIsLoadingList(false));
}


export async function fetchAnimals(selectedBreedList: string[], selectedSubBreedList: string[] = [], quantity: number, breedWithSubBreedList: any) {

    dispatch(setIsLoadingList(true));
    try {
        const selectionAmount = selectedBreedList.length + selectedSubBreedList.length;
        let animals: IAnimal[] = [];
        const petNames: string[] = await fetchRandomPetNames(petKinds.DOG, quantity);
        for (let breed of selectedBreedList) {
            const result: any = await Axios.get(endpoints.DOG_CEO_API.IMAGES_BY_BREED(breed, quantity / selectionAmount));

            result.data.message.forEach((img: string, index: number) => animals.push({ name: petNames[index], imageUrl: img }));

            for (let subBreed of selectedSubBreedList) {
                if (breedWithSubBreedList[breed].includes(subBreed)) {
                    const result: any = await Axios.get(endpoints.DOG_CEO_API.IMAGES_BY_BREED_SUBREED(breed, subBreed, quantity / selectionAmount));
                    result.data.message.forEach((img: string, index: number) => animals.push({ name: petNames[index], imageUrl: img }));
                }

            }

        }
        dispatch(setAnimalList(animals));

    } catch (e) {
        console.error(e);
    }
    dispatch(setIsLoadingList(false));
}

export async function fetchRandomPetNames(kind: string, quantity: number) {
    try {
        var bodyFormData = new FormData();
        bodyFormData.append('animal', kind);
        bodyFormData.append('number', String(quantity));
        const result: any = await Axios.post(apis.RANDOM_PET_NAME_API.URL, bodyFormData);
        return result.data;
    } catch (e) {
        console.error(e);
    }

}