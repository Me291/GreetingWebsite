const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "RARA",
  photo: "./img/Lili.jpeg", // Place your photo in the img/ folder
  music: "./music/My Babe.mp3", // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6", // Main accent color (rose pink)
    accent: "#60a5fa", // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a", // Slate 900
      text: "#f1f5f9", // Slate 100
    },
    light: {
      background: "#fafaf9", // Stone 50
      text: "#1e293b", // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "HI",
      subtitle: "Your name has always sounded so beautiful to me...",
    },
    {
      type: "countdown",
      from: 3, // Countdown from this number
      goText: "💖", // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "I just want you to know... you mean the world to me.",
    },
    {
      type: "chatbox",
      message:
        "From the very first moment I met you, everything felt different. Your presence always calms my heart and makes me feel safe whenever we share stories.",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "I'm truly grateful that our paths crossed",
        "Every day with you feels like a soft, warm dream",
        "I realized... I want to do something <strong>special</strong> for you.",
        "Because,",
        "You are so special to me <span>♡</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "I hope this little website can bring a smile to your face... it's my quiet way of saying thank you for existing in my life.",
      author: "From the one who adores you",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "I'm so happy I met you",
      wishText:
        "May every day of your life be as beautiful as the way you make me feel. ♡",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay... now come back to me and tell me if this made your heart feel a little warmer.",
      replayText: "Or click here if you want to feel it all over again.",
    },
  ],
};
