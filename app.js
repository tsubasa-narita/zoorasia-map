/* ============================================
   ZOORASIA INTERACTIVE MAP v2 - Mobile App
   ============================================ */

// ==========================================
// DATA: POIs (Points of Interest)
// Coordinates are in % relative to the map image
// ==========================================
const POIS = [
  // === ZONE: アジアの熱帯林 ===
  { id: 'orangutan', type: 'animal', name: 'ボルネオオランウータン', nameEn: 'Bornean Orangutan', emoji: '🦧', zone: 'アジアの熱帯林', zoneColor: '#2d8a4e', x: 10.02, y: 77.00, desc: '熱帯雨林に棲む大型の類人猿。木の上で生活し、果実や葉を食べます。知能が高く道具を使うことも。', habitat: '熱帯雨林', diet: '果実・葉', status: '絶滅危惧種' },
  { id: 'tiger', type: 'animal', name: 'スマトラトラ', nameEn: 'Sumatran Tiger', emoji: '🐅', zone: 'アジアの熱帯林', zoneColor: '#2d8a4e', x: 8.07, y: 65.03, desc: 'トラの亜種の中で最も小型。スマトラ島にのみ生息し、野生では400頭ほど。', habitat: '熱帯雨林', diet: '肉食', status: '絶滅寸前種' },
  { id: 'clouded-leopard', type: 'animal', name: 'ウンピョウ', nameEn: 'Clouded Leopard', emoji: '🐆', zone: 'アジアの熱帯林', zoneColor: '#2d8a4e', x: 6.99, y: 71.38, desc: '雲のような模様が特徴の中型ネコ科動物。長い尾でバランスを取り樹上で生活します。', habitat: '森林', diet: '肉食', status: '危急種' },
  { id: 'indian-lion', type: 'animal', name: 'インドライオン', nameEn: 'Asiatic Lion', emoji: '🦁', zone: 'アジアの熱帯林', zoneColor: '#2d8a4e', x: 5.77, y: 87.38, desc: 'インド・グジャラート州のギル森林にのみ野生個体が存在する、アフリカライオンの近縁種です。', habitat: '森林・草原', diet: '肉食', status: '絶滅危惧種' },
  { id: 'tapir', type: 'animal', name: 'マレーバク', nameEn: 'Malayan Tapir', emoji: '🦏', zone: 'アジアの熱帯林', zoneColor: '#2d8a4e', x: 13.48, y: 72.39, desc: '白と黒のツートンカラーが特徴。夜行性で果実や水草を食べます。', habitat: '熱帯雨林', diet: '草食', status: '絶滅危惧種' },

  // === ZONE: 亜寒帯の森 ===
  { id: 'polar-bear', type: 'animal', name: 'ホッキョクグマ', nameEn: 'Polar Bear', emoji: '🐻‍❄️', zone: '亜寒帯の森', zoneColor: '#5b8dbf', x: 9.59, y: 25.23, desc: '北極圏に生息する最大の陸上肉食動物。厚い脂肪と白い毛皮で極寒に適応しています。', habitat: '北極圏', diet: '肉食', status: '危急種' },
  { id: 'red-panda', type: 'animal', name: 'レッサーパンダ', nameEn: 'Red Panda', emoji: '🐼', zone: '亜寒帯の森', zoneColor: '#5b8dbf', x: 7.07, y: 43.98, desc: '赤褐色の毛並みとふさふさの尾が特徴。竹やタケノコを主食としています。', habitat: '温帯林', diet: '竹・果実', status: '絶滅危惧種' },
  { id: 'penguin', type: 'animal', name: 'フンボルトペンギン', nameEn: 'Humboldt Penguin', emoji: '🐧', zone: '亜寒帯の森', zoneColor: '#5b8dbf', x: 15.00, y: 10.38, desc: '南米沿岸に生息するペンギン。温暖な地域にも適応し、魚を主食とします。', habitat: '沿岸地域', diet: '魚類', status: '危急種' },
  { id: 'amur-leopard', type: 'animal', name: 'アムールヒョウ', nameEn: 'Amur Leopard', emoji: '🐆', zone: '亜寒帯の森', zoneColor: '#5b8dbf', x: 4.83, y: 31.15, desc: '世界で最も希少な大型ネコ。極東ロシアの森林に100頭ほどしか生息していません。', habitat: '温帯林', diet: '肉食', status: '絶滅寸前種' },
  { id: 'golden-takin', type: 'animal', name: 'ゴールデンターキン', nameEn: 'Golden Takin', emoji: '🐃', zone: '亜寒帯の森', zoneColor: '#5b8dbf', x: 3.68, y: 49.89, desc: '金色の毛並みを持つ大型の偶蹄類。中国の山岳地帯に生息しています。', habitat: '山岳地帯', diet: '草食', status: '危急種' },

  // === ZONE: オセアニアの草原 ===
  { id: 'kangaroo', type: 'animal', name: 'アカカンガルー', nameEn: 'Red Kangaroo', emoji: '🦘', zone: 'オセアニアの草原', zoneColor: '#c8a94e', x: 15.00, y: 44.56, desc: '世界最大の有袋類。時速60kmで跳躍でき、オーストラリアの草原に生息。', habitat: '草原・砂漠', diet: '草食', status: '低危険種' },
  { id: 'emu', type: 'animal', name: 'エミュー', nameEn: 'Emu', emoji: '🐦', zone: 'オセアニアの草原', zoneColor: '#c8a94e', x: 19.61, y: 50.47, desc: 'ダチョウに次ぐ世界2番目に大きな鳥。飛べないが時速48kmで走れます。', habitat: '草原・森林', diet: '雑食', status: '低危険種' },

  // === ZONE: 中央アジアの高地 ===
  { id: 'przewalski', type: 'animal', name: 'モウコノウマ', nameEn: "Przewalski's Horse", emoji: '🐴', zone: '中央アジアの高地', zoneColor: '#a67c52', x: 25.38, y: 45.28, desc: '世界で唯一の野生馬。一度は野生絶滅しましたが、繁殖プログラムにより復帰。', habitat: '草原・ステップ', diet: '草食', status: '絶滅危惧種' },
  { id: 'tibetan-macaque', type: 'animal', name: 'チベットモンキー', nameEn: 'Tibetan Macaque', emoji: '🐒', zone: '中央アジアの高地', zoneColor: '#a67c52', x: 23.00, y: 50.90, desc: '最も大型のマカク属。中国の山岳地帯の森林に群れで生活。', habitat: '山岳森林', diet: '雑食', status: '準絶滅危惧種' },
  { id: 'dhole', type: 'animal', name: 'ドール', nameEn: 'Dhole', emoji: '🐕', zone: '中央アジアの高地', zoneColor: '#a67c52', x: 27.47, y: 52.49, desc: 'アジアの野生イヌ。群れで協力して獲物を狩ります。', habitat: '森林・草原', diet: '肉食', status: '絶滅危惧種' },

  // === ZONE: 日本の山里 ===
  { id: 'macaque', type: 'animal', name: 'ニホンザル', nameEn: 'Japanese Macaque', emoji: '🐒', zone: '日本の山里', zoneColor: '#6b9e3c', x: 24.30, y: 38.21, desc: '世界で最も北に棲むサル。温泉に入ることでも知られています。', habitat: '温帯林', diet: '雑食', status: '低危険種' },
  { id: 'bear', type: 'animal', name: 'ツキノワグマ', nameEn: 'Asian Black Bear', emoji: '🐻', zone: '日本の山里', zoneColor: '#6b9e3c', x: 29.78, y: 30.71, desc: '胸の三日月模様が特徴。日本の山地に広く分布しています。', habitat: '山地の森林', diet: '雑食', status: '危急種' },
  { id: 'serow', type: 'animal', name: 'ニホンカモシカ', nameEn: 'Japanese Serow', emoji: '🐐', zone: '日本の山里', zoneColor: '#6b9e3c', x: 41.60, y: 21.77, desc: '日本固有の特別天然記念物。崖のような急斜面も器用に移動します。', habitat: '山地の森林', diet: '草食', status: '低危険種' },
  { id: 'tsushima-cat', type: 'animal', name: 'ツシマヤマネコ', nameEn: 'Tsushima Leopard Cat', emoji: '🐱', zone: '日本の山里', zoneColor: '#6b9e3c', x: 30.21, y: 23.94, desc: '対馬にのみ生息する野生のネコ。推定個体数は約100頭。', habitat: '森林・山地', diet: '肉食', status: '絶滅寸前種' },

  // === ZONE: アマゾンの密林 ===
  { id: 'capybara', type: 'animal', name: 'カピバラ', nameEn: 'Capybara', emoji: '🐹', zone: 'アマゾンの密林', zoneColor: '#2e7d32', x: 27.11, y: 47.01, desc: '世界最大の齧歯類。体重60kgにもなり、水辺に群れで暮らします。', habitat: '水辺・草原', diet: '草食', status: '低危険種' },
  { id: 'anteater', type: 'animal', name: 'オオアリクイ', nameEn: 'Giant Anteater', emoji: '🐾', zone: 'アマゾンの密林', zoneColor: '#2e7d32', x: 31.07, y: 46.58, desc: '細長い口と舌でアリやシロアリを1日に3万匹も食べます。', habitat: '草原・森林', diet: 'アリ・シロアリ', status: '危急種' },
  { id: 'bush-dog', type: 'animal', name: 'ヤブイヌ', nameEn: 'Bush Dog', emoji: '🐕', zone: 'アマゾンの密林', zoneColor: '#2e7d32', x: 34.10, y: 34.32, desc: '南米に生息する珍しい犬科動物。短い脚と尾が特徴で、泳ぎが得意。', habitat: '熱帯林', diet: '肉食', status: '準絶滅危惧種' },
  { id: 'spectacled-bear', type: 'animal', name: 'メガネグマ', nameEn: 'Spectacled Bear', emoji: '🐻', zone: 'アマゾンの密林', zoneColor: '#2e7d32', x: 36.12, y: 27.11, desc: '南米唯一のクマ。目の周りの模様がメガネのように見えます。', habitat: '山岳雲霧林', diet: '雑食', status: '危急種' },

  // === ZONE: アフリカの熱帯雨林 ===
  { id: 'okapi', type: 'animal', name: 'オカピ', nameEn: 'Okapi', emoji: '🦒', zone: 'アフリカの熱帯雨林', zoneColor: '#1b5e20', x: 58.83, y: 24.37, desc: 'キリンの仲間ですが首は短く、脚に白い縞模様があります。「森の貴婦人」とも呼ばれるズーラシアのシンボル。', habitat: '熱帯雨林', diet: '草食', status: '絶滅危惧種' },
  { id: 'chimpanzee', type: 'animal', name: 'チンパンジー', nameEn: 'Chimpanzee', emoji: '🦍', zone: 'アフリカの熱帯雨林', zoneColor: '#1b5e20', x: 69.21, y: 34.32, desc: 'ヒトに最も近い動物の一つ。道具を使い、複雑な社会を形成します。', habitat: '熱帯雨林', diet: '雑食', status: '絶滅危惧種' },

  // === ZONE: アフリカのサバンナ ===
  { id: 'giraffe', type: 'animal', name: 'キリン', nameEn: 'Giraffe', emoji: '🦒', zone: 'アフリカのサバンナ', zoneColor: '#e8a735', x: 91.42, y: 14.28, desc: '陸上で最も背が高い動物。長い首で高い木の葉を食べます。舌は約45cm。', habitat: 'サバンナ', diet: '草食', status: '危急種' },
  { id: 'cheetah', type: 'animal', name: 'チーター', nameEn: 'Cheetah', emoji: '🐆', zone: 'アフリカのサバンナ', zoneColor: '#e8a735', x: 81.90, y: 15.57, desc: '陸上最速の動物。時速110kmで走れます。涙の跡のような黒い模様が特徴。', habitat: 'サバンナ', diet: '肉食', status: '危急種' },
  { id: 'lion', type: 'animal', name: 'ライオン', nameEn: 'Lion', emoji: '🦁', zone: 'アフリカのサバンナ', zoneColor: '#e8a735', x: 86.37, y: 10.81, desc: '「百獣の王」。群れ（プライド）で生活する唯一のネコ科動物です。', habitat: 'サバンナ', diet: '肉食', status: '危急種' },
  { id: 'zebra', type: 'animal', name: 'グラントシマウマ', nameEn: "Grant's Zebra", emoji: '🦓', zone: 'アフリカのサバンナ', zoneColor: '#e8a735', x: 88.46, y: 24.51, desc: '白と黒の縞模様は個体ごとに異なり、仲間を見分けるのに役立ちます。', habitat: 'サバンナ', diet: '草食', status: '低危険種' },
  { id: 'meerkat', type: 'animal', name: 'ミーアキャット', nameEn: 'Meerkat', emoji: '🐿️', zone: 'アフリカのサバンナ', zoneColor: '#e8a735', x: 84.57, y: 17.88, desc: '立ち上がって見張りをする姿が人気。群れで協力して子育てをします。', habitat: '砂漠・草原', diet: '雑食', status: '低危険種' },
  { id: 'rhino', type: 'animal', name: 'ヒガシクロサイ', nameEn: 'Eastern Black Rhinoceros', emoji: '🦏', zone: 'アフリカのサバンナ', zoneColor: '#e8a735', x: 77.51, y: 22.93, desc: '上唇が尖っているのが特徴。密猟により絶滅危機に瀕しています。', habitat: 'サバンナ', diet: '草食', status: '絶滅寸前種' },

  // === RESTAURANTS ===
  { id: 'jungle-cafe', type: 'food', name: 'ジャングルカフェ', emoji: '☕', zone: 'アジアの熱帯林', zoneColor: '#2d8a4e', x: 11.18, y: 66.47, hours: '9:30～16:30', lastOrder: 'フードL.O. 15:30', area: 'アジアの熱帯林エリア', menu: ['カレーライス', 'ナン', 'タンドリーチキン', 'ラッシー', 'ソフトクリーム'] },
  { id: 'aqua-cafe', type: 'food', name: 'アクアテラスカフェ', emoji: '🧊', zone: '正門付近', zoneColor: '#42a5f5', x: 17.23, y: 85.08, hours: '10:00～16:30', lastOrder: '', area: '正門・噴水口付近', menu: ['フレッシュネスバーガー', 'ソフトクリーム', 'コーヒー', 'フライドポテト'] },
  { id: 'aussie-grill', type: 'food', name: 'オージーヒル グリルレストラン', emoji: '🍖', zone: 'オセアニアの草原', zoneColor: '#c8a94e', x: 16.37, y: 34.32, hours: '10:00～16:00', lastOrder: 'L.O. 15:30', area: 'オセアニアの草原エリア', menu: ['ステーキ', 'ハンバーグ', 'チキングリル', 'サラダバー'] },
  { id: 'savanna-terrace', type: 'food', name: 'サバンナテラス', emoji: '🍛', zone: 'アフリカのサバンナ', zoneColor: '#e8a735', x: 74.62, y: 25.23, hours: '10:00～16:00', lastOrder: 'L.O. 15:30', area: 'アフリカのサバンナエリア', menu: ['ムシカキ（牛串）', 'サバンナカレー', 'フライドポテト'] },

  // === FACILITIES ===
  { id: 'main-gate', type: 'gate', name: '正門', emoji: '🚪', x: 14.71, y: 87.82, desc: 'メインエントランス。総合案内所・コインロッカーあり。' },
  { id: 'bus-stop', type: 'facility', name: '園内バス のりば', emoji: '🚌', x: 12.47, y: 80.89, desc: '園内バスの乗り場。各エリアを結ぶバスが運行。' },
  { id: 'camel-ride', type: 'facility', name: 'ラクダライド', emoji: '🐫', x: 86.23, y: 20.48, desc: 'ラクダに乗って園内を回れる体験コーナー。' },
  { id: 'bird-show', type: 'facility', name: 'バードショー広場', emoji: '🦅', x: 89.98, y: 30.43, desc: '迫力あるバードショーが楽しめる広場。' },
];

