export const metadata = {
    title: "Affiliate Program",
    description: "Learn about Peerwallet's affiliate program and how you can earn by promoting the platform.",
    openGraph: {
        title: "Affiliate Program",
        description: "Learn about Peerwallet's affiliate program and how you can earn by promoting the platform.",
        url: "https://peerwallet.com/affiliates",
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
        icon: "./assets/images/favicon.png", 
        shortcut: "./assets/images/favicon.png", 
        apple: "./assets/images/favicon.png", 
    },
};

import AffiliatePageClient from "./index";

export default function Affiliate(): React.JSX.Element {
    return <AffiliatePageClient />;
}
