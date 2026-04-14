import { contactHero, clothHome, heroHome, spaceHome } from "../assets/images";

export const navItems = [
  { label: "홈", path: "/" },
  { label: "아카이브", path: "/archive" },
  { label: "공간", path: "/space" },
  { label: "소개", path: "/about" },
  { label: "문의", path: "/contact" },
];

export const categoryItems = [
  {
    id: "fashion",
    title: "패션",
    caption: "구조적 재단과 절제된 소재의 기록.",
  },
  {
    id: "space",
    title: "공간",
    caption: "빛과 재료, 여백의 공간",
  },
  {
    id: "designers",
    title: "디자이너",
    caption: "형태를 설계하는 시선과 태도.",
  },
  {
    id: "objects",
    title: "오브제",
    caption: "단순한 물성 속 존재감과 균형.",
  },
  {
    id: "editorial",
    title: "에디토리얼",
    caption: "편집과 글로 정리한 감각의 기록.",
  },
];

export const archiveCategoryContent = {
  fashion: {
    title: "패션",
    description: "실루엣과 소재, 구조를 중심으로 기록한 패션 아카이브.",
    featured: {
      description:
        "재단과 구조, 텍스처를 통해 패션의 밀도를 기록한 에디토리얼.",
    },
    listLabel: "저널 엔트리",
  },
  space: {
    title: "공간",
    description: "빛과 재료, 그리고 여백으로 구성된 공간의 기록.",
    featured: {
      description: "비워낸 구조와 재료의 밀도로 공간의 분위기를 읽어낸 기록.",
    },
    listLabel: "공간 인덱스",
  },
  designers: {
    title: "디자이너",
    description: "형태와 태도를 만드는 디자이너의 작업 방식을 기록합니다.",
    featured: {
      description: "재료의 본질과 절제된 구조를 탐구하는 디자이너 노트.",
    },
    listLabel: "디자이너 인덱스",
  },
  objects: {
    title: "오브제",
    description: "기능과 형태 사이에서 남는 물성과 비례를 기록합니다.",
    featured: {
      description:
        "오브제가 공간 안에서 만드는 인상을 물성과 구조로 읽어냅니다.",
    },
    listLabel: "아카이브 리스트",
  },
  editorial: {
    title: "에디토리얼",
    description: "정제된 시선으로 감각과 구조를 언어화한 글의 기록.",
    featured: {
      description: "작은 차이와 비례, 여백을 통해 구조를 읽어낸 편집 노트.",
    },
    listLabel: "아카이브 리스트",
  },
};

export const archiveEntries = [
  {
    id: "125",
    categoryId: "designers",
    category: "디자이너",
    title: "선 위에 놓인 오브제",
    year: "2026",
  },
  {
    id: "124",
    categoryId: "space",
    category: "공간",
    title: "경계를 지우는 집",
    year: "2026",
  },
  {
    id: "123",
    categoryId: "objects",
    category: "오브제",
    title: "가벼운 두께의 균형",
    year: "2026",
  },
  {
    id: "122",
    categoryId: "editorial",
    category: "에디토리얼",
    title: "조용히 나뉜 공간",
    year: "2025",
  },
  {
    id: "121",
    categoryId: "fashion",
    category: "패션",
    title: "구조 위에 놓인 형상",
    year: "2024",
  },
  {
    id: "120",
    categoryId: "space",
    category: "공간",
    title: "곡선으로 열린 거주",
    year: "2023",
  },
];

export const archiveList = [
  {
    ref: "125",
    categoryId: "designers",
    title: "선 위에 놓인 오브제",
    category: "디자이너",
    creator: "지안",
    year: "2026",
    image: "/assets/archive-thumb.svg",
  },
  {
    ref: "124",
    categoryId: "space",
    title: "경계를 지우는 집",
    category: "공간",
    creator: "아틀리에 무(無)",
    year: "2026",
    image: "/assets/archive-thumb.svg",
  },
  {
    ref: "123",
    categoryId: "objects",
    title: "곡선 위에 머무는 균형",
    category: "오브제",
    creator: "Lina K",
    year: "2026",
    image: "/assets/archive-thumb.svg",
  },
  {
    ref: "122",
    categoryId: "editorial",
    title: "조용히 나뉜 공간",
    category: "에디토리얼",
    creator: "Noa Frame",
    year: "2025",
    image: "/assets/archive-thumb.svg",
  },
  {
    ref: "121",
    categoryId: "fashion",
    title: "구조 위에 놓인 형상",
    category: "패션",
    creator: "Arin Form",
    year: "2024",
    image: "/assets/archive-thumb.svg",
  },
  {
    ref: "120",
    categoryId: "space",
    title: "곡선으로 열린 거주",
    category: "공간",
    creator: "Atelier Curve",
    year: "2024",
    image: "/assets/archive-thumb.svg",
  },
];

