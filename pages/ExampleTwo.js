import { useEffect } from "react"
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"

export default function ExampleTwo() {

    // Here we used the square brackets [] in the useEffect. This ensures that it will only run once
    useEffect (() => {
        console.log("RUN");
    }, [])

    return (
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}