const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';


export const getRandomMealAPI = async() => {
    try{
        const response = await fetch(`${BASE_URL}/random.php`, {
            method: "GET",
        });

        const result = await response.json();
        console.log(result, "result from getRandomMealAPI");
        return result;
    }catch(error){
        console.error(error);
    }
}

export const listMealCategoriesAPI = async() => {
    try{
        const response = await fetch(`${BASE_URL}/categories.php`, {
            method: "GET",
        });

        const result = await response.json();
        console.log(result, "result from categories!");
    }catch(error){
        console.error(error);
    }
}

export const listAllMealsByFirstLetterAPI = async() => {
    try{
        const response = await fetch(`${BASE_URL}/search.php?f=a`, {
            method: "GET",
        });

        const result = await response.json();
        console.log(result, "result from list all meals api");

    }catch(error){
        console.error(error);
    }
}