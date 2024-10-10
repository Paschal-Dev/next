export const metadata = {
    title: "Peerwallet Works",
    description: "Learn how Peerwallet operates as a global finance marketplace with a peer-to-peer payment system, enabling seamless funding, transferring, and spending of funds worldwide.",
    openGraph: {
      title: "Peerwallet Works",
      description: "Learn how Peerwallet operates as a global finance marketplace with a peer-to-peer payment system, enabling seamless funding, transferring, and spending of funds worldwide.",
      url: "https://pwat.app/ho-it-works",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/learn-more.png",
          alt: "Peerwallet",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    icons: {
        icon: "./assets/images/favicon.png", // Ensure your favicon.ico is in the public folder
        shortcut: "./assets/images/favicon.png", // Optional: You can also add a shortcut icon
        apple: "./assets/images/favicon.png", // Optional: Apple touch icon for iOS
      },
  };
  
  import LearnMorePageClient from "./index";
  
  export default function LearnMore(): React.JSX.Element {
    return <LearnMorePageClient />;
  }
  