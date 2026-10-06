import { useEffect, useMemo, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import ReactMarkdown from "react-markdown";
import "./AIChatbot.css";

import RockstarPDF from "../../assets/rockstar product brochure.pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  keywords: string[];
  source: string;
}

/* =========================================================
   WEBSITE KNOWLEDGE
========================================================= */

const WEBSITE_KNOWLEDGE: KnowledgeItem[] = [
  {
    id: "company",
    title: "Company Information",
    source: "ASBSPL Website - About",
    keywords: [
      "company",
      "about",
      "asbspl",
      "a s building solutions",
      "rockstar",
      "history",
      "pune",
      "construction",
    ],
    content: `
A S Building Solutions Pvt Ltd is a construction-material solutions company.

The company was incorporated in 2000 in Pune as Chauhan Enterprises.

The company focuses on improving construction practices through innovative dry-mix products and construction solutions.

The company website states that it has been serving customers for more than 20 years.

The company follows ISO 9001:2015 quality standards.
`,
  },

  {
    id: "products",
    title: "Products",
    source: "ASBSPL Website - Products",
    keywords: [
      "product",
      "products",
      "block",
      "jointing",
      "mortar",
      "premix",
      "plaster",
      "tile",
      "adhesive",
      "waterproof",
      "putty",
      "chemical",
    ],
    content: `
The ASBSPL website lists construction-material products including:

1. Block Jointing Mortar
2. Premix Plaster
3. Tile Adhesive
4. Light-Weight Premix Plaster
5. Water Proofing Chemical
6. Waterproof Putty

These products are presented as part of the company's construction-material and dry-mix product range.
`,
  },

  {
    id: "quality",
    title: "Quality Policy",
    source: "ASBSPL Website - Quality Policy",
    keywords: [
      "quality",
      "quality policy",
      "iso",
      "iso 9001",
      "standard",
      "quality standards",
    ],
    content: `
A S Building Solutions Pvt Ltd states that quality is an important part of its business and construction-material solutions.

The company website states that it follows ISO 9001:2015 quality standards.

The company focuses on providing quality-oriented construction products and continuously improving its products and processes.
`,
  },

  {
    id: "contact",
    title: "Contact Information",
    source: "ASBSPL Website - Contact",
    keywords: [
      "contact",
      "phone",
      "mobile",
      "email",
      "address",
      "office",
      "location",
      "pune",
    ],
    content: `
Company: A S Building Solutions Pvt Ltd

Office Address:

Vishva Vimal Complex,
Opp. Hyundai Khotari Showroom,
Tukaram Nagar,
Magarpaata - Kharadi,
Kharadi, Pune,
Maharashtra - 411014

Phone:
+91-852-687-2687

Email:
contact@asbspl.com
`,
  },

  {
    id: "mission",
    title: "Mission and Company Goal",
    source: "ASBSPL Website",
    keywords: [
      "mission",
      "goal",
      "future",
      "objective",
      "vision",
      "purpose",
    ],
    content: `
The company aims to improve construction practices through innovative dry-mix products.

Its website communicates a focus on building better construction solutions and creating a better future through its products and services.
`,
  },
];

/* =========================================================
   TEXT HELPERS
========================================================= */

const normalize = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const tokenize = (text: string): string[] => {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 2);
};

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "what",
  "are",
  "is",
  "tell",
  "me",
  "about",
  "please",
  "give",
  "show",
  "can",
  "you",
  "does",
  "this",
  "that",
  "with",
  "from",
  "how",
  "where",
  "which",
  "who",
  "company",
  "information",
]);

const getQuestionWords = (question: string): string[] => {
  return tokenize(question).filter(
    (word) => !STOP_WORDS.has(word)
  );
};

/* =========================================================
   RELEVANCE SCORE
========================================================= */

const calculateScore = (
  question: string,
  item: KnowledgeItem
): number => {
  const questionNormalized = normalize(question);
  const questionWords = getQuestionWords(question);

  const title = normalize(item.title);
  const content = normalize(item.content);
  const keywords = item.keywords.map(normalize);

  let score = 0;

  /* Exact phrase matching */
  if (questionNormalized.includes(title)) {
    score += 15;
  }

  /* Keyword matching */
  questionWords.forEach((word) => {
    if (keywords.includes(word)) {
      score += 8;
    }

    if (content.includes(word)) {
      score += 3;
    }

    if (title.includes(word)) {
      score += 6;
    }
  });

  /* Important phrases */
  const phrases = [
    "contact",
    "phone number",
    "mobile number",
    "email",
    "address",
    "location",
    "products",
    "product",
    "quality",
    "iso",
    "company",
    "about",
    "mission",
    "goal",
  ];

  phrases.forEach((phrase) => {
    if (questionNormalized.includes(phrase)) {
      if (
        keywords.some((keyword) =>
          keyword.includes(phrase)
        ) ||
        title.includes(phrase)
      ) {
        score += 10;
      }
    }
  });

  return score;
};

