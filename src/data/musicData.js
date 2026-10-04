/**
 * G ALPHA - Official Central Music Data Architecture
 * SECOND REFINEMENT PASS - Content Accuracy Audit
 * 
 * Rules:
 * - Exact song titles preserved without altering spelling.
 * - Unknown metadata (URLs, release dates, durations, credits) MUST remain null/empty.
 * - No fake URLs, fake stats, fake awards, fake listener counts or fake credits.
 * - Main YouTube channel URL is stored in SOCIAL_LINKS; individual track youtubeUrl is null unless a specific video link exists.
 */

export const ARTIST_NAME = "G ALPHA";

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@GAlphaaMusic/videos",
  spotify: null,
  appleMusic: null,
  instagram: null,
  x: null,
};

// Exact 20 Known Released Tracks
export const RELEASED_TRACKS = [
  {
    id: "hawa-bhi-guzre-na",
    title: "HAWA BHI GUZRE NA",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null, // No individual video URL known yet; channel link in SOCIAL_LINKS
    youtubeEmbedId: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A hauntingly intimate composition written and composed by G ALPHA.",
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA",
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "lady-justice",
    title: "LADY JUSTICE",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    youtubeEmbedId: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "tujhe-nahi-karte-pareshan",
    title: "Tujhe Nahi Karte Pareshan",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "sorry-baby",
    title: "SORRY BABY",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "le-beta-le-re",
    title: "LE BETA LE RE",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "uss-ishq-mein-pagal",
    title: "Uss Ishq Mein Pagal",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "toota-sindoor",
    title: "Toota Sindoor",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "bas-itna-chahna-hain",
    title: "BAS ITNA CHAHNA HAIN",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "yaad-rakha-jaayega",
    title: "YAAD RAKHA JAAYEGA",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "tera-shukriya",
    title: "Tera Shukriya",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "umeedo-ne-maara-hain",
    title: "Umeedo Ne Maara Hain",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "teri-yaadein",
    title: "Teri Yaadein",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "badalne-ki-wajah",
    title: "Badalne Ki Wajah",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "parashan",
    title: "Parashan",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "aaj-samjha-hu",
    title: "Aaj Samjha Hu",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "jataana-nahi-aata",
    title: "Jataana Nahi Aata",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G ALPHA",
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "he-sai",
    title: "HE SAI",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "waah-waah-re-hanumaana-hanuman-ji",
    title: "WAAH WAAH RE HANUMAANA - HANUMAN JI",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "shiv-sadhna-bhajan-2026",
    title: "Shiv Sadhna Bhajan 2026",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "shukriya",
    title: "SHUKRIYA",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED"
  }
];

// Exact 28 Unreleased Songs
export const UNRELEASED_TRACKS = [
  { id: "un-1", title: "Naqab tera", status: "UNRELEASED", genre: null },
  { id: "un-2", title: "Affsos", status: "UNRELEASED", genre: null },
  { id: "un-3", title: "Khaffa ishq", status: "UNRELEASED", genre: null },
  { id: "un-4", title: "Naari", status: "UNRELEASED", genre: null },
  { id: "un-5", title: "Yakeen", status: "UNRELEASED", genre: null },
  { id: "un-6", title: "Kaafi hain", status: "UNRELEASED", genre: null },
  { id: "un-7", title: "Mazaak bana hu", status: "UNRELEASED", genre: null },
  { id: "un-8", title: "Mitti kar deta hain", status: "UNRELEASED", genre: null },
  { id: "un-9", title: "Tarsata noor", status: "UNRELEASED", genre: null },
  { id: "un-10", title: "Khubsurat safar", status: "UNRELEASED", genre: null },
  { id: "un-11", title: "Siva tere", status: "UNRELEASED", genre: null },
  { id: "un-12", title: "Zara sa", status: "UNRELEASED", genre: null },
  { id: "un-13", title: "Labbo ki hassi", status: "UNRELEASED", genre: null },
  { id: "un-14", title: "Shame", status: "UNRELEASED", genre: null },
  { id: "un-15", title: "E20", status: "UNRELEASED", genre: null },
  { id: "un-16", title: "Woh dil", status: "UNRELEASED", genre: null },
  { id: "un-17", title: "Veeran", status: "UNRELEASED", genre: null },
  { id: "un-18", title: "Pathhar ka", status: "UNRELEASED", genre: null },
  { id: "un-19", title: "Dhak dhak", status: "UNRELEASED", genre: null },
  { id: "un-20", title: "Rista hain", status: "UNRELEASED", genre: null },
  { id: "un-21", title: "Kamaal kar gayi", status: "UNRELEASED", genre: null },
  { id: "un-22", title: "Raakh", status: "UNRELEASED", genre: null },
  { id: "un-23", title: "Koi aaya hi nhi", status: "UNRELEASED", genre: null },
  { id: "un-24", title: "Khushnaseeb", status: "UNRELEASED", genre: null },
  { id: "un-25", title: "Khudgarzz", status: "UNRELEASED", genre: null },
  { id: "un-26", title: "Mehfooz", status: "UNRELEASED", genre: null },
  { id: "un-27", title: "Kabhi aaye to", status: "UNRELEASED", genre: null },
  { id: "un-28", title: "Dehliz par hawa", status: "UNRELEASED", genre: null }
];
