import { useEffect } from "react";
import "./PiorAnoDaSuaVida.css";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Compass,
  Feather,
  Flame,
  Target,
  Sparkles,
} from "lucide-react";

const coverImage = "https://piorano-jdavg4xc.manus.space/manus-storage/async-images/yiAjAsOgIZKSQEW82mPTed/image-1.webp";
const paymentUrl = "https://pay.kiwify.com.br/ILln18s";

const chapters = [
  { icon: Feather, title: "Viver o simples", text: "Trocar a busca pela perfeição por passos possíveis e consistentes." },
  { icon: Target, title: "Escrever e definir alvos", text: "Colocar ideias no papel e escolher com mais clareza para onde ir." },
  { icon: Compass, title: "Mudar hábitos e escolhas", text: "Rever rotinas, autogoverno e crenças que influenciam suas decisões." },
  { icon: Flame, title: "Agir com intenção", text: "Sair da espera, fazer as tarefas e ajustar o caminho enquanto avança." },
  { icon: Sparkles, title: "Propósito e imaginação", text: "Olhar para dentro, ampliar possibilidades e dar direção aos planos." },
  { icon: BookOpen, title: "Relações e aprendizado", text: "Refletir sobre associações, modelagem e as sementes que você cultiva." },
];

const topics = [
  "Simplicidade e perfeccionismo",
  "Escrita e clareza de objetivos",
  "Hábitos e autogoverno",
  "Crenças e propósito",
  "Relacionamentos e associações",
  "Imaginação e ferramentas mentais",
  "Ações rápidas e tarefas práticas",
  "Metas, indicadores e ação",
  "Referências cristãs no encerramento",
];