// ==========================================
// GPS: Zoorasia bounding box (approximate)
// These map real GPS coords to image % positions
// ==========================================
const GPS_BOUNDS = {
  // Top-left of map area (NW corner)
  topLeft: { lat: 35.4960, lng: 139.5265, imgX: 0, imgY: 0 },
  // Bottom-right of map area (SE corner)
  bottomRight: { lat: 35.4905, lng: 139.5400, imgX: 100, imgY: 85 }
};

// ==========================================
// STATE
// ==========================================
const state = {
  scale: 1,
  minScale: 0.8,
  maxScale: 5,
  tx: 0,
  ty: 0,
  dragging: false,
  startX: 0, startY: 0,
  lastTx: 0, lastTy: 0,
  // Pinch
  pinchDist: 0,
  pinchScale: 1,
  pinchMidX: 0,
  pinchMidY: 0,
  // Sheet
  sheetOpen: false,
  // GPS
  gpsWatchId: null,
  gpsActive: false,
};

// ==========================================
// DOM
// ==========================================
let mapWrap, mapViewport, mapImage, hotspotsEl;
let bottomSheet, sheetBody, scrim;
let gpsMarker, gpsBtn;

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  mapWrap = document.getElementById('map-wrap');
  mapViewport = document.getElementById('map-viewport');
  mapImage = document.getElementById('map-image');
  hotspotsEl = document.getElementById('hotspots');
  bottomSheet = document.getElementById('bottom-sheet');
  sheetBody = document.getElementById('sheet-body');
  scrim = document.getElementById('scrim');
  gpsMarker = document.getElementById('gps-marker');
  gpsBtn = document.getElementById('btn-gps');

  createHotspots();
  setupTouch();
  setupButtons();
  setupSheet();

  // Wait for image load to set initial view
  if (mapImage.complete) {
    initView();
  } else {
    mapImage.addEventListener('load', initView);
  }
});

