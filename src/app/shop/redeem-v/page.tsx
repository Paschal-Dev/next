export const metadata = {
  title: "Redeem Peerwallet Voucher",
  description:
    "Instantly load your Peerwallet balance with the Peerwallet Voucher",
  openGraph: {
    title: "Redeem Peerwallet Voucher",
    description:
      "Instantly load your Peerwallet balance with the Peerwallet Voucher",
    url: "https://pwat.app/shop/voucher",
    siteName: "Peerwallet",
    images: [
      {
        url: "https://pwat.app/meta-banners/redeem.png",
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

import RedeemVoucher from "./index";

export default function RedeemVoucherPage(): React.JSX.Element {
  return <RedeemVoucher />;
}
