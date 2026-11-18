/**
 * Illustrative content for the product previews. Every name, show and number here
 * is fictional and exists only to show what the app looks like.
 */

export const nowPlaying = {
  station: "Preach Radio FM",
  show: "Morning Light",
  host: "Pastor Daniel Okoro",
  listeners: "1,284",
  elapsed: "18:42",
  length: "45:00",
};

export const stationSchedule = [
  { time: "07:00", show: "Morning Light", host: "Pastor Daniel Okoro", live: true },
  { time: "09:00", show: "Word & Worship", host: "Grace Adeyemi", live: false },
  { time: "12:00", show: "Midday Reflections", host: "Samuel Mensah", live: false },
  { time: "18:00", show: "The Evening Hour", host: "Ruth Danjuma", live: false },
];

export const stations = [
  { name: "Preach Radio FM", genre: "Talk & teaching", seed: 0 },
  { name: "Gospel Hits 24/7", genre: "Music", seed: 2 },
  { name: "Youth Wave", genre: "Rap & culture", seed: 1 },
  { name: "Praise Nights", genre: "Worship", seed: 4 },
];

export const episodes = [
  { title: "Faith That Works on Mondays", show: "The Builders Podcast", creator: "Samuel Mensah", length: "38 min", seed: 3, kind: "Podcast" },
  { title: "Grace Upon Grace, Part 2", show: "Word & Worship", creator: "Grace Adeyemi", length: "52 min", seed: 1, kind: "Sermon" },
  { title: "Raising Leaders at Home", show: "Family Table", creator: "Ruth Danjuma", length: "27 min", seed: 5, kind: "Podcast" },
];

export const featuredVideo = {
  title: "Sunday Service: Walking in Purpose",
  creator: "Pastor Daniel Okoro",
  length: "1:12:40",
  progress: 0.36,
  seed: 0,
};

export const clips = [
  { title: "Start before you're ready", creator: "Samuel M.", length: "0:48", seed: 2 },
  { title: "A prayer for this week", creator: "Grace A.", length: "1:12", seed: 4 },
  { title: "Freestyle: New Mercies", creator: "Kofi Blaze", length: "0:56", seed: 1 },
  { title: "Choir rehearsal moment", creator: "Praise Nights", length: "1:40", seed: 5 },
  { title: "One verse, one minute", creator: "Ruth D.", length: "1:00", seed: 3 },
];

export const liveRoom = {
  title: "Sunday Evening Live",
  host: "Grace Adeyemi",
  watching: "2,416",
  speakers: [
    { name: "Grace Adeyemi", role: "Host", speaking: true },
    { name: "Samuel Mensah", role: "Co-host", speaking: false },
    { name: "Esther Bello", role: "Guest", speaking: false },
    { name: "Kofi Blaze", role: "Guest", speaking: false },
  ],
  chat: [
    { name: "Tolu", text: "Joining from Lagos 🙌", seed: 2 },
    { name: "Michael", text: "That verse just hit different", seed: 5 },
    { name: "Ama", text: "Can you share the scripture again?", seed: 3 },
    { name: "Joseph", text: "Amen! Watching with the whole family", seed: 6 },
  ],
};

export const featuredCreator = {
  name: "Grace Adeyemi",
  handle: "@graceadeyemi",
  bio: "Teacher, worship leader and host of Word & Worship. New episodes every Sunday, live sessions every month.",
  followers: "48.2K",
  episodes: 126,
  live: "Monthly",
  seed: 1,
};

export const topFavorites = [
  { name: "Preach Radio", seed: 0, isBrand: true },
  { name: "Kofi Blaze", seed: 3 },
  { name: "Esther B.", seed: 6 },
  { name: "Grace A.", seed: 1 },
];
