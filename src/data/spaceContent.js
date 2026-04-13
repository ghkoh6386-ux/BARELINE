export const spaceDefaultEntryId = 'void-archive';

export const spaceEntries = [
  {
    id: 'void-archive',
    title: '보이드 아카이브',
    label: '아카이브 023 / 공간',
    description: '비워진 구조가 어떻게 공간의 리듬을 만드는지 추적하는 기록.',
    image: '/assets/archive-card.svg',
  },
  {
    id: 'monochrome-texture',
    title: '모노크롬 텍스처',
    label: '아카이브 018 / 패션',
    description: '질감이 앞서는 표면과 절제된 색의 밀도를 다룬 패션 노트.',
    image: '/assets/archive-card.svg',
  },
  {
    id: 'subtracting-form',
    title: '비워내는 형태',
    label: '아카이브 005 / 오브제',
    description: '덜어낸 선과 면이 오브제의 존재감을 어떻게 바꾸는지 살핀다.',
    image: '/assets/archive-card.svg',
  },
];

export const spaceContentById = {
  'void-archive': {
    header: {
      eyebrow: 'VOLUME 04 / SPACE / ARCHIVE',
      title: '공간의 결',
      description:
        '공간은 단순한 벽과 바닥의 구성이 아니라, 빛이 머무는 방식과 재료가 반응하는 결, 그리고 사람의 동선이 겹치며 만들어지는 하나의 감각입니다.',
      quote: '형태 사이의 간격이 곧 공간의 밀도다.',
    },
    intro: {
      title: '재료와 장면',
      caption: '에디토리얼 노트',
      paragraphs: [
        '공간을 읽기 위해서는 먼저 재료가 만드는 표면의 인상을 살펴야 합니다. 거친 콘크리트와 부드러운 빛은 서로 다른 속도로 장면을 완성합니다.',
        '우리가 주목하는 것은 완성된 이미지보다 시간에 따라 달라지는 감각의 흐름입니다. 같은 공간도 아침과 저녁, 계절과 날씨에 따라 전혀 다른 표정을 드러냅니다.',
      ],
    },
    sidebar: {
      title: '주목한 키워드',
      items: ['빛으로 읽는 재료', '공간의 리듬을 만드는 구조', '촉감 있는 콘크리트'],
      curatorLabel: '큐레이터',
      curator: '미나 킴',
    },
    lead:
      '좋은 공간은 시각적인 충만함보다 비워진 여백 속에서 더 선명해집니다. 그 여백은 비어 있는 상태가 아니라 감각을 위한 자리를 남겨둔 구조에 가깝습니다.',
    figures: [
      { alt: 'Shadow detail', caption: 'Fig. 01 / Linear Intersection', image: '/assets/space-detail.svg', grayscale: true },
      { alt: 'Empty room', caption: 'Fig. 02 / Morning Stillness', image: '/assets/space-detail.svg' },
    ],
    blockquote: {
      text: '공간의 경험은 벽으로 지어지지 않고, 그 사이의 비어 있는 공기로 완성된다.',
      source: '배어라인 아카이브 노트 12',
    },
    sections: [
      {
        title: '01. 재료의 대화',
        body:
          '재료는 형태를 채우는 보조 요소가 아니라 분위기를 직접 설계하는 주체입니다. 빛과 표면이 만나며 생기는 작은 변화들이 결국 공간의 깊이와 온도를 결정합니다.',
      },
      {
        title: '02. 비워낸 구조',
        body:
          '빛이 비어 있는 공간을 정의하는 가장 섬세한 요소가 됩니다. 창의 크기와 위치를 조절하는 일은 단순한 채광 계획이 아니라 장면의 리듬을 설계하는 작업에 가깝습니다.',
      },
    ],
    feature: {
      caption: 'The Sanctuary of Rest',
      location: 'Location: Seoul, South Korea',
      image: '/assets/space-hero.svg',
    },
    gallery: [
      { alt: 'Material detail', image: '/assets/archive-card.svg', grayscale: true },
      { alt: 'Wood detail', image: '/assets/archive-card.svg', grayscale: true },
      { alt: 'Stone detail', image: '/assets/archive-card.svg', grayscale: true },
    ],
    relatedTitle: '관련 아카이브',
  },
  'monochrome-texture': {
    header: {
      eyebrow: 'VOLUME 04 / SPACE / TEXTURE',
      title: '단색의 표면',
      description:
        '모노크롬 텍스처는 색이 아닌 표면의 밀도와 결이 공간을 어떻게 지배하는지에 관한 기록입니다. 절제된 톤은 오히려 재료의 차이를 더 또렷하게 드러냅니다.',
      quote: '색을 줄일수록 표면은 더 크게 말한다.',
    },
    intro: {
      title: '톤과 밀도',
      caption: '텍스처 연구',
      paragraphs: [
        '단색 공간은 비어 보이지만, 실제로는 수많은 재질 차이로 층을 이룹니다. 벽, 바닥, 패브릭, 금속이 같은 계열 안에서 다른 깊이를 만듭니다.',
        '시선은 강한 색 대비 대신 미세한 질감 차이를 따라 움직이고, 그 차이는 공간 전체의 긴장감을 조용히 끌어올립니다.',
      ],
    },
    sidebar: {
      title: '주목한 포인트',
      items: ['채도보다 표면', '빛에 따라 달라지는 회색', '패브릭과 금속의 온도 차'],
      curatorLabel: '큐레이터',
      curator: '이서 윤',
    },
    lead:
      '단색 공간은 덜어낸 결과가 아니라 질감을 더 분명히 드러내기 위한 선택입니다. 동일한 색조 안에서 재료의 밀도는 더욱 선명하게 대비됩니다.',
    figures: [
      { alt: 'Monochrome wall', caption: 'Fig. 01 / Soft Grain', image: '/assets/space-detail.svg' },
      { alt: 'Fabric and metal', caption: 'Fig. 02 / Tone Shift', image: '/assets/space-detail.svg', grayscale: true },
    ],
    blockquote: {
      text: '단색은 침묵이 아니라 더 작은 차이를 들리게 하는 장치다.',
      source: '텍스처 아카이브 메모 04',
    },
    sections: [
      {
        title: '01. 색을 줄인 이유',
        body:
          '강한 색은 즉각적인 인상을 만들지만, 표면 연구에서는 오히려 방해가 되기도 합니다. 단색 구성은 재료의 결, 광택, 흡수율 같은 차이를 더 섬세하게 드러냅니다.',
      },
      {
        title: '02. 회색의 층위',
        body:
          '같은 회색도 콘크리트, 울 패브릭, 도장 금속 위에서는 전혀 다른 표정을 만듭니다. 공간은 그 미세한 차이로 깊이를 얻고 분위기를 완성합니다.',
      },
    ],
    feature: {
      caption: 'Monochrome Chamber',
      location: 'Location: Seoul, South Korea',
      image: '/assets/space-hero.svg',
    },
    gallery: [
      { alt: 'Neutral surface', image: '/assets/archive-card.svg' },
      { alt: 'Fabric grain', image: '/assets/archive-card.svg', grayscale: true },
      { alt: 'Metal edge', image: '/assets/archive-card.svg' },
    ],
    relatedTitle: '관련 아카이브',
  },
  'subtracting-form': {
    header: {
      eyebrow: 'VOLUME 04 / SPACE / OBJECT LOGIC',
      title: '비워내는 형태',
      description:
        '오브제의 사고방식은 공간에도 그대로 이어집니다. 더하는 대신 덜어내며 구조를 선명하게 만들고, 남겨진 선과 면으로 존재감을 구축합니다.',
      quote: '덜어낸 자리에서 구조는 더 또렷해진다.',
    },
    intro: {
      title: '오브제적 공간',
      caption: '형태 연구',
      paragraphs: [
        '공간을 하나의 거대한 오브제로 바라보면 구성은 훨씬 간결해집니다. 불필요한 선을 걷어내고 핵심 구조만 남길 때, 사용자는 더 명확한 리듬을 경험합니다.',
        '비워내는 과정은 단순한 미니멀리즘이 아니라, 무엇이 본질인지 드러내는 편집의 과정이기도 합니다.',
      ],
    },
    sidebar: {
      title: '읽어야 할 구조',
      items: ['선과 면의 절제', '덜어낸 수납과 동선', '오브제처럼 남는 비례'],
      curatorLabel: '큐레이터',
      curator: '정하 민',
    },
    lead:
      '비워낸 공간은 부족해 보이지 않습니다. 오히려 형태를 선명하게 읽게 하고, 남겨진 구조가 더 또렷한 존재감을 가지도록 돕습니다.',
    figures: [
      { alt: 'Line and plane', caption: 'Fig. 01 / Silent Frame', image: '/assets/space-detail.svg', grayscale: true },
      { alt: 'Subtracted volume', caption: 'Fig. 02 / Removed Mass', image: '/assets/space-detail.svg' },
    ],
    blockquote: {
      text: '공간을 비운다는 것은 비례를 남기는 일에 가깝다.',
      source: '오브제 메모 07',
    },
    sections: [
      {
        title: '01. 편집된 구조',
        body:
          '기능은 유지하되 표현은 줄이는 방식으로 공간을 편집하면 구조의 우선순위가 드러납니다. 남겨진 선은 더 정교한 비례 감각을 갖게 됩니다.',
      },
      {
        title: '02. 남겨진 여백',
        body:
          '여백은 남은 공간이 아니라 의도적으로 확보한 구조적 숨입니다. 그 숨이 있을 때 오브제와 가구, 벽면은 서로를 더 또렷하게 드러낼 수 있습니다.',
      },
    ],
    feature: {
      caption: 'Edited Volume',
      location: 'Location: Busan, South Korea',
      image: '/assets/space-hero.svg',
    },
    gallery: [
      { alt: 'Edge study', image: '/assets/archive-card.svg', grayscale: true },
      { alt: 'Plane composition', image: '/assets/archive-card.svg' },
      { alt: 'Void proportion', image: '/assets/archive-card.svg', grayscale: true },
    ],
    relatedTitle: '관련 아카이브',
  },
};