function PurchaseLink({ className = "button button-gold" }: { className?: string }) {
  if (paymentUrl) {
    return (
      <a className={className} href={paymentUrl} target="_blank" rel="noopener noreferrer">
        Continuar para pagamento <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    );
  }
  return (
    <a className={className} href="#adquirir">
      Conhecer o e-book <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

export default function PiorAnoDaSuaVida() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = "O Pior Ano da Sua Vida: O Destravar de uma Década | DigitalQuintino";
    if (description) description.content = "E-book de Pablo Marçal com reflexões e tarefas práticas sobre hábitos, escolhas, metas e propósito.";
    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, []);

  return (
    <div className="piorano-landing">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="O Pior Ano da Sua Vida, início">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">O PIOR ANO <i>DA SUA VIDA</i></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">O livro</a>
          <a href="#conteudo">Conteúdo</a>
          <a href="#depoimentos">Leitores</a>
        </nav>
        <a className="header-cta" href="#adquirir">Ver o e-book <ArrowUpRight size={15} aria-hidden="true" /></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> UM CONVITE À AÇÃO</div>
            <h1>O próximo capítulo começa quando você <em>para de adiar.</em></h1>
            <p className="hero-lead">
              Em <strong>O Pior Ano da Sua Vida</strong>, Pablo Marçal propõe um ano de ação,
              reflexão e tarefas práticas para rever hábitos, escolhas e metas. Um convite
              direto a começar pelo que está ao seu alcance, hoje.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#sobre">Conheça a proposta <ArrowRight size={17} aria-hidden="true" /></a>
              <a className="text-link" href="#conteudo">Ver os temas <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <div className="hero-proof" aria-label="Informações do e-book">
              <div><span className="proof-number">20</span><span>capítulos</span></div>
              <div><span className="proof-number">170</span><span>páginas no PDF</span></div>
              <div><span className="proof-number proof-word">E-book</span><span>edição 1 · volume 1</span></div>
            </div>
          </div>

          <div className="hero-art-wrap">
            <div className="art-glow" aria-hidden="true" />
            <figure className="book-art">
              <img src={coverImage} width={768} height={1024} fetchPriority="high" alt="Capa promocional do e-book O Pior Ano da Sua Vida, de Pablo Marçal" />
            </figure>
            <div className="edition-seal" aria-label="Edição 1, volume 1, 20 capítulos">
              <span className="seal-top">E-BOOK</span>
              <span className="seal-number">20</span>
              <span className="seal-bottom">CAPÍTULOS</span>
            </div>
            <div className="art-caption"><span /> UMA LEITURA SOBRE ESCOLHAS E MOVIMENTO</div>
          </div>
          <div className="hero-index" aria-hidden="true">01 / 04</div>
        </section>

        <section className="manifesto" id="sobre">
          <div className="section-kicker">A IDEIA CENTRAL</div>
          <div className="manifesto-grid">
            <h2>O “pior ano” não é um castigo.<br /><em>É o ano de encarar o que precisa mudar.</em></h2>
            <div className="manifesto-text">
              <p>O livro parte de uma provocação: antes de colher resultados diferentes, talvez seja preciso atravessar um período de esforço, revisão e escolhas conscientes.</p>
              <p>Em vez de esperar pelas condições ideais, o leitor é chamado a agir com o que tem, fazer as tarefas propostas e ajustar o percurso ao longo do caminho.</p>
              <a className="inline-link" href="#conteudo">Veja o que o livro aborda <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="manifesto-rule"><span>FAZER</span><i /> <span>CORRIGIR</span><i /> <span>ADAPTAR</span></div>
        </section>

        <section className="approach-section">
          <div className="approach-heading">
            <div className="section-kicker">UMA LEITURA PARA COLOCAR EM PRÁTICA</div>
            <h2>Menos espera.<br /><em>Mais movimento.</em></h2>
            <p>Os capítulos combinam reflexões com tarefas. A proposta é ler, parar, pensar e levar uma ideia para a vida real, no seu ritmo.</p>
            <PurchaseLink />
          </div>
          <div className="approach-list">
            {chapters.map(({ icon: Icon, title, text }, index) => (
              <article className="approach-card" key={title}>
                <span className="card-index">0{index + 1}</span>
                <span className="card-icon"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <Check className="card-check" size={17} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="topics-section" id="conteudo">
          <div className="topics-header">
            <div>
              <div className="section-kicker">DENTRO DO E-BOOK</div>
              <h2>Temas que pedem<br /><em>uma pausa e uma decisão.</em></h2>
            </div>
            <p>Os tópicos abaixo sintetizam temas do sumário e do conteúdo desta edição. O livro percorre escolhas pessoais, metas e práticas para sair da inércia.</p>
          </div>
          <div className="topics-grid">
            {topics.map((topic, index) => (
              <div className="topic-row" key={topic}>
                <span>/{String(index + 1).padStart(2, "0")}</span><p>{topic}</p><ArrowUpRight size={15} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="topics-note"><BookOpen size={17} aria-hidden="true" /> E-book em PDF, 20 capítulos no conteúdo, edição 1, volume 1. A edição também inclui referências cristãs.</div>
        </section>

        <section className="reader-section" id="depoimentos">
          <div className="reader-mark" aria-hidden="true">“</div>
          <div className="reader-content">
            <div className="section-kicker">ESPAÇO DO LEITOR</div>
            <h2>Opiniões de leitores,<br /><em>com nome e contexto.</em></h2>
            <p>Este espaço está reservado para avaliações reais, publicadas com autorização. Ainda não recebemos depoimentos verificados para esta página, por isso não exibimos citações fictícias.</p>
            <span className="reader-status"><span /> DEPOIMENTOS VERIFICADOS SERÃO INSERIDOS AQUI</span>
          </div>
          <div className="reader-count"><span>01</span><small>ESPAÇO ABERTO<br />A LEITORES REAIS</small></div>
        </section>

        <section className="purchase-section" id="adquirir">
          <div className="purchase-orbit orbit-one" aria-hidden="true" />
          <div className="purchase-orbit orbit-two" aria-hidden="true" />
        <div className="purchase-content">
          <div className="section-kicker">SEU PRÓXIMO PASSO</div>
          <h2>Comece pelo que<br />está <em>ao seu alcance.</em></h2>
            <p>Use o botão para seguir à página de pagamento da Kiwify e conferir os detalhes da oferta.</p>
            {paymentUrl ? (
              <PurchaseLink />
            ) : (
              <div className="link-not-configured">
                <span className="status-dot" />
                <span>O link de pagamento da Kiwify ainda não foi configurado nesta página.</span>
              </div>
            )}
            <small className="purchase-note">Você sairá deste site e continuará na página de pagamento da Kiwify. Confira o produto, o preço e as condições antes de pagar.</small>
          </div>
          <div className="purchase-facts">
            <div><span>01</span><p>Leitura digital<br />em PDF</p></div>
            <div><span>02</span><p>20 capítulos<br />no conteúdo</p></div>
            <div><span>03</span><p>Reflexões e<br />tarefas práticas</p></div>
          </div>
        </section>

        <section className="author-note">
          <span className="author-symbol">PM</span>
          <p><span>O PIOR ANO DA SUA VIDA</span><br />E-book de Pablo Marçal. Edição 1 · Volume 1.</p>
          <a href="#inicio">Voltar ao início <ArrowUpRight size={14} aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} · Página informativa do e-book</span>
        <span>Sem promessa de resultado automático. A experiência depende da leitura e da aplicação individual.</span>
      </footer>
    </div>
  );
}
