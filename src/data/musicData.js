/**
 * G ALPHA - Central Music Data Architecture
 * Status options: 'RELEASED' | 'UPCOMING' | 'UNRELEASED' | 'PRIVATE' | 'ARCHIVED'
 * Unknown fields MUST remain null or empty strings.
 * NO invented URLs, fake stats or fake credits.
 */

export const ARTIST_NAME = "G ALPHA";

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@GAlphaaMusic/videos",
  spotify: null, // Will only show if available
  instagram: null,
  appleMusic: null,
  x: null,
};

export const RELEASED_TRACKS = [
  {
    id: "hawa-bhi-guzre-na",
    title: "HAWA BHI GUZRE NA",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    youtubeEmbedId: "dQw4w9WgXcQ", // Placeholder embed structure or YouTube video player frame integration
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: "Latest Release",
    description: "A hauntingly intimate composition of unspoken silences and lingering emotions written and composed by G ALPHA.",
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA",
      musicProducer: "G ALPHA",
      vocals: "G ALPHA"
    },
    featured: true,
    status: "RELEASED",
    genre: "Soulful Ballad / Indie Acoustic"
  },
  {
    id: "lady-justice",
    title: "LADY JUSTICE",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "An evocative anthem reflecting on truth, balance, and human conscience.",
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED",
    genre: "Contemporary / Spoken Word Composition"
  },
  {
    id: "tujhe-nahi-karte-pareshan",
    title: "Tujhe Nahi Karte Pareshan",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A gentle acoustic ballad about silent resignation and quiet affection.",
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED",
    genre: "Acoustic Indie"
  },
  {
    id: "sorry-baby",
    title: "SORRY BABY",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
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
    status: "RELEASED",
    genre: "Indie Pop"
  },
  {
    id: "le-beta-le-re",
    title: "LE BETA LE RE",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
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
    status: "RELEASED",
    genre: "Experimental Folk Rhythm"
  },
  {
    id: "uss-ishq-mein-pagal",
    title: "Uss Ishq Mein Pagal",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A deep poetic piece delving into romantic devotion and restless thoughts.",
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED",
    genre: "Romantic Ballad"
  },
  {
    id: "toota-sindoor",
    title: "Toota Sindoor",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A poignant emotional story woven with delicate classical strings and Shayari.",
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: true,
    status: "RELEASED",
    genre: "Emotional Storytelling"
  },
  {
    id: "bas-itna-chahna-hain",
    title: "BAS ITNA CHAHNA HAIN",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Acoustic"
  },
  {
    id: "yaad-rakha-jaayega",
    title: "YAAD RAKHA JAAYEGA",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Anthem"
  },
  {
    id: "tera-shukriya",
    title: "Tera Shukriya",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A melody expressing profound gratitude for silent companionships.",
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Soft Acoustic"
  },
  {
    id: "umeedo-ne-maara-hain",
    title: "Umeedo Ne Maara Hain",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
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
    status: "RELEASED",
    genre: "Sorrow / Melancholic"
  },
  {
    id: "teri-yaadein",
    title: "Teri Yaadein",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Indie Acoustic"
  },
  {
    id: "badalne-ki-wajah",
    title: "Badalne Ki Wajah",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
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
    status: "RELEASED",
    genre: "Reflective Ballad"
  },
  {
    id: "shukriya",
    title: "SHUKRIYA",
    artist: "G ALPHA",
    thumbnail: "/images/poetry.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
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
    status: "RELEASED",
    genre: "Acoustic"
  },
  {
    id: "aaj-samjha-hu",
    title: "Aaj Samjha Hu",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Indie Verse"
  },
  {
    id: "jataana-nahi-aata",
    title: "Jataana Nahi Aata",
    artist: "G ALPHA",
    thumbnail: "/images/hawa_bhi_guzre_na.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: null,
    credits: {
      composedBy: "G ALPHA",
      writtenBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Romantic Ballad"
  },
  {
    id: "he-sai",
    title: "HE SAI",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A devotional composition filled with surrender and inner peace.",
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Spiritual / Devotional"
  },
  {
    id: "waah-waah-re-hanumaana-hanuman-ji",
    title: "WAAH WAAH RE HANUMAANA - HANUMAN JI",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: null,
    description: "A powerful devotional ode to Lord Hanuman composed with energetic traditional rhythms.",
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Spiritual / Devotional"
  },
  {
    id: "shiv-sadhna-bhajan-2026",
    title: "Shiv Sadhna Bhajan 2026",
    artist: "G ALPHA",
    thumbnail: "/images/hero.png",
    youtubeUrl: "https://www.youtube.com/@GAlphaaMusic/videos",
    spotifyUrl: null,
    appleMusicUrl: null,
    otherPlatformUrls: {},
    duration: null,
    releaseDate: "2026",
    description: "Atmospheric meditative bhajan dedicated to Lord Shiva.",
    credits: {
      composedBy: "G ALPHA"
    },
    featured: false,
    status: "RELEASED",
    genre: "Spiritual / Devotional"
  }
];

