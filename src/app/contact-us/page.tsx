export const metadata = {
    title: "Contact Peerwallet",
    description: "Get in touch with Peerwallet's support team for any questions, issues, or feedback.",
    openGraph: {
      title: "Contact Peerwallet",
      description: "Get in touch with Peerwallet's support team for any questions, issues, or feedback.",
      url: "https://peerwallet.com/contact-us",
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
      icon: "./assets/images/favicon.png",
      shortcut: "./assets/images/favicon.png", 
      apple: "./assets/images/favicon.png", 
    },
  };
  
  import ContactPageClient from "./index";
  
  export default function ContactUs(): React.JSX.Element {
    return <ContactPageClient />;
  }
  