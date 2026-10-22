import { useEffect } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Feather,
  Flag,
  Layers3,
  Menu,
  NotebookPen,
  Sparkles,
  Target,
  Timer,
} from "lucide-react";
import "./TriadeDoTempo.css";

const coverImage = "/assets/triade-do-tempo-cover-lite.webp";
const kiwifyCheckoutUrl = "https://pay.kiwify.com.br/geaafqF";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Identidade",
    text: "Reconheça o que importa para você e os valores que quer levar para a rotina.",
  },
  {
    number: "02",
    icon: Target,
    title: "Metas",
    text: "Dê direção ao seu tempo com objetivos que façam sentido na vida pessoal e profissional.",
  },
  {
    number: "03",
    icon: NotebookPen,
    title: "Planejamento",
    text: "Transforme objetivos em um caminho possível, organizado em etapas.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Organização",
    text: "Prepare sua agenda, seus compromissos e suas ferramentas para apoiar suas prioridades.",
  },
  {
    number: "05",
    icon: Feather,
    title: "Execução",
    text: "Coloque o plano em prática e faça escolhas conscientes diante das demandas do dia.",
  },
];

const faqs = [
  {
    question: "O que significa a Tríade do Tempo?",
    answer:
      "É uma forma de observar como o tempo se divide entre atividades urgentes, importantes e circunstanciais. O livro usa essas três esferas para ajudar o leitor a refletir sobre as próprias escolhas e prioridades.",
  },
  {
    question: "Preciso usar um aplicativo específico?",
    answer:
      "Não. O livro explica que a metodologia pode ser aplicada com ferramentas que você já usa, como caderno, agenda, smartphone ou software. O uso de um programa específico é opcional.",
  },
  {
    question: "Quais assuntos o livro aborda?",
    answer:
      "A metodologia é apresentada em cinco fases: identidade, metas, planejamento, organização e execução. O livro também discute as escolhas que influenciam a forma como usamos o tempo.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Ao selecionar “Comprar na Kiwify”, você será encaminhado para a página de pagamento informada.",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="15.25" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="9.5" stroke="currentColor" strokeWidth="1.2" opacity=".7" />
        <circle cx="20" cy="20" r="3.2" fill="currentColor" />
        <path d="M20 1.8v7.4M38.2 20h-7.4M20 38.2v-7.4M1.8 20h7.4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </span>
  );
}

