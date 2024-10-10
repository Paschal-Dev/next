export const metadata = {
  title: "Frequently Asked Questions",
  description: "Ask me anything!",
  openGraph: {
    title: "Welcome to Peerwallet",
    description: "Effortlessly send, receive, and spend payments.",
    url: "https://pwat.app/",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/p2p.png",
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

import FAQPageClient from "./index";

export default function Faq(): React.JSX.Element {
  return <FAQPageClient />;
}
