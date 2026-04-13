export const navItems = [
  { label: '홈', path: '/' },
  { label: '아카이브', path: '/archive' },
  { label: '공간', path: '/space' },
  { label: '소개', path: '/about' },
  { label: '문의', path: '/contact' },
];

export const categoryItems = [
  { id: 'fashion', title: '패션', caption: '구조적인 재단과 절제된 소재의 기록.' },
  { id: 'space', title: '공간', caption: '빛과 재료, 여백이 완성하는 공간의 미학.' },
  { id: 'designers', title: '디자이너', caption: '형태를 설계하는 사람들의 시선과 태도.' },
  { id: 'objects', title: '오브제', caption: '단순한 물성 안에 남는 존재감과 균형.' },
  { id: 'editorial', title: '에디토리얼', caption: '편집과 글쓰기로 정리한 감각의 기록.' },
];

export const archiveCategoryContent = {
  fashion: {
    title: '패션',
    description: '실루엣과 소재, 구조를 중심으로 기록한 패션 아카이브.',
    featured: {
      label: '추천 컬렉션',
      title: '해체된 형태의 겨울 에디토리얼',
      description: '재단과 구조, 텍스처를 통해 패션의 밀도를 기록한 에디토리얼.',
      cta: '자세히 보기',
    },
    listLabel: '저널 엔트리',
    totalLabel: 'Total (142)',
  },
  space: {
    title: '공간',
    description: '빛과 재료, 그리고 여백으로 구성된 공간의 기록.',
    featured: {
      label: '추천 엔트리',
      title: '콘크리트 안의 침묵',
      description: '비워낸 구조와 재료의 밀도로 공간의 분위기를 읽어낸 기록.',
      cta: '엔트리 보기',
    },
    listLabel: '공간 인덱스',
    totalLabel: 'Total (96)',
  },
  designers: {
    title: '디자이너',
    description: '형태와 태도를 만드는 디자이너의 작업 방식을 기록합니다.',
    featured: {
      label: '추천 스튜디오',
      title: '스튜디오 미니멀',
      description: '재료의 본질과 절제된 구조를 탐구하는 디자이너 노트.',
      cta: '읽어보기',
    },
    listLabel: '디자이너 인덱스',
    totalLabel: 'A-Z Archive',
  },
  objects: {
    title: '오브제',
    description: '기능과 형태 사이에서 남는 물성과 비례를 기록합니다.',
    featured: {
      label: '추천 오브제',
      title: '형태의 침묵 시리즈 01',
      description: '오브제가 공간 안에서 만드는 인상을 물성과 구조로 읽어냅니다.',
      cta: '스토리 보기',
    },
    listLabel: '아카이브 리스트',
    totalLabel: 'Total Entries: 124',
  },
  editorial: {
    title: '에디토리얼',
    description: '정제된 시선으로 감각과 구조를 언어화한 글의 기록.',
    featured: {
      label: '추천 아티클',
      title: '공간의 레이어와 보이지 않는 구조',
      description: '작은 차이와 비례, 여백을 통해 구조를 읽어낸 편집 노트.',
      cta: '아티클 읽기',
    },
    listLabel: '아카이브 리스트',
    totalLabel: 'Total 12 Entries',
  },
};

export const featuredCards = [
  {
    label: '추천 콘텐츠',
    intro: '아카이브 021',
    title: '조형적인 코트',
    description: '입체적인 실루엣과 절제된 볼륨으로 구성한 패션 노트.',
  },
  {
    label: '추천 콘텐츠',
    intro: '아카이브 045',
    title: '매트 블랙 스터디',
    description: '시간의 밀도를 머금은 표면과 미니멀한 구조에 대한 기록.',
  },
];

export const archiveEntries = [
  { id: '125', categoryId: 'designers', category: '디자이너', title: '공간을 설계하는 오브제', year: '2024' },
  { id: '124', categoryId: 'space', category: '공간', title: '제주 주택: 유산 풍경의 벽', year: '2024' },
  { id: '123', categoryId: 'objects', category: '오브제', title: '0.5mm 두께의 존재감', year: '2024' },
  { id: '122', categoryId: 'editorial', category: '에디토리얼', title: '지루함의 필요성에 대하여', year: '2023' },
  { id: '121', categoryId: 'fashion', category: '패션', title: '미니멀 가죽의 표정', year: '2023' },
  { id: '120', categoryId: 'space', category: '공간', title: '정원과 거주의 경계', year: '2022' },
];

