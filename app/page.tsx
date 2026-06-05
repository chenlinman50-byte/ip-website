import Image from "next/image";

const navItems = ["首页", "关于我们", "角色介绍", "周边产品", "联系我们"];

const cards = [
  {
    title: "关于我们",
    text: "了解叽啾的故事和 IP 诞生的温暖初心~",
    tint: "pink",
    image: "/card-about.png",
  },
  {
    title: "角色介绍",
    text: "认识叽啾和它的小伙伴们，一起开启治愈之旅~",
    tint: "yellow",
    image: "/card-characters.png",
  },
  {
    title: "周边产品",
    text: "超多可爱周边等你带回家，让叽啾陪伴每一天！",
    tint: "blue",
    image: "/card-merch.png",
  },
];

function BirdMark() {
  return (
    <Image className="bird-mark-img" src="/bengao-hello.png" alt="" width={108} height={88} />
  );
}

function Icon({ name }: { name: "search" | "heart" | "bag" }) {
  if (name === "search") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="14" cy="14" r="9" />
        <path d="m21 21 7 7" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 27S4 20 4 11.6C4 7.6 6.7 5 10.2 5c2.3 0 4.4 1.3 5.8 3.3C17.4 6.3 19.7 5 22 5c3.5 0 6 2.6 6 6.6C28 20 16 27 16 27Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 12h16l2 17H6l2-17Z" />
      <path d="M12 12V9a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function Flower({ className = "" }: { className?: string }) {
  return (
    <svg className={`flower ${className}`} viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="10" />
      <circle cx="40" cy="18" r="16" />
      <circle cx="62" cy="40" r="16" />
      <circle cx="40" cy="62" r="16" />
      <circle cx="18" cy="40" r="16" />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={`sparkle ${className}`} viewBox="0 0 70 70" aria-hidden="true">
      <path d="M35 4c5 18 10 26 31 31-21 5-26 13-31 31C30 48 25 40 4 35c21-5 26-13 31-31Z" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="叽啾小鸟主视觉">
      <Image
        className="cover-bird"
        src="/bengao-hello.png"
        alt="叽啾小鸟"
        width={1024}
        height={1024}
        priority
      />
      <Sparkle className="visual-sparkle-one" />
      <Sparkle className="visual-sparkle-two" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="ip-page">
      <section className="hero-shell">
        <div className="cloud-cap" />
        <header className="site-header">
          <a className="brand" href="#" aria-label="叽啾首页">
            <BirdMark />
            <span>
              <strong>叽啾</strong>
              <small>JI JIU</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="主导航">
            {navItems.map((item, index) => (
              <a className={index === 0 ? "active" : ""} href={`#${index}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <div className="header-actions" aria-label="快捷操作">
            <button type="button" aria-label="搜索"><Icon name="search" /></button>
            <button type="button" aria-label="收藏"><Icon name="heart" /></button>
            <button type="button" aria-label="购物袋"><Icon name="bag" /></button>
          </div>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <Flower className="hero-flower" />
            <Sparkle className="sparkle-a" />
            <Sparkle className="sparkle-b" />
            <div className="bee-path" aria-hidden="true" />
            <h1>
              欢迎来到
              <span>叽啾</span>
              的小世界！
            </h1>
            <p>软萌小鸟叽啾，带你发现生活中的小确幸和温暖日常~</p>
            <a className="primary-cta" href="#cards">
              了解更多
              <span>♥</span>
            </a>
          </div>
          <HeroVisual />
        </div>

        <div className="hill hill-left" />
        <div className="hill hill-right" />
        <div className="cloud puff-one" />
        <div className="cloud puff-two" />
      </section>

      <section className="quick-links" id="cards" aria-label="内容入口">
        <div className="card-row">
          {cards.map((card) => (
            <article className={`info-card ${card.tint}`} key={card.title}>
              <div className="tag">{card.title}</div>
              <p>{card.text}</p>
              <a className="card-arrow" href={card.title === "周边产品" ? "/merch" : "#"} aria-label={`进入${card.title}`}>›</a>
              <Image
                className="card-bird-img"
                src={card.image}
                alt={card.title}
                width={400}
                height={400}
              />
            </article>
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <span>♡</span>
        感谢每一次相遇，愿叽啾陪你度过每一个可爱的日常！
        <BirdMark />
      </footer>
    </main>
  );
}
