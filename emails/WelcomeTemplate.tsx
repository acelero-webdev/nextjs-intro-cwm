import React from 'react';
import {
    Html,
    Body,
    Container,
    Tailwind,
    Text,
    Link,
    Preview,
} from '@react-email/components';

export default function WelcomeTemplate({ name }: { name: string }) {
    return (
        <Html>
            <Preview>Welcome Aboard!</Preview>
            <Tailwind>
                <Body>
                    <Container>
                        <Text className='font-bold text-3xl'>
                            Hello {name},
                        </Text>
                        <Link href='https://codewithwosh.com'>
                            Code with mosh.
                        </Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
