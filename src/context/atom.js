import axios from "axios";
import { atom, selector } from "recoil";

export const inputState = atom({
    key: 'inputState', 
    default: '', 
});

export const itemsState = atom({
    key: 'itemsState', 
    default: selector({
        key: "itemsSelector",
        get: async ({get}) => {

            const inputValue = get(inputState);

            if(!inputValue){
                return [];
            }

            try{
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&apiKey=36d6b88367b74efe8844f8ba510066d1`
                );
                
                return response.data.results;
            }
            catch(error){
                console.error("API Request Failed:", error);
                return [];
            }

        },
    }), 
});





