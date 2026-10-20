import { useEffect, useMemo, useState } from "react";
import "./Presocraticos.css";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleCheck,
  Feather,
  Library,
  Menu,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const HOTMART_URL = "https://hotmart.com/";
const HERO_IMAGE = "/assets/ebook-hero.webp";
const COVER_IMAGE = "/assets/ebook-cover-promo.webp";

const philosophers = [
  { name: "Tales de Mileto", note: "A pergunta pelo princípio" },
  { name: "Anaximandro", note: "O ápeiron e a origem" },
  { name: "Anaxímenes", note: "Ar, condensação e mudança" },
  { name: "Pitágoras", note: "Número, ordem e harmonia" },
  { name: "Heráclito", note: "Fluxo, fogo e logos" },
  { name: "Parmênides", note: "Ser, verdade e aparência" },
  { name: "Zenão", note: "O movimento em questão" },
  { name: "Empédocles", note: "Amor, discórdia e elementos" },
  { name: "Anaxágoras", note: "A inteligência que ordena" },
  { name: "Leucipo e Demócrito", note: "Os primeiros atomistas" },
];

const faqs = [
  {
    q: "O que encontro nesta edição?",
    a: "Uma seleção de fragmentos, doxografia e comentários sobre os primeiros pensadores da filosofia grega, acompanhada por uma introdução histórica sobre a passagem do mito à investigação racional.",
  },
  {
    q: "Para quem o material é indicado?",
    a: "Para estudantes, professores, leitores de filosofia e qualquer pessoa que queira entender de onde vieram algumas das perguntas que fundaram a tradição filosófica ocidental.",
  },
  {
    q: "O conteúdo é uma obra introdutória ou acadêmica?",
    a: "A proposta combina contexto histórico e leitura orientada de textos. Funciona tanto como porta de entrada quanto como material de consulta para quem já estuda filosofia.",
  },
];

