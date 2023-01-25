import animalReducer, {
    IAnimal,
    IAnimalSliceState, setAnimalList,
    setBreedList, setSubBreedList, setSelectedBreedList, setSelectedSubBreedList, setBreedWithSubBreedList, setIsLoadingList, IBreedWithSubBreed
} from './animalSlice';

const fakeAnimalList: IAnimal[] = [
    {
        name: 'Betty',
        imageUrl: 'https://example.com',
    },
    {
        name: 'Flooffy',
        imageUrl: 'https://example.com',
    }
]
const fakeBreedList: string[] = ['borzoi', 'bulldog'];
const fakeSubBreedList: string[] = ['boston', 'english'];
const fakeSelectedBreedList: string[] = ['borzoi', 'bulldog'];
const fakeSelectedSubBreedList: string[] = ['english'];
const fakeBreedWithSubBreedList: IBreedWithSubBreed = { 'borzoi': [], 'bulldog': ["french", "boston"] };

describe('animal reducer', () => {
    const initialState: IAnimalSliceState = {
        list: [],
        breedList: [],
        subBreedList: [],
        breedWithSubBreedList: {},
        selectedBreedList: [],
        selectedSubBreedList: [],
        isLoadingList: false,
    };


    it('should handle initial state', () => {
        expect(animalReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    describe('when call setAnimalList reducer', () => {
        const actual = animalReducer(initialState, setAnimalList(fakeAnimalList));

        it('should update state.list with new animal list ', () => {
            expect(actual.list).toEqual(fakeAnimalList);
        });
    });

    describe('when call setBreedList reducer', () => {
        const actual = animalReducer(initialState, setBreedList(fakeBreedList));

        it('should update state.breedList with new value ', () => {
            expect(actual.breedList).toEqual(fakeBreedList);
        });
    });

    describe('when call setSubBreedList reducer', () => {
        const actual = animalReducer(initialState, setSubBreedList(fakeSubBreedList));

        it('should update state.subBreedList with new value', () => {
            expect(actual.subBreedList).toEqual(fakeSubBreedList);
        });
    });

    describe('when call setSelectedBreedList reducer', () => {
        let actual = animalReducer(initialState, setBreedWithSubBreedList(fakeBreedWithSubBreedList));
        actual = animalReducer(actual, setSelectedBreedList(fakeSelectedBreedList));

        it('should has state.fakeBreedWithSubBreedList set', () => {
            expect(actual.breedWithSubBreedList).toEqual(fakeBreedWithSubBreedList);
        });
        it('should update state.SelectedBreedList with new value', () => {
            expect(actual.selectedBreedList).toEqual(fakeSelectedBreedList);
        });
    });

    describe('when call setSelectedSubBreedList reducer', () => {
        const actual = animalReducer(initialState, setSelectedSubBreedList(fakeSelectedSubBreedList));

        it('should update state.selectedSubBreedList with new value', () => {
            expect(actual.selectedSubBreedList).toEqual(fakeSelectedSubBreedList);
        });
    });

    describe('when call setBreedWithSubBreedList method', () => {
        const actual = animalReducer(initialState, setBreedWithSubBreedList(fakeBreedWithSubBreedList));

        it('should update state.breedWithSubBreedList with new animal breeds object and sub-breeds array ', () => {
            expect(actual.breedWithSubBreedList).toEqual(fakeBreedWithSubBreedList);
        });
    });

    describe('when call setIsLoadingList reducer', () => {
        const actual = animalReducer(initialState, setIsLoadingList(false));

        it('should update state.isLoadingList with new value', () => {
            expect(actual.isLoadingList).toEqual(false);
        });
    });
});