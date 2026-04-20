// make-slides.js — generates AI-at-the-Bedside-Prague-2026.pptx
// Run once:  npm install pptxgenjs
// Then:     node make-slides.js

const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" x 5.625"
pres.title = "AI at the Bedside — Prague 2026";
pres.author = "Yoad Dvir";

// ==== Color palette (no # prefix!) ====
const C = {
  bg:       "0C0F14",
  surface:  "14181F",
  surface2: "1A1F28",
  border:   "252B36",
  borderL:  "2F3744",
  text:     "E8EAF0",
  muted:    "8891A0",
  dim:      "5A6373",
  cyan:     "4ECDC4",
  purple:   "6C5CE7",
  yellow:   "FFD93D",
  coral:    "FF6B6B",
};
const FONT_TITLE = "Georgia";
const FONT_BODY  = "Arial";

// Helper: top 4-color brand stripe
function topStripe(slide) {
  const stripeColors = [C.cyan, C.purple, C.yellow, C.coral];
  stripeColors.forEach((col, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: i * 2.5, y: 0, w: 2.5, h: 0.06,
      fill: { color: col }, line: { color: col }
    });
  });
}

// Helper: footer
function footerBrand(slide) {
  slide.addText("AI AT THE BEDSIDE · PRAGUE 2026", {
    x: 0.4, y: 5.35, w: 5, h: 0.25, margin: 0,
    fontSize: 8, fontFace: FONT_BODY, color: C.dim,
    charSpacing: 3, align: "left"
  });
  slide.addText("yoad-dvir.github.io/prague-workshop", {
    x: 5, y: 5.35, w: 4.6, h: 0.25, margin: 0,
    fontSize: 8, fontFace: FONT_BODY, color: C.dim,
    charSpacing: 2, align: "right"
  });
}

// Helper: eyebrow label (mono uppercase)
function eyebrow(slide, text, x, y, w, color = C.cyan) {
  slide.addText(text, {
    x, y, w, h: 0.25, margin: 0,
    fontSize: 9, fontFace: FONT_BODY, color,
    bold: true, charSpacing: 4, align: "left"
  });
}

/* ================================================================
   SLIDE 1 — TITLE
   ================================================================ */
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  topStripe(s);

  // Accent glow
  s.addShape(pres.shapes.OVAL, {
    x: 3.5, y: 0.5, w: 3, h: 3,
    fill: { color: C.cyan, transparency: 88 },
    line: { color: C.bg, width: 0 }
  });

  // Core icon
  s.addText("🧠", {
    x: 4.25, y: 0.7, w: 1.5, h: 1.5,
    fontSize: 60, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0
  });

  // Eyebrow
  s.addText("PRAGUE AUTOIMMUNITY CONGRESS · 2026", {
    x: 0.5, y: 2.2, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_BODY, color: C.cyan,
    bold: true, charSpacing: 4, align: "center", margin: 0
  });

  // Title
  s.addText("AI at the Bedside", {
    x: 0.5, y: 2.55, w: 9, h: 0.9,
    fontSize: 48, fontFace: FONT_TITLE, color: C.text,
    align: "center", margin: 0
  });

  // Subtitle
  s.addText("Clinical Reasoning in the Age of AI Chatbots", {
    x: 0.5, y: 3.5, w: 9, h: 0.45,
    fontSize: 20, fontFace: FONT_BODY, color: C.muted,
    italic: true, align: "center", margin: 0
  });

  // Chips
  const chips = [
    { text: "2 HOURS",          color: C.cyan   },
    { text: "4 SPEAKERS",       color: C.purple },
    { text: "~80 PARTICIPANTS", color: C.yellow },
    { text: "3 CLINICAL CASES", color: C.coral  },
  ];
  const chipW = 1.9, chipGap = 0.15, chipH = 0.4;
  const totalW = chips.length * chipW + (chips.length - 1) * chipGap;
  let cx = (10 - totalW) / 2;
  chips.forEach(ch => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: 4.15, w: chipW, h: chipH,
      fill: { color: ch.color, transparency: 85 },
      line: { color: ch.color, width: 1 },
      rectRadius: 0.18
    });
    s.addText(ch.text, {
      x: cx, y: 4.15, w: chipW, h: chipH, margin: 0,
      fontSize: 10, fontFace: FONT_BODY, color: ch.color,
      bold: true, charSpacing: 3, align: "center", valign: "middle"
    });
    cx += chipW + chipGap;
  });

  // Speakers line
  s.addText("YOAD DVIR  ·  OR DEGANY  ·  DAPHNA IDAN  ·  ITAMAR BEN SHITRIT", {
    x: 0.5, y: 4.9, w: 9, h: 0.3,
    fontSize: 10, fontFace: FONT_BODY, color: C.dim,
    charSpacing: 4, align: "center", margin: 0
  });

  footerBrand(s);
}

