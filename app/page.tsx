import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Main() {
    return (
        <main>
            <h1>Hello!</h1>
            <Link href='/users'>Users</Link>
            <ProductCard />
        </main>
    );
}
