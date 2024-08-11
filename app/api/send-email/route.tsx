import { Resend } from 'resend';
import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
    await resend.emails.send({
        from: 'shanekobylecky.tech',
        to: 'skobylecky1@gmail.com',
        subject: 'My first email',
        react: <WelcomeTemplate name='Scott' />,
    });

    return NextResponse.json({});
}
