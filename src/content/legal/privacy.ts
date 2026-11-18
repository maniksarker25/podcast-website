import { siteConfig } from "@/config/site";
import type { LegalDocument } from "@/types";

export const privacyPolicy: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  lastUpdated: "2026-11-18",
  summary:
    "This policy explains what information Preach Radio collects, why we collect it, and the choices you have. We use your information to run and improve the Service, personalise what you see, and keep the community safe. We do not sell your personal information.",
  sections: [
    {
      id: "scope",
      title: "1. Who we are and what this covers",
      blocks: [
        {
          type: "paragraph",
          text: `This Privacy Policy applies to the ${siteConfig.name} mobile apps, website and related services (the "Service"). It describes how we collect, use and share information about listeners, viewers and creators.`,
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information we collect",
      blocks: [
        { type: "subheading", text: "Information you give us" },
        {
          type: "list",
          items: [
            "Account details such as your name, email address, phone number and password.",
            "Profile information such as your photo, cover image, bio and, for creators, a support or donation link.",
            "Content you publish — audio, video, clips, live broadcasts, titles, descriptions and cover images.",
            "Comments, replies, reports and messages you send to us or to other users.",
          ],
        },
        { type: "subheading", text: "Information collected as you use the Service" },
        {
          type: "list",
          items: [
            "Activity such as what you play, watch, like, save, follow and search for, and your listening history.",
            "Participation in live sessions, such as joining, reactions and requests to speak.",
            "Device and technical information such as device type, operating system, app version, IP address and crash logs.",
          ],
        },
        { type: "subheading", text: "Location" },
        {
          type: "paragraph",
          text: "With your permission, we use your device's location to show podcasts and creators near you. Creators may add a location to content they publish. You can turn location access off at any time in your device settings.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "3. How we use information",
      blocks: [
        {
          type: "list",
          items: [
            "To provide the Service — streaming content, running live sessions and keeping your library and history.",
            "To personalise your experience, such as recommendations, nearby content and notifications from creators you follow.",
            "To give creators aggregated insights about how their content performs.",
            "To keep the Service safe — reviewing reports, preventing abuse and enforcing our Terms.",
            "To communicate with you about your account, support requests and important changes.",
            "To understand and improve how the Service works.",
          ],
        },
      ],
    },
    {
      id: "creators-insights",
      title: "4. What creators can see",
      blocks: [
        {
          type: "paragraph",
          text: "Creators see aggregated statistics about their content, such as plays, listening time, likes and where listeners found them. Your public activity — such as comments, and appearing on stage in a live session — is visible to the creator and other users. Creators do not receive your email address or phone number.",
        },
      ],
    },
    {
      id: "sharing",
      title: "5. How we share information",
      blocks: [
        { type: "paragraph", text: "We do not sell your personal information. We share it only:" },
        {
          type: "list",
          items: [
            "With service providers who help us operate the Service — for example cloud hosting, media storage and streaming, live video and notifications — under contracts that limit how they may use it.",
            "Publicly, when you choose to: your profile, published content and comments are visible to others.",
            "When required by law, or to protect the rights, safety and property of our users, the public or Preach Radio.",
            "As part of a merger, acquisition or sale of assets, in which case this policy will continue to apply.",
          ],
        },
        {
          type: "callout",
          text: "Support and donation links on creator profiles lead to third-party services. Information you give those services is governed by their own privacy policies, not this one.",
        },
      ],
    },
    {
      id: "retention",
      title: "6. How long we keep information",
      blocks: [
        {
          type: "paragraph",
          text: "We keep your information for as long as your account is active and as needed to provide the Service. When you delete your account, we delete or anonymise your personal information within a reasonable period, except where we must keep it to meet legal obligations, resolve disputes or enforce our agreements.",
        },
      ],
    },
    {
      id: "security",
      title: "7. Security",
      blocks: [
        {
          type: "paragraph",
          text: "We use technical and organisational measures to protect your information, including encrypted connections, access controls and hashed passwords. No system is completely secure, so please use a strong, unique password and keep it private.",
        },
      ],
    },
    {
      id: "your-choices",
      title: "8. Your choices and rights",
      blocks: [
        {
          type: "list",
          items: [
            "Update your profile and account details in the app at any time.",
            "Control notifications and location access in the app and in your device settings.",
            "Delete content you've published, or delete your account entirely.",
            `Request a copy of your information, or ask us to correct or delete it, by emailing ${siteConfig.contact.privacyEmail}.`,
          ],
        },
        {
          type: "paragraph",
          text: "Depending on where you live, you may have additional rights under local law. We will respond to requests in line with applicable law.",
        },
      ],
    },
    {
      id: "children",
      title: "9. Children",
      blocks: [
        {
          type: "paragraph",
          text: "The Service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has given us information, contact us and we will delete it.",
        },
      ],
    },
    {
      id: "international",
      title: "10. International transfers",
      blocks: [
        {
          type: "paragraph",
          text: "We and our service providers may process information in countries other than your own. Where we do, we take steps to ensure it remains protected in line with this policy.",
        },
      ],
    },
    {
      id: "changes",
      title: "11. Changes to this policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this policy from time to time. We will change the date at the top of this page and, for significant changes, let you know in the app.",
        },
      ],
    },
    {
      id: "contact",
      title: "12. Contact us",
      blocks: [
        {
          type: "paragraph",
          text: `For privacy questions or requests, email ${siteConfig.contact.privacyEmail}.`,
        },
      ],
    },
  ],
};
