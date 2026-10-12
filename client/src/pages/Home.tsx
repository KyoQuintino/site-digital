import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Mail,
  Menu,
  MessageCircle,
  Search,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { getCoverSource, loadCoverOverrides, type CoverOverrides } from "@/lib/coverOverrides";
import { products, type Product } from "@/lib/catalog";

const STORAGE = "/assets/";
const whatsapp =
  "https://wa.me/5527995126041?text=Ol%C3%A1!%20Vim%20pela%20DigitalQuintino%20e%20gostaria%20de%20conhecer%20os%20e-books%20dispon%C3%ADveis.";




function Brand() {
  return (
    <span className="brand" aria-label="DigitalQuintino">
      <span className="brand-mark">D</span>
      <span>
        Digital<span>Quintino</span>
      </span>
    </span>
  );
}

function SectionHeading({ eyebrow, children, body, centered = false }: { eyebrow: string; children: React.ReactNode; body?: string; centered?: boolean }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function QuickViewModal({ product, onClose, coverOverrides }: { product: Product; onClose: () => void; coverOverrides: CoverOverrides }) {
  const details = "details" in product ? product.details : undefined;
  const cover = getCoverSource(product.title, product.image, coverOverrides);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="quick-view-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
      <section className="quick-view-modal" role="dialog" aria-modal="true" aria-labelledby="quick-view-title">
        <button className="quick-view-close" type="button" onClick={onClose} aria-label="Fechar visualização rápida"><X size={20} /></button>
        <div className={`quick-view-art ${product.panel}`}><img src={cover} alt={`Capa de ${product.title}`} /></div>
        <div className="quick-view-content">
          <span className="eyebrow">{product.category}</span>
          <h2 id="quick-view-title">{product.title}</h2>
          <p className="quick-view-description">{product.description}</p>
          <ul className="quick-view-bullets">{product.bullets.map((bullet) => <li key={bullet}><Check size={14} /> {bullet}</li>)}</ul>
          {details && <>
            <p className="quick-view-subtitle">{details.subtitle}</p>
            <p className="quick-view-author"><strong>Autor:</strong> {details.author}</p>
            {"gallery" in details && details.gallery && <div className="quick-view-gallery">{details.gallery.map((image, index) => <img key={image} src={image} alt={`${product.title} — imagem ${index + 1}`} />)}</div>}
          </>}
          <div className="quick-view-actions"><a className="button button-coral" href={product.href} target="_blank" rel="noreferrer">Conhecer o e-book <ArrowRight size={15} /></a><button className="button button-outline" type="button" onClick={onClose}>Continuar explorando</button></div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, onQuickView, coverOverrides }: { product: Product; onQuickView: (product: Product) => void; coverOverrides: CoverOverrides }) {
  const contactHref = `${whatsapp}%20${encodeURIComponent(product.message)}`;
  const cover = getCoverSource(product.title, product.image, coverOverrides);
  return (
    <article className="product-card">
      <div className={`card-visual ${product.panel}`}>
        <span className="card-tag">{product.tag}</span><span className="digital-badge">E-book Digital</span>
        <img className={`card-cover ${product.imageClass}`} src={cover} alt={`Mockup de ${product.title}`} />
      </div>
      <div className="card-body">
        <span className="eyebrow">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <ul className="card-list">
          {product.bullets.map((bullet) => (
            <li key={bullet}><Check size={13} /> {bullet}</li>
          ))}
        </ul>
        {"details" in product && product.details && (
          <details className="product-more">
            <summary>Ver conteúdo completo <ChevronDown size={14} /></summary>
            <div className="product-more-body">
              <p className="product-subtitle">{product.details.subtitle}</p>
              <p><strong>Autor:</strong> {product.details.author}</p>
              {"gallery" in product.details && product.details.gallery && <div className="product-gallery">{product.details.gallery.map((image, index) => <img key={`${image}-${index}`} src={image} alt={`${product.title} — imagem editorial ${index + 1}`} />)}</div>}
              <span className="product-more-label">O que você leva</span>
              <ul>{product.details.takeaways.map((item) => <li key={item}><Check size={12} /> {item}</li>)}</ul>
              <span className="product-more-label">Capítulos</span>
              <ol>{product.details.chapters.map((chapter) => <li key={chapter}>{chapter}</li>)}</ol>
            </div>
          </details>
        )}
        <div className="card-bottom">
          <span className="micro-label">CONTEÚDO DIGITAL · COMPRA PELA HOTMART</span>
          <strong>Confira os detalhes <span>na página oficial da oferta</span></strong>
          <div className="card-actions">
            <a className="button button-coral" href={product.href} target="_blank" rel="noreferrer">Quero este e-book <ArrowRight size={14} /></a>
            <button className="quick-view-trigger" type="button" onClick={() => onQuickView(product)}>Visualização rápida</button>
            <a className="card-whatsapp" href={contactHref} target="_blank" rel="noreferrer"><MessageCircle size={14} /> Quero tirar uma dúvida sobre este livro</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function PopularShelf({ onQuickView, coverOverrides }: { onQuickView: (product: Product) => void; coverOverrides: CoverOverrides }) {
  const popularTitles = ["Mindset: A Nova Psicologia do Sucesso", "21 Dias", "Vá cuidar da sua vida"];
  const popular = popularTitles.map((title) => products.find((product) => product.title === title)).filter((product): product is Product => Boolean(product));
  return (
    <section className="popular-section section-shell" aria-labelledby="popular-title">
      <div className="popular-heading">
        <div><span className="eyebrow">CURADORIA DA SEMANA</span><h2 id="popular-title">Os mais <em>populares.</em></h2></div>
        <p>Comece pelas leituras que mais despertam interesse na coleção — escolhidas para diferentes momentos da vida.</p>
      </div>
      <div className="popular-grid">
        {popular.map((product, index) => (
          <div className={`popular-card ${product.title.startsWith("Mindset") ? "popular-card-featured" : ""}`} key={product.title}>
            <span className="popular-rank">0{index + 1}</span>
            <div className={`popular-art ${product.panel}`}><img src={getCoverSource(product.title, product.image, coverOverrides)} alt={`Capa de ${product.title}`} /></div>
            <div className="popular-info"><span className="eyebrow">{product.category}</span><strong>{product.title}</strong><button type="button" onClick={() => onQuickView(product)}>Ver detalhes <ArrowRight size={13} /></button></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  // Evita publicar depoimentos fictícios como se fossem avaliações verificadas.
  return (
    <>
      <div className="testimonials-heading">
        <div><span className="eyebrow">UMA ESCOLHA COM PROPÓSITO</span><h2>Encontre a leitura para o seu <em>momento.</em></h2></div>
        <p>Conheça a proposta de cada material antes de comprar. A coleção reúne temas práticos para desenvolvimento pessoal, fé, família e relacionamentos.</p>
      </div>
      <div className="testimonials-grid">
        <blockquote><div className="stars" aria-hidden="true">01</div><p>Escolha por tema, objetivo ou fase da vida.</p><footer><span className="testimonial-person coral-avatar"><Search size={14} /></span><span><strong>Encontre seu tema</strong><small>Busca e filtros na coleção</small></span></footer></blockquote>
        <blockquote className="testimonial-highlight"><div className="stars" aria-hidden="true">02</div><p>Leia a descrição e veja os tópicos antes de decidir.</p><footer><span className="testimonial-person gold-avatar"><Check size={14} /></span><span><strong>Decida com clareza</strong><small>Informações do material</small></span></footer></blockquote>
        <blockquote><div className="stars" aria-hidden="true">03</div><p>Finalize a compra pela página de checkout da Hotmart.</p><footer><span className="testimonial-person olive-avatar"><MessageCircle size={14} /></span><span><strong>Se precisar, converse</strong><small>Atendimento pelo WhatsApp</small></span></footer></blockquote>
      </div>
    </>
  );
}

function HeroArt({ coverOverrides }: { coverOverrides: CoverOverrides }) {
  const antimedoCover = getCoverSource("Antimedo", `${STORAGE}antimedo-enviado_072f517e.webp`, coverOverrides);
  const codigoCover = getCoverSource("O Código Secreto da Mente Masculina", `${STORAGE}codigo-mente-masculina_c180a497.webp`, coverOverrides);
  return (
    <div className="hero-art" aria-label="Capas em destaque da coleção">
      <div className="hero-orb" />
      <span className="hero-note note-one">feito para você <Heart size={12} fill="currentColor" /></span>
      <div className="hero-book-back" aria-label="Capa do e-book Antimedo">
        <img className="hero-book-image" src={antimedoCover} alt="Capa do e-book Antimedo" />
      </div>
      <div className="hero-book-front" aria-label="Capa do e-book O Código Secreto da Mente Masculina">
        <img className="hero-book-image" src={codigoCover} alt="Capa do e-book O Código Secreto da Mente Masculina" />
      </div>
      <span className="hero-note note-two">leitura com propósito <Sparkles size={12} /></span>
    </div>
  );
}

function LeadCapture() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = `Olá! Quero receber novidades da DigitalQuintino. Nome: ${name}. E-mail: ${email}.`;
    window.open(`https://wa.me/5527995126041?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };
  return (
    <section className="lead-capture" id="digitalquintino-lead-capture">
      <div className="lead-capture-inner">
        <div className="lead-capture-copy"><span className="eyebrow">RECEBA NOVIDADES DA COLEÇÃO</span><h2>Uma leitura certa pode chegar no seu <em>momento.</em></h2><p>Deixe seu contato para receber novidades, lançamentos e conteúdos selecionados da DigitalQuintino.</p></div>
        <form className="lead-capture-form" onSubmit={submit}>
          <label htmlFor="lead-name">Seu nome</label><input required id="lead-name" name="name" placeholder="Como podemos chamar você?" type="text" />
          <label htmlFor="lead-email">Seu melhor e-mail</label><input required id="lead-email" name="email" placeholder="voce@email.com" type="email" />
          <button className="lead-capture-submit" type="submit">{sent ? "Contato recebido" : "Quero receber novidades"} <Mail size={15} /></button>
          <small className="lead-capture-privacy">Ao enviar, você abrirá uma conversa no WhatsApp com os dados preenchidos. Não armazenamos o formulário neste site.</small>
          {sent && <span className="lead-capture-status" role="status">Mensagem preparada. Confira a nova aba do WhatsApp para concluir o envio.</span>}
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todas as categorias");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [coverOverrides, setCoverOverrides] = useState<CoverOverrides>(() => loadCoverOverrides());
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pt-BR");
  const categories = ["Todas as categorias", ...Array.from(new Set(products.map((product) => product.category)))];
  const filteredProducts = products.filter((product) => {
    const matchesSearch = !normalizedSearch || [product.title, product.category, product.description, ...product.bullets].join(" ").toLocaleLowerCase("pt-BR").includes(normalizedSearch);
    const matchesCategory = categoryFilter === "Todas as categorias" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  useEffect(() => {
    const refreshCovers = () => setCoverOverrides(loadCoverOverrides());
    window.addEventListener("digitalquintino:cover-updated", refreshCovers);
    return () => window.removeEventListener("digitalquintino:cover-updated", refreshCovers);
  }, []);
  useEffect(() => {
    const revealSelector = [
      ".hero-copy", ".hero-art", ".promise", ".popular-heading", ".popular-card",
      ".collection > .section-heading", ".collection-toolbar", ".product-card",
      ".testimonials-heading", ".testimonials-grid blockquote", ".featured-book",
      ".quote-section", ".offer-copy", ".offer-card", ".lead-capture-copy",
      ".lead-capture-form", ".faq-section", "footer",
    ].join(", ");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("reveal-enabled");
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 32, 260)}ms`);
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("reveal-enabled");
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-enabled");
    };
  }, []);
  return (
    <main>
      <a className="skip-link" href="#colecao">Pular para a coleção</a>
      <div className="announcement">CONTEÚDO QUE CABE NA VIDA REAL <span>—</span> ACESSO DIGITAL IMEDIATO <span>·</span> COMPRA SEGURA</div>
      <header className="site-header" id="inicio">
        <a className="brand-link" href="#inicio"><Brand /></a>
        <nav className={menuOpen ? "open" : ""} aria-label="Navegação principal">
          <a href="#40-dias" onClick={() => setMenuOpen(false)}>40 Dias com Deus</a><a href="#colecao" onClick={() => setMenuOpen(false)}>Coleção</a><a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        </nav>
        <form className="header-search" role="search" onSubmit={(event) => event.preventDefault()}>
          <Search size={15} aria-hidden="true" />
          <input aria-label="Buscar e-book na coleção" type="search" placeholder="Buscar e-book" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
          {searchTerm && <button type="button" aria-label="Limpar busca" onClick={() => setSearchTerm("")}>×</button>}
        </form>
        <a className="header-contact" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Falar com a gente</a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="inicio-hero">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-copy"><span className="eyebrow">LEITURAS QUE DEIXAM MARCAS BONITAS</span><h1>Um bom livro pode mudar o jeito de <em>viver o dia.</em></h1><p>Escolha uma leitura para cuidar da sua fé, da sua família ou do seu bem-estar. E-books práticos, profundos e feitos para acompanhar você.</p><div className="hero-actions"><a className="button button-dark" href="#colecao">Explorar a coleção <ArrowRight size={15} /></a><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Tirar uma dúvida</a></div><div className="avatar-stack"><span className="avatar coral-avatar">J</span><span className="avatar gold-avatar">M</span><span className="avatar olive-avatar">A</span><span className="avatar forest-avatar">+</span><span>Uma coleção para diferentes momentos</span></div></div>
        <HeroArt coverOverrides={coverOverrides} />
      </section>
      <PopularShelf onQuickView={setQuickViewProduct} coverOverrides={coverOverrides} />

      <section className="collection section-shell" id="colecao">
        <SectionHeading eyebrow="A COLEÇÃO DIGITALQUINTINO" body="Vinte e seis leituras para momentos diferentes. Você escolhe o tema, conhece a proposta e segue para a Hotmart quando estiver pronto.">Escolha a próxima <em>página.</em></SectionHeading>
        <div className="collection-toolbar"><div className="collection-filters"><label htmlFor="category-filter">Filtrar por categoria</label><select id="category-filter" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>{categories.map((category) => <option key={category}>{category}</option>)}</select></div><span className="collection-count" aria-live="polite">{normalizedSearch || categoryFilter !== "Todas as categorias" ? `${filteredProducts.length} resultado${filteredProducts.length === 1 ? "" : "s"}` : `${products.length} e-books para escolher`}</span>{(normalizedSearch || categoryFilter !== "Todas as categorias") && <button type="button" onClick={() => { setSearchTerm(""); setCategoryFilter("Todas as categorias"); }}>Limpar filtros</button>}</div>
        <div className="interest-row" aria-label="Escolha por interesse"><span>Quero cuidar de:</span>{categories.slice(1, 6).map((category) => <button key={category} type="button" className={categoryFilter === category ? "active" : ""} onClick={() => setCategoryFilter(category)}>{category}</button>)}{categoryFilter !== "Todas as categorias" && <button type="button" className="interest-clear" onClick={() => setCategoryFilter("Todas as categorias")}>Todas</button>}</div>
        {filteredProducts.length > 0 ? <div className="product-grid">{filteredProducts.map((product) => <ProductCard product={product} onQuickView={setQuickViewProduct} coverOverrides={coverOverrides} key={product.title} />)}</div> : <div className="empty-results"><Search size={24} /><strong>Nenhum e-book encontrado</strong><p>Tente buscar por outro tema, título ou palavra-chave.</p><button className="button button-outline" type="button" onClick={() => { setSearchTerm(""); setCategoryFilter("Todas as categorias"); }}>Ver toda a coleção</button></div>}
      </section>


      <section className="testimonials section-shell" aria-label="Depoimentos">
        <Testimonials />
      </section>

      <section className="forty-day-feature section-shell" id="40-dias" aria-labelledby="forty-day-title">
        <div className="forty-day-art">
          <span className="forty-day-art-label">UMA JORNADA · UM DIA DE CADA VEZ</span>
          <img src={`${STORAGE}40-dias-com-deus-capa.webp`} alt="Capa do e-book 40 Dias com Deus: A jornada para um Novo Eu em Cristo" />
          <span className="forty-day-art-caption">Versículos · reflexão · oração</span>
        </div>
        <div className="forty-day-copy">
          <span className="eyebrow">NOVA JORNADA DEVOCIONAL</span>
          <h2 id="forty-day-title">40 Dias com <em>Deus.</em></h2>
          <p>Um momento por dia para se aproximar de Deus com versículos bíblicos, reflexão, oração e desafios práticos para levar a fé à vida cotidiana.</p>
          <div className="forty-day-meta" aria-label="O que inclui o e-book">
            <span><strong>40</strong><small>dias de jornada</small></span>
            <span><strong>6</strong><small>etapas temáticas</small></span>
            <span><strong>1</strong><small>passo de cada vez</small></span>
          </div>
          <div className="forty-day-includes"><span>Versículos bíblicos</span><span>Reflexões e orações</span><span>Desafios práticos</span><span>Espaço para anotações</span></div>
          <a className="button button-dark forty-day-cta" href="https://go.hotmart.com/T107963872D" target="_blank" rel="noopener noreferrer">Conhecer o e-book na Hotmart <ArrowRight size={15} /></a>
          <small className="forty-day-note">Confira os detalhes e as condições da oferta na página oficial.</small>
        </div>
      </section>

      <section className="featured-book section-shell" aria-labelledby="featured-book-title"><div className="featured-book-art"><img src={`${STORAGE}codigo-mente-masculina_c180a497.webp`} alt="Capa de O Código Secreto da Mente Masculina" /></div><div className="featured-book-copy"><span className="eyebrow">DESTAQUE DA COLEÇÃO</span><h2 id="featured-book-title">O Código Secreto da <em>Mente Masculina.</em></h2><p>Um guia cristão, prático e sensível para mulheres que desejam restaurar diálogo, confiança e parceria no casamento.</p><div className="featured-book-meta"><span>49 páginas</span><span>7 capítulos</span><span>Plano de 30 dias</span></div><a className="button button-dark" href="https://go.hotmart.com/H107627067J" target="_blank" rel="noreferrer">Conhecer o e-book <ArrowRight size={15} /></a></div></section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>Livros não precisam gritar para transformar. Às vezes, basta uma página certa no momento certo.</blockquote><div className="quote-by"><span /> CURADORIA DIGITALQUINTINO</div></section>

      <section className="offer-section section-shell"><div className="offer-copy"><span className="eyebrow">SEU PRÓXIMO COMEÇO</span><h2>O que você quer cultivar <em>hoje?</em></h2><p>Selecione um dos e-books e siga para o checkout. Se preferir, envie uma mensagem — vamos ajudar você a escolher.</p><div className="hero-actions"><a className="button button-dark" href="https://go.hotmart.com/P107153571O" target="_blank" rel="noreferrer">Comprar “Ensinando a Criança a Orar” <ArrowRight size={15} /></a><a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Pedir ajuda no WhatsApp</a></div></div><div className="offer-card"><span>MAIS ESCOLHIDO ESTA SEMANA</span><img src={`${STORAGE}orar_330d0d6f.webp`} alt="Ensinando a Criança a Orar" /><strong>Ensinando a Criança a Orar</strong><small>Pagamento único · acesso vitalício</small></div></section>

      <LeadCapture />
      {quickViewProduct && <QuickViewModal product={quickViewProduct} coverOverrides={coverOverrides} onClose={() => setQuickViewProduct(null)} />}

      <section className="faq-section section-shell" id="duvidas"><SectionHeading centered eyebrow="TUDO BEM PERGUNTAR" body="Se ainda ficou alguma dúvida, fale com a gente pelo WhatsApp. A mensagem já vai com o resumo do e-book escolhido.">Dúvidas <em>frequentes.</em></SectionHeading><div className="faq-list"><details open><summary>Como recebo meu e-book após a compra? <ChevronDown size={18} /></summary><p>Após a confirmação do pagamento, siga as instruções de acesso apresentadas pela Hotmart para o produto comprado.</p></details><details><summary>Posso ler no celular ou tablet? <ChevronDown size={18} /></summary><p>Sim. Os arquivos são digitais e foram pensados para funcionar no celular, tablet, computador e leitores digitais.</p></details><details><summary>As condições de compra são iguais para todos os e-books? <ChevronDown size={18} /></summary><p>Não necessariamente. Confira preço, forma de pagamento, acesso e demais condições na página oficial de cada oferta antes de concluir a compra.</p></details><details><summary>Há garantia ou possibilidade de reembolso? <ChevronDown size={18} /></summary><p>As regras podem variar conforme a oferta. Consulte os prazos e as condições exibidos na página oficial do produto na Hotmart.</p></details><details><summary>Preciso escolher um e-book específico agora? <ChevronDown size={18} /></summary><p>Não. Você pode explorar a coleção e conversar conosco antes de decidir.</p></details></div></section>

      <footer><div className="footer-brand"><a className="brand-link" href="#inicio"><Brand /></a><p>Leituras para viver com mais presença.</p></div><div className="footer-links"><a href="#colecao">Coleção</a><a href="#duvidas">Dúvidas</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div><div className="footer-legal">© 2026 DigitalQuintino · Conteúdo digital</div></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><MessageCircle size={24} /></a>
    </main>
  );
}
