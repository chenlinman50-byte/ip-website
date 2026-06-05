'use client';

import { useCallback, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

const HERO_IMAGE = '/products/hero-figurine.png';

interface Product {
  id: string;
  number: string;
  name: string;
  series: string;
  rarity: 'common' | 'hidden';
  image: string;
}

interface ProductGroup {
  label: string;
  products: Product[];
}

interface Series {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  heroImage: string;
  products: Product[];
  groups?: ProductGroup[];
}

const seriesData: Series[] = [
  {
    id: 'jijiu1',
    name: '叽啾1.0',
    tagline: '',
    description: '',
    color: '#5b9bd5',
    bgColor: '#e8f4fd',
    borderColor: '#b8d8f0',
    heroImage: '/products/zhiyu-hero.jpg',
    groups: [
      {
        label: '盲盒',
        products: [
          { id: 'jijiu1-001', number: 'NO.001', name: '叽啾', series: '叽啾1.0', rarity: 'common', image: '/products/box-001.jpg' },
          { id: 'jijiu1-002', number: 'NO.002', name: '叽啾', series: '叽啾1.0', rarity: 'common', image: '/products/box-002.jpg' },
          { id: 'jijiu1-003', number: 'NO.003', name: '叽啾', series: '叽啾1.0', rarity: 'common', image: '/products/box-003.jpg' },
          { id: 'jijiu1-004', number: 'NO.004', name: '叽啾', series: '叽啾1.0', rarity: 'common', image: '/products/box-004.jpg' },
        ],
      },
      {
        label: '毛绒挂件',
        products: [
          { id: 'jijiu1-005', number: 'NO.005', name: '叽啾', series: '叽啾1.0', rarity: 'common', image: '/products/plush-001.jpg' },
          { id: 'jijiu1-006', number: 'NO.006', name: '叽啾', series: '叽啾1.0', rarity: 'common', image: '/products/plush-002.jpg' },
          { id: 'jijiu1-007', number: 'NO.007', name: '叽', series: '叽啾1.0', rarity: 'common', image: '/products/plush-003.jpg' },
          { id: 'jijiu1-008', number: 'NO.008', name: '叽啾', series: '叽啾1.0', rarity: 'common', image: '/products/plush-004.jpg' },
        ],
      },
    ],
    products: [],
  },
  {
    id: 'zhiyu',
    name: '治愈日常系列',
    tagline: '叽啾的日常小确幸',
    description: '平凡日常里的小美好，被叽啾全部收藏。',
    color: '#e8a87c',
    bgColor: '#fdf0e5',
    borderColor: '#f0d0b8',
    heroImage: '/products/moyu-hero.jpg',
    products: [
      { id: 'zhiyu-001', number: 'NO.007', name: '浇花叽啾', series: '治愈日常系列', rarity: 'common', image: '/products/zhiyu-001.svg' },
      { id: 'zhiyu-002', number: 'NO.008', name: '烘焙叽啾', series: '治愈日常系列', rarity: 'common', image: '/products/zhiyu-002.svg' },
      { id: 'zhiyu-003', number: 'NO.009', name: '读书叽啾', series: '治愈日常系列', rarity: 'common', image: '/products/zhiyu-003.svg' },
      { id: 'zhiyu-004', number: 'NO.010', name: '雨天叽啾', series: '治愈日常系列', rarity: 'common', image: '/products/zhiyu-004.svg' },
      { id: 'zhiyu-005', number: 'NO.011', name: '星空叽啾', series: '治愈日常系列', rarity: 'common', image: '/products/zhiyu-005.svg' },
    ],
  },
  {
    id: 'hidden',
    name: '限定隐藏系列',
    tagline: '神秘的叽，只在特别的时刻出现。',
    description: '限量发售，每一只都是独一无二的存在。',
    color: '#d4a5e5',
    bgColor: '#f5ebfa',
    borderColor: '#e0c8f0',
    heroImage: '/products/hidden-hero.jpg',
    products: [
      { id: 'hidden-001', number: 'NO.012', name: '???', series: '限定隐藏系列', rarity: 'hidden', image: '/products/hidden-001.svg' },
    ],
  },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="14" cy="14" r="9" />
      <path d="m21 21 7 7" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 27S4 20 4 11.6C4 7.6 6.7 5 10.2 5c2.3 0 4.4 1.3 5.8 3.3C17.4 6.3 19.7 5 22 5c3.5 0 6 2.6 6 6.6C28 20 16 27 16 27Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 12h16l2 17H6l2-17Z" />
      <path d="M12 12V9a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function BirdMark() {
  return (
    <Image className="bird-mark-img" src="/bengao-hello.png" alt="" width={108} height={88} />
  );
}

function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg className={`sparkle ${className}`} viewBox="0 0 70 70" aria-hidden="true">
      <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
    </svg>
  );
}

