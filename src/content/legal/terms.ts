import { siteConfig } from "@/config/site";
import type { LegalDocument } from "@/types";

export const termsAndConditions: LegalDocument = {
  slug: "terms",
  title: "Terms & Conditions",
  lastUpdated: "2026-11-18",
  summary:
    "These terms explain how you may use Preach Radio — to listen, watch, join live sessions and publish as a creator. Use the platform respectfully, only share content you have the right to share, and remember that you remain responsible for what you publish.",
  sections: [
    {
      id: "agreement",
      title: "1. Agreement to these terms",
      blocks: [
        {
          type: "paragraph",
          text: `These Terms & Conditions ("Terms") govern your access to and use of the ${siteConfig.name} mobile apps, website and related services (together, the "Service"). By creating an account or using the Service, you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Service.`,
        },
        {
          type: "paragraph",
          text: "If you use the Service on behalf of a church, ministry, station or other organisation, you confirm that you are authorised to accept these Terms for that organisation.",
        },
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility and accounts",
      blocks: [
        {
          type: "list",
          items: [
            "You must be at least 13 years old, or the minimum age required in your country, to create an account.",
            "The information you give us must be accurate and kept up to date.",
            "You are responsible for keeping your login details secure and for all activity under your account.",
            "Tell us promptly if you believe your account has been accessed without your permission.",
          ],
        },
      ],
    },
    {
      id: "the-service",
      title: "3. Using the Service",
      blocks: [
        {
          type: "paragraph",
          text: "The Service lets you listen to radio stations and podcasts, watch video and short clips, join live broadcasts, follow creators, and like, comment on, save and share content. Features may change over time, and some features may not be available in every country or on every device.",
        },
        {
          type: "paragraph",
          text: "We grant you a personal, non-exclusive, non-transferable and revocable licence to use the Service for your own non-commercial purposes, in line with these Terms.",
        },
      ],
    },
    {
      id: "creators",
      title: "4. Creator accounts",
      blocks: [
        {
          type: "paragraph",
          text: "Creator accounts can publish audio, video, clips and live broadcasts. New creator profiles are reviewed before they can publish, and we may decline or remove a creator profile that does not meet these Terms.",
        },
        { type: "subheading", text: "Your responsibilities as a creator" },
        {
          type: "list",
          items: [
            "You own, or have all necessary rights and permissions for, everything you publish — including music, recordings, images and the voices or likeness of people who appear.",
            "Your profile, titles, descriptions and cover images are accurate and not misleading.",
            "Any support or donation link you add is your own, is lawful in your country, and is used for the purpose you describe.",
            "You are solely responsible for any taxes, reporting or regulatory obligations that apply to support you receive.",
          ],
        },
        {
          type: "callout",
          text: "Donations and support payments are processed by third-party services you choose. They are a relationship between you and your supporters; Preach Radio is not a party to them and does not handle those funds.",
        },
      ],
    },
    {
      id: "your-content",
      title: "5. Your content",
      blocks: [
        {
          type: "paragraph",
          text: `You keep ownership of the content you publish ("Your Content"). By publishing it on the Service, you grant ${siteConfig.name} a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, convert (for example into streaming formats), display, distribute and promote Your Content within the Service and in marketing for the Service, for as long as it remains on the Service and for a reasonable period afterwards to complete removal from backups and caches.`,
        },
        {
          type: "paragraph",
          text: "You can delete Your Content at any time. Deleting content removes it from public view; copies other users have already shared outside the Service, or that we are legally required to keep, may persist.",
        },
      ],
    },
    {
      id: "community",
      title: "6. Community standards",
      blocks: [
        { type: "paragraph", text: "To keep Preach Radio a trustworthy place, you may not use the Service to:" },
        {
          type: "list",
          items: [
            "Post content that is unlawful, defamatory, hateful, harassing, sexually explicit or that promotes violence.",
            "Infringe anyone's copyright, trademark, privacy or other rights.",
            "Impersonate any person, ministry, station or organisation, or misrepresent your affiliation.",
            "Spread spam, scams, malware or misleading fundraising appeals.",
            "Interfere with the Service, including by scraping, reverse engineering or overloading our systems.",
            "Harm or exploit minors in any way.",
          ],
        },
        {
          type: "paragraph",
          text: "You can report content or accounts from within the app. We review reports and may remove content, limit features or suspend accounts that break these standards.",
        },
      ],
    },
    {
      id: "live",
      title: "7. Live broadcasts",
      blocks: [
        {
          type: "paragraph",
          text: "Hosts are responsible for their live broadcasts and for the guests they invite on stage. Participants must follow the same community standards. Live sessions may be moderated, ended or removed if they break these Terms. Do not share personal information about others during a broadcast without their consent.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "8. Our intellectual property",
      blocks: [
        {
          type: "paragraph",
          text: `The Service, including its design, software, logos and the ${siteConfig.name} name, is owned by us or our licensors and protected by intellectual property laws. These Terms do not give you any right to use our branding without our written permission.`,
        },
      ],
    },
    {
      id: "copyright",
      title: "9. Copyright complaints",
      blocks: [
        {
          type: "paragraph",
          text: `If you believe content on the Service infringes your copyright, contact us at ${siteConfig.contact.supportEmail} with a description of the work, where it appears on the Service, your contact details and a statement that you are the rights holder or authorised to act for them. We will review the request and remove infringing content where appropriate. Repeat infringers may lose their accounts.`,
        },
      ],
    },
    {
      id: "termination",
      title: "10. Suspension and termination",
      blocks: [
        {
          type: "paragraph",
          text: "You may stop using the Service and delete your account at any time. We may suspend or terminate your access if you breach these Terms, if required by law, or to protect the Service or its users. Where reasonable, we will tell you why and give you a chance to respond.",
        },
      ],
    },
    {
      id: "disclaimers",
      title: "11. Disclaimers",
      blocks: [
        {
          type: "paragraph",
          text: `The Service is provided "as is" and "as available". Views expressed in content belong to the creators and stations that publish them and are not necessarily those of ${siteConfig.name}. To the extent permitted by law, we do not guarantee that the Service will be uninterrupted, error-free or that content will always be available.`,
        },
      ],
    },
    {
      id: "liability",
      title: "12. Limitation of liability",
      blocks: [
        {
          type: "paragraph",
          text: `To the fullest extent permitted by law, ${siteConfig.name} will not be liable for any indirect, incidental, special or consequential damages, or for any loss of data, revenue or goodwill, arising from your use of the Service. Nothing in these Terms limits liability that cannot be limited by law.`,
        },
      ],
    },
    {
      id: "changes",
      title: "13. Changes to these terms",
      blocks: [
        {
          type: "paragraph",
          text: "We may update these Terms from time to time. When we make material changes, we will update the date at the top of this page and, where appropriate, notify you in the app. Continuing to use the Service after changes take effect means you accept the updated Terms.",
        },
      ],
    },
    {
      id: "contact",
      title: "14. Contact us",
      blocks: [
        {
          type: "paragraph",
          text: `Questions about these Terms? Email ${siteConfig.contact.supportEmail} and we'll be glad to help.`,
        },
      ],
    },
  ],
};
