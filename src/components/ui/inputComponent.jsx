
import { Input } from "./input"
import { inputState } from "../../context/atom";
import { useSetRecoilState } from "recoil";


export function InputComponent(){

    const setInputState =  useSetRecoilState(inputState); 

    const handleChange = (event) => {
        setInputState(event.target.value);       
    };

    return (
        <div className=' flex justify-center py-6 px-5'>
            <Input type="text" onChange={handleChange} placeholder="Recipie" />
        </div> 
    )

}