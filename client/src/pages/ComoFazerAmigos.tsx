import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, HeartHandshake, MessageCircle, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";
import "./ComoFazerAmigos.css";

const checkoutUrl = "https://pay.kiwify.com.br/MQpLgSg";
const coverImage = "/assets/como-fazer-amigos-e-influenciar-pessoas-lite.webp";

const benefits = [
  { icon: MessageCircle, title: "Conversas que aproximam", text: "Aprenda a ouvir melhor, fazer perguntas mais interessantes e deixar a conversa fluir com naturalidade." },
  { icon: HeartHandshake, title: "Relações com mais confiança", text: "Pequenos ajustes no jeito de tratar as pessoas podem mudar a qualidade dos seus vínculos." },
  { icon: UsersRound, title: "Influência sem forçar", text: "Expresse suas ideias com clareza e conquiste cooperação sem precisar parecer outra pessoa." },
];

const practices = [
  "Demonstrar interesse genuíno sem soar artificial",
  "Lidar com discordâncias sem transformar tudo em disputa",
  "Fazer com que suas ideias sejam mais bem recebidas",
  "Criar conexões mais leves no trabalho e na vida pessoal",
  "Despertar entusiasmo em vez de cobrar atenção",
  "Falar com mais segurança em situações importantes",
];