export const archiveList = [
  {
    ref: '125',
    detailId: '125',
    categoryId: 'designers',
    title: '공간을 설계하는 오브제',
    category: '디자이너',
    creator: '스튜디오 카이',
    year: '2024',
    image: '/assets/archive-thumb.svg',
  },
  {
    ref: '124',
    detailId: '124',
    categoryId: 'space',
    title: '제주 주택: 유산 풍경의 벽',
    category: '공간',
    creator: 'Bare Line Space Desk',
    year: '2024',
    image: '/assets/archive-thumb.svg',
  },
  {
    ref: '123',
    detailId: '123',
    categoryId: 'objects',
    title: '0.5mm 두께의 존재감',
    category: '오브제',
    creator: 'Bare Line Object Desk',
    year: '2024',
    image: '/assets/archive-thumb.svg',
  },
  {
    ref: '122',
    detailId: '122',
    categoryId: 'editorial',
    title: '지루함의 필요성에 대하여',
    category: '에디토리얼',
    creator: 'Bare Line Editorial Team',
    year: '2023',
    image: '/assets/archive-thumb.svg',
  },
  {
    ref: '121',
    detailId: '121',
    categoryId: 'fashion',
    title: '미니멀 가죽의 표정',
    category: '패션',
    creator: 'Bare Line Fashion Desk',
    year: '2023',
    image: '/assets/archive-thumb.svg',
  },
  {
    ref: '120',
    detailId: '120',
    categoryId: 'space',
    title: '정원과 거주의 경계',
    category: '공간',
    creator: 'Bare Line Space Desk',
    year: '2022',
    image: '/assets/archive-thumb.svg',
  },
];

export const aboutSections = [
  {
    label: '우리가 주목하는 것',
    description: '재료의 진정성과 구조가 만드는 조용한 긴장.',
  },
  {
    label: '우리가 덜어내는 것',
    description: '과한 장식, 빠른 유행, 반복되는 클리셰의 표현.',
  },
  {
    label: '남기는 것',
    description: '오래 남는 장면과 물성이 스스로 말하는 기록.',
    accent: true,
  },
];

export const aboutPageContent = {
  intro: {
    eyebrow: 'VOLUME 04 / ARCHIVE / 2026',
    title: 'BARE LINE',
    description:
      'BARE LINE은 구조와 물성, 그리고 절제된 감각이 만들어내는 장면을 기록하는 아카이브 매거진입니다. 빠르게 소비되는 이미지보다 오래 남는 인상과 균형, 그리고 조용한 밀도를 더 중요하게 바라봅니다.',
  },
  manifestoTitle: '매니페스토',
  vision: {
    title: '동시대의 조형 언어',
    caption: '비전',
    paragraphs: [
      '우리는 각 분야를 따로 보지 않습니다. 패션의 재단, 공간의 동선, 오브제의 균형, 편집의 리듬은 모두 같은 구조적 감각 안에서 연결된다고 믿습니다.',
      '그래서 BARE LINE은 무엇을 보여줄지보다 무엇을 남길지를 먼저 질문합니다. 그 선택의 결과로 생기는 조용한 화면이 우리가 기록하고 싶은 동시대의 장면입니다.',
    ],
    cta: '더 읽어보기',
  },
  readMore: {
    principles: {
      title: '기록의 기준',
      caption: 'Core Principles',
      items: [
        {
          label: '01 형태',
          title: '강한 인상보다 오래 남는 비례',
          description:
            '우리는 즉각적인 시각 효과보다 시간이 지나도 다시 떠오르는 비례와 구조를 먼저 바라봅니다.',
        },
        {
          label: '02 재료',
          title: '표면 아래의 온도 읽기',
          description:
            '질감은 단순한 시각 정보가 아니라 재료가 가진 시간성과 밀도를 드러내는 언어라고 생각합니다.',
        },
        {
          label: '03 여백',
          title: '덜어낸 뒤 남는 긴장',
          description:
            '무언가를 더하기보다 덜어냈을 때 비로소 또렷해지는 균형과 침묵의 순간을 중요하게 기록합니다.',
        },
      ],
    },
    process: {
      title: '편집의 흐름',
      caption: 'Editorial Process',
      steps: [
        {
          year: 'Observe',
          title: '장면을 오래 바라봅니다',
          description:
            '첫인상에 머무르지 않고 구조, 동선, 재료의 관계를 반복해서 관찰하며 기록의 출발점을 만듭니다.',
        },
        {
          year: 'Select',
          title: '남길 장면을 선별합니다',
          description:
            '비슷해 보이는 이미지 중에서도 다시 돌아보게 만드는 화면만 남기며, 과장된 요소는 의도적으로 덜어냅니다.',
        },
        {
          year: 'Compose',
          title: '문장과 이미지를 조율합니다',
          description:
            '이미지와 텍스트가 서로를 과잉 설명하지 않도록 간격을 조절하며, 독자가 해석할 수 있는 여백을 설계합니다.',
        },
      ],
    },
    archivePerspective: {
      title: '축적되는 관점',
      caption: 'Archive Direction',
      stats: [
        { value: '4', label: '핵심 분야', description: '공간, 패션, 오브제, 디자이너를 하나의 감각 축으로 연결합니다.' },
        { value: '1', label: '편집 기준', description: '유행보다 지속성을 우선하는 하나의 기준으로 모든 기록을 정리합니다.' },
        { value: '∞', label: '확장 가능성', description: '개별 장면은 쌓일수록 서로를 참조하며 더 선명한 아카이브 지도를 만듭니다.' },
      ],
      summary:
        'BARE LINE의 아카이브는 단발성 소개가 아니라 축적되는 관점의 모음입니다. 각각의 기록은 독립적으로 존재하면서도 시간이 지날수록 하나의 큰 흐름으로 연결됩니다.',
    },
  },
};
