import "./globals.css";

export const metadata = {
    title: "USA House Price Prediction",
    description:
        "USA House Price Prediction System built using Next.js and FastAPI",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
