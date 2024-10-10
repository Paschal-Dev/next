export const metadata = {
    title: "Peerwallet Vouchers",
    description: "Learn how to buy, redeem, and use Peerwallet vouchers for seamless transactions and gifting.",
    openGraph: {
      title: "Peerwallet Voucher",
      description: "Learn how to buy, redeem, and use Peerwallet vouchers for seamless transactions and gifting.",
      url: "https://pwat.app/voucher",
      siteName: "Peerwallet",
      images: [
        {
          url: "https://pwat.app/meta-banners/voucher.png",
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
  
  import VoucherPageClient from "./index";
  
  export default function VoucherPage(): React.JSX.Element {
    return <VoucherPageClient />;
  }
  