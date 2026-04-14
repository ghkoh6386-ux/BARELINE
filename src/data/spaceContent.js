import {
  japanDesigner,
  japanMain01,
  japanSubMain01,
  japanSubMain02,
  japanSub01,
  japanSub02,
  japanSub03,
  minimalDesigner,
  minimalMain,
  minimalSubMain01,
  minimalSubMain02,
  minimalSub01,
  minimalSub02,
  minimalSub03,
  redDesigner,
  redMain,
  redSubMain01,
  redSubMain02,
  redSub01,
  redSub02,
  redSub03,
} from '../assets/images';

export const spaceDefaultEntryId = 'japan-courtyard';

const createFigures = (items) => items.map(([alt, caption, image]) => ({ alt, caption, image }));

const createGallery = (items) => items.map(([alt, image]) => ({ alt, image }));

const createSpaceContent = ({
  header,
  intro,
  sidebar,
  lead,
  figures,
  blockquote,
  sections,
  feature,
  gallery,
}) => ({
  header,
  intro,
  sidebar,
  lead,
  figures: createFigures(figures),
  blockquote,
  sections,
  feature,
  gallery: createGallery(gallery),
  relatedTitle: '다른 공간',
});

export const spaceEntries = [
  {
    id: 'japan-courtyard',
    title: '정원과 마루 사이',
    label: 'SPACE STUDY 01 / JAPAN',
    description: '실내와 정원이 한 장면으로 이어지는 일본식 공간의 깊이를 기록한 에세이.',
    image: japanMain01,
  },
  {
    id: 'minimal-light',
    title: '비워둔 빛의 방',
    label: 'SPACE STUDY 02 / MINIMAL',
    description: '흰 벽과 늦은 빛, 낮은 채도의 가구가 만드는 미니멀 인테리어의 긴장감.',
    image: minimalMain,
  },
  {
    id: 'red-rotunda',
    title: '붉은 원형의 공공성',
    label: 'SPACE STUDY 03 / RED',
    description: '곡선과 붉은 톤이 모임의 움직임을 설계하는 원형 공간의 인상을 따라갑니다.',
    image: redMain,
  },
];

