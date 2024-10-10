export const metadata = {
    title: "Sell On Peerwallet",
    description: "Accept payments from your website or via payment or product links.",
    openGraph: {
      title: "Sell On Peerwallet",
      description: "Accept payments from your website or via payment or product links.",
      url: "https://pwat.app/sell",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/sellers.png",
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
  
  import SellPageClient from "./index";
  
  export default function Sell(): React.JSX.Element {
    return <SellPageClient />;
  }
  