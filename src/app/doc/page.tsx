export const metadata = {
  title: "KnowledgeBase",
  description:
    "Access detailed documentation for using Peerwallet's services, including API integration, account setup, and transaction processes.",
  openGraph: {
    title: "KnowledgeBase",
    description:
      "Access detailed documentation for using Peerwallet's services, including API integration, account setup, and transaction processes.",
    url: "https://peerwallet.com/doc",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/knowledge-base.png",
        alt: "Peerwallet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/src/app/assets/images/favicon.png",
    shortcut: "/src/app/assets/images/favicon.png",
    apple: "/src/app/assets/images/favicon.png",
  },
};

import DocMainPage from "./index";

export default function KnowledgeBase(): React.JSX.Element {
  return <DocMainPage />;
}
