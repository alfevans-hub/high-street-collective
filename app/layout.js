import "./globals.css";

export const metadata = {
  title: "High Street Collective — Barbershop Booking, Done Properly",
  description: "Give your barbershop a beautiful booking page, a live walk-in queue, and an admin dashboard — all in one.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