// ==========================================
// CREATE HOTSPOTS
// ==========================================
function createHotspots() {
  POIS.forEach(poi => {
    const el = document.createElement('button');
    el.className = 'hotspot';
    el.style.left = poi.x + '%';
    el.style.top = poi.y + '%';
    el.setAttribute('aria-label', poi.name);
    el.dataset.id = poi.id;

    // Indicator dot
    const dot = document.createElement('span');
    dot.className = 'hotspot-dot ' + (poi.type === 'food' ? 'food' : poi.type === 'gate' ? 'gate' : poi.type === 'facility' ? 'facility' : 'animal');
    el.appendChild(dot);

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openInfo(poi);
    });

    hotspotsEl.appendChild(el);
  });
}

// ==========================================
// INITIAL VIEW
// ==========================================
function initView() {
  const wrapRect = mapWrap.getBoundingClientRect();
  const imgW = mapImage.naturalWidth;
  const imgH = mapImage.naturalHeight;
  const displayW = mapImage.offsetWidth;
  const displayH = mapImage.offsetHeight;

  // Fit height to screen
  const fitScale = wrapRect.height / displayH;
  state.scale = Math.max(fitScale, 0.8);
  state.tx = -(displayW * state.scale - wrapRect.width) / 2;
  state.ty = 0;

  applyTransform();
}