export const aboutSections = [
  {
    label: "우리가 주목하는 것",
    description: "재료의 진정성과 구조가 만드는 조용한 긴장.",
  },
  {
    label: "우리가 덜어내는 것",
    description: "과한 장식, 빠른 유행, 반복되는 클리셰의 표현.",
  },
  {
    label: "남기는 것",
    description: "오래 남는 장면과 물성이 스스로 말하는 기록.",
    accent: true,
  },
];

export const aboutPageContent = {
  intro: {
    eyebrow: "VOLUME 04 / ARCHIVE / 2026",
    title: "BARE LINE",
    description:
      "BARE LINE은 구조와 물성, 그리고 절제된 감각이 만들어내는 장면을 기록하는 아카이브 매거진입니다. 빠르게 소비되는 이미지보다 오래 남는 인상과 균형, 그리고 조용한 밀도를 더 중요하게 바라봅니다.",
  },
  manifestoTitle: "매니페스토",
  vision: {
    title: "동시대의 조형 언어",
    caption: "비전",
    paragraphs: [
      "우리는 각 분야를 따로 보지 않습니다. 패션의 재단, 공간의 동선, 오브제의 균형, 편집의 리듬은 모두 같은 구조적 감각 안에서 연결된다고 믿습니다.",
      "그래서 BARE LINE은 무엇을 보여줄지보다 무엇을 남길지를 먼저 질문합니다. 그 선택의 결과로 생기는 조용한 화면이 우리가 기록하고 싶은 동시대의 장면입니다.",
    ],
    cta: "더 읽어보기",
  },
  readMore: {
    principles: {
      title: "기록의 기준",
      caption: "Core Principles",
      items: [
        {
          label: "01 형태",
          title: "강한 인상보다 오래 남는 비례",
          description:
            "우리는 즉각적인 시각 효과보다 시간이 지나도 다시 떠오르는 비례와 구조를 먼저 바라봅니다.",
        },
        {
          label: "02 재료",
          title: "표면 아래의 온도 읽기",
          description:
            "질감은 단순한 시각 정보가 아니라 재료가 가진 시간성과 밀도를 드러내는 언어라고 생각합니다.",
        },
        {
          label: "03 여백",
          title: "덜어낸 뒤 남는 긴장",
          description:
            "무언가를 더하기보다 덜어냈을 때 비로소 또렷해지는 균형과 침묵의 순간을 중요하게 기록합니다.",
        },
      ],
    },
    process: {
      title: "편집의 흐름",
      caption: "Editorial Process",
      steps: [
        {
          year: "Observe",
          title: "장면을 오래 바라봅니다",
          description:
            "첫인상에 머무르지 않고 구조, 동선, 재료의 관계를 반복해서 관찰하며 기록의 출발점을 만듭니다.",
        },
        {
          year: "Select",
          title: "남길 장면을 선별합니다",
          description:
            "비슷해 보이는 이미지 중에서도 다시 돌아보게 만드는 화면만 남기며, 과장된 요소는 의도적으로 덜어냅니다.",
        },
        {
          year: "Compose",
          title: "문장과 이미지를 조율합니다",
          description:
            "이미지와 텍스트가 서로를 과잉 설명하지 않도록 간격을 조절하며, 독자가 해석할 수 있는 여백을 설계합니다.",
        },
      ],
    },
    archivePerspective: {
      title: "축적되는 관점",
      caption: "Archive Direction",
      stats: [
        {
          value: "4",
          label: "핵심 분야",
          description:
            "공간, 패션, 오브제, 디자이너를 하나의 감각 축으로 연결합니다.",
        },
        {
          value: "1",
          label: "편집 기준",
          description:
            "유행보다 지속성을 우선하는 하나의 기준으로 모든 기록을 정리합니다.",
        },
        {
          value: "∞",
          label: "확장 가능성",
          description:
            "개별 장면은 쌓일수록 서로를 참조하며 더 선명한 아카이브 지도를 만듭니다.",
        },
      ],
      summary:
        "BARE LINE의 아카이브는 단발성 소개가 아니라 축적되는 관점의 모음입니다. 각각의 기록은 독립적으로 존재하면서도 시간이 지날수록 하나의 큰 흐름으로 연결됩니다.",
    },
  },
};

