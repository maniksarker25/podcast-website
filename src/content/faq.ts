import {
  Comment01Icon,
  HeadphonesIcon,
  LiveStreaming02Icon,
  Mic01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import type { FaqCategory } from "@/types";

export const faqCategories: FaqCategory[] = [
  {
    id: "account",
    title: "Account",
    description: "Signing up, signing in and managing your profile.",
    icon: UserCircleIcon,
    items: [
      { question: "How do I create an account?", answer: "Download the Preach Radio app, tap Sign up and follow the steps with your email address. You'll get a verification code to confirm it's you." },
      { question: "I forgot my password. What should I do?", answer: "On the sign-in screen, tap Forgot password and enter the email on your account. We'll send you a code to set a new password." },
      { question: "How do I change my name, photo or bio?", answer: "Open your profile, tap Edit, make your changes and save. Your updated profile shows everywhere right away." },
      { question: "How do I delete my account?", answer: "Go to your profile settings and choose Delete account. This permanently removes your profile and personal information. Creators should know that deleting a creator account also removes their published content." },
    ],
  },
  {
    id: "listening",
    title: "Listening & streaming",
    description: "Playing radio, podcasts, video and clips.",
    icon: HeadphonesIcon,
    items: [
      { question: "Why does a video take a moment to start?", answer: "New uploads are prepared for adaptive streaming in the background. Until that finishes they play from the original file, which can take longer to start on slow connections. Once ready, playback starts quickly and adjusts quality to your network." },
      { question: "Can I keep listening while I use the rest of the app?", answer: "Yes. Audio keeps playing in the mini player while you browse, search or read comments." },
      { question: "How do I save something for later?", answer: "Tap the bookmark or heart on any episode or clip. You'll find everything you've saved in your library, along with your playlists and listening history." },
      { question: "How do I find content near me?", answer: "Allow location access when the app asks. You'll then see podcasts and creators from your area. You can turn this off at any time in your device settings." },
    ],
  },
  {
    id: "creators",
    title: "Creators & broadcasting",
    description: "Publishing, creator profiles and insights.",
    icon: Mic01Icon,
    items: [
      { question: "How do I become a creator?", answer: "In the app, apply for a creator account and complete your profile. Our team reviews new creator profiles to keep the community trustworthy; you'll be notified once you're approved." },
      { question: "What can I publish?", answer: "Audio episodes, full-length video, and Preach Clips — short video or audio of up to two minutes. You can add a title, description, category, tags and a cover image. Video uploaded without a cover gets one automatically from a frame of the video." },
      { question: "How do I add a support or donation link?", answer: "Add your link in your creator profile settings. It appears on your profile so listeners can support you directly through the service you choose." },
      { question: "Where can I see how my content is doing?", answer: "Creator insights show plays, listeners, listening time, engagement and where people found you, so you can see what's working and plan what's next." },
    ],
  },
  {
    id: "live",
    title: "Live streaming",
    description: "Hosting and joining live sessions.",
    icon: LiveStreaming02Icon,
    items: [
      { question: "How do I join a live session?", answer: "Tap a live badge on the home screen or on a creator's profile. If you follow the host, you'll also get a notification when they go live." },
      { question: "Can I speak during a live session?", answer: "Yes — raise your hand from the live room. The host can invite you on stage; you'll join with your microphone (and camera, if you choose)." },
      { question: "How do I go live as a creator?", answer: "From your creator account, start a new live session, give it a title and go live. Your followers are notified straight away." },
      { question: "My live stream is choppy. What can I do?", answer: "A stable Wi-Fi connection works best. Close other apps using the network, keep your phone plugged in for long sessions, and try audio-only for very weak connections." },
    ],
  },
  {
    id: "community",
    title: "Content & community",
    description: "Comments, reporting and staying safe.",
    icon: Comment01Icon,
    items: [
      { question: "How do I report content or a user?", answer: "Tap the menu on the content or profile and choose Report. Tell us what's wrong; our team reviews every report and acts on content that breaks our community standards." },
      { question: "Someone is harassing me. What should I do?", answer: "Report the account from their profile and stop engaging with them. If you ever feel unsafe, contact local authorities as well as our support team." },
      { question: "Can I edit or delete my comments?", answer: "Yes. Open the menu on your comment to edit or delete it." },
      { question: "I think my content was used without permission.", answer: "Email our support team with a link to the content and details of your original work. We review copyright complaints and remove infringing content where appropriate." },
    ],
  },
];
