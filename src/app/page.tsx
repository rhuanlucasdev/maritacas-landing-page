import type { IconType } from "react-icons";
import {
  FaCocktail,
  FaDog,
  FaFire,
  FaGoogle,
  FaHome,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaUtensils,
  FaWhatsapp,
} from "react-icons/fa";
import {
  GiBananaPeeled,
  GiFriedEggs,
  GiMeal,
  GiPig,
  GiSlicedBread,
} from "react-icons/gi";

const whatsappUrl = "https://wa.me/5535998851550";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=R.%20Ant%C3%B4nio%20Mota%20da%20Silva%2C%2001%20-%20Costas%2C%20Gon%C3%A7alves%20-%20MG";

const navItems = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Sabores", href: "#sabores" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

const badges: Array<{ label: string; icon: IconType }> = [
  { label: "4,9 no Google", icon: FaStar },
  { label: "711 avaliações", icon: FaGoogle },
  { label: "R$ 60-140 por pessoa", icon: FaUtensils },
  { label: "Pet Friendly", icon: FaDog },
];

const dishes = [
  {
    title: "Costelinha de porco",
    text: "Clássico da mesa mineira, servido com sabor caseiro e preparo cuidadoso.",
    icon: GiPig,
  },
  {
    title: "Risoto de limão",
    text: "Uma opção marcante para quem busca frescor, cremosidade e delicadeza.",
    icon: FaLeaf,
  },
  {
    title: "Tutu, arroz, couve e ovo",
    text: "Conforto de roça em uma composição simples, generosa e cheia de memória.",
    icon: GiFriedEggs,
  },
  {
    title: "Banana frita",
    text: "Aquele detalhe dourado que transforma acompanhamentos em lembrança afetiva.",
    icon: GiBananaPeeled,
  },
  {
    title: "Coquetéis e happy hour",
    text: "Bebidas bem servidas para esticar a visita com calma e boa conversa.",
    icon: FaCocktail,
  },
  {
    title: "Comida mineira caseira",
    text: "Ingredientes frescos e receitas honestas, preparadas sem pressa.",
    icon: GiMeal,
  },
];

const atmosphere: Array<{ label: string; icon: IconType }> = [
  { label: "Lareira", icon: FaFire },
  { label: "Ambiente acolhedor", icon: FaHome },
  { label: "Pet Friendly", icon: FaDog },
  { label: "Ótimos coquetéis", icon: FaCocktail },
  { label: "Pratos para happy hour", icon: GiSlicedBread },
];

const testimonials = [
  {
    quote: "Lugar com decoração que faz jus à bela paisagem mineira ao redor.",
    author: "Cláudia Lessa",
  },
  {
    quote:
      "Tudo perfeito, costelinha de porco, banana frita, o tutu, arroz, couve e ovo.",
    author: "Rafael Castilho",
  },
  {
    quote:
      "Excelente ambiente e comida, o risoto de Limão vale a pena experimentar.",
    author: "Júlio Carmazen",
  },
];

function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="font-serif text-lg italic text-[var(--accent-strong)] sm:text-xl">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance font-serif text-4xl leading-[1.03] text-[var(--text)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-pretty text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  ariaLabel,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  icon?: IconType;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full border border-[var(--primary-dark)] bg-[var(--primary)] px-6 py-4 text-center text-sm font-black uppercase text-[#fff8ec] shadow-[6px_6px_0_rgba(79,38,22,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] hover:shadow-[4px_4px_0_rgba(79,38,22,0.22)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)] sm:w-auto sm:px-7"
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: IconType;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full border border-[rgba(79,38,22,0.35)] bg-transparent px-6 py-4 text-center text-sm font-black uppercase text-[var(--primary-dark)] transition duration-300 hover:-translate-y-0.5 hover:bg-[rgba(255,253,247,0.62)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)] sm:w-auto sm:px-7"
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
      {children}
    </a>
  );
}

