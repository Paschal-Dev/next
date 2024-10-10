export const metadata = {
    title: "Affiliate Program",
    description: "Learn about Peerwallet's affiliate program and how you can earn by promoting the platform.",
    openGraph: {
        title: "Affiliate Program",
        description: "Learn about Peerwallet's affiliate program and how you can earn by promoting the platform.",
        url: "https://pwat.app/affiliates",
        siteName: "Peerwallet",
        images: [
            {
                url: "https://pwat.app/meta-banners/affiliates.png",
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

import AffiliatePageClient from "./index";

export default function Affiliate(): React.JSX.Element {
    return <AffiliatePageClient />;
}
