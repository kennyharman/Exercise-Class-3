import { useEffect, useState } from "react"
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function ExampleThree() {
    
    const [number, setNumber] = useState(0);

    const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

    useEffect (() => {
        if (number > colors.length - 1) {
            setNumber(0)
            console.log("Changing the number back to 0" + colors[0]);    
        } else {
            console.log("Changing the number value: " + colors)
        }
        console.log("Changing number value: " + colors[number]);
    }, [number])
    
    return (
        <>
            <h1>Example 3</h1>
            <button style={{backgroundColor: colors[number]}} onClick={() => setNumber(number +1)}>
                Incremement Number
            </button>
            <div>
                {number}
            </div>
        </>
    )
}