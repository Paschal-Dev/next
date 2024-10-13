export const metadata = {
  title: "Frequently Asked Questions",
  description: "Get answers to common questions about using Peerwallet, including account types, fees, payment methods, and how to integrate Peerwallet on your website.",
  openGraph: {
    title: "Frequently Asked Questions",
    description: "Get answers to common questions about using Peerwallet, including account types, fees, payment methods, and how to integrate Peerwallet on your website.",
    url: "https://pwat.app/",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/faq.png",
        alt: "Peerwallet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
      icon: "/src/app/assets/images/favicon.png", 
      shortcut: "/src/app/assets/images/favicon.png", 
      apple: "/src/app/assets/images/favicon.png", 
    },
};

import FAQPageClient from "./index";

export default function Faq(): React.JSX.Element {
  return <FAQPageClient />;
}