/* ================================================================
   SLIDE 2 — THE TEAM
   ================================================================ */
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  topStripe(s);

  eyebrow(s, "② THE TEAM", 0.5, 0.3, 4);
  s.addText("Four speakers. One shared angle.", {
    x: 0.5, y: 0.55, w: 9, h: 0.65,
    fontSize: 28, fontFace: FONT_TITLE, color: C.text, align: "left", margin: 0
  });
  s.addText("One AI technologist and three clinicians — each bringing a different perspective on how AI shows up in the clinical room.", {
    x: 0.5, y: 1.25, w: 9, h: 0.35,
    fontSize: 13, fontFace: FONT_BODY, color: C.muted, align: "left", margin: 0
  });

  const speakers = [
    { name: "Yoad Dvir",         role: "Cyber & AI Technologist\nSilverfort",        slot: "OPENS · 20 MIN",          color: C.cyan,   photo: "images/yoad.jpg",   initial: "Y" },
    { name: "Or Degany",         role: "MD · Hadassah Medical Center\nTel Aviv Univ.", slot: "CLINICAL LEAD · 20 MIN", color: C.purple, photo: "images/or.jpg",     initial: "O" },
    { name: "Daphna Idan",       role: "MD/MPH · Head of Research at Medint\nPediatric ED",   slot: "20 MIN", color: C.yellow, photo: "images/daphna.jpg", initial: "D" },
    { name: "Itamar Ben Shitrit", role: "MD/MPH · Chief of Staff\nSoroka · BGU",     slot: "20 MIN",                  color: C.coral,  photo: "images/itamar.jpg", initial: "I" },
  ];

  const cardW = 2.15, cardH = 3.4, gap = 0.2;
  const totalW = speakers.length * cardW + (speakers.length - 1) * gap;
  let x = (10 - totalW) / 2;

  speakers.forEach(sp => {
    // Card background
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.8, w: cardW, h: cardH,
      fill: { color: C.surface }, line: { color: C.border, width: 1 }
    });
    // Color stripe
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.8, w: cardW, h: 0.06,
      fill: { color: sp.color }, line: { color: sp.color }
    });
    // Photo
    try {
      s.addImage({
        path: sp.photo,
        x: x + (cardW - 1.1) / 2, y: 2.0, w: 1.1, h: 1.1,
        rounding: true
      });
    } catch (e) {
      s.addShape(pres.shapes.OVAL, {
        x: x + (cardW - 1.1) / 2, y: 2.0, w: 1.1, h: 1.1,
        fill: { color: C.surface2 }, line: { color: sp.color, width: 2 }
      });
      s.addText(sp.initial, {
        x: x + (cardW - 1.1) / 2, y: 2.0, w: 1.1, h: 1.1,
        fontSize: 28, fontFace: FONT_TITLE, color: sp.color, align: "center", valign: "middle", margin: 0
      });
    }
    // Name
    s.addText(sp.name, {
      x, y: 3.25, w: cardW, h: 0.4, margin: 0,
      fontSize: 16, fontFace: FONT_TITLE, color: C.text, align: "center"
    });
    // Role
    s.addText(sp.role, {
      x: x + 0.1, y: 3.7, w: cardW - 0.2, h: 0.85, margin: 0,
      fontSize: 10, fontFace: FONT_BODY, color: C.muted, align: "center", valign: "top"
    });
    // Slot
    s.addText(sp.slot, {
      x, y: 4.75, w: cardW, h: 0.35, margin: 0,
      fontSize: 9, fontFace: FONT_BODY, color: sp.color, bold: true, charSpacing: 3, align: "center"
    });

    x += cardW + gap;
  });

  footerBrand(s);
}

