# RMS Portfolio — 로봇 디바이스 임대관리 시스템

[**로봇 디바이스 임대관리 시스템**](https://github.com/BackendFrameworkProgramming/RentalManagementSystem) 프로젝트를 소개하는 포트폴리오 웹사이트입니다.
한양대학교 ERICA · 백엔드 프레임워크 프로그래밍 · 3조.

> 정적 사이트(HTML/CSS/JS)라 빌드 없이 그대로 배포됩니다. 디자인 톤은 SignFlow(eformsign 스타일) 디자인 토큰을 차용했습니다.

## 📁 구조
```
rms-portfolio/
├── index.html        # 한 페이지 구성 (소개·기술·기능·보안·이력·팀·자료)
├── css/style.css     # 디자인 토큰 + 레이아웃
├── js/main.js        # ★ CONFIG(링크/자료) + 콘텐츠 데이터 + 인터랙션
├── assets/           # PPT·PDF 등 첨부파일 (여기에 넣기)
└── README.md
```

## ✏️ 내용 채우기 (딱 한 곳)
`js/main.js` 맨 위 **`CONFIG`** 만 수정하면 사이트 전체에 반영됩니다.

```js
const CONFIG = {
  links: {
    github: "...",   // 소스 레포 (기본값 입력됨)
    demo:   "...",   // 라이브 배포 주소 (기본값 입력됨)
    notion: "",      // ← DB·API 설계 노션 URL 넣기
  },
  resources: [ ... ] // PPT/PDF는 href에 "assets/파일명" 지정 (비우면 "준비중" 표시)
};
```

### 첨부파일 넣는 법
1. 발표 PPT는 PDF로 변환(권장) 후 `assets/`에 복사 — 예: `assets/ppt/03-최종발표.pdf`
2. 요구사항명세서 PDF도 `assets/`에 복사
3. `CONFIG.resources`의 해당 항목 `href`에 그 경로를 적기

## 🚀 배포
### GitHub Pages
1. 이 폴더를 새 레포로 push
2. 레포 **Settings → Pages → Branch: `main` / `/root`** 선택
3. `https://<계정>.github.io/rms-portfolio/` 에서 확인

### Vercel
1. New Project → 이 레포 import
2. Framework: **Other**, Build: 없음, Output: 루트 → Deploy
3. `https://rms-portfolio.vercel.app` 발급

## 🧩 콘텐츠 요약
- **소개**: 디바이스 생애주기 관리 · MQTT 실시간 데이터 · 운영 보안
- **기술스택**: Spring Boot 4 · Java 21 · JPA · MySQL · Thymeleaf · MQTT
- **기능**: 운영 화면 8 + 관리 화면 5 (총 13)
- **보안**: OWASP Top 10 대응 + 외부 점검 3종(CryptCheck A+ · securityheaders A · Nikto)
- **개선이력**: 11라운드 설계 개선 타임라인
- **팀**: 윤태웅(PM)·김규민·정은혜·전민석 역할분담
