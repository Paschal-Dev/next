import React from 'react'
import DocumentClientPage from '.';

export const metadata = {
  title: "Peerwallet API",
  description: " Access Peerwallet's API documentation to integrate the platform's features into your applications and services.",
  openGraph: {
    title: "Peerwallet API",
    description: " Access Peerwallet's API documentation to integrate the platform's features into your applications and services.",
    url: "https://pwat.app/contact-us",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/api.png",
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

export default function ApiPage() {
  return (
     
        <DocumentClientPage deviceType={''} />
     
  )
}
