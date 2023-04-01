import React from "react";
import { getRandomMealAPI, listAllMealsByFirstLetterAPI, listMealCategoriesAPI } from "./api-adapter";

const HomePage = () => {
    const getRandomMeal = async() => {
        const response = await getRandomMealAPI();
    }

    const listMealCategories = async() => {
        const response = await listMealCategoriesAPI();
    }

    const getAllMeals = async() => {
        const response = await listAllMealsByFirstLetterAPI();
    }
    return(
        <div>
            <h1>HOME PAGE!</h1>
            <p>need a random meal? get one here!</p>
            <button onClick={() => {
                getRandomMeal();
            }}>get random meal</button>
            <button onClick={() => {
                listMealCategoriesAPI();
            }}>list meal categories</button>
            <button onClick={() => {
                getAllMeals();
            }}>list all meals</button>
        </div>
    )
}

export default HomePage;