function PurchaseButton() {
  return (
    <a
      className="button button-gold"
      href={kiwifyCheckoutUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Comprar na Kiwify <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

export default function TriadeDoTempo() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = "A Tríade do Tempo | Christian Barbosa — DigitalQuintino";
    if (description) {
      description.content =
        "Conheça A Tríade do Tempo, de Christian Barbosa, e a metodologia que organiza as atividades em urgentes, importantes e circunstanciais.";
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <div className="triade-landing">
      <div className="site-shell">
      <a className="skip-link" href="#main-content">Ir para o conteúdo</a>

      <div className="topline">
        <span>Uma nova forma de olhar para o seu tempo começa com uma escolha.</span>
        <a href="#metodo">Conheça a metodologia <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="A Tríade do Tempo, início">
          <BrandMark />
          <span className="brand-name">A Tríade <i>do Tempo</i></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#metodo">A metodologia</a>
          <a href="#conteudo">O que você vai encontrar</a>
          <a href="#prefacio">Prefácio</a>
        </nav>
        <a className="header-cta" href="#comprar">Ver o e-book <ArrowUpRight size={16} aria-hidden="true" /></a>
        <details className="mobile-nav"><summary aria-label="Abrir menu de navegação"><Menu size={23} /></summary><nav aria-label="Navegação móvel"><a href="#metodo">A metodologia</a><a href="#conteudo">O que você vai encontrar</a><a href="#prefacio">Prefácio</a><a href="#comprar">Ver o e-book</a></nav></details>
      </header>

      <main id="main-content">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Um livro sobre escolhas e prioridades</p>
            <h1 id="hero-title">Sua agenda está cheia. <em>O que merece o seu tempo?</em></h1>
            <p className="hero-lede">
              Em <i>A Tríade do Tempo</i>, Christian Barbosa apresenta uma metodologia para observar a rotina por três esferas: o urgente, o importante e o circunstancial.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#metodo">Conhecer a metodologia <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="text-link" href="#comprar">Ver detalhes do e-book <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="hero-note">
              <span className="note-icon"><Clock3 size={17} aria-hidden="true" /></span>
              <p>Um convite a repensar como você distribui o tempo entre as demandas do dia e aquilo que considera importante.</p>
            </div>
          </div>

          <div className="hero-art" aria-label="Capa de divulgação do e-book A Tríade do Tempo">
            <div className="art-orbit orbit-one" aria-hidden="true" />
            <div className="art-orbit orbit-two" aria-hidden="true" />
            <div className="cover-frame">
              <img src={coverImage} alt="Capa cinematográfica do e-book A Tríade do Tempo, de Christian Barbosa" />
              <div className="cover-glint" aria-hidden="true" />
            </div>
            <div className="art-index"><span>01</span><span>Uma escolha de cada vez</span></div>
            <div className="art-caption"><span className="caption-dot" /> Método, reflexão e prática no seu ritmo</div>
          </div>
          <a className="scroll-cue" href="#tres-esferas"><span>Role para descobrir</span><ArrowDown size={15} aria-hidden="true" /></a>
        </section>

        <section className="intro-band" aria-label="Sobre o livro">
          <div className="intro-band-label"><span className="gold-rule" /> A ideia central</div>
          <p>Gerenciar o tempo começa por perceber <em>onde suas escolhas estão levando você.</em></p>
          <span className="intro-band-mark" aria-hidden="true">“</span>
        </section>

        <section className="triad-section section-pad" id="tres-esferas" aria-labelledby="triad-title">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> Três esferas. Um novo olhar.</p>
            <h2 id="triad-title">Nem tudo que ocupa o dia <em>tem o mesmo peso.</em></h2>
            <p className="section-intro">A metodologia propõe que você identifique a natureza das atividades que consomem seu tempo, em vez de tratar cada tarefa como se fosse igualmente prioritária.</p>
          </div>
          <div className="sphere-list">
            <article className="sphere-card sphere-urgent">
              <div className="sphere-number">01 <span> / 03</span></div>
              <div className="sphere-icon"><Timer size={22} strokeWidth={1.5} aria-hidden="true" /></div>
              <div className="sphere-copy"><h3>Urgente</h3><p>O que pede atenção imediata e costuma trazer um prazo curto ou uma consequência próxima.</p></div>
              <span className="sphere-orb" aria-hidden="true" />
            </article>
            <article className="sphere-card sphere-important">
              <div className="sphere-number">02 <span> / 03</span></div>
              <div className="sphere-icon"><Flag size={22} strokeWidth={1.5} aria-hidden="true" /></div>
              <div className="sphere-copy"><h3>Importante</h3><p>O que se conecta com objetivos, valores e resultados que têm significado para você.</p></div>
              <span className="sphere-orb" aria-hidden="true" />
            </article>
            <article className="sphere-card sphere-circumstantial">
              <div className="sphere-number">03 <span> / 03</span></div>
              <div className="sphere-icon"><Sparkles size={22} strokeWidth={1.5} aria-hidden="true" /></div>
              <div className="sphere-copy"><h3>Circunstancial</h3><p>O que aparece no cotidiano sem contribuir de forma relevante para suas prioridades.</p></div>
              <span className="sphere-orb" aria-hidden="true" />
            </article>
          </div>
          <p className="section-footnote"><span>*</span> As definições acima resumem a proposta apresentada no livro. A aplicação e os resultados dependem das escolhas e da prática de cada leitor.</p>
        </section>

        <section className="method-section" id="metodo" aria-labelledby="method-title">
          <div className="method-image" role="img" aria-label="Anéis dourados evocam os ciclos da rotina e as escolhas de prioridade">
            <div className="method-image-overlay" />
            <div className="method-image-quote"><span>Uma vida mais equilibrada</span><span>começa com uma pergunta:</span><strong>o que é importante agora?</strong></div>
            <span className="method-image-caption">A TRÍADE DO TEMPO · CHRISTIAN BARBOSA</span>
          </div>
          <div className="method-content">
            <p className="eyebrow"><span className="eyebrow-line" /> Da reflexão à rotina</p>
            <h2 id="method-title">Um caminho em <em>cinco etapas.</em></h2>
            <p className="method-intro">Na segunda parte do livro, a metodologia ganha forma prática. Cada etapa ajuda a pensar a relação entre identidade, metas e o uso cotidiano do tempo.</p>
            <div className="step-list">
              {steps.map(({ number, icon: Icon, title, text }) => (
                <article className="step-row" key={number}>
                  <span className="step-number">{number}</span>
                  <span className="step-icon"><Icon size={19} strokeWidth={1.6} aria-hidden="true" /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-pad" id="conteudo" aria-labelledby="content-title">
          <div className="content-side">
            <p className="eyebrow"><span className="eyebrow-line" /> Dentro do livro</p>
            <h2 id="content-title">Menos fórmula pronta. <em>Mais consciência sobre a sua rotina.</em></h2>
            <p>O livro parte de uma pergunta simples: que escolhas estão moldando o seu dia? A partir dela, apresenta conceitos, exemplos e etapas que você pode adaptar à sua realidade.</p>
            <a className="text-link dark-link" href="#comprar">Ver informações do e-book <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="content-points">
            <div className="content-point"><span className="point-number">01</span><div><h3>Olhar para o presente</h3><p>Reflita sobre seus hábitos e sobre o que hoje ocupa espaço na sua agenda.</p></div><Check size={17} aria-hidden="true" /></div>
            <div className="content-point"><span className="point-number">02</span><div><h3>Escolher com intenção</h3><p>Relacione seu uso do tempo com objetivos que importam na sua vida.</p></div><Check size={17} aria-hidden="true" /></div>
            <div className="content-point"><span className="point-number">03</span><div><h3>Aplicar ferramentas simples</h3><p>Use papel, agenda, smartphone ou o software que já faz parte da sua rotina.</p></div><Check size={17} aria-hidden="true" /></div>
            <div className="content-point"><span className="point-number">04</span><div><h3>Adaptar à sua realidade</h3><p>Experimente as ideias e ajuste o método às demandas do seu dia a dia.</p></div><Check size={17} aria-hidden="true" /></div>
          </div>
        </section>

        <section className="quote-section" id="prefacio" aria-labelledby="quote-title">
          <div className="quote-deco" aria-hidden="true">“</div>
          <div className="quote-content">
            <p className="eyebrow"><span className="eyebrow-line" /> Uma experiência registrada no prefácio</p>
            <h2 id="quote-title">“O livro, porém, mudou meu jeito de lidar com a agenda.”</h2>
            <div className="quote-attribution"><span className="quote-rule" /><div><strong>Gustavo Cerbasi</strong><span>Trecho do prefácio desta edição</span></div></div>
            <p className="quote-context">O prefácio relata como a aplicação da metodologia ajudou o autor a rever compromissos e a organizar a semana. Este é um relato pessoal registrado no próprio livro, não uma garantia de resultado para outros leitores.</p>
          </div>
          <div className="quote-side-note"><span>01</span><span>Prefácio</span><span>Gustavo Cerbasi</span></div>
        </section>

        <section className="author-section section-pad" aria-labelledby="author-title">
          <div className="author-monogram" aria-hidden="true"><span>C</span><span>B</span><i /></div>
          <div className="author-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Sobre o autor</p>
            <h2 id="author-title">Christian <em>Barbosa</em></h2>
            <p>Autor de <i>A Tríade do Tempo</i>, Christian Barbosa apresenta neste livro uma metodologia que desenvolveu a partir de sua experiência com produtividade, consultoria e pesquisa sobre a forma como as pessoas usam o tempo.</p>
            <p>O material propõe uma abordagem prática e pode ser aplicado com diferentes ferramentas, sem exigir um software específico.</p>
          </div>
          <div className="author-detail"><span>Livro</span><strong>A Tríade<br />do Tempo</strong><span>Método de gestão<br />do tempo</span></div>
        </section>

        <section className="offer-section" id="comprar" aria-labelledby="offer-title">
          <div className="offer-backdrop" aria-hidden="true" />
          <div className="offer-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Para ler e colocar em prática</p>
            <h2 id="offer-title">Seu tempo merece <em>uma escolha consciente.</em></h2>
            <p>Conheça a metodologia completa no livro de Christian Barbosa e descubra como ela conversa com a sua rotina.</p>
            <ul className="offer-list">
              <li><Check size={17} aria-hidden="true" /> As três esferas da Tríade do Tempo</li>
              <li><Check size={17} aria-hidden="true" /> As cinco etapas da metodologia</li>
              <li><Check size={17} aria-hidden="true" /> Aplicação com ferramentas à sua escolha</li>
            </ul>
          </div>
          <div className="offer-card">
            <div className="offer-card-top"><span>E-BOOK</span><span>01 / DIGITAL</span></div>
            <div className="offer-card-cover"><img src={coverImage} alt="Capa de A Tríade do Tempo" /></div>
            <h3>A Tríade do Tempo</h3>
            <p>Christian Barbosa</p>
            <div className="format-seal"><span className="seal-ring"><NotebookPen size={19} strokeWidth={1.5} aria-hidden="true" /></span><span><strong>Formato digital</strong><small>Leitura digital</small></span></div>
            <PurchaseButton />
            <p className="checkout-note">Ao continuar, você será direcionado para a página de pagamento da Kiwify.</p>
            <span className="offer-safe-note"><Check size={13} aria-hidden="true" /> Informações baseadas no conteúdo do livro</span>
          </div>
        </section>

        <section className="faq-section section-pad" aria-labelledby="faq-title">
          <div className="faq-heading"><p className="eyebrow"><span className="eyebrow-line" /> Dúvidas frequentes</p><h2 id="faq-title">Antes de começar, <em>vale saber.</em></h2></div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>{item.question}<ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio"><BrandMark /><span className="brand-name">A Tríade <i>do Tempo</i></span></a>
        <p>Uma página de apresentação do e-book <i>A Tríade do Tempo</i>, de Christian Barbosa.</p>
        <div className="footer-meta"><span>Conteúdo fiel ao material fornecido.</span><a href="#inicio">Voltar ao início ↑</a></div>
      </footer>
      <div className="mobile-buy-bar"><span>A Tríade do Tempo <small>e-book digital</small></span><a href="#comprar">Ver e-book <ArrowUpRight size={15} /></a></div>
    </div>
    </div>
  );
}