export const homePageContent = {
  hero: {
    eyebrow: "VOLUME NO. 04 / ARCHIVE / 2026",
    title: "BARE LINE",
    description: "가공되지 않은 질감과 절제된 구조 사이의 장면을 기록합니다.",
    ctaLabel: "아카이브",
    ctaTo: "/archive",
    image: heroHome,
    imageAlt: "Editorial object",
  },
  featuredSection: {
    title: "패션: 본질의 실루엣",
    caption: "패션 콘텐츠",
    label: "추천 콘텐츠",
    ctaLabel: "컬렉션 보러가기",
    ctaTo: "/archive?category=fashion",
    image: clothHome,
    imageAlt: "Fashion detail",
  },
  spaceSection: {
    title: "공간: 여백의 미학",
    caption: "갤러리 에세이",
    heading: "Space: 공백",
    description:
      "빛과 그림자가 머무는 장면 속에서 공간은 하나의 인상으로 남습니다. 비워낸 구조와 절제된 요소가 만드는 여백, 그 안의 분위기와 감각을 천천히 따라가 보세요.",
    quote: "비워낸 구조는 더 많은 감각을 머물게 합니다.",
    details: [
      { label: "Focus", value: "Light / Silence / Frame" },
      { label: "Selection", value: "Residential Atmosphere" },
      { label: "Index", value: "Space Study Archive" },
    ],
    ctaLabel: "갤러리 탐색",
    ctaTo: "/archive?category=space",
    image: spaceHome,
    imageAlt: "Interior",
  },
  latestSection: {
    title: "최신 아카이브",
    caption: "최신 목록",
    limit: 4,
    columns: ["참조", "제목", "카테고리", "크리에이터 / 스튜디오", "연도"],
  },
};

export const archivePageContent = {
  hero: {
    eyebrow: "VOLUME NO. 04 / INDEX ISSUE / 2026",
    title: "아카이브",
    description:
      "형태와 물성의 관계를 기록하는 아카이브 인덱스입니다. 공간, 패션, 오브제, 에디토리얼을 가로지르며 조용한 구조의 결을 수집합니다.",
  },
  list: {
    itemsPerPage: 4,
    searchPlaceholder: "아카이브 검색",
    searchButtonLabel: "Search",
    emptyMessage: "검색 결과가 없습니다. 다른 키워드로 시도해보세요.",
    previousLabel: "이전",
    nextLabel: "다음",
    featuredFallbackTitle: "주목할 항목",
    featuredFallbackCaption: "에디터 셀렉션",
    categoryCaption: "카테고리",
    columns: ["참조", "제목", "카테고리", "크리에이터 / 스튜디오", "연도"],
  },
};

export const uiContent = {
  responsive: {
    mobileBreakpoint: 768,
  },
  homePage: {
    mobileLatestLimit: 2,
  },
  archivePage: {
    mobileItemsPerPage: 2,
    swipeThreshold: 50,
  },
};

export const footerContent = {
  brand: "BARE LINE",
  description:
    "구조적 미니멀리즘과 재료의 명료함, 그리고 현대적 형태가 지닌 고요한 리듬을 따라가는 디지털 아카이브이자 저널. 본질을 드러내는 디자인과 절제된 미감을 통해, 형태와 공간에 대한 새로운 시선을 제안한다.",
  focusTitle: "말없는 장면의 잔상, 남겨진 순간",
  focusItems: ["빛이 머무는 구조", "표면 아래의 질감", "덜어낸 뒤의 비례"],
  socialLabel: "Social",
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "Reddit", href: "#" },
  ],
  quote:
    "The curated silence is not the absence of noise, but the presence of intent.",
  meta: {
    volume: "Volume No. 04 / 2026",
    copyright: "© 2026 BARE LINE. All rights reserved.",
  },
};

export const contactPageContent = {
  hero: {
    eyebrow: "VOLUME 04 / ARCHIVE / 2026",
    title: "협업 및 문의",
    description:
      "기능적인 구조와 시적인 침묵이 만나는 지점을 함께 탐색할 브랜드, 스튜디오, 개인의 제안을 기다립니다.",
  },
  contact: {
    label: "contact 이메일",
    email: "studio@bareline.design",
  },
  address: {
    label: "스튜디오",
    lines: ["48 Archival Way", "Copenhagen, DK 1202"],
  },
  channels: {
    label: "소셜 채널",
    items: [
      { label: "Instagram", href: "#" },
      { label: "Reddit", href: "#" },
    ],
  },
  heroCard: {
    image: contactHero,
    imageAlt: "Contact studio",
    quote: '"The space between the notes."',
  },
  formSection: {
    title: "우리의 비전과 연결하기",
    fields: {
      name: { label: "이름", placeholder: "성함 또는 소속" },
      inquiry: {
        label: "문의 유형",
        placeholder: "에디토리얼 / 디자인 / 파트너십",
      },
      message: {
        label: "메시지",
        placeholder: "간단한 소개와 문의 내용을 남겨주세요",
      },
    },
    submitLabel: "메시지 전송",
  },
  infoCard: {
    title: "의도 확인",
    description:
      "모든 문의는 개별적인 맥락 속에서 검토됩니다. 우리의 구조적 철학과 결이 맞는 제안에는 48시간 이내로 답변드립니다.",
  },
};
