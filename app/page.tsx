import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import coffee from '@/public/images/coffee.jpg';
import Image from 'next/image';

export default async function Main() {
    const session = await getServerSession(authOptions);

    return (
        <main>
            <Image
                src={coffee}
                height={240}
                width={240}
                alt='morning coffee'
            />
        </main>
    );
}