export default function ComoFazerAmigos() {
  return (
    <main className="friends-landing">
      <div className="friends-announcement"><span /> Uma leitura clássica para relações mais humanas</div>
      <header className="friends-nav">
        <Link href="/" className="friends-brand"><span className="friends-brand-mark"><BookOpen size={17} /></span><span>DIGITAL <em>QUINTINO</em></span></Link>
        <Link href="/" className="friends-back"><ArrowLeft size={15} /> Voltar para a coleção</Link>
      </header>

      <section className="friends-hero">
        <div className="friends-hero-glow" />
        <div className="friends-container friends-hero-grid">
          <div className="friends-copy">
            <p className="friends-eyebrow"><Sparkles size={14} /> Relações que fazem diferença</p>
            <h1>Ser ouvido começa por <i>ouvir melhor.</i></h1>
            <p className="friends-lead">Um guia direto e atemporal para conversar com mais presença, criar vínculos verdadeiros e influenciar pessoas com respeito.</p>
            <div className="friends-actions"><a className="friends-button friends-button-gold" href={checkoutUrl} target="_blank" rel="noreferrer">Quero acessar o e-book <ArrowRight size={17} /></a><a className="friends-text-link" href="#proposta">Conhecer a proposta <ArrowRight size={15} /></a></div>
            <p className="friends-note"><ShieldCheck size={16} /> Checkout seguro pela Kiwify.</p>
          </div>
          <div className="friends-visual"><div className="friends-cover-halo" /><img src={coverImage} alt="Capa do e-book Como Fazer Amigos e Influenciar Pessoas" /></div>
        </div>
      </section>

      <section id="proposta" className="friends-light friends-intro">
        <div className="friends-container friends-intro-grid"><div className="friends-section-number">01 <span>O ponto de partida</span></div><div><h2>Você não precisa falar mais alto. Precisa fazer mais sentido.</h2><div className="friends-intro-columns"><p>Existe uma diferença enorme entre estar em uma conversa e realmente estar presente nela. Muitas oportunidades se perdem por pressa, orgulho ou pela vontade de responder antes de entender.</p><p>Este e-book reúne princípios simples para sair do automático. Nada de frases prontas ou fórmulas mágicas. A proposta é observar melhor as pessoas, escolher melhor as palavras e construir relações mais conscientes.</p></div></div></div>
      </section>

      <section className="friends-practice"><div className="friends-container"><div className="friends-centered"><p className="friends-eyebrow"><BookOpen size={14} /> Leitura aplicada</p><h2>Ideias que continuam úteis<br /><i>muito depois da última página.</i></h2><p>O valor está no que muda na próxima conversa. Você vai encontrar princípios para praticar em situações reais, sem complicar.</p></div><div className="friends-practice-grid"><article className="friends-practice-card"><span className="friends-circle">A</span><h3>Relacionamentos mais leves começam em atitudes pequenas.</h3><p>Ouvir com atenção. Reconhecer o esforço do outro. Saber discordar sem diminuir ninguém. É desse lugar que a influência saudável nasce.</p><a href={checkoutUrl} target="_blank" rel="noreferrer">Quero ler com calma <ArrowRight size={15} /></a></article><div className="friends-practice-list">{practices.map((practice) => <div key={practice}><span><Check size={13} /></span><p>{practice}</p></div>)}</div></div></div></section>

      <section className="friends-light friends-benefits"><div className="friends-container"><div className="friends-heading"><div><p className="friends-eyebrow"><Sparkles size={14} /> O que muda na prática</p><h2>Mais presença nas suas relações.</h2></div></div><div className="friends-benefits-grid">{benefits.map(({ icon: Icon, title, text }) => <article key={title}><span className="friends-benefit-icon"><Icon size={19} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="friends-quote"><div className="friends-container"><span className="friends-quote-mark">“</span><blockquote>O nome de uma pessoa é, para ela, o som mais doce e importante em qualquer idioma.</blockquote><p>Uma das ideias que atravessam a obra de Dale Carnegie</p></div></section>

      <section className="friends-light friends-offer" id="comprar"><div className="friends-container friends-offer-grid"><div><p className="friends-eyebrow"><BookOpen size={14} /> Sua próxima leitura</p><h2>Comece pela conversa que você ainda pode melhorar.</h2><p className="friends-offer-copy">Tenha acesso ao e-book e volte a ele sempre que precisar reorganizar a forma como se comunica.</p><div className="friends-checks"><span><Check size={14} /> Leitura digital</span><span><Check size={14} /> Acesso no seu ritmo</span><span><Check size={14} /> Conteúdo atemporal</span></div></div><div className="friends-checkout"><div className="friends-checkout-top"><span>COMO FAZER AMIGOS</span><small>E-BOOK</small></div><h3>Comunicação, confiança e influência nas relações.</h3><p>Continue para a página segura de pagamento.</p><a className="friends-button friends-button-gold" href={checkoutUrl} target="_blank" rel="noreferrer">Continuar para o pagamento <ArrowRight size={17} /></a><span className="friends-secure"><ShieldCheck size={14} /> Compra segura pela Kiwify</span></div></div></section>

      <section className="friends-light friends-faq"><div className="friends-container friends-faq-grid"><div><p className="friends-eyebrow"><MessageCircle size={14} /> Antes de começar</p><h2>Ficou com alguma dúvida?</h2><p>Veja as respostas mais importantes antes de decidir.</p></div><div>{[{ q: "Para quem este e-book é indicado?", a: "Para quem deseja se comunicar melhor em relações pessoais ou profissionais e construir conversas com mais confiança." }, { q: "Preciso ter experiência com comunicação?", a: "Não. A leitura parte de situações comuns e apresenta princípios que podem ser praticados desde a primeira conversa." }, { q: "Como recebo o acesso?", a: "Depois da confirmação do pagamento, a Kiwify apresenta as instruções de acesso na página da compra." }].map((item) => <details key={item.q}><summary>{item.q}<ChevronDown size={17} /></summary><p>{item.a}</p></details>)}</div></div></section>

      <footer className="friends-footer"><div className="friends-container"><Link href="/" className="friends-brand"><span className="friends-brand-mark"><BookOpen size={17} /></span><span>DIGITAL <em>QUINTINO</em></span></Link><p>Conteúdo digital para desenvolver relações mais humanas.</p></div></footer>
      <a className="friends-mobile-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Quero acessar o e-book <ArrowRight size={16} /></a>
    </main>
  );
}
