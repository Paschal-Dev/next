export const metadata = {
  title: "Send Money On Peerwallet",
  description: "Send Money On Peerwallet",
  openGraph: {
    title: "Send Money On Peerwallet",
    description: "Send Money On Peerwallet",
    url: "https://pwat.app/send",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/send.png",
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

import { MediaProps } from "@/utils/utils";
import SendMainPage from "./index";

export default function Send({ deviceType }: MediaProps): React.JSX.Element {
  return <SendMainPage deviceType={deviceType} />;
}