/* ================================================================
   SLIDE 3 — TIMELINE BAR
   ================================================================ */
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  topStripe(s);

  eyebrow(s, "③ THE TIMELINE · AT A GLANCE", 0.5, 0.3, 6);
  s.addText("Two hours · eight segments", {
    x: 0.5, y: 0.55, w: 9, h: 0.65,
    fontSize: 28, fontFace: FONT_TITLE, color: C.text, align: "left", margin: 0
  });
  s.addText("The whole workshop in one view — who, what topic, and how long.", {
    x: 0.5, y: 1.25, w: 9, h: 0.35,
    fontSize: 13, fontFace: FONT_BODY, color: C.muted, align: "left", margin: 0
  });

  const segs = [
    { min: 20, color: C.cyan,   name: "Yoad",         topic: "🎙️ Intro + AI foundations" },
    { min: 20, color: C.purple, name: "Or",           topic: "🩺 Clinical reasoning" },
    { min: 20, color: C.yellow, name: "Daphna",       topic: "🔬 Patient-facing AI" },
    { min: 10, color: C.dim,    name: "☕ Break",     topic: "" },
    { min: 20, color: C.coral,  name: "Itamar",       topic: "📊 AI at hospital scale" },
    { min: 20, color: C.yellow, name: "AI vs no-AI",  topic: "🎯 Case exercise" },
    { min: 8,  color: C.purple, name: "Debrief",      topic: "" },
    { min: 2,  color: C.cyan,   name: "Close",        topic: "" },
  ];
  const barX = 0.5, barY = 2.1, barW = 9, barH = 1.6;
  const total = segs.reduce((a, s) => a + s.min, 0);
  let cx = barX;
  segs.forEach(seg => {
    const w = (seg.min / total) * barW;
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: barY, w, h: barH,
      fill: { color: seg.color }, line: { color: seg.color }
    });
    const isTight = seg.min <= 10;
    if (!isTight) {
      s.addText(seg.name, {
        x: cx, y: barY + 0.15, w, h: 0.45, margin: 0,
        fontSize: 14, fontFace: FONT_BODY, color: C.bg,
        bold: true, charSpacing: 2, align: "center"
      });
      if (seg.topic) {
        s.addText(seg.topic, {
          x: cx + 0.05, y: barY + 0.62, w: w - 0.1, h: 0.5, margin: 0,
          fontSize: 9, fontFace: FONT_BODY, color: C.bg, align: "center"
        });
      }
      s.addText(seg.min + "m", {
        x: cx, y: barY + barH - 0.4, w, h: 0.3, margin: 0,
        fontSize: 9, fontFace: FONT_BODY, color: C.bg, bold: true, align: "center"
      });
    } else {
      s.addText(seg.name, {
        x: cx, y: barY + 0.3, w, h: 0.45, margin: 0,
        fontSize: 10, fontFace: FONT_BODY, color: C.bg, bold: true, align: "center"
      });
      s.addText(seg.min + "m", {
        x: cx, y: barY + barH - 0.4, w, h: 0.3, margin: 0,
        fontSize: 8, fontFace: FONT_BODY, color: C.bg, align: "center"
      });
    }
    cx += w;
  });

  // Time ruler
  const ruler = ["0:00", "0:30", "1:00", "1:30", "2:00"];
  ruler.forEach((t, i) => {
    const rx = barX + (i / (ruler.length - 1)) * barW;
    s.addShape(pres.shapes.LINE, {
      x: rx, y: barY + barH, w: 0, h: 0.08,
      line: { color: C.dim, width: 1 }
    });
    s.addText(t, {
      x: rx - 0.3, y: barY + barH + 0.1, w: 0.6, h: 0.25, margin: 0,
      fontSize: 9, fontFace: FONT_BODY, color: C.dim, align: "center", charSpacing: 2
    });
  });

  // Caption
  s.addText("Two blocks. Block 1 builds the foundation. Block 2 pressure-tests it with a live case exercise.", {
    x: 0.5, y: 4.5, w: 9, h: 0.3, margin: 0,
    fontSize: 11, fontFace: FONT_BODY, color: C.muted, align: "center", italic: true
  });

  footerBrand(s);
}

