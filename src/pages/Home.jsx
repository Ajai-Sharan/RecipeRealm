import { CardComponent } from "@/components/ui/cardComponent"
import { InputComponent } from "@/components/ui/inputComponent"
import { NavBar } from "@/components/ui/NavBar"


export function Home (){
    return(
        <div>
            <NavBar/>
            <InputComponent/>
            <CardComponent/>
        </div>
    )
}