/* =========================================================
   GET RELEVANT KNOWLEDGE
========================================================= */

const getRelevantKnowledge = (
  question: string,
  knowledge: KnowledgeItem[]
): KnowledgeItem[] => {
  const scored = knowledge
    .map((item) => ({
      item,
      score: calculateScore(question, item),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return [];
  }

  const highestScore = scored[0].score;

  return scored
    .filter(
      (item) =>
        item.score >= Math.max(5, highestScore * 0.35)
    )
    .slice(0, 3)
    .map((item) => item.item);
};

/* =========================================================
   QUESTION TYPES
========================================================= */

const isGreeting = (question: string): boolean => {
  const normalized = normalize(question);

  const greetings = [
    "hi",
    "hello",
    "hey",
    "hii",
    "hiii",
    "good morning",
    "good afternoon",
    "good evening",
  ];

  return greetings.some(
    (greeting) =>
      normalized === greeting ||
      normalized.startsWith(`${greeting} `)
  );
};

const isThanks = (question: string): boolean => {
  const normalized = normalize(question);

  return (
    normalized.includes("thank you") ||
    normalized.includes("thanks") ||
    normalized === "thx"
  );
};

const isContactQuestion = (question: string): boolean => {
  const normalized = normalize(question);

  return (
    normalized.includes("contact") ||
    normalized.includes("phone") ||
    normalized.includes("mobile") ||
    normalized.includes("email") ||
    normalized.includes("address") ||
    normalized.includes("location")
  );
};

/* =========================================================
   CONTACT ANSWER
========================================================= */

const formatContactAnswer = (): string => {
  return `
### Contact Information

**A S Building Solutions Pvt Ltd**

📍 **Address**

Vishva Vimal Complex,  
Opp. Hyundai Khotari Showroom,  
Tukaram Nagar,  
Magarpaata - Kharadi,  
Kharadi, Pune, Maharashtra - 411014

📞 **Phone:** +91-852-687-2687

📧 **Email:** contact@asbspl.com
`;
};

/* =========================================================
   PRODUCT ANSWER
========================================================= */

const formatProductAnswer = (): string => {
  return `
### Products

The ASBSPL website lists the following products:

- **Block Jointing Mortar**
- **Premix Plaster**
- **Tile Adhesive**
- **Light-Weight Premix Plaster**
- **Water Proofing Chemical**
- **Waterproof Putty**

These products are part of the company's construction-material and dry-mix product range.
`;
};

/* =========================================================
   CREATE ANSWER
========================================================= */

const createAnswer = (
  question: string,
  relevantKnowledge: KnowledgeItem[]
): string => {
  const normalizedQuestion = normalize(question);

  /* Greeting */
  if (isGreeting(question)) {
    return `
### Hello! 👋

Welcome to **ASBSPL**.

I can help you find information about:

- Company
- Products
- Quality policy
- Mission and objectives
- Contact information
- Construction-material solutions

Ask me your question about ASBSPL.
`;
  }

  /* Thanks */
  if (isThanks(question)) {
    return `
You're welcome! 😊

If you have another question about **ASBSPL**, its products, or company information, feel free to ask.
`;
  }

  /* Contact */
  if (isContactQuestion(question)) {
    return formatContactAnswer();
  }

  /* Products */
  if (
    normalizedQuestion === "products" ||
    normalizedQuestion === "what products do you have" ||
    normalizedQuestion === "what are your products"
  ) {
    return formatProductAnswer();
  }

  /* No relevant information */
  if (relevantKnowledge.length === 0) {
    return `
### I couldn't find that information

I could not find reliable information for your question in the Rockstar knowledge available to this chatbot.

Please ask a question related to:

- ASBSPL company
- Products
- Quality policy
- Mission
- Contact information
- Construction-material solutions

I don't want to give you an incorrect or unrelated answer.
`;
  }

  /* Build answer only from relevant knowledge */
  const answerParts: string[] = [];

  relevantKnowledge.forEach((item) => {
    answerParts.push(
      `### ${item.title}\n${item.content.trim()}`
    );
  });

  return answerParts.join("\n\n");
};

/* =========================================================
   PDF EXTRACTION
========================================================= */

const extractPdfText = async (): Promise<string> => {
  try {
    const response = await fetch(RockstarPDF);

    if (!response.ok) {
      throw new Error("Unable to load PDF");
    }

    const arrayBuffer = await response.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;

    let completeText = "";

    for (
      let pageNumber = 1;
      pageNumber <= pdf.numPages;
      pageNumber++
    ) {
      const page = await pdf.getPage(pageNumber);

      const textContent = await page.getTextContent();

      const pageText = textContent.items
        .map((item) => {
          if ("str" in item) {
            return item.str;
          }

          return "";
        })
        .join(" ");

      completeText += `\n${pageText}`;
    }

    return completeText;
  } catch (error) {
    console.error("PDF extraction error:", error);

    return "";
  }
};

/* =========================================================
   CREATE PDF KNOWLEDGE
========================================================= */

const createPdfKnowledge = (
  pdfText: string
): KnowledgeItem | null => {
  if (!pdfText.trim()) {
    return null;
  }

  const normalized = normalize(pdfText);

  return {
    id: "rockstar-product-brochure-pdf",
    title: "Rockstar Product Brochure",
    source: "Rockstar Product Brochure PDF",
    keywords: [
      "bjm",
      "block",
      "jointing",
      "mortar",
      "block jointing mortar",
      "rockstar",
      "coverage",
      "application",
      "packaging",
      "setting",
      "technical",
      "product",
    ],
    content: normalized,
  };
};

/* =========================================================
   INITIAL MESSAGE
========================================================= */

const getInitialMessage = (): Message => ({
  id: Date.now(),
  sender: "bot",
  text: `
### Hello! 👋

I'm the **Rockstar Assistant**.

Ask me anything about the company, products, quality policy, contact information, or available product documentation.
`,
});

/* =========================================================
   AI CHATBOT
========================================================= */

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    getInitialMessage(),
  ]);

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [pdfKnowledge, setPdfKnowledge] =
    useState<KnowledgeItem | null>(null);

  /* =======================================================
     LOAD PDF
  ======================================================= */

  useEffect(() => {
    const loadPDF = async () => {
      const pdfText = await extractPdfText();

      const knowledge = createPdfKnowledge(pdfText);

      setPdfKnowledge(knowledge);
    };

    loadPDF();
  }, []);

  /* =======================================================
     COMPLETE KNOWLEDGE BASE
  ======================================================= */

  const knowledgeBase = useMemo(() => {
    const knowledge = [...WEBSITE_KNOWLEDGE];

    if (pdfKnowledge) {
      knowledge.push(pdfKnowledge);
    }

    return knowledge;
  }, [pdfKnowledge]);

  /* =======================================================
     NEW CHAT / CLEAR CHAT
  ======================================================= */

  const handleNewChat = () => {
    if (isLoading) {
      return;
    }

    setMessages([getInitialMessage()]);
    setInput("");
  };

  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const handleSend = async () => {
    const question = input.trim();

    if (!question || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setInput("");
    setIsLoading(true);

    /* Small delay */
    await new Promise((resolve) =>
      setTimeout(resolve, 400)
    );

    const relevantKnowledge = getRelevantKnowledge(
      question,
      knowledgeBase
    );

    const answer = createAnswer(
      question,
      relevantKnowledge
    );

    const botMessage: Message = {
      id: Date.now() + 1,
      sender: "bot",
      text: answer,
    };

    setMessages((previous) => [
      ...previous,
      botMessage,
    ]);

    setIsLoading(false);
  };

  /* =======================================================
     ENTER KEY
  ======================================================= */

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();

      handleSend();
    }
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <>
      {/* ===================================================
          FLOATING BUTTON
      =================================================== */}

      {!isOpen && (
        <button
          className="ai-chatbot-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI chatbot"
        >
          <span>🤖</span>
        </button>
      )}

      {/* ===================================================
          CHATBOT
      =================================================== */}

      {isOpen && (
        <div className="ai-chatbot">

          {/* ===============================================
              HEADER
          =============================================== */}

          <div className="ai-chatbot-header">

            <div className="ai-chatbot-header-info">

              <div className="ai-chatbot-avatar">
                🤖
              </div>

              <div className="ai-chatbot-title">

                <h3>
                  Rockstar Assistant
                </h3>

                <span>
                  AI Product Assistant
                </span>

              </div>

            </div>

            {/* =============================================
                HEADER ACTIONS
            ============================================= */}

            <div className="ai-chatbot-header-actions">

              {/* New Chat */}
              <button
                className="ai-chatbot-new"
                onClick={handleNewChat}
                disabled={isLoading}
                aria-label="Start new chat"
                title="New Chat"
              >
                ↻
              </button>

              {/* Close */}
              <button
                className="ai-chatbot-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                title="Close"
              >
                ×
              </button>

            </div>

          </div>

          {/* ===============================================
              MESSAGES
          =============================================== */}

          <div className="ai-chatbot-messages">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`ai-message ${
                  message.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }`}
              >

                <div className="ai-message-content">

                  {message.sender === "bot" ? (
                    <ReactMarkdown>
                      {message.text}
                    </ReactMarkdown>
                  ) : (
                    message.text
                  )}

                </div>

              </div>
            ))}

            {/* ===========================================
                TYPING INDICATOR
            =========================================== */}

            {isLoading && (
              <div className="ai-message bot-message">

                <div className="ai-message-content typing">

                  <span />
                  <span />
                  <span />

                </div>

              </div>
            )}

          </div>

          {/* ===============================================
              INPUT AREA
          =============================================== */}

          <div className="ai-chatbot-input-area">

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask about ASBSPL..."
              disabled={isLoading}
            />

            <button
              onClick={handleSend}
              disabled={
                !input.trim() || isLoading
              }
              aria-label="Send message"
              title="Send"
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default AIChatbot;