function ScrollReveal({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return <div className={`reveal ${className}`} style={style}>{children}</div>;
}

function AppMark() {
  return (
    <a className="brand" href="#top" aria-label="Os Pré-Socráticos, início">
      <span className="brand-mark"><Feather size={18} strokeWidth={1.6} /></span>
      <span>
        <strong>Os Pré-Socráticos</strong>
        <small>uma biblioteca de ideias</small>
      </span>
    </a>
  );
}

export default function Presocraticos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const chapters = useMemo(() => philosophers.slice(0, 6), []);

  return (
    <div className="presocraticos-landing site-shell" id="top">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <AppMark />
          <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav id="main-navigation" className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a obra</a>
            <a href="#autores" onClick={() => setMenuOpen(false)}>Autores</a>
            <a href="#para-quem" onClick={() => setMenuOpen(false)}>Para quem</a>
            <a className="nav-cta" href={HOTMART_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Acessar e-book <ArrowRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 19, 31, .97) 0%, rgba(8, 19, 31, .78) 45%, rgba(8, 19, 31, .18) 100%), url(${HERO_IMAGE})` }}>
          <div className="hero-grain" />
          <div className="hero-inner">
            <div className="hero-copy reveal is-visible">
              <div className="eyebrow"><span className="eyebrow-line" /> filosofia grega antiga</div>
              <h1>Antes de existir uma resposta, existiu a <em>pergunta.</em></h1>
              <p className="hero-lead">Uma jornada pelos pensadores que trocaram o mito pela investigação e abriram o primeiro capítulo da filosofia ocidental.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={HOTMART_URL} target="_blank" rel="noreferrer">Quero ler a obra <ArrowRight size={17} /></a>
                <a className="text-link" href="#sobre">Conhecer o conteúdo <ChevronDown size={16} /></a>
              </div>
              <div className="hero-proof"><ShieldCheck size={17} /><span>Seleção de textos, fragmentos, doxografia e comentários</span></div>
            </div>
            <div className="hero-product reveal is-visible">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="book-mockup">
                <div className="book-cover" style={{ backgroundImage: `linear-gradient(145deg, rgba(10, 25, 41, .22), rgba(7, 15, 25, .78)), url(${COVER_IMAGE})` }}>
                  <div className="cover-ornament">✦</div>
                  <p className="cover-series">COLEÇÃO DE TEXTOS</p>
                  <h2>Os<br /><span>PRÉ-</span><br />SOCRÁTICOS</h2>
                  <div className="cover-rule" />
                  <p className="cover-subtitle">FRAGMENTOS · DOXOGRAFIA<br />E COMENTÁRIOS</p>
                  <p className="cover-footer">DO MITO À FILOSOFIA</p>
                </div>
                <div className="book-pages" />
              </div>
              <div className="edition-stamp"><span className="stamp-star">✦</span><strong>EDIÇÃO<br />DE ESTUDO</strong><small>filosofia & história das ideias</small></div>
            </div>
          </div>
          <div className="hero-scroll"><span /> role para descobrir</div>
        </section>

        <section className="statement-section" id="sobre">
          <div className="section-rule" />
          <ScrollReveal className="statement-grid">
            <div className="section-kicker">01 · O começo de tudo</div>
            <div>
              <h2>Quando a natureza deixou de ser apenas um mistério.</h2>
              <p className="statement-lead">Na Grécia do século VI a.C., uma nova forma de perguntar começou a ganhar corpo. O mundo já não era explicado somente por narrativas sobre deuses e heróis. Era possível observar, comparar, argumentar.</p>
              <p>Esta edição acompanha esse movimento de perto. Reúne a introdução histórica, os fragmentos preservados e os comentários que ajudam a atravessar as ideias de Tales, Heráclito, Parmênides e tantos outros sem perder de vista a época em que foram formuladas.</p>
            </div>
          </ScrollReveal>
        </section>

        <section className="dark-section" id="autores">
          <div className="dark-glow" />
          <div className="section-container">
            <ScrollReveal className="section-heading light-heading">
              <div><span className="section-kicker">02 · O mapa da leitura</span><h2>Dez nomes.<br /><em>Uma mudança de mundo.</em></h2></div>
              <p>O e-book percorre as ideias que vieram antes de Sócrates e mostra como cada autor respondeu à mesma inquietação: qual é a ordem por trás do que existe?</p>
            </ScrollReveal>
            <div className="author-list">
              {philosophers.map((philosopher, index) => (
                <ScrollReveal key={philosopher.name} className="author-row" style={{ animationDelay: `${index * 45}ms` } as React.CSSProperties}>
                  <span className="author-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="author-name">{philosopher.name}</span>
                  <span className="author-note">{philosopher.note}</span>
                  <ArrowRight className="author-arrow" size={17} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="chapters-section">
          <div className="section-container">
            <ScrollReveal className="section-heading chapter-heading">
              <div><span className="section-kicker">03 · Dentro do e-book</span><h2>Uma leitura que começa<br />no <em>mito</em> e chega à razão.</h2></div>
              <p>O material combina narrativa histórica e leitura de fontes. Ideal para quem quer entender o contexto, e não apenas decorar nomes.</p>
            </ScrollReveal>
            <div className="chapter-grid">
              {chapters.map((chapter, index) => (
                <ScrollReveal key={chapter.name} className="chapter-card">
                  <span className="chapter-icon">{["◌", "◒", "△", "✦", "≈", "∞"][index]}</span>
                  <span className="chapter-index">0{index + 1}</span>
                  <h3>{chapter.name}</h3>
                  <p>{chapter.note}. Fragmentos e comentários para ler a pergunta por trás da teoria.</p>
                  <span className="card-line" />
                </ScrollReveal>
              ))}
            </div>
            <div className="chapter-footer reveal"><span className="tiny-asterisk">✦</span> Inclui ainda Empédocles, Anaxágoras, Leucipo e Demócrito.</div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="section-container editorial-grid">
            <ScrollReveal className="editorial-visual">
              <div className="editorial-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(10,25,41,.08), rgba(10,25,41,.78)), url(${HERO_IMAGE})` }} />
              <div className="editorial-caption"><span>ARCHÉ</span><small>a pergunta pelo princípio</small></div>
            </ScrollReveal>
            <ScrollReveal className="editorial-copy">
              <span className="section-kicker">04 · Uma edição para voltar</span>
              <h2>Não é só sobre o que eles pensaram. É sobre <em>como começar a pensar.</em></h2>
              <p>O valor desta leitura está no caminho. Você vê a pergunta nascer, acompanha as tentativas de resposta e percebe que muitas das nossas inquietações atuais já estavam presentes há mais de dois milênios.</p>
              <div className="benefit-list">
                <div><CircleCheck size={18} /><span><strong>Contexto antes do conceito.</strong> A história ajuda a entender a ideia.</span></div>
                <div><CircleCheck size={18} /><span><strong>Fontes para ler de perto.</strong> Fragmentos, doxografia e comentários reunidos.</span></div>
                <div><CircleCheck size={18} /><span><strong>Uma base para seguir adiante.</strong> O ponto de partida para Platão, Aristóteles e a tradição ocidental.</span></div>
              </div>
              <a className="button button-dark" href={HOTMART_URL} target="_blank" rel="noreferrer">Acessar a edição <ArrowRight size={17} /></a>
            </ScrollReveal>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-container">
            <ScrollReveal className="section-heading testimonial-heading">
              <div><span className="section-kicker">05 · Prova editorial</span><h2>Uma obra para<br /><em>ler com calma.</em></h2></div>
              <p>As vozes abaixo identificam o lugar editorial da edição. Não são avaliações inventadas de compradores.</p>
            </ScrollReveal>
            <div className="quote-grid">
              <ScrollReveal className="quote-card featured-quote"><Quote size={30} /><blockquote>“O principal aspecto da questão da origem histórica da filosofia reside na compreensão de como se processa a passagem entre a mentalidade mito-poética e a mentalidade teorizante.”</blockquote><div className="quote-source"><strong>Texto introdutório da edição</strong><span>Os Pré-Socráticos · Do mito à filosofia</span></div></ScrollReveal>
              <ScrollReveal className="quote-card"><Quote size={24} /><blockquote>Uma seleção que aproxima o leitor de fragmentos difíceis sem retirar deles a força da pergunta original.</blockquote><div className="quote-source"><strong>Síntese editorial</strong><span>Curadoria de conteúdo da página</span></div></ScrollReveal>
              <ScrollReveal className="quote-card"><Quote size={24} /><blockquote>O melhor ponto de partida para quem quer descobrir por que a filosofia começou a perguntar pela natureza.</blockquote><div className="quote-source"><strong>Posicionamento editorial</strong><span>Descrição de produto</span></div></ScrollReveal>
            </div>
          </div>
        </section>

        <section className="audience-section" id="para-quem">
          <div className="section-container audience-grid">
            <ScrollReveal className="audience-copy"><span className="section-kicker">06 · Para quem é</span><h2>Se você gosta de perguntas que não cabem em uma frase, <em>comece aqui.</em></h2><p>Para quem estuda, ensina ou simplesmente quer entender como a humanidade começou a organizar racionalmente suas perguntas sobre o mundo.</p><a className="button button-primary" href={HOTMART_URL} target="_blank" rel="noreferrer">Quero começar a leitura <ArrowRight size={17} /></a></ScrollReveal>
            <ScrollReveal className="audience-points"><div className="audience-point"><Library size={22} /><div><strong>Estudantes e professores</strong><p>Uma base para aulas, revisões e leituras dirigidas.</p></div></div><div className="audience-point"><BookOpen size={22} /><div><strong>Leitores de filosofia</strong><p>Uma edição para consultar, reler e voltar sempre que surgir uma nova pergunta.</p></div></div><div className="audience-point"><Sparkles size={22} /><div><strong>Curiosos por história das ideias</strong><p>Uma porta de entrada para a tradição que veio antes de Sócrates.</p></div></div></ScrollReveal>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-container faq-grid">
            <ScrollReveal><span className="section-kicker">07 · Dúvidas rápidas</span><h2>Antes de abrir<br /><em>a primeira página.</em></h2></ScrollReveal>
            <ScrollReveal className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.q}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.q}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{faq.a}</p></div></div>)}</ScrollReveal>
          </div>
        </section>

        <section className="final-cta" id="comprar" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 19, 31, .96), rgba(8, 19, 31, .56)), url(${HERO_IMAGE})` }}>
          <div className="final-cta-inner reveal"><div className="seal"><span>✦</span><strong>EDIÇÃO<br />DE ESTUDO</strong><small>filosofia antiga</small></div><span className="section-kicker">A primeira pergunta ainda está aberta</span><h2>Abra o livro.<br /><em>Comece pela origem.</em></h2><p>Uma leitura para quem quer atravessar o começo da filosofia com contexto, fontes e tempo para pensar.</p><a className="button button-gold" href={HOTMART_URL} target="_blank" rel="noreferrer">Acessar pela Hotmart <ArrowRight size={18} /></a><small className="cta-note">O botão está pronto para receber o link de checkout do seu produto na Hotmart.</small></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-inner"><AppMark /><div className="footer-meta"><span>© {new Date().getFullYear()} · Os Pré-Socráticos</span><span>Material de divulgação editorial</span></div><a href="#top" className="back-top">Voltar ao topo ↑</a></div><p className="rights-note">Antes de publicar ou comercializar o arquivo, confirme que você possui autorização, licença ou os direitos necessários para distribuir esta edição.</p></footer>
    </div>
  );
}
