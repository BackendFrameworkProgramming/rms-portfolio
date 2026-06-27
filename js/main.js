/* =========================================================
   RMS Portfolio — content & interactions
   ▶ 여기 CONFIG의 링크/파일 경로만 바꾸면 사이트 전체에 반영됩니다.
   ========================================================= */
const CONFIG = {
  // --- 외부 링크 (여기에 실제 URL 채우기) ---
  links: {
    github:  "https://github.com/BackendFrameworkProgramming/RentalManagementSystem",
    notion:  "",                                 // ← DB·API 설계 노션 URL 넣기
  },
  // --- 자료 파일 ---
  resources: [
    { icon: "presentation", bg: "#eaefff", title: "설계 발표 (1차)",  desc: "DB 설계 · 주제 (PPTX)",          href: "assets/docs/design-1st.pptx" },
    { icon: "presentation", bg: "#eaefff", title: "중간 발표 (2차)",  desc: "설계 · 중간 진행 (PPTX)",        href: "assets/docs/midterm-2nd.pptx" },
    { icon: "presentation", bg: "#eaefff", title: "최종 발표",        desc: "완성 시스템 · 보안 · 회고 (PPTX)", href: "assets/docs/final.pptx" },
    { icon: "database",     bg: "#f3f6ff", title: "테이블 명세서",     desc: "DB 테이블 설계 (PDF)",            href: "assets/docs/table-spec.pdf" },
    { icon: "code",         bg: "#f3f6ff", title: "API 명세서",       desc: "REST 엔드포인트 명세 (PDF)",      href: "assets/docs/api-spec.pdf" },
    { icon: "file",         bg: "#fdf3e7", title: "요구사항 · 화면설계", desc: "요구사항/화면 설계 (PDF)",        href: "assets/docs/requirements.pdf" },
    { icon: "code",         bg: "#f3f6ff", title: "GitHub 소스코드",   desc: "전체 소스 저장소",               href: "https://github.com/BackendFrameworkProgramming/RentalManagementSystem" },
  ],
};

/* =========================================================
   SVG 아이콘 세트 (이모지 미사용 — 전부 라인 SVG)
   ========================================================= */