function VisualPlate({ label }: { label: string }) {
  return (
    <div className="relative rotate-[-1deg] overflow-hidden rounded-[1.25rem] border border-[rgba(79,38,22,0.22)] bg-[#f5e4c5] p-3 shadow-[0_24px_70px_rgba(79,38,22,0.18)]">
      <div className="photo-weave relative min-h-[360px] overflow-hidden rounded-[0.9rem] border border-[rgba(79,38,22,0.18)] sm:min-h-[460px] lg:min-h-[600px]">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(47,36,28,0.42),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(0deg,rgba(47,36,28,0.72),transparent)]" />
        <div className="absolute left-5 top-5 max-w-[calc(100%-2.5rem)] border border-[rgba(255,248,236,0.55)] bg-[rgba(47,36,28,0.82)] px-4 py-2 text-xs font-black uppercase text-[#fff8ec] shadow-[0_10px_26px_rgba(47,36,28,0.22)]">
          {label}
        </div>
        <div className="absolute bottom-6 left-5 right-5 border-l-4 border-[#f3e4cc] pl-5 text-[#fff8ec]">
          <p className="font-serif text-3xl leading-[0.96] sm:text-4xl">
            fogão, lareira e mesa posta
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#f3e4cc] sm:text-base sm:leading-7">
            Espaço reservado para uma foto real do salão ou de um prato da casa.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-2 left-8 right-8 h-2 bg-[rgba(79,38,22,0.16)]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(79,38,22,0.16)] bg-[rgba(255,248,236,0.96)]">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:py-4"
        >
          <a
            href="#topo"
            className="font-serif text-2xl font-semibold italic text-[var(--primary-dark)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)] sm:text-3xl"
          >
            MariTaca&apos;s
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--primary)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={whatsappUrl}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--green)] px-4 py-3 text-sm font-black uppercase text-[#fff8ec] shadow-[0_10px_22px_rgba(82,99,58,0.2)] transition hover:-translate-y-0.5 hover:bg-[#3f4c2d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)] sm:px-5"
            aria-label="Reservar pelo WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" className="h-4 w-4 shrink-0" />
            Reservar
          </a>
        </nav>
      </header>

      <section
        id="topo"
        className="relative isolate border-b border-[rgba(79,38,22,0.14)] px-5 pb-20 pt-12 sm:px-8 lg:min-h-[calc(100vh-76px)] lg:pb-24 lg:pt-16"
      >
        <div
          aria-hidden="true"
          className="absolute -left-7 top-8 -z-10 hidden max-w-[9ch] font-serif text-[9rem] italic leading-[0.72] text-[rgba(79,38,22,0.05)] xl:block"
        >
          MariTaca&apos;s
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] xl:gap-20">
          <div className="relative">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-16 bg-[var(--primary)]" />
              <p className="font-serif text-xl italic text-[var(--accent-strong)] sm:text-2xl">
              Bistrô mineiro em Gonçalves-MG
              </p>
            </div>
            <h1 className="mt-5 max-w-5xl text-balance font-serif text-4xl leading-[0.98] text-[var(--primary-dark)] min-[380px]:text-5xl sm:text-6xl sm:leading-[0.92] lg:text-7xl xl:text-8xl">
              Culinária mineira autêntica em meio à tranquilidade da roça.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              Um pequeno e pitoresco restaurante em Gonçalves-MG, onde a comida
              simples é preparada com ingredientes frescos, carinho e sabor de
              interior.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton
                href={whatsappUrl}
                ariaLabel="Reservar pelo WhatsApp no MariTaca's Restaurante"
                icon={FaWhatsapp}
              >
                Reservar pelo WhatsApp
              </PrimaryButton>
              <SecondaryButton href={mapsUrl} icon={FaMapMarkerAlt}>
                Ver localização
              </SecondaryButton>
            </div>
            <div className="mt-10 divide-y divide-[rgba(79,38,22,0.18)] border-y border-[rgba(79,38,22,0.22)] sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y-0 lg:max-w-2xl">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex min-h-16 items-center gap-3 px-3 py-4 text-sm font-black text-[var(--primary-dark)] sm:flex-col sm:items-start sm:justify-between sm:gap-4 sm:px-4"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[var(--accent-strong)]"
                    />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <VisualPlate label="Ambiente rústico" />
        </div>
      </section>

      <section id="experiencia" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] xl:gap-20">
          <div className="order-2 lg:order-1">
            <div className="torn-edge border border-[rgba(79,38,22,0.2)] bg-[var(--primary-dark)] p-7 text-[#fff8ec] shadow-[0_22px_70px_rgba(79,38,22,0.18)] sm:p-10">
              <p className="font-serif text-5xl italic leading-none text-[#f3e4cc] sm:text-6xl">
                pequeno e pitoresco
              </p>
              <div className="my-8 h-px bg-[rgba(243,228,204,0.28)]" />
              <p className="text-lg leading-8 text-[#f3e4cc]">
                Maritacas Bistrô é um pequeno e pitoresco restaurante em
                Gonçalves, MG, onde a culinária mineira autêntica é celebrada em
                cada prato.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 border border-[rgba(243,228,204,0.26)] px-4 py-3 text-sm font-black uppercase text-[#fff8ec]">
                <FaDog aria-hidden="true" className="h-4 w-4" />
                Somos Pet Friendly com muito amor
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-serif text-xl italic text-[var(--accent-strong)]">
              Tradição sem pressa
            </p>
            <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-[1.03] text-[var(--text)] sm:text-5xl lg:text-6xl">
              Uma experiência com sabor de interior
            </h2>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              No MariTaca&apos;s, cada prato celebra a tradição mineira de forma
              simples, acolhedora e verdadeira. A proposta é trazer para a mesa
              sabores caseiros, ingredientes de qualidade e aquele clima
              tranquilo que só a roça consegue oferecer.
            </p>
            <div className="mt-10 rounded-[1.75rem] border border-[rgba(79,38,22,0.12)] bg-[rgba(255,253,247,0.58)] p-6 shadow-[0_18px_46px_rgba(79,38,22,0.08)] sm:p-8">
              <div className="mb-5 h-px ornament-line" />
              <p className="font-serif text-3xl leading-tight text-[var(--primary-dark)] sm:text-4xl">
                Comida simples, bem feita e servida em um ambiente que convida a
                ficar mais um pouco.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sabores"
        className="relative bg-[var(--surface)] px-5 py-24 sm:px-8 lg:py-36"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[rgba(79,38,22,0.18)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start xl:gap-20">
          <SectionIntro
            eyebrow="Da cozinha"
            title="Sabores que marcam a visita"
            align="left"
          />
          <div className="relative border-y border-[rgba(79,38,22,0.2)] bg-[rgba(255,248,236,0.32)]">
            {dishes.map((dish, index) => {
              const Icon = dish.icon;
              return (
                <article
                  key={dish.title}
                  className="group grid gap-5 border-b border-[rgba(79,38,22,0.14)] px-0 py-7 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:px-6"
                >
                  <div className="flex items-center gap-3 sm:block">
                    <span className="font-serif text-3xl italic text-[rgba(79,38,22,0.34)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-[var(--accent-strong)] sm:mt-5"
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <h3 className="shrink-0 font-serif text-3xl leading-tight text-[var(--primary-dark)]">
                        {dish.title}
                      </h3>
                      <span className="menu-rule hidden h-px flex-1 sm:block" />
                    </div>
                    <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">
                      {dish.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ambiente" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end xl:gap-16">
            <SectionIntro
              eyebrow="Casa e paisagem"
              title="Aconchego, paisagem e simplicidade mineira"
              text="Com decoração que combina com a paisagem ao redor, o MariTaca's oferece um ambiente acolhedor para quem quer fugir da pressa, aproveitar boa comida e curtir a tranquilidade de Gonçalves."
              align="left"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,248,236,0.14)] bg-[linear-gradient(145deg,var(--primary-dark),#6f3a22)] p-7 text-[#fff8ec] shadow-[0_28px_80px_rgba(79,38,22,0.24)] sm:p-9">
              <div className="absolute inset-0 texture-lines opacity-20" />
              <p className="relative font-serif text-4xl leading-tight sm:text-5xl">
                Um salão pequeno, pitoresco e preparado para receber com calma.
              </p>
              <p className="relative mt-6 max-w-2xl text-lg leading-8 text-[#f3e4cc]">
                O clima é de refúgio: mesa posta, conversa boa, lareira e o
                charme de Gonçalves em volta.
              </p>
            </div>
          </div>
          <div className="mt-12 grid border-y border-[rgba(79,38,22,0.18)] sm:grid-cols-2 lg:grid-cols-5">
            {atmosphere.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex min-h-20 items-center gap-3 border-b border-[rgba(79,38,22,0.14)] px-4 py-5 font-black text-[var(--green)] last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[var(--accent-strong)]"
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="avaliacoes"
        className="relative overflow-hidden bg-[var(--green)] px-5 py-24 text-[#fff8ec] sm:px-8 lg:py-36"
      >
        <div className="absolute inset-0 texture-lines opacity-15" />
        <div className="mx-auto max-w-7xl">
          <div className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-serif text-xl italic text-[#f3e4cc]">
                Avaliações
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.03] sm:text-5xl lg:text-6xl">
                O que os clientes dizem
              </h2>
              <p className="mt-7 max-w-md text-lg leading-8 text-[#f3e4cc] sm:text-xl sm:leading-9">
                4,9 de avaliação no Google com mais de 700 avaliações.
              </p>
            </div>
            <div className="grid gap-0 border-y border-[rgba(255,248,236,0.24)] lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.author}
                  className={`border-b border-[rgba(255,248,236,0.24)] p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                    index === 1 ? "lg:pt-16" : ""
                  }`}
                >
                  <FaQuoteLeft
                    aria-hidden="true"
                    className="mb-5 h-4 w-4 text-[#f3e4cc]"
                  />
                  <blockquote className="font-serif text-2xl leading-snug sm:text-3xl lg:text-[1.7rem]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 pt-5 text-sm font-black uppercase text-[#f3e4cc]">
                    {testimonial.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="localizacao" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[rgba(79,38,22,0.14)] bg-[linear-gradient(135deg,var(--surface),#fff3df)] shadow-[0_34px_100px_rgba(79,38,22,0.16)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-10 lg:p-16">
              <p className="font-serif text-xl italic text-[var(--accent-strong)]">
                Localização e contato
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.03] text-[var(--primary-dark)] sm:text-5xl lg:text-6xl">
                Reserve sua experiência no MariTaca&apos;s
              </h2>
              <dl className="mt-10 grid gap-4 text-[var(--text)] sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-[rgba(79,38,22,0.11)] bg-[rgba(255,253,247,0.56)] p-5">
                  <dt className="flex items-center gap-2 text-sm font-black uppercase text-[var(--muted)]">
                    <FaMapMarkerAlt aria-hidden="true" className="h-4 w-4" />
                    Endereço
                  </dt>
                  <dd className="mt-2 leading-7">
                    R. Antônio Mota da Silva, 01 - Costas, Gonçalves - MG
                  </dd>
                </div>
                <div className="rounded-[1.25rem] border border-[rgba(79,38,22,0.11)] bg-[rgba(255,253,247,0.56)] p-5">
                  <dt className="flex items-center gap-2 text-sm font-black uppercase text-[var(--muted)]">
                    <FaPhoneAlt aria-hidden="true" className="h-4 w-4" />
                    Telefone
                  </dt>
                  <dd className="mt-2 leading-7">(35) 99885-1550</dd>
                </div>
                <div className="rounded-[1.25rem] border border-[rgba(79,38,22,0.11)] bg-[rgba(255,253,247,0.56)] p-5">
                  <dt className="flex items-center gap-2 text-sm font-black uppercase text-[var(--muted)]">
                    <FaUtensils aria-hidden="true" className="h-4 w-4" />
                    Preço médio
                  </dt>
                  <dd className="mt-2 leading-7">R$ 60-140 por pessoa</dd>
                </div>
                <div className="rounded-[1.25rem] border border-[rgba(79,38,22,0.11)] bg-[rgba(255,253,247,0.56)] p-5">
                  <dt className="flex items-center gap-2 text-sm font-black uppercase text-[var(--muted)]">
                    <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                    Reservas
                  </dt>
                  <dd className="mt-2 leading-7">pelo WhatsApp</dd>
                </div>
              </dl>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton
                  href={whatsappUrl}
                  ariaLabel="Chamar o MariTaca's no WhatsApp"
                  icon={FaWhatsapp}
                >
                  Chamar no WhatsApp
                </PrimaryButton>
                <SecondaryButton href={mapsUrl} icon={FaMapMarkerAlt}>
                  Abrir no Google Maps
                </SecondaryButton>
              </div>
            </div>
            <div className="min-h-[390px] bg-[linear-gradient(145deg,rgba(79,38,22,0.98),rgba(122,63,35,0.84))] p-7 text-[#fff8ec] sm:p-10 lg:p-16">
              <div className="flex h-full flex-col justify-between rounded-[1.65rem] border border-[rgba(255,248,236,0.24)] p-6 shadow-[inset_0_1px_0_rgba(255,248,236,0.14)] sm:p-8">
                <div className="h-px w-32 ornament-line" />
                <p className="mt-8 max-w-sm font-serif text-4xl leading-tight sm:text-5xl">
                  Gonçalves-MG, mesa mineira e tempo bom de ficar.
                </p>
                <p className="mt-16 max-w-sm text-lg leading-8 text-[#f3e4cc]">
                  Demonstração comercial pensada para converter visitantes em
                  reservas, mantendo o charme artesanal do restaurante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(79,38,22,0.12)] bg-[rgba(255,253,247,0.35)] px-5 py-9 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            MariTaca&apos;s Restaurante - Culinária mineira, aconchego e sabor
            de interior.
          </p>
          <p>Gonçalves-MG · Landing page concept developed by Rhuan Lucas.</p>
        </div>
      </footer>
    </main>
  );
}