function resetView() {
  initView();
}

// ==========================================
// TOUCH / PAN / ZOOM
// ==========================================
function setupTouch() {
  mapWrap.addEventListener('touchstart', onTouchStart, { passive: false });
  mapWrap.addEventListener('touchmove', onTouchMove, { passive: false });
  mapWrap.addEventListener('touchend', onTouchEnd, { passive: false });
  mapWrap.addEventListener('touchcancel', onTouchEnd, { passive: false });

  // Mouse fallback for desktop testing
  mapWrap.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  mapWrap.addEventListener('wheel', onWheel, { passive: false });
}

function onTouchStart(e) {
  if (state.sheetOpen && e.target.closest('#bottom-sheet')) return;

  if (e.touches.length === 1) {
    state.dragging = true;
    state.startX = e.touches[0].clientX - state.tx;
    state.startY = e.touches[0].clientY - state.ty;
  } else if (e.touches.length === 2) {
    e.preventDefault();
    state.dragging = false;
    state.pinchDist = dist(e.touches[0], e.touches[1]);
    state.pinchScale = state.scale;
    state.pinchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    state.pinchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
  }
}

function onTouchMove(e) {
  if (state.sheetOpen && e.target.closest('#bottom-sheet')) return;

  if (e.touches.length === 1 && state.dragging) {
    e.preventDefault();
    state.tx = e.touches[0].clientX - state.startX;
    state.ty = e.touches[0].clientY - state.startY;
    clampPan();
    applyTransform();
  } else if (e.touches.length === 2) {
    e.preventDefault();
    const d = dist(e.touches[0], e.touches[1]);
    const ratio = d / state.pinchDist;
    const newScale = clampScale(state.pinchScale * ratio);

    const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

    const sr = newScale / state.scale;
    state.tx = midX - (midX - state.tx) * sr;
    state.ty = midY - (midY - state.ty) * sr;
    state.scale = newScale;

    clampPan();
    applyTransform();
  }
}

