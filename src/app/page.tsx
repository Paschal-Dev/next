export const metadata = {
  title: "Welcome to Peerwallet - A Semi Decentralized Finance Marketplace",
  description:
    "Effortlessly send, receive, and spend payments with a single Peerwallet account.",
  openGraph: {
    title: "Welcome to Peerwallet",
    description: "Effortlessly send, receive, and spend payments.",
    url: "https://pwat.app/",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/p2p.png",
        width: 800,
        height: 600,
        alt: "Peerwallet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
      icon: "/src/app/assets/images/favicon.png", // Ensure your favicon.ico is in the public folder
      shortcut: "/src/app/assets/images/favicon.png", // Optional: You can also add a shortcut icon
      apple: "/src/app/assets/images/favicon.png", // Optional: Apple touch icon for iOS
    },
};

import HomePageClient from "./home";

export default function HomePage(): React.JSX.Element {
  return <HomePageClient />;
}
