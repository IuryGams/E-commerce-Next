import Link from "next/link";


export default function NavBar (){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">Ofertas do dia</Link>
                </li>
                <li>
                    <Link href="#">Produtos</Link>
                </li>
            </ul>
        </nav>
    )
} 