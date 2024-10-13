export const metadata = {
    title: "How Peerwallet Works",
    description: "Learn how Peerwallet operates as a global finance marketplace with a peer-to-peer payment system, enabling seamless funding, transferring, and spending of funds worldwide.",
    openGraph: {
      title: "How Peerwallet Works",
      description: "Learn how Peerwallet operates as a global finance marketplace with a peer-to-peer payment system, enabling seamless funding, transferring, and spending of funds worldwide.",
      url: "https://peerwallet.com/how-it-works",
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
        icon: "./assets/images/favicon.png", 
        shortcut: "./assets/images/favicon.png", 
        apple: "./assets/images/favicon.png", 
      },
  };
  
  import LearnMorePageClient from "./index";
  
  export default function LearnMore(): React.JSX.Element {
    return <LearnMorePageClient />;
  }
  