export const metadata = {
    title: "Terms and Conditions",
    description: "Read Peerwallet's terms and conditions to understand your rights and responsibilities when using the platform.",
    openGraph: {
      title: "Terms and Conditions",
      description: "Read Peerwallet's terms and conditions to understand your rights and responsibilities when using the platform.",
      url: "https://pwat.app/terms",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/terms.png",
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
  
  import TermsPageClient from "./index";
  
  export default function Terms(): React.JSX.Element {
    return <TermsPageClient />;
  }
  