export const metadata = {
    title: "PWAT - Peerwallet Token",
    description: "Explore the features and benefits of PWAT, Peerwallet's custom token, and how it integrates with the platform to enhance your financial transactions.",
    openGraph: {
      title: "PWAT - Peerwallet Token",
      description: "Explore the features and benefits of PWAT, Peerwallet's custom token, and how it integrates with the platform to enhance your financial transactions.",
      url: "https://pwat.app/pwat",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/pwat.png",
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
  
  import PWATPageClient from "./index";
  
  export default function PWAT(): React.JSX.Element {
    return <PWATPageClient />;
  }
  