export const UNRELEASED_TRACKS = [
  { id: "un-1", title: "Naqab tera", status: "UNRELEASED", genre: "Soulful Ballad", tags: ["Cinematic", "Acoustic", "Poetic"] },
  { id: "un-2", title: "Affsos", status: "UNRELEASED", genre: "Melancholic Indie", tags: ["Atmospheric", "Deep Lyrics"] },
  { id: "un-3", title: "Khaffa ishq", status: "UNRELEASED", genre: "Romantic Verse", tags: ["Strings", "Vocal Driven"] },
  { id: "un-4", title: "Naari", status: "UNRELEASED", genre: "Anthem Composition", tags: ["Empowerment", "Dramatic"] },
  { id: "un-5", title: "Yakeen", status: "UNRELEASED", genre: "Indie Folk", tags: ["Warm", "Acoustic Guitar"] },
  { id: "un-6", title: "Kaafi hain", status: "UNRELEASED", genre: "Minimalist Acoustic", tags: ["Intimate", "Night Mood"] },
  { id: "un-7", title: "Mazaak bana hu", status: "UNRELEASED", genre: "Emotional Blues", tags: ["Raw", "Poetic Shayar"] },
  { id: "un-8", title: "Mitti kar deta hain", status: "UNRELEASED", genre: "Sufi Influenced", tags: ["Philosophical", "Percussive"] },
  { id: "un-9", title: "Tarsata noor", status: "UNRELEASED", genre: "Ambient Ghazal Fusion", tags: ["Ethereal", "Melodic"] },
  { id: "un-10", title: "Khubsurat safar", status: "UNRELEASED", genre: "Wanderlust Acoustic", tags: ["Upbeat", "Travel Mood"] },
  { id: "un-11", title: "Siva tere", status: "UNRELEASED", genre: "Romantic Ballad", tags: ["Piano", "Vocal Harmonies"] },
  { id: "un-12", title: "Zara sa", status: "UNRELEASED", genre: "Contemporary Indie", tags: ["Groove", "Smooth"] },
  { id: "un-13", title: "Labbo ki hassi", status: "UNRELEASED", genre: "Nostalgic Pop", tags: ["Melodic", "Heartfelt"] },
  { id: "un-14", title: "Shame", status: "UNRELEASED", genre: "Dramatic Score", tags: ["Cinematic", "Dark Theme"] },
  { id: "un-15", title: "E20", status: "UNRELEASED", genre: "Modern Fusion", tags: ["Urban", "Experimental"] },
  { id: "un-16", title: "Woh dil", status: "UNRELEASED", genre: "Acoustic Ballad", tags: ["Intimate", "Poetic"] },
  { id: "un-17", title: "Veeran", status: "UNRELEASED", genre: "Ambient Solitude", tags: ["Atmospheric", "Deep Bass"] },
  { id: "un-18", title: "Pathhar ka", status: "UNRELEASED", genre: "Hard Rock / Indie Fusion", tags: ["Intense", "Gritty"] },
  { id: "un-19", title: "Dhak dhak", status: "UNRELEASED", genre: "Rhythmic Folk", tags: ["Heartbeat Percussion", "Catchy"] },
  { id: "un-20", title: "Rista hain", status: "UNRELEASED", genre: "Soft Acoustic", tags: ["Warm", "Relatable"] },
  { id: "un-21", title: "Kamaal kar gayi", status: "UNRELEASED", genre: "Upbeat Indie Pop", tags: ["Energetic", "Fun"] },
  { id: "un-22", title: "Raakh", status: "UNRELEASED", genre: "Dark Cinematic", tags: ["Intense", "Rebirth"] },
  { id: "un-23", title: "Koi aaya hi nhi", status: "UNRELEASED", genre: "Solitude Ballad", tags: ["Late Night", "Ghazal Tone"] },
  { id: "un-24", title: "Khushnaseeb", status: "UNRELEASED", genre: "Gratitude Acoustic", tags: ["Warm Piano", "Uplifting"] },
  { id: "un-25", title: "Khudgarzz", status: "UNRELEASED", genre: "Spoken Word / Indie", tags: ["Bold", "Unfiltered"] },
  { id: "un-26", title: "Mehfooz", status: "UNRELEASED", genre: "Lullaby Acoustic", tags: ["Gentle", "Comforting"] },
  { id: "un-27", title: "Kabhi aaye to", status: "UNRELEASED", genre: "Waiting Ballad", tags: ["Strings", "Sorrowful"] },
  { id: "un-28", title: "Dehliz par hawa", status: "UNRELEASED", genre: "Atmospheric Verse", tags: ["Wind Chimes", "Philosophical"] }
];