/* ================================================================
   Shared: agenda row
   ================================================================ */
function agendaRow(slide, y, time, color, photoPath, title, desc, mins, initial) {
  const rowH = 0.85;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y, w: 9, h: rowH,
    fill: { color: C.surface }, line: { color: C.border, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y, w: 0.1, h: rowH,
    fill: { color }, line: { color }
  });
  slide.addText(time, {
    x: 0.75, y, w: 1.4, h: rowH, margin: 0,
    fontSize: 12, fontFace: FONT_BODY, color: C.muted,
    bold: true, charSpacing: 2, align: "left", valign: "middle"
  });
  const avX = 2.2, avY = y + 0.15;
  if (photoPath) {
    try {
      slide.addImage({ path: photoPath, x: avX, y: avY, w: 0.55, h: 0.55, rounding: true });
    } catch (e) {
      slide.addShape(pres.shapes.OVAL, {
        x: avX, y: avY, w: 0.55, h: 0.55,
        fill: { color: C.surface2 }, line: { color, width: 1.5 }
      });
      slide.addText(initial || "?", {
        x: avX, y: avY, w: 0.55, h: 0.55, margin: 0,
        fontSize: 14, fontFace: FONT_TITLE, color, align: "center", valign: "middle"
      });
    }
  } else {
    slide.addShape(pres.shapes.OVAL, {
      x: avX, y: avY, w: 0.55, h: 0.55,
      fill: { color: C.surface2 }, line: { color, width: 1.5, dashType: "dash" }
    });
    slide.addText(initial || "•", {
      x: avX, y: avY, w: 0.55, h: 0.55, margin: 0,
      fontSize: 16, fontFace: FONT_BODY, color, align: "center", valign: "middle"
    });
  }
  slide.addText(title, {
    x: 2.9, y: y + 0.08, w: 5.6, h: 0.4, margin: 0,
    fontSize: 14, fontFace: FONT_TITLE, color: C.text, align: "left", valign: "top"
  });
  slide.addText(desc, {
    x: 2.9, y: y + 0.45, w: 5.6, h: 0.42, margin: 0,
    fontSize: 10, fontFace: FONT_BODY, color: C.muted, align: "left", valign: "top"
  });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.6, y: y + 0.27, w: 0.8, h: 0.35,
    fill: { color: C.surface2 }, line: { color, width: 1 },
    rectRadius: 0.06
  });
  slide.addText(mins, {
    x: 8.6, y: y + 0.27, w: 0.8, h: 0.35, margin: 0,
    fontSize: 10, fontFace: FONT_BODY, color, bold: true, charSpacing: 2,
    align: "center", valign: "middle"
  });
}

