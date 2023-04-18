import { Header } from '@/components/Header';
import '../global.css';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (<>
        <html>
            <body>
                <Header />

                {children}
            </body>

        </html>
    </>
    );
}