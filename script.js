"use strict";

/* 메이저 아르카나 22장 */
const CARDS = [
  { num: "0",     ko: "바보",          en: "The Fool",           symbol: "☆", keywords: "시작 · 자유 · 모험",
    text: "새로운 여정의 문 앞에 서 있어요. 계산은 잠시 내려두고, 가벼운 마음으로 첫걸음을 내디뎌 보세요." },
  { num: "I",     ko: "마법사",        en: "The Magician",       symbol: "✧", keywords: "의지 · 재능 · 실행",
    text: "필요한 재료는 이미 손안에 있어요. 오늘은 생각을 행동으로 옮기기에 좋은 날입니다." },
  { num: "II",    ko: "여사제",        en: "The High Priestess", symbol: "☾", keywords: "직관 · 고요 · 비밀",
    text: "답은 바깥이 아니라 내면에 있어요. 서두르지 말고 조용히 마음의 소리에 귀 기울여 보세요." },
  { num: "III",   ko: "여황제",        en: "The Empress",        symbol: "♀", keywords: "풍요 · 돌봄 · 창조",
    text: "다정함과 풍요가 흐르는 하루예요. 나 자신과 주변을 충분히 돌보며 결실을 즐기세요." },
  { num: "IV",    ko: "황제",          en: "The Emperor",        symbol: "♔", keywords: "질서 · 책임 · 안정",
    text: "원칙과 계획이 힘이 되는 날이에요. 흔들림 없이 중심을 잡고 단단하게 나아가세요." },
  { num: "V",     ko: "교황",          en: "The Hierophant",     symbol: "✠", keywords: "전통 · 조언 · 배움",
    text: "검증된 방법과 믿을 만한 조언이 도움이 돼요. 경험 많은 사람에게 배울 기회를 놓치지 마세요." },
  { num: "VI",    ko: "연인",          en: "The Lovers",         symbol: "♡", keywords: "선택 · 조화 · 관계",
    text: "마음이 이끄는 중요한 선택이 다가와요. 진심에 솔직할 때 관계도 한층 깊어집니다." },
  { num: "VII",   ko: "전차",          en: "The Chariot",        symbol: "➤", keywords: "추진력 · 승리 · 집중",
    text: "방향이 정해졌다면 거침없이 달릴 때예요. 흩어진 에너지를 모으면 원하는 곳에 닿습니다." },
  { num: "VIII",  ko: "힘",            en: "Strength",           symbol: "∞", keywords: "용기 · 인내 · 부드러움",
    text: "진짜 힘은 다정함에서 나와요. 서두르지 않는 인내가 오늘의 어려움을 잔잔히 다독입니다." },
  { num: "IX",    ko: "은둔자",        en: "The Hermit",         symbol: "✦", keywords: "성찰 · 고독 · 지혜",
    text: "잠시 멈춰 혼자만의 시간을 가져 보세요. 조용한 곳에서 길을 비추는 작은 등불을 발견합니다." },
  { num: "X",     ko: "운명의 수레바퀴", en: "Wheel of Fortune", symbol: "☸", keywords: "전환 · 기회 · 순환",
    text: "흐름이 바뀌는 순간이에요. 변화를 두려워하지 말고 찾아온 기회의 바퀴에 올라타 보세요." },
  { num: "XI",    ko: "정의",          en: "Justice",            symbol: "⚖", keywords: "균형 · 공정 · 진실",
    text: "행한 만큼 돌아오는 날이에요. 차분히 사실을 살피고 공정한 판단을 내려 보세요." },
  { num: "XII",   ko: "매달린 사람",   en: "The Hanged Man",     symbol: "☥", keywords: "관점 전환 · 멈춤 · 내려놓음",
    text: "기다림 속에 새로운 시각이 열려요. 거꾸로 바라보면 보이지 않던 해답이 나타납니다." },
  { num: "XIII",  ko: "죽음",          en: "Death",              symbol: "☠", keywords: "끝 · 변화 · 재탄생",
    text: "무언가가 끝나야 새로운 것이 시작돼요. 놓아주는 용기가 더 나은 내일의 자리를 만듭니다." },
  { num: "XIV",   ko: "절제",          en: "Temperance",         symbol: "≈", keywords: "균형 · 조화 · 중용",
    text: "넘치지도 모자라지도 않게, 알맞은 속도가 필요해요. 서로 다른 것들을 부드럽게 섞어 보세요." },
  { num: "XV",    ko: "악마",          en: "The Devil",          symbol: "⛧", keywords: "집착 · 유혹 · 속박",
    text: "나를 붙잡는 습관이나 욕망을 돌아볼 때예요. 사슬은 생각보다 느슨하니 스스로 풀 수 있어요." },
  { num: "XVI",   ko: "탑",            en: "The Tower",          symbol: "⚡", keywords: "붕괴 · 충격 · 해방",
    text: "갑작스러운 변화가 낡은 틀을 무너뜨려요. 흔들림 뒤에는 더 단단한 기반이 남습니다." },
  { num: "XVII",  ko: "별",            en: "The Star",           symbol: "✶", keywords: "희망 · 치유 · 영감",
    text: "어둠 속에서도 별은 빛나고 있어요. 마음이 회복되고 희망이 차오르는 평온한 하루예요." },
  { num: "XVIII", ko: "달",            en: "The Moon",           symbol: "☽", keywords: "불안 · 환상 · 무의식",
    text: "모든 것이 선명하지는 않아요. 불안이 만든 그림자에 휘둘리지 말고 한 걸음씩 천천히 가세요." },
  { num: "XIX",   ko: "태양",          en: "The Sun",            symbol: "☀", keywords: "기쁨 · 성공 · 활력",
    text: "환한 에너지가 가득한 날이에요. 자신감을 갖고 마음껏 웃고 드러내도 좋습니다." },
  { num: "XX",    ko: "심판",          en: "Judgement",          symbol: "♆", keywords: "각성 · 부름 · 새 출발",
    text: "과거를 정리하고 다시 일어서라는 부름이 들려와요. 스스로를 용서하고 새롭게 도약하세요." },
  { num: "XXI",   ko: "세계",          en: "The World",          symbol: "◯", keywords: "완성 · 성취 · 통합",
    text: "한 주기가 아름답게 마무리돼요. 지금까지의 노력을 축하하고, 다음 무대를 기대해 보세요." }
];

