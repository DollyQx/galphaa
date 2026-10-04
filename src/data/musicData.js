/**
 * G Alphaa - Official Central Music Data Architecture
 * SECOND REFINEMENT PASS - Content Accuracy Audit
 * 
 * Rules:
 * - Exact song titles preserved without altering spelling.
 * - Unknown metadata (URLs, release dates, durations, credits) MUST remain null/empty.
 * - No fake URLs, fake stats, fake awards, fake listener counts or fake credits.
 * - Main YouTube channel URL is stored in SOCIAL_LINKS; individual track youtubeUrl is null unless a specific video link exists.
 */

export const ARTIST_NAME = "G Alphaa";

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@GAlphaaMusic/videos",
  youtubeMusic: "https://music.youtube.com/search?q=G+Alphaa",
  spotify: "https://open.spotify.com/search/G%20Alphaa",
  appleMusic: "https://music.apple.com/us/search?term=G%20Alphaa",
  anghami: "https://play.anghami.com/search/G%20Alphaa",
  jioSaavn: "https://www.jiosaavn.com/search/G%20Alphaa",
  wynk: "https://wynk.in/music/search/G%20Alphaa",
  amazonMusic: "https://music.amazon.com/search/G+Alphaa",
  instagram: null,
  x: null,
};

export const getTrackPlatformLinks = (track) => {
  if (!track) return [];
  const query = encodeURIComponent(`${track.title} G Alphaa`);
  
  return [
    { name: 'YouTube', id: 'youtube', url: track.youtubeUrl || `https://www.youtube.com/results?search_query=${query}`, color: 'text-[#dc2626]', bg: 'hover:bg-[#dc2626]/20 hover:border-[#dc2626]/40' },
    { name: 'YouTube Music', id: 'youtubeMusic', url: track.youtubeMusicUrl || `https://music.youtube.com/search?q=${query}`, color: 'text-[#ff0000]', bg: 'hover:bg-[#ff0000]/20 hover:border-[#ff0000]/40' },
    { name: 'Spotify', id: 'spotify', url: track.spotifyUrl || `https://open.spotify.com/search/${query}`, color: 'text-[#22c55e]', bg: 'hover:bg-[#22c55e]/20 hover:border-[#22c55e]/40' },
    { name: 'Apple Music', id: 'appleMusic', url: track.appleMusicUrl || `https://music.apple.com/us/search?term=${query}`, color: 'text-[#f43f5e]', bg: 'hover:bg-[#f43f5e]/20 hover:border-[#f43f5e]/40' },
    { name: 'Anghami', id: 'anghami', url: track.anghamiUrl || `https://play.anghami.com/search/${query}`, color: 'text-[#a855f7]', bg: 'hover:bg-[#a855f7]/20 hover:border-[#a855f7]/40' },
    { name: 'JioSaavn', id: 'jioSaavn', url: track.jioSaavnUrl || `https://www.jiosaavn.com/search/${query}`, color: 'text-[#00d285]', bg: 'hover:bg-[#00d285]/20 hover:border-[#00d285]/40' },
    { name: 'Wynk Music', id: 'wynk', url: track.wynkUrl || `https://wynk.in/music/search/${query}`, color: 'text-[#e11d48]', bg: 'hover:bg-[#e11d48]/20 hover:border-[#e11d48]/40' },
    { name: 'Amazon Music', id: 'amazonMusic', url: track.amazonMusicUrl || `https://music.amazon.com/search/${query}`, color: 'text-[#06b6d4]', bg: 'hover:bg-[#06b6d4]/20 hover:border-[#06b6d4]/40' },
  ];
};

// Exact 20 Known Released Tracks
export const RELEASED_TRACKS = [
  {
    id: "hawa-bhi-guzre-na",
    title: "HAWA BHI GUZRE NA",
    artist: "G Alphaa",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null, // No individual video URL known yet; channel link in SOCIAL_LINKS
    youtubeEmbedId: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A hauntingly intimate composition written and composed by G Alphaa.",
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa",
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "lady-justice",
    title: "LADY JUSTICE",
    artist: "G Alphaa",
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
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "tujhe-nahi-karte-pareshan",
    title: "Tujhe Nahi Karte Pareshan",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "sorry-baby",
    title: "SORRY BABY",
    artist: "G Alphaa",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "le-beta-le-re",
    title: "LE BETA LE RE",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "uss-ishq-mein-pagal",
    title: "Uss Ishq Mein Pagal",
    artist: "G Alphaa",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "toota-sindoor",
    title: "Toota Sindoor",
    artist: "G Alphaa",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: true,
    status: "RELEASED"
  },
  {
    id: "bas-itna-chahna-hain",
    title: "BAS ITNA CHAHNA HAIN",
    artist: "G Alphaa",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "yaad-rakha-jaayega",
    title: "YAAD RAKHA JAAYEGA",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "tera-shukriya",
    title: "Tera Shukriya",
    artist: "G Alphaa",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "umeedo-ne-maara-hain",
    title: "Umeedo Ne Maara Hain",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "teri-yaadein",
    title: "Teri Yaadein",
    artist: "G Alphaa",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "badalne-ki-wajah",
    title: "Badalne Ki Wajah",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "parashan",
    title: "Parashan",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "aaj-samjha-hu",
    title: "Aaj Samjha Hu",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "jataana-nahi-aata",
    title: "Jataana Nahi Aata",
    artist: "G Alphaa",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      writtenBy: "G Alphaa",
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "he-sai",
    title: "HE SAI",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "waah-waah-re-hanumaana-hanuman-ji",
    title: "WAAH WAAH RE HANUMAANA - HANUMAN JI",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "shiv-sadhna-bhajan-2026",
    title: "Shiv Sadhna Bhajan 2026",
    artist: "G Alphaa",
    thumbnail: "/images/hero.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
    },
    featured: false,
    status: "RELEASED"
  },
  {
    id: "shukriya",
    title: "SHUKRIYA",
    artist: "G Alphaa",
    thumbnail: "/images/poetry.png",
    youtubeUrl: null,
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G Alphaa"
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
