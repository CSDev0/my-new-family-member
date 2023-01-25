import config from '../config.json';


export const webConfig = {
    fetchQuantity: 30
}

export const apis = {
    DOG_CEO_API: {
        URL: config.DOG_CEO_API_URL || "https://dog.ceo/api"
    },
    RANDOM_PET_NAME_API: {
        URL: config.RANDOM_PET_NAME_API_URL || "https://randommer.io/pet-names"
    }
}

export const endpoints = {
    DOG_CEO_API: {
        BREEDS_LIST_ALL: () => `${apis.DOG_CEO_API.URL}/breeds/list/all`,

        SUB_BREEDS_LIST: (breed: string) => `${apis.DOG_CEO_API.URL}/breed/${breed}/list`,

        IMAGES_RANDOM: (quantity: number) => `${apis.DOG_CEO_API.URL}/breeds/image/random/${quantity}`,

        IMAGE_RANDOM: () => `${apis.DOG_CEO_API.URL}/breeds/image/random`,

        IMAGES_BY_BREED: (breed: string, quantity: number) =>
            `${apis.DOG_CEO_API.URL}/breed/${breed}/images/random/${quantity}`,

        IMAGES_BY_BREED_SUBREED: (breed: string, sub_breed: string, quantity: number) =>
            `${apis.DOG_CEO_API.URL}/breed/${breed}/${sub_breed}/images/random/${quantity}`,

    }
}