/* ================================================================
   SLIDE 4 — BLOCK 1 (FOUNDATIONS)
   ================================================================ */
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  topStripe(s);

  eyebrow(s, "④ BLOCK 1 · FOUNDATIONS  (0:00 → 1:00)", 0.5, 0.3, 7);
  s.addText("Building the ground", {
    x: 0.5, y: 0.55, w: 9, h: 0.65,
    fontSize: 28, fontFace: FONT_TITLE, color: C.text, align: "left", margin: 0
  });

  agendaRow(s, 1.45, "0:00 — 0:20", C.cyan, "images/yoad.jpg",
    "🎙️ Yoad — Intro, objectives + AI foundations",
    "Opens the workshop: three objectives. How LLMs really work. The CLEAR prompting framework. A live hallucination demo.",
    "20m", "Y");

  agendaRow(s, 2.4, "0:20 — 0:40", C.purple, "images/or.jpg",
    "🩺 Or — Clinical reasoning under AI",
    "How diagnosis really works. Where cognitive biases slip in — and which of them AI mitigates vs. amplifies.",
    "20m", "O");

  agendaRow(s, 3.35, "0:40 — 1:00", C.yellow, "images/daphna.jpg",
    "🔬 Daphna — The patient-facing frontier",
    "The Medint model. How AI-augmented research teams help patients with complex cases — and what responsible AI looks like.",
    "20m", "D");

  agendaRow(s, 4.3, "1:00 — 1:10", C.dim, null,
    "☕ Break",
    "Ten minutes. Coffee, hallway conversations, reset before Block 2.",
    "10m", "☕");

  footerBrand(s);
}

/* ================================================================
   SLIDE 5 — BLOCK 2 (PRESSURE TEST)
   ================================================================ */
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  topStripe(s);

  eyebrow(s, "⑤ BLOCK 2 · PRESSURE TEST  (1:10 → 2:00)", 0.5, 0.3, 7);
  s.addText("The heart of the workshop", {
    x: 0.5, y: 0.55, w: 9, h: 0.65,
    fontSize: 28, fontFace: FONT_TITLE, color: C.text, align: "left", margin: 0
  });

  agendaRow(s, 1.45, "1:10 — 1:30", C.coral, "images/itamar.jpg",
    "📊 Itamar — AI meets the hospital",
    "The system view. What data really shows about accuracy, bias, and failure modes. Human-in-the-loop vs. on-the-loop.",
    "20m", "I");

  agendaRow(s, 2.4, "1:30 — 1:50", C.yellow, null,
    "🎯 Case Challenge — AI vs. no-AI",
    "Round 1: half the room with AI, half without. Round 2: they swap. Everyone experiences both conditions.",
    "20m", "🎯");

  agendaRow(s, 3.35, "1:50 — 1:58", C.purple, null,
    "🔍 Live Debrief — Compare outcomes",
    "What did AI catch that humans missed? What did humans catch that AI missed? Three clinical lenses — Or, Daphna, Itamar.",
    "8m", "🔍");

  agendaRow(s, 4.3, "1:58 — 2:00", C.cyan, "images/yoad.jpg",
    "🎤 Close · what's next",
    "Yoad closes with the 90-second copilot-to-agent vision — where clinical AI is heading in the next 12 months.",
    "2m", "Y");

  footerBrand(s);
}