/* ==========================================================
   화면 흐름: intro(마녀 + 메모지) → fan(카드 펼치기) → result(결과)
   ========================================================== */

const DUR = 500;        // CSS --dur
const DUR_LONG = 900;   // CSS --dur-long
const PRISM_MS = 1700;  // CSS 프리즘 애니메이션 최대 길이

const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
const reduced = () => mq.matches;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, reduced() ? 0 : ms));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

const $ = (id) => document.getElementById(id);
const screens = {
  intro: $("screen-intro"),
  fan: $("screen-fan"),
  result: $("screen-result")
};
const el = {
  form: $("memoForm"),
  concern: $("concern"),
  count: $("count"),
  msg: $("formMsg"),
  memo: document.querySelector(".memo"),
  fan: $("fan"),
  slot: $("cardSlot"),
  hero: $("heroCard"),
  flip: $("heroFlip"),
  prism: $("prism"),
  panel: $("panel"),
  again: $("againBtn"),
  fNum: $("fNum"), fSymbol: $("fSymbol"), fKo: $("fKo"), fEn: $("fEn"),
  echo: $("echo"), cname: $("cname"), josa: $("josa"),
  verdict: $("verdict"), keywords: $("keywords")
};

let current = null;
let busy = false;
let concern = "";
let deck = [];
let landed = false;

/* ---------- 유틸 ---------- */

function randomInt(n) {
  if (window.crypto && crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint32Array(1))[0] % n;
  }
  return Math.floor(Math.random() * n);
}

function shuffled(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 받침 유무로 은/는 선택
function topic(word) {
  const code = word.charCodeAt(word.length - 1);
  if (code < 0xac00 || code > 0xd7a3) return "은(는)";
  return (code - 0xac00) % 28 === 0 ? "는" : "은";
}

/* ---------- 화면 전환 ---------- */

async function show(name) {
  if (current) {
    const prev = screens[current];
    prev.classList.remove("is-in");
    await wait(DUR);
    prev.hidden = true;
  }
  const next = screens[name];
  next.hidden = false;
  window.scrollTo(0, 0);
  void next.offsetWidth;
  next.classList.add("is-in");
  current = name;
}

/* ---------- 1단계: 메모지 ---------- */

el.concern.addEventListener("input", () => {
  el.count.textContent = el.concern.value.length + " / " + el.concern.maxLength;
  el.msg.textContent = "";
  el.memo.classList.remove("is-error");
});

el.concern.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    el.form.requestSubmit();
  }
});

el.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (busy) return;
  const value = el.concern.value.trim();
  if (!value) {
    el.msg.textContent = "고민을 한 줄이라도 적어주세요.";
    el.memo.classList.add("is-error");
    el.concern.focus();
    return;
  }
  busy = true;
  concern = value;
  await show("fan");
  await openFan();
  busy = false;
});

/* ---------- 2단계: 부채꼴 ---------- */

function buildFan() {
  deck = shuffled(CARDS);
  el.fan.className = "fan";
  el.fan.textContent = "";
  deck.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "fan-card";
    b.style.setProperty("--i", i);
    b.style.setProperty("--z", i <= 10 ? i * 2 + 1 : (21 - i) * 2); // 가운데 카드가 가장 위로 오는 좌우 대칭 겹침
    b.setAttribute("aria-label", "카드 " + (i + 1) + "번 선택");
    b.addEventListener("click", () => pick(b, i));
    el.fan.appendChild(b);
  });
}

async function openFan() {
  buildFan();
  await nextFrame();
  await wait(250);
  el.fan.classList.add("is-open");                     // 각 카드가 --i 순서대로 부채꼴로 회전
  await wait(DUR_LONG + (CARDS.length - 1) * 40);      // stagger 가 끝날 때까지
  el.fan.classList.add("is-ready");                    // 이후부터 hover/클릭 가능
}

/* ---------- 3단계: 날아오기 → 뒤집기 → 프리즘 ---------- */

