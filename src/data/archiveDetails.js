import {
  clothHome,
  designer01,
  space01,
  objet01,
  editorier01,
  space02,
} from '../assets/images';
export const archiveDetailsMap = {
  '125': {
    eyebrow: 'DESIGNER / ARCHIVE 126',
    subtitle: '긴장 위에 놓인 선의 감각',
    description: '정제된 공간 속에서 사물과 신체, 그리고 선이 만들어내는 미묘한 긴장을 기록한 아카이브입니다. 단순한 오브제가 어떻게 감각적인 장면으로 확장되는지를 탐구합니다.',
    images: {
      hero: designer01,
      related: designer01,
    },
    issue: '2026 EDITION',
    issn: 'ISSN 2951-4428',
    keywords: ['#OBJECT', '#LINE', '#TENSION'],
    material: 'WIRE, MATTE BLACK, SKIN TONE',
    curator: 'Bare Line Designer Desk',
    sections: [{
        heading: '01. 선으로 만들어진 긴장',
        body: [
          '이 장면에서 가장 단순한 요소는 선입니다. 그러나 그 선은 단순한 연결을 넘어, 공간과 신체 사이에 긴장을 만들어냅니다.',
          '가볍게 놓인 오브제조차도 그 선에 의해 새로운 의미를 가지며, 정적인 장면 안에 보이지 않는 움직임을 형성합니다.',
        ],
      },
      {
        heading: '02. 신체와 오브제의 거리',
        body: [
          '손의 움직임과 오브제 사이의 미세한 간격은 단순한 사용을 넘어 하나의 연출로 읽힙니다.',
          '이 거리는 기능적 관계가 아닌, 감각적인 관계로 재해석되며 오브제의 존재를 더욱 강조합니다.',
        ],
      },
      {
        heading: '03. 절제된 공간의 밀도',
        body: [
          '비워진 배경과 제한된 색감은 오히려 오브제와 신체의 디테일을 더 선명하게 드러냅니다.',
          '이처럼 절제된 공간은 요소 하나하나의 밀도를 높이며, 시선을 오래 머물게 만듭니다.',
        ],
      },
    ],
    quote: '가장 얇은 선 하나가, 공간 전체의 긴장을 만든다.',
    notes: [{
        label: 'Form',
        title: '유기적 제스처',
        text: '신체의 움직임이 형태의 일부로 작용하는 구성.'
      },
      {
        label: 'Material',
        title: '대조된 질감',
        text: '매트한 오브제와 피부의 대비가 만드는 시각적 긴장.'
      },
      {
        label: 'Structure',
        title: '느슨한 연결',
        text: '완전히 고정되지 않은 상태에서 형성되는 관계.'
      },
      {
        label: 'Void',
        title: '정제된 여백',
        text: '불필요한 요소를 제거해 집중도를 높이는 공간.'
      },
    ],
    relatedIds: ['123', '124', '122'],
  },
  '124': {
    eyebrow: 'SPACE / ARCHIVE 052',
    subtitle: '고요가 머무는 구조',
    description: '자연과 건축이 경계를 나누지 않고 이어지는 장면을 따라, 공간이 어떻게 침묵 속에서 완성되는지를 기록한 아카이브입니다.',
    images: {
      hero: space01,
      related: space01,
    },
    issue: '2026 EDITION',
    issn: 'ISSN 2951-4428',
    keywords: ['#NATURE', '#SILENCE', '#ARCHITECTURE'],
    material: 'WOOD, WATER, STONE',
    curator: 'Bare Line Editorial Team',
    sections: [{
        heading: '01. 자연과 이어진 구조',
        body: [
          '이 공간은 자연 위에 놓인 것이 아니라, 자연의 흐름 안에 스며든 구조에 가깝습니다.',
          '건축은 경계를 만들기보다 풍경을 받아들이며, 내부와 외부의 구분을 흐립니다.',
        ],
      },
      {
        heading: '02. 재료의 온도',
        body: [
          '목재의 따뜻한 질감과 물, 돌의 차분한 표면은 서로 다른 온도를 유지하면서도 하나의 장면을 만듭니다.',
          '과한 가공 없이 드러난 재료는 시간의 흐름까지 함께 품어냅니다.',
        ],
      },
      {
        heading: '03. 머무는 풍경',
        body: [
          '잔잔한 수면에 비친 구조는 공간을 한 번 더 확장시키며, 시선을 천천히 머물게 만듭니다.',
          '이곳에서의 경험은 이동보다 정지에 가까우며, 그 안에서 감각은 더욱 또렷해집니다.',
        ],
      },
    ],
    quote: '좋은 공간은 풍경을 가두지 않고, 그 안에 조용히 머문다.',
    notes: [{
        label: 'Form',
        title: '수평의 균형',
        text: '낮게 펼쳐진 구조가 자연과 긴장을 이루지 않는 구성.'
      },
      {
        label: 'Material',
        title: '자연의 물성',
        text: '가공을 최소화한 목재와 돌의 질감.'
      },
      {
        label: 'Structure',
        title: '열린 경계',
        text: '내부와 외부를 구분하지 않는 유연한 구조.'
      },
      {
        label: 'Void',
        title: '머무는 여백',
        text: '풍경과 함께 완성되는 비워진 공간.'
      },
    ],
    relatedIds: ['123', '122', '120'],
  },
  '123': {
    eyebrow: 'OBJECT / ARCHIVE 123',
    subtitle: '곡선 위에 머무는 균형',
    description: '유기적인 곡선과 얇게 겹쳐진 표면을 통해, 오브제가 어떻게 가벼운 긴장과 부유감을 만들어내는지 탐구한 기록입니다.',
    images: {
      hero: objet01,
      related: objet01,
    },
    issue: '2026 EDITION',
    issn: 'ISSN 2951-4428',
    keywords: ['#OBJECT', '#CURVE', '#BALANCE'],
    material: 'ALUMINUM, TRANSLUCENT FINISH, MATTE SURFACE',
    curator: 'Bare Line Object Desk',
    sections: [{
        heading: '01. 흐르는 형태',
        body: [
          '이 오브제는 직선보다 곡선의 흐름으로 형태를 정의합니다.',
          '끊기지 않고 이어지는 곡면은 구조를 부드럽게 만들면서도, 시각적인 긴장을 유지합니다.',
        ],
      },
      {
        heading: '02. 겹쳐진 표면의 깊이',
        body: [
          '얇게 겹쳐진 표면은 빛을 은은하게 통과시키며, 단순한 구조에 깊이를 더합니다.',
          '이 레이어는 무게감을 줄이면서도 존재감을 흐리지 않는 균형을 만듭니다.',
        ],
      },
      {
        heading: '03. 떠 있는 구조',
        body: [
          '한쪽으로 기울어진 형태는 완전히 고정되지 않은 듯한 인상을 남깁니다.',
          '이 불완전한 균형은 오브제를 정적인 물건이 아닌, 하나의 상태로 느껴지게 합니다.',
        ],
      },
    ],
    quote: '형태는 서 있지 않고, 가볍게 머무른다.',
    notes: [{
        label: 'Form',
        title: '유기적 곡면',
        text: '끊김 없이 이어지는 곡선으로 완성된 실루엣.',
      },
      {
        label: 'Material',
        title: '반투명 질감',
        text: '빛을 부드럽게 통과시키는 얇은 표면.',
      },
      {
        label: 'Structure',
        title: '기울어진 균형',
        text: '완전히 고정되지 않은 상태에서 형성된 구조.',
      },
      {
        label: 'Void',
        title: '부유하는 여백',
        text: '무게보다 가벼움을 강조하는 공간감.',
      },
    ],
    relatedIds: ['124', '121', '120'],
  },
  '122': {
    eyebrow: 'EDITORIAL / ARCHIVE 122',
    subtitle: '빛으로 나뉜 장면',
    description: '절제된 공간과 단일한 빛의 흐름 속에서, 인물과 구조가 만들어내는 조용한 긴장을 기록한 에디토리얼입니다.',
    images: {
      hero: editorier01,
      related: editorier01,
    },
    issue: '2025 EDITION',
    issn: 'ISSN 2951-4428',
    keywords: ['#EDITORIAL', '#LIGHT', '#COMPOSITION'],
    material: 'LIGHT, FABRIC, WALL',
    curator: 'Bare Line Editorial Team',
    sections: [{
        heading: '01. 빛이 만드는 구조',
        body: [
          '이 장면에서 공간을 나누는 것은 벽이 아니라 빛입니다.',
          '사선으로 떨어지는 빛은 하나의 프레임을 만들고, 그 안에 인물을 고정합니다.',
        ],
      },
      {
        heading: '02. 멈춰 있는 시선',
        body: [
          '인물은 움직이지 않지만, 시선은 공간 바깥으로 이어집니다.',
          '이 고정된 자세는 오히려 장면 전체에 긴장을 남깁니다.',
        ],
      },
      {
        heading: '03. 정적인 대비',
        body: [
          '짙은 바닥과 밝은 벽, 그리고 그 사이에 놓인 인물은 명확한 대비를 이룹니다.',
          '이 단순한 대비는 장면을 설명 없이도 읽히게 만듭니다.',
        ],
      },
    ],
    quote: '빛은 형태를 만들고, 시선은 그 안에 머문다.',
    notes: [{
        label: 'Form',
        title: '프레임된 장면',
        text: '빛과 벽이 만들어낸 하나의 구도.',
      },
      {
        label: 'Material',
        title: '빛의 질감',
        text: '표면 위에 드러나는 명암의 층.',
      },
      {
        label: 'Structure',
        title: '분리된 공간',
        text: '하나의 장면 안에서 나뉘는 영역.',
      },
      {
        label: 'Void',
        title: '정지된 여백',
        text: '움직임 대신 긴장을 담는 공간.',
      },
    ],
    relatedIds: ['124', '121', '123'],
  },
  '121': {
    eyebrow: 'FASHION / ARCHIVE 121',
    subtitle: '자연 위에 선 형상',
    description: '자연 속에 놓인 인물과 의복이 하나의 상징적인 장면을 이루며, 패션이 형태를 넘어 분위기를 구성하는 방식을 기록한 에디토리얼입니다.',
    images: {
      hero: clothHome,
      related: clothHome,
    },
    issue: '2024 EDITION',
    issn: 'ISSN 2951-4428',
    keywords: ['#FASHION', '#FORM', '#SYMBOL'],
    material: 'WOOL, METAL, FABRIC',
    curator: 'Bare Line Fashion Desk',
    sections: [{
        heading: '01. 몸을 감싸는 형상',
        body: [
          '이 의복은 장식보다 형태 자체로 인상을 만듭니다.',
          '길게 떨어지는 실루엣과 중심을 가르는 구조는 인물을 하나의 조형으로 보이게 합니다.',
        ],
      },
      {
        heading: '02. 상징으로서의 디테일',
        body: [
          '중앙에 배치된 금속 장식은 단순한 장식이 아니라 시선을 고정시키는 축으로 작용합니다.',
          '이 요소는 의복 전체에 상징적인 긴장을 부여합니다.',
        ],
      },
      {
        heading: '03. 장면으로서의 패션',
        body: [
          '자연 속에 서 있는 인물은 배경과 분리되지 않고 하나의 장면으로 읽힙니다.',
          '이때 패션은 착용되는 것이 아니라, 공간과 함께 구성되는 요소가 됩니다.',
        ],
      },
    ],
    quote: '패션은 몸을 감싸는 것이 아니라, 하나의 장면을 만든다.',
    notes: [{
        label: 'Form',
        title: '수직 실루엣',
        text: '길게 떨어지는 형태로 완성된 조형적 인상.',
      },
      {
        label: 'Material',
        title: '대조된 질감',
        text: '부드러운 원단과 금속 장식의 대비.',
      },
      {
        label: 'Structure',
        title: '중심 축',
        text: '시선을 모으는 중앙 구조.',
      },
      {
        label: 'Void',
        title: '자연의 여백',
        text: '배경과 함께 완성되는 공간감.',
      },
    ],
    relatedIds: ['123', '122', '120'],
  },
  '120': {
    eyebrow: 'SPACE / ARCHIVE 120',
    subtitle: '곡선으로 열린 구조',
    description: '유리와 곡선 구조를 통해 내부와 외부가 자연스럽게 이어지는 장면을 기록한 아카이브입니다. 빛과 풍경이 공간 안으로 스며드는 방식을 탐구합니다.',
    images: {
      hero: space02,
      related: space02,
    },
    issue: '2026 EDITION',
    issn: 'ISSN 2951-4428',
    keywords: ['#GLASS', '#CURVE', '#LIGHT'],
    material: 'GLASS, STEEL, CONCRETE',
    curator: 'Bare Line Editorial Team',
    sections: [{
        heading: '01. 곡선이 만드는 흐름',
        body: [
          '직선 대신 곡선으로 이루어진 구조는 공간의 흐름을 부드럽게 연결합니다.',
          '아치 형태의 프레임은 시선을 자연스럽게 외부 풍경으로 이끕니다.',
        ],
      },
      {
        heading: '02. 빛이 채우는 내부',
        body: [
          '넓은 유리 면을 통해 들어오는 빛은 시간에 따라 공간의 표정을 바꿉니다.',
          '그림자와 반사는 구조를 더욱 입체적으로 드러냅니다.',
        ],
      },
      {
        heading: '03. 풍경과의 연결',
        body: [
          '이 공간은 외부를 차단하기보다 받아들이는 방식으로 완성됩니다.',
          '자연은 배경이 아니라 공간의 일부로 작동합니다.',
        ],
      },
    ],
    quote: '좋은 구조는 공간을 닫지 않고, 풍경으로 이어진다.',
    notes: [{
        label: 'Form',
        title: '아치형 구조',
        text: '곡선 프레임이 만드는 유연한 형태.',
      },
      {
        label: 'Material',
        title: '투명한 표면',
        text: '빛과 풍경을 그대로 받아들이는 유리.',
      },
      {
        label: 'Structure',
        title: '열린 연결',
        text: '내부와 외부를 분리하지 않는 구조.',
      },
      {
        label: 'Void',
        title: '확장된 여백',
        text: '풍경까지 포함하는 공간감.',
      },
    ],
    relatedIds: ['124', '121', '122'],
  },
};