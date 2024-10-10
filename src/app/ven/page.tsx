export const metadata = {
    title: "Own a Fintech Business",
    description: "Revamp your financial future with Peerwallet: Unlock the world of fintech",
    openGraph: {
      title: "Own a Fintech Business",
      description: "Revamp your financial future with Peerwallet: Unlock the world of fintech",
      url: "https://pwat.app/ven",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/vendors.png",
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
  
  import VendorsPageClient from "./index";
  
  export default function Vendors(): React.JSX.Element {
    return <VendorsPageClient />;
  }
  