function heroPose(cx, cy, scale, angle) {
  const w = el.hero.offsetWidth;
  const h = el.hero.offsetHeight;
  return "translate(" + (cx - w / 2) + "px," + (cy - h / 2) + "px) rotate(" + angle + "rad) scale(" + scale + ")";
}

function slotCenter() {
  const r = el.slot.getBoundingClientRect();
  return { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY };
}

function firePrism() {
  el.prism.classList.remove("is-firing");
  void el.prism.offsetWidth;
  el.prism.classList.add("is-firing");
  setTimeout(() => el.prism.classList.remove("is-firing"), PRISM_MS + 100);
}

function fillResult(card) {
  el.fNum.textContent = card.num;
  el.fSymbol.textContent = card.symbol + "\uFE0E"; // 이모지 대신 텍스트 글리프로 고정
  el.fKo.textContent = card.ko;
  el.fEn.textContent = card.en;

  el.echo.textContent = concern;
  el.cname.textContent = card.ko;
  el.josa.textContent = topic(card.ko);
  el.verdict.textContent = card.text;
  el.keywords.textContent = "Keywords · " + card.keywords;
}

async function pick(btn, index) {
  if (busy) return;
  busy = true;
  const card = deck[index];

  // 선택한 카드의 화면상 위치/각도 기록 (회전된 사각형의 중심 = 카드 중심)
  const rect = btn.getBoundingClientRect();
  const m = new DOMMatrix(getComputedStyle(btn).transform);
  const angle = Math.atan2(m.b, m.a);
  const startX = rect.left + rect.width / 2 + window.scrollX;
  const startY = rect.top + rect.height / 2 + window.scrollY;
  const startScale = btn.offsetWidth / el.hero.offsetWidth || 0.3;

  // 1) 나머지 카드는 사라지고, 고른 카드만 남는다
  btn.classList.add("is-chosen");
  el.fan.classList.add("is-picked");
  await wait(DUR);

  // 2) 결과 화면 준비
  fillResult(card);
  el.flip.classList.remove("is-flipped");
  el.panel.classList.remove("is-in");
  screens.result.classList.remove("is-landed");
  landed = false;

  // 비행 카드를 부채꼴 속 카드와 똑같은 자리/각도/크기에 놓고, 원본은 숨긴다
  el.hero.hidden = false;
  el.hero.classList.remove("is-gone");
  el.hero.style.transition = "none";
  el.hero.style.transform = heroPose(startX, startY, startScale, angle);
  void el.hero.offsetWidth;
  btn.style.visibility = "hidden";
  el.hero.style.transition = "";

  const swap = show("result");   // 부채꼴 화면 페이드아웃 → 결과 화면 페이드인

  // 3) 화면 중앙으로 날아와 커진다
  const heroH = el.hero.offsetHeight;
  const heroW = el.hero.offsetWidth;
  const big = Math.min(1.35, (window.innerHeight * 0.72) / heroH, (window.innerWidth * 0.86) / heroW);
  el.hero.style.transform = heroPose(
    window.scrollX + window.innerWidth / 2,
    window.scrollY + window.innerHeight / 2,
    big, 0
  );
  await wait(DUR_LONG + 100);
  await swap;

  // 4) 3D 뒤집기. 면이 돌아가는 순간(약 45%)에 프리즘 글로우 폭발
  el.flip.classList.add("is-flipped");
  await wait(DUR_LONG * 0.45);
  firePrism();
  await wait(DUR_LONG * 0.55 + 350);

  // 5) 제자리(슬롯)로 내려앉으며 해석 패널 등장
  const c = slotCenter();
  el.hero.style.transform = heroPose(c.x, c.y, 1, 0);
  el.panel.classList.add("is-in");
  await wait(DUR_LONG);

  landed = true;
  screens.result.classList.add("is-landed");
  busy = false;
}

// 안착한 카드는 창 크기가 바뀌어도 슬롯을 따라간다
function relayout() {
  if (!landed) return;
  const c = slotCenter();
  el.hero.style.transition = "none";
  el.hero.style.transform = heroPose(c.x, c.y, 1, 0);
  void el.hero.offsetWidth;
  el.hero.style.transition = "";
}
window.addEventListener("resize", relayout);
if ("ResizeObserver" in window) new ResizeObserver(relayout).observe(document.body);

/* ---------- 다시 질문하기 → 1단계로 리셋 ---------- */

el.again.addEventListener("click", async () => {
  if (busy) return;
  busy = true;
  landed = false;
  screens.result.classList.remove("is-landed");
  el.panel.classList.remove("is-in");
  el.hero.classList.add("is-gone");
  await wait(DUR);

  el.hero.hidden = true;
  el.hero.style.transform = "";
  el.flip.classList.remove("is-flipped");
  el.fan.className = "fan";
  el.fan.textContent = "";

  concern = "";
  el.concern.value = "";
  el.count.textContent = "0 / " + el.concern.maxLength;
  el.msg.textContent = "";
  el.memo.classList.remove("is-error");

  await show("intro");
  busy = false;
});

/* ---------- 시작 ---------- */
show("intro");