function Feather({ className = '' }: { className?: string }) {
  return (
    <svg className={`feather ${className}`} viewBox="0 0 40 120" aria-hidden="true">
      <path d="M20 0 Q30 30 25 60 Q20 90 20 120 Q15 90 10 60 Q5 30 20 0Z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  );
}

function Header() {
  const navItems = ['首页', '关于我们', '角色介绍', '周边产品', '联系我们'];

  return (
    <header className="merch-header">
      <Link href="/" className="brand" aria-label="叽啾首页">
        <BirdMark />
        <span>
          <strong>叽啾</strong>
          <small>JI JIU</small>
        </span>
      </Link>

      <nav className="nav-links" aria-label="主导航">
        {navItems.map((item, index) => (
          <a
            className={item === '周边产品' ? 'active' : ''}
            href={item === '首页' ? '/' : `/#${index}`}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions" aria-label="快捷操作">
        <button type="button" aria-label="搜索"><SearchIcon /></button>
        <button type="button" aria-label="收藏"><HeartIcon /></button>
        <button type="button" aria-label="购物袋"><BagIcon /></button>
      </div>
    </header>
  );
}

function HomePage({ onSelectSeries }: { onSelectSeries: (id: string) => void }) {
  return (
    <section className="collection-hero">
      {/* Background clouds */}
      <div className="cloud-bg cloud-1" />
      <div className="cloud-bg cloud-2" />
      <div className="cloud-bg cloud-3" />
      <div className="cloud-bg cloud-4" />

      {/* Floating feathers */}
      <svg className="float-feather feather-1" viewBox="0 0 40 120" aria-hidden="true">
        <path d="M20 0 Q30 30 25 60 Q20 90 20 120 Q15 90 10 60 Q5 30 20 0Z" />
      </svg>
      <svg className="float-feather feather-2" viewBox="0 0 40 120" aria-hidden="true">
        <path d="M20 0 Q30 30 25 60 Q20 90 20 120 Q15 90 10 60 Q5 30 20 0Z" />
      </svg>
      <svg className="float-feather feather-3" viewBox="0 0 40 120" aria-hidden="true">
        <path d="M20 0 Q30 30 25 60 Q20 90 20 120 Q15 90 10 60 Q5 30 20 0Z" />
      </svg>
      <svg className="float-feather feather-4" viewBox="0 0 40 120" aria-hidden="true">
        <path d="M20 0 Q30 30 25 60 Q20 90 20 120 Q15 90 10 60 Q5 30 20 0Z" />
      </svg>
      <svg className="float-feather feather-5" viewBox="0 0 40 120" aria-hidden="true">
        <path d="M20 0 Q30 30 25 60 Q20 90 20 120 Q15 90 10 60 Q5 30 20 0Z" />
      </svg>
      <svg className="float-feather feather-6" viewBox="0 0 40 120" aria-hidden="true">
        <path d="M20 0 Q30 30 25 60 Q20 90 20 120 Q15 90 10 60 Q5 30 20 0Z" />
      </svg>

      {/* Floating sparkles */}
      <svg className="float-sparkle sparkle-1" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>
      <svg className="float-sparkle sparkle-2" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>
      <svg className="float-sparkle sparkle-3" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>
      <svg className="float-sparkle sparkle-4" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>
      <svg className="float-sparkle sparkle-5" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>
      <svg className="float-sparkle sparkle-6" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>
      <svg className="float-sparkle sparkle-7" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>
      <svg className="float-sparkle sparkle-8" viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
      </svg>

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            叽啾收藏室
            <Sparkle className="title-sparkle" />
          </h1>
          <p className="hero-sub">
            <Sparkle className="sub-sparkle-l" />
            收集每一份治愈与陪伴
            <Sparkle className="sub-sparkle-r" />
          </p>

          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-icon">🐦</span>
              <div className="stat-body">
                <span className="stat-num">12</span>
                <span className="stat-unit">款叽啾</span>
              </div>
              <span className="stat-label">已收藏</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📦</span>
              <div className="stat-body">
                <span className="stat-num">3</span>
                <span className="stat-unit">个系列</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">✨</span>
              <div className="stat-body">
                <span className="stat-num">1</span>
                <span className="stat-unit">个隐藏款</span>
              </div>
            </div>
          </div>

          <button className="explore-btn" onClick={() => onSelectSeries('jijiu1')}>
            探索全部系列
            <ArrowRight />
          </button>
        </div>

        <div className="hero-right">
          <Image src={HERO_IMAGE} alt="叽啾收藏室" className="hero-photo-img" width={600} height={600} priority />
        </div>
      </div>

      <div className="series-row">
        {seriesData.map((s) => (
          <div
            key={s.id}
            className="mini-series-card"
            style={{ '--s-color': s.color, '--s-border': s.borderColor, '--s-bg': s.bgColor } as React.CSSProperties}
            onClick={() => onSelectSeries(s.id)}
          >
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <button className="enter-btn">进入系列</button>
            <div className="mini-bird">
              <Image src={s.heroImage} alt={s.name} className="mini-bird-img" width={120} height={120} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SeriesPage({
  series,
  onBack,
}: {
  series: Series;
  onBack: () => void;
}) {
  return (
    <section className="series-page">
      <div className="series-top">
        <button className="back-link" onClick={onBack}>
          <ArrowLeft />
          返回收藏室
        </button>

        <div className="series-title-area">
          <h2 className="series-title">{series.name}</h2>
          {series.tagline && <span className="series-tagline">{series.tagline}</span>}
        </div>
      </div>

      <div className="series-body no-filter">
        <div className="grouped-products">
          {series.groups?.map((group) => (
            <div key={group.label} className="product-group">
              <h3 className="group-label">{group.label}</h3>
              <div className="product-grid">
                {group.products.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="card-top">
                      <span className="product-no">{product.number}</span>
                      <h4 className="product-name">{product.name}</h4>
                    </div>
                    <div className="card-img-wrap">
                      {product.rarity === 'hidden' ? (
                        <div className="hidden-product-img">
                          <LockIcon />
                        </div>
                      ) : (
                        <img src={product.image} alt={product.name} className="product-img" />
                      )}
                    </div>
                    <span className={`rarity-pill ${product.rarity}`}>
                      {product.rarity === 'hidden' ? '隐藏款' : '普通款'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MerchPage() {
  return (
    <Suspense fallback={<div className="merch-page" style={{ minHeight: '100vh' }} />}>
      <MerchContent />
    </Suspense>
  );
}

function MerchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedSeriesId = searchParams.get('series') || '';
  const view: 'home' | 'series' = selectedSeriesId ? 'series' : 'home';

  const selectedSeries = seriesData.find((s) => s.id === selectedSeriesId);

  const handleSelectSeries = useCallback((id: string) => {
    router.push(`/merch?series=${id}`);
  }, [router]);

  const handleBack = useCallback(() => {
    router.push('/merch');
  }, [router]);

  return (
    <main className="merch-page">
      <Header />

      {view === 'home' && <HomePage onSelectSeries={handleSelectSeries} />}
      {view === 'series' && selectedSeries && <SeriesPage series={selectedSeries} onBack={handleBack} />}

      <footer className="page-footer">
        <span>♡</span>
        感谢每一次相遇，愿叽啾陪你度过每一个可爱的日常！
        <BirdMark />
      </footer>
    </main>
  );
}