export const spaceContentById = {
  'japan-courtyard': createSpaceContent({
    header: {
      eyebrow: 'VOLUME 04 / SPACE / JAPAN COURTYARD',
      title: '정원과 맞닿은 침묵',
      description:
        '기둥과 미닫이문, 다다미와 정원이 서로를 천천히 비추는 장면 속에서 이 공간은 내부와 외부를 나누기보다 한 호흡으로 연결합니다.',
      quote: '정원을 들이는 방식이 곧 실내의 깊이를 만든다.',
      image: japanDesigner,
    },
    intro: {
      title: '경계 대신 프레임',
      caption: '일본식 공간 노트',
      paragraphs: [
        '이 장면에서 가장 중요한 것은 벽이 아니라 비어 있는 틀입니다. 기둥과 창호가 만든 리듬은 풍경을 잘라내지 않고, 정원을 실내 쪽으로 천천히 끌어들입니다.',
        '다다미의 낮은 수평선과 짙은 목재 프레임은 시선을 아래로 안정시키고, 바깥의 녹음은 그 위로 계절의 시간을 겹쳐 놓습니다.',
      ],
    },
    sidebar: {
      title: '주목한 키워드',
      items: ['실내와 정원의 연속성', '목재 프레임의 리듬', '낮은 시선과 여백의 균형'],
      curatorLabel: 'creater',
      curator: '서온',
    },
    lead:
      '좋은 일본식 공간은 무언가를 채워 넣기보다 풍경이 머물 자리를 남겨둡니다. 비워진 실내는 오히려 바깥의 녹음과 빛, 재료의 결을 더 또렷하게 느끼게 합니다.',
    figures: [
      ['Garden frame', 'Fig. 01 / Garden Through Screens', japanSubMain01],
      ['Tatami room', 'Fig. 02 / Tatami and Moss', japanSubMain02],
    ],
    blockquote: {
      text: '실내를 완성하는 것은 벽이 아니라 그 너머의 풍경이다.',
      source: '일본 공간 메모 03',
    },
    sections: [
      {
        title: '01. 문턱이 만드는 깊이',
        body:
          '문턱과 프레임은 실내를 닫아두는 장치가 아니라 장면을 천천히 열어주는 장치로 작동합니다. 시선은 방에서 정원으로 미끄러지고, 그 이동 자체가 공간 경험의 일부가 됩니다.',
      },
      {
        title: '02. 머무는 빛과 결',
        body:
          '짙은 목재와 다다미, 이끼와 나무의 녹색은 서로 다른 온도를 갖지만 한 화면 안에서 조용히 균형을 이룹니다. 이 공간의 밀도는 장식이 아니라 재료와 빛의 간격에서 생깁니다.',
      },
    ],
    feature: {
      caption: 'Open Room, Framed Garden',
      location: 'Location: Kyoto, Japan',
      image: japanMain01,
    },
    gallery: [
      ['Garden pavilion', japanSub01],
      ['Shoji detail', japanSub02],
      ['Japan designer portrait', japanSub03],
    ],
  }),
  'minimal-light': createSpaceContent({
    header: {
      eyebrow: 'VOLUME 04 / SPACE / MINIMAL LIGHT',
      title: '비워둔 빛의 밀도',
      description:
        '밝은 벽과 낮은 채도의 가구, 드물게 놓인 오브제는 이 공간을 허전하게 만들지 않고 오히려 빛이 움직이는 속도를 또렷하게 보여줍니다.',
      quote: '비워둔 면이 많을수록 빛은 더 선명하게 보인다.',
      image: minimalDesigner,
    },
    intro: {
      title: '빛을 위한 최소한의 구성',
      caption: '미니멀 인테리어 노트',
      paragraphs: [
        '이 공간은 가구를 많이 두지 않지만 결코 공허하지 않습니다. 사물의 수를 줄인 대신 창으로 들어오는 빛과 가구의 그림자가 장면의 대부분을 구성합니다.',
        '하얀 벽, 옅은 바닥, 따뜻한 목재 테이블은 거의 색이 없는 조합처럼 보이지만, 실제로는 밝기와 질감의 미세한 차이로 공간의 층을 만듭니다.',
      ],
    },
    sidebar: {
      title: '주목한 포인트',
      items: ['낮은 채도의 대비', '빛이 만드는 그림자', '가구 배치의 절제'],
      curatorLabel: 'creater',
      curator: '윤이서',
    },
    lead:
      '미니멀한 방은 무언가가 부족한 공간이 아니라, 남겨진 요소 각각이 더 크게 읽히는 공간입니다. 빛은 벽에 사각형으로 머물고, 가구는 그 빛을 받는 면으로 존재감을 갖습니다.',
    figures: [
      ['Projected images', 'Fig. 01 / Quiet Projection', minimalSubMain01],
      ['White room', 'Fig. 02 / Soft Shadow Plane', minimalSubMain02],
    ],
    blockquote: {
      text: '최소한의 배치는 빛이 머무를 자리를 넓힌다.',
      source: '미니멀 스터디 02',
    },
    sections: [
      {
        title: '01. 가구보다 장면',
        body:
          '사물의 수를 줄이면 공간은 비어 보이는 대신 더 정확하게 읽힙니다. 책상, 의자, 조명처럼 꼭 필요한 요소만 남기면 이동 동선과 시선의 흐름도 함께 정돈됩니다.',
      },
      {
        title: '02. 밝은 면의 긴장',
        body:
          '하얀 벽면은 배경으로 물러나는 대신, 그림자와 반사를 가장 또렷하게 보여주는 스크린이 됩니다. 미니멀한 인테리어의 매력은 바로 그 미세한 변화가 전체 분위기를 지배한다는 점에 있습니다.',
      },
    ],
    feature: {
      caption: 'Table, Light, Silence',
      location: 'Location: Berlin, Germany',
      image: minimalMain,
    },
    gallery: [
      ['Studio overview', minimalSub01],
      ['White projection wall', minimalSub02],
      ['Minimal designer portrait', minimalSub03],
    ],
  }),
  'red-rotunda': createSpaceContent({
    header: {
      eyebrow: 'VOLUME 04 / SPACE / RED ROTUNDA',
      title: '붉은 곡선의 집합',
      description:
        '둥근 천장과 원형 좌석, 붉은 톤의 바닥과 벽은 이 공간을 하나의 거대한 오브제이자 사람을 모으는 구조로 만듭니다.',
      quote: '곡선은 시선을 모으고, 색은 그 머무름에 온도를 준다.',
      image: redDesigner,
    },
    intro: {
      title: '원형으로 설계된 공공성',
      caption: '커뮤니티 공간 노트',
      paragraphs: [
        '이 공간은 벽으로 나뉜 방들의 집합이 아니라, 하나의 커다란 원 안에서 사람들이 서로를 인식하게 만드는 집합적 장면에 가깝습니다.',
        '붉은 카펫과 라운드 벤치, 곡선 계단은 장식처럼 보이지만 사실은 모두 시선과 움직임을 가운데로 모으기 위한 장치로 작동합니다.',
      ],
    },
    sidebar: {
      title: '읽어야 할 구조',
      items: ['원형 동선의 흐름', '붉은 톤의 몰입감', '곡선 계단과 좌석의 연결'],
      curatorLabel: 'creater',
      curator: '민정하',
    },
    lead:
      '이 붉은 공간은 강한 색을 사용하지만 무겁지 않습니다. 곡선과 반복되는 좌석, 중앙의 빈 원형 무대가 함께 작동하면서 색은 장식이 아니라 집합의 리듬이 됩니다.',
    figures: [
      ['Mirrored red hall', 'Fig. 01 / Reflection Corridor', redSubMain01],
      ['Curved stair', 'Fig. 02 / Wrapped Descent', redSubMain02],
    ],
    blockquote: {
      text: '사람을 모으는 공간은 중심보다 흐름을 먼저 설계한다.',
      source: '공공 공간 스터디 05',
    },
    sections: [
      {
        title: '01. 원형의 시선',
        body:
          '가장 큰 특징은 어느 위치에 서 있어도 시선이 자연스럽게 중앙으로 회귀한다는 점입니다. 둥근 천장과 계단, 벤치의 곡선이 공간 전체를 하나의 구조로 묶어줍니다.',
      },
      {
        title: '02. 색의 온도와 움직임',
        body:
          '붉은 톤은 단지 강한 인상을 위한 선택이 아니라, 체류와 집중의 온도를 높이는 장치입니다. 따뜻한 색과 낮은 좌석 구조가 만나면서 공간은 관람보다 참여에 가까운 분위기를 만듭니다.',
      },
    ],
    feature: {
      caption: 'Central Void, Circular Seating',
      location: 'Location: Copenhagen, Denmark',
      image: redMain,
    },
    gallery: [
      ['Red landing', redSub01],
      ['Soft circular chamber', redSub03],
      ['Red designer portrait', redSub02],
    ],
  }),
};
