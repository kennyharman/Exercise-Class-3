import styles from './Header.module.css'
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <h1>This is a header! Heh!</h1>
            <Link href ='/'>Home</Link>
        </header>
    )
}