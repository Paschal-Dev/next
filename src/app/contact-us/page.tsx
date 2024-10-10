export const metadata = {
    title: "Contact Us",
    description: "Connect with Us for Support",
    openGraph: {
      title: "Contact Us",
      description: "Connect with Us for Support",
      url: "https://pwat.app/contact-us",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/contact-us.png",
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
  
  import ContactPageClient from "./index";
  
  export default function ContactUs(): React.JSX.Element {
    return <ContactPageClient />;
  }
  