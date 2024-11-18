```
project-root/
├── public/                # 정적 파일 (e.g., favicon, images)
│   └── favicon.ico
├── src/
│   ├── assets/            # 이미지, 폰트 등의 정적 파일
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   └── Header/
│   │       ├── Header.tsx
│   │       └── Header.module.css
│   ├── hooks/             # 커스텀 훅
│   ├── layouts/           # 공통 레이아웃
│   ├── pages/             # 페이지 컴포넌트
│   ├── services/          # API 통신 등의 비즈니스 로직
│   ├── store/             # 상태 관리 (e.g., Redux, Context API)
│   ├── styles/            # 전역 스타일 파일
│   ├── types/             # TypeScript 타입 정의
│   ├── App.tsx            # 루트 컴포넌트
│   └── main.tsx           # React DOM 렌더링 시작점
├── .gitignore
├── index.html             # Vite entry point
├── package.json
└── tsconfig.json          # TypeScript 설정 파일
```