/* ================================================================
   SLIDE 6 — THREE OBJECTIVES
   ================================================================ */
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  topStripe(s);

  eyebrow(s, "⑥ OBJECTIVES", 0.5, 0.3, 3);
  s.addText("Three objectives · clear measurement", {
    x: 0.5, y: 0.55, w: 9, h: 0.65,
    fontSize: 28, fontFace: FONT_TITLE, color: C.text, align: "left", margin: 0
  });
  s.addText("By the end of the workshop, every participant walks out with three new capabilities they can use the next day.", {
    x: 0.5, y: 1.25, w: 9, h: 0.35,
    fontSize: 13, fontFace: FONT_BODY, color: C.muted, align: "left", margin: 0
  });

  const goals = [
    { n: "01", color: C.cyan,   icon: "🧠", title: "Understand", desc: "How AI chatbots really work — next-word prediction, not 'understanding'. Why medicine is uniquely hard for them." },
    { n: "02", color: C.purple, icon: "✍️", title: "Operate",    desc: "How to write safe, effective prompts for clinical reasoning — using the CLEAR framework, ready to use Monday morning." },
    { n: "03", color: C.coral,  icon: "⚖️", title: "Judge",      desc: "When to trust AI output, when to question it, and how to spot hallucinations and prompt failures in real time." },
  ];
  const gapX = 0.2, cardW = (9 - gapX * 2) / 3, cardH = 3.1;
  let gx = 0.5;
  goals.forEach(g => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: gx, y: 1.85, w: cardW, h: cardH,
      fill: { color: C.surface }, line: { color: C.border, width: 1 }
    });
    s.addText(g.n, {
      x: gx + 0.15, y: 1.85, w: 1.2, h: 1.0, margin: 0,
      fontSize: 44, fontFace: FONT_TITLE, color: g.color,
      transparency: 80, align: "left", valign: "top"
    });
    s.addText(g.icon, {
      x: gx, y: 2.65, w: cardW, h: 0.7, margin: 0,
      fontSize: 40, fontFace: FONT_BODY, align: "center"
    });
    s.addText(g.title, {
      x: gx, y: 3.4, w: cardW, h: 0.45, margin: 0,
      fontSize: 22, fontFace: FONT_TITLE, color: g.color, align: "center"
    });
    s.addText(g.desc, {
      x: gx + 0.2, y: 3.9, w: cardW - 0.4, h: 1.0, margin: 0,
      fontSize: 11, fontFace: FONT_BODY, color: C.muted, align: "center", valign: "top"
    });
    gx += cardW + gapX;
  });

  footerBrand(s);
}

/* ================================================================
   SLIDE 7 — CLOSING
   ================================================================ */
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  topStripe(s);

  s.addShape(pres.shapes.OVAL, {
    x: 4.25, y: 0.8, w: 1.5, h: 1.5,
    fill: { color: C.purple, transparency: 85 },
    line: { color: C.purple, width: 0 }
  });
  s.addText("🩺", {
    x: 4.25, y: 0.85, w: 1.5, h: 1.5,
    fontSize: 56, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0
  });

  s.addText("⑦ THE MESSAGE THAT STAYS IN THE ROOM", {
    x: 0.5, y: 2.55, w: 9, h: 0.3, margin: 0,
    fontSize: 10, fontFace: FONT_BODY, color: C.cyan,
    bold: true, charSpacing: 4, align: "center"
  });

  s.addText("The Monday Doctor", {
    x: 0.5, y: 2.9, w: 9, h: 0.9,
    fontSize: 44, fontFace: FONT_TITLE, color: C.text, italic: true, align: "center", margin: 0
  });

  s.addText([
    { text: "The bar we want to clear isn't \"a good workshop.\" It's this:\n", options: { color: C.muted, fontSize: 14 } },
    { text: "Does the clinician walk out and, next Monday morning — ", options: { color: C.text, fontSize: 16, bold: true } },
    { text: "prompt the AI differently?", options: { color: C.cyan, fontSize: 16, bold: true, italic: true } }
  ], {
    x: 1, y: 3.95, w: 8, h: 1.1, margin: 0,
    fontFace: FONT_BODY, align: "center", valign: "top"
  });

  s.addText("THANK YOU", {
    x: 0.5, y: 5.1, w: 9, h: 0.3, margin: 0,
    fontSize: 10, fontFace: FONT_BODY, color: C.cyan, charSpacing: 6, bold: true, align: "center"
  });

  footerBrand(s);
}

pres.writeFile({ fileName: "AI-at-the-Bedside-Prague-2026.pptx" }).then(filename => {
  console.log("✓ Saved:", filename);
});
