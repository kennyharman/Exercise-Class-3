import { useEffect, useState} from "react"
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);


    // Usually, doing this without square brackets [] will cause an infinite loop, so it's best to not do this incase your code breaks
    // Code on pages will run two times, once to render what we want and another is to render strict mode to find any common bugs
    useEffect(() => {
        console.log(number);
    })

    return (
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinite loop</div>
                {number}
            </main>
        </>
    )
}