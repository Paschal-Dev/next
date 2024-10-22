import SignUpPageClient from ".";

export const metadata = {
    title: "Create Your Peerwallet Account",
    description: "Sign up for a Peerwallet account to start using the platform for secure and efficient financial transactions.",
    openGraph: {
      title: "Create Your Peerwallet Account",
      description: "Sign up for a Peerwallet account to start using the platform for secure and efficient financial transactions.",
      url: "https://pwat.app/reg",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/reg.png",
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

export default function SignUp(): React.JSX.Element  {
  return (
    <SignUpPageClient />
  )
}