const ICON_PATHS = {
  box:      '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  signal:   '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>',
  shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  launch:   '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  code:     '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  device:   '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  doc:      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  tool:     '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  building: '<path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><line x1="9" y1="9" x2="9" y2="9"/><line x1="9" y1="13" x2="9" y2="13"/><line x1="9" y1="17" x2="9" y2="17"/>',
  layers:   '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  users:    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  user:     '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  userCheck:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  cpu:      '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  hash:     '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  bug:      '<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-2 1.5M5 7l2 1.5M12 6V3M19 13h3M2 13h3M18.5 18.5L21 20M5.5 18.5L3 20"/>',
  book:     '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  check:    '<polyline points="20 6 9 17 4 12"/>',
  presentation: '<path d="M2 3h20"/><path d="M3 3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3"/><path d="M12 16l-4 5M12 16l4 5"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  file:     '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  external: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  menu:     '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
};
function icon(name, size = 22) {
  const p = ICON_PATHS[name] || "";
  return `<svg class="ico" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

/* ---------- 콘텐츠 데이터 ---------- */
const HERO_STATS = [
  { num: "13", lbl: "운영·관리 화면" },
  { num: "70+", lbl: "REST API" },
  { num: "5", lbl: "보안 점검 도구" },
  { num: "4", lbl: "팀원" },
];

const TECH = [
  { group: "Backend",  items: ["Spring Boot 4", "Java 21", "Spring Data JPA", "Spring Security"] },
  { group: "Data",     items: ["MySQL", "JWT", "Hibernate", "원격 DB"] },
  { group: "Frontend", items: ["Thymeleaf", "JavaScript", "REST", "SSR"] },
  { group: "Infra·기타", items: ["MQTT (DrValue)", "Gradle", "AOP", "pm2 / TLS"] },
];

const FEAT_OPS = [
  { ic: "device", t: "디바이스" }, { ic: "doc", t: "임대" }, { ic: "tool", t: "A/S" }, { ic: "building", t: "지점" },
  { ic: "layers", t: "센터" }, { ic: "users", t: "부서·팀" }, { ic: "user", t: "직원" }, { ic: "activity", t: "생체" },
];
const FEAT_ADMIN = [
  { ic: "cpu", t: "모델" }, { ic: "hash", t: "공통코드" }, { ic: "userCheck", t: "사용자" },
  { ic: "bug", t: "에러로그" }, { ic: "book", t: "설계이력" },
];

const OWASP = [
  { tag: "A01 · 접근통제", t: "역할 기반 접근통제 (RBAC)", d: "ADMIN / STAFF / 지점관리자 3단계. 관리 화면은 ADMIN 전용, 데이터 스코핑으로 IDOR 방어." },
  { tag: "A02 · 암호화 실패", t: "시크릿 env 전용", d: "DB 비밀번호 · JWT 시크릿을 환경변수 전용으로 분리(평문 fallback 제거, 미설정 시 기동 차단). 비밀번호는 BCrypt 단방향 해시." },
  { tag: "A03 · 인젝션 / 경로", t: "로그 인젝션 · 경로 탈출 방어", d: "로그 출력 개행 제거(log injection), 업로드 파일명 basename 정규화로 Path Traversal 차단, 확장자 화이트리스트." },
  { tag: "A05 · 보안 설정 오류", t: "설정 노출 차단", d: "운영 시 SQL/스택트레이스 노출 차단(show-sql off). 환경변수로만 토글." },
  { tag: "A07 · 인증 실패", t: "JWT 인증 + 로그인 잠금", d: "Access/Refresh + HttpOnly 쿠키. 5회 실패 시 5분 일시 잠금(LoginAttemptService)." },
  { tag: "헤더", t: "보안 응답 헤더 6종", d: "HSTS · CSP · Referrer-Policy · Permissions-Policy · X-Content-Type-Options 등 적용." },
  { tag: "감사", t: "AOP API 로깅 · 에러로그", d: "모든 API 실행시간 로깅, 에러를 화면별 배지·스택트레이스로 상세 기록." },
];

const SCANS = [
  { grade: "A+", svg: null,    cls: "g-a",    tool: "CryptCheck.fr", t: "TLS 등급", who: "전민석" },
  { grade: "A",  svg: null,    cls: "g-a",    tool: "securityheaders.com", t: "보안 헤더 등급", who: "정은혜" },
  { grade: null, svg: "check", cls: "g-pass", tool: "Nikto", t: "웹 취약점 스캔", who: "김규민" },
  { grade: null, svg: "check", cls: "g-pass", tool: "GitHub CodeQL", t: "정적 분석 (CI 자동)", who: "윤태웅" },
  { grade: null, svg: "check", cls: "g-pass", tool: "Dependabot", t: "의존성 취약점 (CI 자동)", who: "윤태웅" },
];

const SCREENS = [
  { src: "assets/screens/screen1.png", t: "디바이스 현황",       d: "지점별 디바이스 상태·재고 관리" },
  { src: "assets/screens/screen2.png", t: "디바이스 임대 현황",   d: "임대 신청 · 사용중 · 반납 흐름" },
  { src: "assets/screens/screen3.png", t: "사용 생체 정보",       d: "걸음·호흡·사용시간 + 응급 기록" },
  { src: "assets/screens/screen4.png", t: "디바이스 A/S 관리",    d: "접수 · 진행 · 완료 이력" },
  { src: "assets/screens/screen5.png", t: "지점 관리",           d: "지점 · 주담당자 관리" },
  { src: "assets/screens/screen6.png", t: "센터 정보",           d: "센터 기본정보 · 직인/로고" },
  { src: "assets/screens/screen7.png", t: "부서 / 팀",           d: "조직 구조 관리 (부서·팀)" },
  { src: "assets/screens/screen8.png", t: "센터 담당직원",       d: "직원 · 근무형태 · 근무상태" },
];

const TEAM = [
  { name: "윤태웅", role: "PM · 팀장", color: "#2b5bfe", tags: ["공통 구조", "디바이스", "인증", "사용자", "모델", "리팩토링 총괄"] },
  { name: "김규민", role: "Backend",  color: "#16a34a", tags: ["임대(Rental)", "A/S(AsRecord)", "Nikto 점검"] },
  { name: "정은혜", role: "Backend",  color: "#d97706", tags: ["직원", "생체", "응급", "MQTT", "헤더 점검"] },
  { name: "전민석", role: "Backend",  color: "#7c3aed", tags: ["지점(Branch)", "부서·팀", "TLS 점검"] },
];

/* =========================================================
   Render
   ========================================================= */
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
const $ = (sel) => document.querySelector(sel);

function fillDataIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const size = node.dataset.size ? +node.dataset.size : (node.classList.contains("about-ic") ? 26 : 18);
    node.innerHTML = icon(node.dataset.icon, size);
  });
}

function applyLinks() {
  const { github } = CONFIG.links;
  [["#navGithub", github], ["#heroGithub", github]].forEach(([sel, href]) => {
    const node = $(sel); if (node && href) node.href = href;
  });
}

function renderHeroStats() {
  $("#heroStats").append(...HERO_STATS.map(s =>
    el(`<div class="hstat reveal"><div class="num">${s.num}</div><div class="lbl">${s.lbl}</div></div>`)));
}

function renderTech() {
  $("#techGrid").append(...TECH.map(g =>
    el(`<div class="tech-card reveal"><h4>${g.group}</h4><div class="tech-chips">${g.items.map(i => `<span class="tech-chip">${i}</span>`).join("")}</div></div>`)));
}

function renderFeatures() {
  $("#featOps").append(...FEAT_OPS.map(f => el(`<li><span class="fi">${icon(f.ic, 18)}</span>${f.t}</li>`)));
  $("#featAdmin").append(...FEAT_ADMIN.map(f => el(`<li><span class="fi">${icon(f.ic, 18)}</span>${f.t}</li>`)));
}

function renderOwasp() {
  $("#owaspGrid").append(...OWASP.map(o =>
    el(`<div class="owasp-card reveal"><span class="tag">${o.tag}</span><h4>${o.t}</h4><p>${o.d}</p></div>`)));
}

function renderScans() {
  $("#scanGrid").append(...SCANS.map(s =>
    el(`<div class="scan-card reveal"><div class="grade ${s.cls}">${s.svg ? icon(s.svg, 30) : s.grade}</div><h4>${s.t}</h4><div class="tool">${s.tool}</div><div class="who"><span class="badge badge-gray">${s.who}</span></div></div>`)));
}

function renderScreens() {
  $("#screenGrid").append(...SCREENS.map(s =>
    el(`<figure class="shot reveal">
          <img src="${s.src}" alt="${s.t}" loading="lazy">
          <figcaption><b>${s.t}</b><span>${s.d}</span></figcaption>
        </figure>`)));
  // 클릭 확대(라이트박스)
  const overlay = el(`<div class="lightbox"><img alt=""></div>`);
  document.body.appendChild(overlay);
  const big = overlay.querySelector("img");
  document.querySelectorAll("#screenGrid img").forEach(im => {
    im.addEventListener("click", () => { big.src = im.src; overlay.classList.add("open"); document.body.style.overflow = "hidden"; });
  });
  const close = () => { overlay.classList.remove("open"); document.body.style.overflow = ""; };
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

function renderTeam() {
  $("#teamGrid").append(...TEAM.map(m =>
    el(`<div class="team-card reveal">
          <div class="ava" style="background:${m.color}">${m.name.charAt(0)}</div>
          <h4>${m.name}</h4><div class="role">${m.role}</div>
          <div class="tags">${m.tags.map(t => `<span>${t}</span>`).join("")}</div>
        </div>`)));
}

function renderResources() {
  const grid = $("#resGrid");
  CONFIG.resources.forEach(r => {
    let href = r.href;
    if (!href && (r.title.includes("Notion") || r.title.includes("DB"))) href = CONFIG.links.notion;
    const disabled = !href;
    grid.append(el(
      `<a class="res-card reveal ${disabled ? "disabled" : ""}" href="${href || "#"}" ${disabled ? "" : 'target="_blank" rel="noopener"'}>
         <div class="r-ic" style="background:${r.bg}">${icon(r.icon, 24)}</div>
         <div class="grow"><b>${r.title}</b><span>${r.desc}</span></div>
         <span class="arrow">${icon("external", 18)}</span>
       </a>`));
  });
}

function renderFooterLinks() {
  const { github, notion } = CONFIG.links;
  const items = [["GitHub", github], ["설계 문서(Notion)", notion]].filter(([, h]) => h);
  $("#ftLinks").append(...items.map(([t, h]) =>
    el(`<a href="${h}" target="_blank" rel="noopener">${t} ${icon("external", 14)}</a>`)));
}

/* =========================================================
   Interactions: nav scroll state, scrollspy, reveal, mobile menu
   ========================================================= */
function initHeader() {
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  $("#hdBurger").addEventListener("click", () => header.classList.toggle("nav-open"));
  $("#hdNav").addEventListener("click", (e) => { if (e.target.tagName === "A") header.classList.remove("nav-open"); });
}

function initScrollSpy() {
  const links = [...document.querySelectorAll(".hd-nav a")];
  const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => a.classList.remove("active"));
        map.get(en.target.id)?.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["about", "tech", "features", "security", "screens", "team", "resources"].forEach(id => {
    const s = document.getElementById(id); if (s) obs.observe(s);
  });
}

function initReveal() {
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); o.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(n => obs.observe(n));
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeroStats(); renderTech(); renderFeatures(); renderOwasp();
  renderScans(); renderScreens(); renderTeam(); renderResources(); renderFooterLinks();
  fillDataIcons(); applyLinks(); initHeader(); initScrollSpy(); initReveal();
});
