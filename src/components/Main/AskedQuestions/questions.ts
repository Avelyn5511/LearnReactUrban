export interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "What type of photography do you specialize in?",
    answer: "I specialize in portrait and landscape photography.",
  },
  {
    question: "How can I book a photography session with you?",
    answer:
      "You can book a session through my website or by contacting me directly.",
  },
  {
    question: "What equipment do you use for your photography?",
    answer: "I use a Canon EOS R5 and various lenses.",
  },
  {
    question: "Can I request a specific location for a session?",
    answer: "Yes, you can suggest a location, and we can discuss it.",
  },
  {
    question: "What is your editing process like?",
    answer: "I use Adobe Lightroom and Photoshop for editing.",
  },
  {
    question: "Are digital files included in your photography packages?",
    answer: "Yes, all packages include digital files.",
  },
  {
    question: "Do you offer prints of your photographs?",
    answer: "Yes, I offer prints in various sizes.",
  },
  {
    question:
      "How long does it take to receive the edited photos after a session?",
    answer: "Typically, it takes about 2-3 weeks.",
  },
];

export default questions;
