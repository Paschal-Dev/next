export const metadata = {
    title: "Virtual Cards",
    description: "Discover how to use Peerwallet's virtual cards for secure online transactions, enabling easy and safe spending of your funds.",
    openGraph: {
      title: "Virtual Cards",
      description: "Discover how to use Peerwallet's virtual cards for secure online transactions, enabling easy and safe spending of your funds.",
      url: "https://pwat.app/vcard",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/virtual-cards.png",
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
  
  import VirtualCardPageClient from "./index";
  
  export default function VirtualCard(): React.JSX.Element {
    return <VirtualCardPageClient />;
  }
  