function onTouchEnd(e) {
  if (e.touches.length === 0) {
    state.dragging = false;
  }
}

// Mouse events for desktop testing
function onMouseDown(e) {
  if (e.target.closest('#bottom-sheet') || e.target.closest('#topbar')) return;
  state.dragging = true;
  state.startX = e.clientX - state.tx;
  state.startY = e.clientY - state.ty;
  mapWrap.style.cursor = 'grabbing';
}

function onMouseMove(e) {
  if (!state.dragging) return;
  state.tx = e.clientX - state.startX;
  state.ty = e.clientY - state.startY;
  clampPan();
  applyTransform();
}

function onMouseUp() {
  state.dragging = false;
  if (mapWrap) mapWrap.style.cursor = '';
}

function onWheel(e) {
  e.preventDefault();
  const factor = e.deltaY > 0 ? 0.92 : 1.08;
  const newScale = clampScale(state.scale * factor);
  const sr = newScale / state.scale;
  state.tx = e.clientX - (e.clientX - state.tx) * sr;
  state.ty = e.clientY - (e.clientY - state.ty) * sr;
  state.scale = newScale;
  clampPan();
  applyTransform();
}

function dist(t1, t2) {
  return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
}

function clampScale(s) {
  return Math.min(state.maxScale, Math.max(state.minScale, s));
}

