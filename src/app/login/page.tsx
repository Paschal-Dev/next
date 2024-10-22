export const metadata = {
    title: "Login to Your Peerwallet Account",
    description: "Access your Peerwallet account to manage your funds, make transactions, and utilize all platform features.",
    openGraph: {
      title: "Login to Your Peerwallet Account",
      description: "Access your Peerwallet account to manage your funds, make transactions, and utilize all platform features.",
      url: "https://pwat.app/login",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/login.png",
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

import LoginPageClient from '.'

export default function Login(): React.JSX.Element  {
  return (
    <LoginPageClient />
  )
}
