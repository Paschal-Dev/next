export const metadata = {
    title: "Peerwallet Shop",
    description: "Set up your shop on Peerwallet to instantly connect with customers without the hassle of building a website.",
    openGraph: {
      title: "Peerwallet Shop",
      description: "Set up your shop on Peerwallet to instantly connect with customers without the hassle of building a website.",
      url: "https://pwat.app/shop",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/shop.png",
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
  
  import ShopPagePageClient from "./index";
  
  export default function ShopPage(): React.JSX.Element {
    return <ShopPagePageClient />;
  }
  