function clampPan() {
  const wrapRect = mapWrap.getBoundingClientRect();
  const w = mapImage.offsetWidth * state.scale;
  const h = mapImage.offsetHeight * state.scale;

  // Allow some overscroll but not too much
  const margin = 60;
  if (w <= wrapRect.width) {
    state.tx = (wrapRect.width - w) / 2;
  } else {
    state.tx = Math.min(margin, Math.max(wrapRect.width - w - margin, state.tx));
  }
  if (h <= wrapRect.height) {
    state.ty = (wrapRect.height - h) / 2;
  } else {
    state.ty = Math.min(margin, Math.max(wrapRect.height - h - margin, state.ty));
  }
}

function applyTransform() {
  mapViewport.style.transform = `translate(${state.tx}px, ${state.ty}px) scale(${state.scale})`;
}

// ==========================================
// INFO PANEL (Bottom Sheet)
// ==========================================
function openInfo(poi) {
  let html = '';
  if (poi.type === 'animal') {
    html = renderAnimal(poi);
  } else if (poi.type === 'food') {
    html = renderFood(poi);
  } else {
    html = renderFacility(poi);
  }
  sheetBody.innerHTML = html;
  openSheet();

  // Highlight hotspot
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
  const el = document.querySelector(`[data-id="${poi.id}"]`);
  if (el) el.classList.add('active');
}

function renderAnimal(p) {
  const statusColor = p.status.includes('絶滅寸前') ? '#ef5350' : p.status.includes('絶滅危惧') ? '#ff9800' : p.status.includes('危急') ? '#ffc107' : '#4caf50';
  return `<div class="info-animal">
    <div class="info-top">
      <div class="info-emoji">${p.emoji}</div>
      <div>
        <div class="info-name">${p.name}</div>
        <div class="info-name-en">${p.nameEn}</div>
        <span class="info-zone" style="background:${p.zoneColor}">${p.zone}</span>
      </div>
    </div>
    <p class="info-desc">${p.desc}</p>
    <div class="info-facts">
      <div class="fact"><div class="fact-label">生息地</div><div class="fact-val">${p.habitat}</div></div>
      <div class="fact"><div class="fact-label">食性</div><div class="fact-val">${p.diet}</div></div>
      <div class="fact"><div class="fact-label">保全状況</div><div class="fact-val" style="color:${statusColor}">${p.status}</div></div>
    </div>
  </div>`;
}

