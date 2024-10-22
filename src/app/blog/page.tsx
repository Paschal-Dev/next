export const metadata = {
  title: "Peerwallet Blog",
  description:
    "Stay updated with the latest news, updates, and insights from Peerwallet's blog.",
  openGraph: {
    title: "Peerwallet Blog",
    description:
      "Stay updated with the latest news, updates, and insights from Peerwallet's blog.",
    url: "https://peerwallet.com/blog",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/blog.png",
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

import BlogClientPage from "./index";

export default function Blog(): React.JSX.Element {
  return <BlogClientPage deviceType={""} />
}