function renderFood(p) {
  return `<div class="info-food">
    <div class="info-top">
      <div class="info-emoji">${p.emoji}</div>
      <div>
        <div class="info-name">${p.name}</div>
        <div class="info-hours">🕐 ${p.hours}</div>
        ${p.lastOrder ? `<div class="info-area">${p.lastOrder}</div>` : ''}
        <div class="info-area">📍 ${p.area}</div>
      </div>
    </div>
    <div>
      <div class="info-menu-title">おすすめメニュー</div>
      <div class="info-menu-tags">${p.menu.map(m => `<span class="menu-tag">${m}</span>`).join('')}</div>
    </div>
  </div>`;
}

function renderFacility(p) {
  return `<div class="info-facility">
    <div class="info-top">
      <div class="info-emoji">${p.emoji}</div>
      <div><div class="info-name">${p.name}</div></div>
    </div>
    <p class="info-desc">${p.desc}</p>
  </div>`;
}

// ==========================================
// BOTTOM SHEET CONTROLS
// ==========================================
function setupSheet() {
  scrim.addEventListener('click', closeSheet);

  const handle = document.getElementById('sheet-handle');
  let touchStartY = 0;
  handle.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  handle.addEventListener('touchmove', e => {
    if (e.touches[0].clientY - touchStartY > 40) closeSheet();
  }, { passive: true });
}

function openSheet() {
  bottomSheet.classList.add('open');
  scrim.classList.add('show');
  state.sheetOpen = true;
}

function closeSheet() {
  bottomSheet.classList.remove('open');
  scrim.classList.remove('show');
  state.sheetOpen = false;
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
}

// ==========================================
// GPS
// ==========================================
function setupButtons() {
  gpsBtn.addEventListener('click', toggleGPS);
  document.getElementById('btn-reset').addEventListener('click', () => {
    resetView();
    closeSheet();
  });
}

function toggleGPS() {
  if (state.gpsActive) {
    stopGPS();
  } else {
    startGPS();
  }
}

function startGPS() {
  if (!navigator.geolocation) {
    showToast('このデバイスではGPSを利用できません');
    return;
  }

  showToast('現在位置を取得中...');
  gpsBtn.classList.add('gps-active');
  state.gpsActive = true;

  state.gpsWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      updateGPSPosition(pos.coords.latitude, pos.coords.longitude);
    },
    (err) => {
      showToast('位置情報を取得できませんでした');
      stopGPS();
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
  );
}

function stopGPS() {
  if (state.gpsWatchId !== null) {
    navigator.geolocation.clearWatch(state.gpsWatchId);
    state.gpsWatchId = null;
  }
  state.gpsActive = false;
  gpsBtn.classList.remove('gps-active');
  gpsMarker.style.display = 'none';
}

function updateGPSPosition(lat, lng) {
  const bounds = GPS_BOUNDS;
  const latRange = bounds.topLeft.lat - bounds.bottomRight.lat;
  const lngRange = bounds.bottomRight.lng - bounds.topLeft.lng;
  const imgXRange = bounds.bottomRight.imgX - bounds.topLeft.imgX;
  const imgYRange = bounds.bottomRight.imgY - bounds.topLeft.imgY;

  const pctX = bounds.topLeft.imgX + ((lng - bounds.topLeft.lng) / lngRange) * imgXRange;
  const pctY = bounds.topLeft.imgY + ((bounds.topLeft.lat - lat) / latRange) * imgYRange;

  // Check if within map bounds
  if (pctX < -10 || pctX > 110 || pctY < -10 || pctY > 110) {
    showToast('現在位置はマップの範囲外です');
    return;
  }

  gpsMarker.style.display = 'block';
  gpsMarker.style.left = pctX + '%';
  gpsMarker.style.top = pctY + '%';
}

// ==========================================
// TOAST
// ==========================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}
