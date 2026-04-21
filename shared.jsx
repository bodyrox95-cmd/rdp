// shared.jsx — Header, Footer, Modal, Breadcrumbs, ReviewCard, shared UI

function handleRouteClick(e, href, navigate, after) {
  if (e.defaultPrevented) return;
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  navigate(href);
  if (after) after();
}

function RouteLink({ href, navigate, after, children, ...props }) {
  return (
    <a href={href} {...props} onClick={(e) => handleRouteClick(e, href, navigate, after)}>
      {children}
    </a>
  );
}

const NAV_ITEMS = [
  { label: 'Книги', path: '/knigi/' },
  { label: 'Журналы', path: '/zhurnaly/' },
  { label: 'Визитки', path: '/vizitki/' },
  { label: 'Листовки', path: '/listovki/' },
  { label: 'Цифровая печать', path: '/tsifrovaya-pechat/' },
  { label: 'Отделка', path: '/otdelka/' },
];

const ALL_NAV = [
  { label: 'Главная', path: '/' },
  { label: 'О компании', path: '/o-kompanii/' },
  { label: 'Услуги', sub: [
    { label: 'Печать книг', path: '/knigi/' },
    { label: '— Твёрдый переплёт', path: '/knigi/tverdyy-pereplet/' },
    { label: '— Мягкий переплёт (КБС)', path: '/knigi/myagkiy-pereplet/' },
    { label: '— Малый тираж / самиздат', path: '/knigi/malyy-tirazh/' },
    { label: 'Учебники и монографии', path: '/uchebniki/' },
    { label: 'Журналы и газеты', path: '/zhurnaly/' },
    { label: 'Брошюры', path: '/broshyury/' },
    { label: 'Каталоги', path: '/katalogi/' },
    { label: 'Блокноты и ежедневники', path: '/bloknoty/' },
    { label: 'Офсетная печать', path: '/ofset/' },
    { label: 'Цифровая печать', path: '/tsifrovaya-pechat/' },
    { label: 'Визитки', path: '/vizitki/' },
    { label: 'Листовки и флаеры', path: '/listovki/' },
    { label: 'Буклеты', path: '/buklety/' },
    { label: 'Бланки', path: '/blanki/' },
    { label: 'Послепечатная обработка', path: '/otdelka/' },
  ]},
  { label: 'Портфолио', path: '/portfolio/' },
  { label: 'Доставка и оплата', path: '/dostavka/' },
  { label: 'Отзывы', path: '/otzyvy/' },
  { label: 'Контакты', path: '/kontakty/' },
];

function Header({ navigate, currentPath }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);

  const go = (path) => { navigate(path); setMenuOpen(false); setServicesOpen(false); };

  return (
    <>
      {/* Top bar */}
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '8px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div className="topbar-left" style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', fontSize: 13 }}>
            <span style={{ color: 'var(--border)' }}>Пн–Пт, 8:00–17:00</span>
            <a href="tel:88002224076" style={{ color: 'var(--gold)', fontWeight: 700 }}>8-800-222-40-76</a>
            <span style={{ color: 'var(--border)', fontSize: 12 }}>бесплатно</span>
            <a href="tel:+74855214961" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>+7 (4855) 21-49-61</a>
          </div>
          <div className="topbar-right" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="https://wa.me/78002224076" style={{ color: 'var(--gold)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span>WhatsApp</span>
            </a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>г. Рыбинск, ул. Чкалова, 8</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header style={{ background: 'var(--bg)', borderBottom: '2px solid var(--ink)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container header-inner" style={{ display: 'flex', alignItems: 'center', height: 70, gap: 32 }}>
          {/* Logo */}
          <RouteLink href="/" navigate={navigate} style={{ cursor: 'pointer', flexShrink: 0, display: 'block' }} aria-label="На главную">
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>
              РДП
            </div>
            <div style={{ fontSize: 10, color: 'var(--secondary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>
              Рыбинский дом печати
            </div>
          </RouteLink>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center', flex: 1, flexWrap: 'nowrap' }} className="desktop-nav">
            {NAV_ITEMS.map(item => (
              <RouteLink key={item.path} href={item.path} navigate={navigate}
                style={{
                  padding: '8px 10px', fontFamily: 'var(--sans)', fontSize: 14,
                  color: currentPath.startsWith(item.path) ? 'var(--leather)' : 'var(--ink)',
                  fontWeight: currentPath.startsWith(item.path) ? 700 : 400,
                  borderBottom: currentPath.startsWith(item.path) ? '2px solid var(--leather)' : '2px solid transparent',
                  transition: 'color 0.15s',
                  whiteSpace: 'nowrap',
                }}>
                {item.label}
              </RouteLink>
            ))}
            <RouteLink href="/o-kompanii/" navigate={navigate}
              style={{ padding: '8px 10px', fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--secondary)', whiteSpace: 'nowrap' }}>
              О нас
            </RouteLink>
          </nav>

          <div className="header-actions" style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <button className="btn-primary header-cta" style={{ padding: '10px 18px', fontSize: 13 }} onClick={() => setFormOpen(true)}>
              Рассчитать тираж
            </button>
            {/* Burger */}
            <button className="burger-btn" aria-label="Открыть меню" onClick={() => setMenuOpen(true)} style={{ background: 'none', border: '1.5px solid var(--border)', padding: '8px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ display: 'block', width: 20, height: 2, background: 'var(--ink)' }}/>
              <span style={{ display: 'block', width: 20, height: 2, background: 'var(--ink)' }}/>
              <span style={{ display: 'block', width: 14, height: 2, background: 'var(--ink)' }}/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: 'var(--white)' }}>РДП</div>
            <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--white)', fontSize: 28, cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 700, marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Услуги</div>
          {ALL_NAV.find(x => x.sub)?.sub.map(item => (
            <RouteLink key={item.path} href={item.path} navigate={navigate} after={() => { setMenuOpen(false); setServicesOpen(false); }} className="mobile-nav-link">{item.label}</RouteLink>
          ))}
          <div style={{ height: 16 }}/>
          {ALL_NAV.filter(x => !x.sub && x.path !== '/').map(item => (
            <RouteLink key={item.path} href={item.path} navigate={navigate} after={() => { setMenuOpen(false); setServicesOpen(false); }} className="mobile-nav-link">{item.label}</RouteLink>
          ))}
          <div style={{ marginTop: 24 }}>
            <a href="tel:88002224076" style={{ display: 'block', color: 'var(--gold)', fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>8-800-222-40-76</a>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>бесплатный звонок</div>
          </div>
        </div>
      )}

      {formOpen && <ContactModal onClose={() => setFormOpen(false)} />}
    </>
  );
}

function Footer({ navigate }) {
  const go = (path) => { navigate(path); window.scrollTo(0, 0); };
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--white)', padding: '64px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, marginBottom: 8 }}>РДП</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Рыбинский дом печати</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              Офсетная и цифровая типография полного цикла. Работаем с 1860 года. Производство в Рыбинске, доставка готовых тиражей по России.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href="tel:88002224076" style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 15 }}>8-800-222-40-76</a>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 4 }}>бесплатный звонок</div>
          </div>

          {/* Книги */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 700, marginBottom: 16, color: 'var(--gold)' }}>Печать книг</div>
            {[
              ['Печать книг', '/knigi/'],
              ['Твёрдый переплёт', '/knigi/tverdyy-pereplet/'],
              ['Мягкий переплёт (КБС)', '/knigi/myagkiy-pereplet/'],
              ['Малый тираж / самиздат', '/knigi/malyy-tirazh/'],
              ['Учебники и монографии', '/uchebniki/'],
              ['Журналы и газеты', '/zhurnaly/'],
              ['Брошюры', '/broshyury/'],
              ['Блокноты и ежедневники', '/bloknoty/'],
            ].map(([l, p]) => (
              <RouteLink key={p} href={p} navigate={navigate} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 8, cursor: 'pointer', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color='var(--white)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}
              >{l}</RouteLink>
            ))}
          </div>

          {/* Другое */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 700, marginBottom: 16, color: 'var(--gold)' }}>Другие услуги</div>
            {[
              ['Офсетная печать', '/ofset/'],
              ['Цифровая печать', '/tsifrovaya-pechat/'],
              ['Визитки', '/vizitki/'],
              ['Листовки и флаеры', '/listovki/'],
              ['Буклеты', '/buklety/'],
              ['Бланки', '/blanki/'],
              ['Послепечатная обработка', '/otdelka/'],
            ].map(([l, p]) => (
              <RouteLink key={p} href={p} navigate={navigate} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 8, cursor: 'pointer', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color='var(--white)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}
              >{l}</RouteLink>
            ))}
          </div>

          {/* Контакты */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 700, marginBottom: 16, color: 'var(--gold)' }}>Контакты</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Производство</div>
                <div>г. Рыбинск, ул. Чкалова, 8</div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Самовывоз</div>
                <RouteLink href="/geo/moskva/" navigate={navigate} style={{ cursor: 'pointer', color: 'var(--gold)' }}>Москва — пункт самовывоза</RouteLink>
              </div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Режим работы</div>
                <div>Пн–Пт, 8:00–17:00</div>
              </div>
              <div>
                <a href="tel:+74855214961" style={{ color: 'rgba(255,255,255,0.6)' }}>+7 (4855) 21-49-61</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            © 1860–2026 Рыбинский дом печати. Все права защищены.
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[['Доставка и оплата', '/dostavka/'], ['FAQ', '/faq/'], ['Портфолио', '/portfolio/'], ['Отзывы', '/otzyvy/']].map(([l, p]) => (
              <RouteLink key={p} href={p} navigate={navigate} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.color='rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.4)'}
              >{l}</RouteLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Breadcrumbs({ items, navigate }) {
  return (
    <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
      <div className="container">
        <nav className="breadcrumb" aria-label="Хлебные крошки">
          <span className="breadcrumb-item"><RouteLink href="/" navigate={navigate} style={{ cursor: 'pointer' }}>Главная</RouteLink></span>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span className="breadcrumb-sep">›</span>
              {i === items.length - 1
                ? <span className="breadcrumb-item active">{item.label}</span>
                : <span className="breadcrumb-item"><RouteLink href={item.path} navigate={navigate} style={{ cursor: 'pointer' }}>{item.label}</RouteLink></span>
              }
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}

function TrustBar() {
  const items = [
    { num: '1860', label: 'год основания', sub: 'история компании' },
    { num: 'Чкалова, 8', label: 'производство в Рыбинске', sub: 'собственная площадка' },
    { num: 'от 500', label: 'экземпляров', sub: 'офсетная печать' },
    { num: 'СДЭК', label: 'доставка по России', sub: 'и Деловые Линии' },
  ];
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          {items.map((item, i) => (
            <div key={i} style={{ padding: '24px 20px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{item.num}</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>{item.label}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ name, company, text, rating = 5 }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} style={{ color: 'var(--gold)', fontSize: 16 }}>★</span>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.7, color: 'var(--ink)', marginBottom: 16 }}>
        «{text}»
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 16, color: 'var(--secondary)' }}>
          {name[0]}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{name}</div>
          <div style={{ fontSize: 12, color: 'var(--secondary)' }}>{company}</div>
        </div>
      </div>
    </div>
  );
}

function FAQAccordion({ items }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className="faq-icon" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          {open === i && <div className="faq-answer">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

function ContactModal({ onClose, title = 'Рассчитать стоимость тиража', subtitle = 'Заполните форму — менеджер свяжется с вами в рабочее время и уточнит параметры заказа' }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', phone: '', product: '', qty: '', comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
            <h3 style={{ marginBottom: 8 }}>Заявка отправлена</h3>
            <p>Свяжемся с вами в течение 30 минут в рабочее время</p>
            <button className="btn-primary" style={{ marginTop: 24 }} onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <h3 style={{ marginBottom: 4 }}>{title}</h3>
            <p style={{ marginBottom: 24, fontSize: 14 }}>{subtitle}</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="grid-2" style={{ gap: 16 }}>
                <div className="form-field">
                  <label className="form-label">Имя *</label>
                  <input required className="form-input" placeholder="Ваше имя" value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div className="form-field">
                  <label className="form-label">Телефон *</label>
                  <input required className="form-input" placeholder="+7 (___) ___-__-__" value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
              </div>
              <div className="grid-2" style={{ gap: 16 }}>
                <div className="form-field">
                  <label className="form-label">Тип продукции</label>
                  <select className="form-input" value={form.product} onChange={e => setForm({...form, product: e.target.value})}>
                    <option value="">Выберите...</option>
                    <option>Книга (твёрдый переплёт)</option>
                    <option>Книга (мягкий переплёт)</option>
                    <option>Журнал / газета</option>
                    <option>Брошюра</option>
                    <option>Блокнот / ежедневник</option>
                    <option>Визитки</option>
                    <option>Листовки / флаеры</option>
                    <option>Бланки</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Тираж (экз.)</label>
                  <input className="form-input" placeholder="Например: 1 000" value={form.qty}
                    onChange={e => setForm({...form, qty: e.target.value})} />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Комментарий / ТЗ</label>
                <textarea className="form-input" placeholder="Формат, количество полос, вид переплёта, сроки..." value={form.comment}
                  onChange={e => setForm({...form, comment: e.target.value})} />
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Отправить заявку на расчёт</button>
                <a href="tel:88002224076" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Позвонить</a>
              </div>
              <div style={{ fontSize: 12, color: 'var(--secondary)', textAlign: 'center' }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function ImgPlaceholder({ label, height = 220, style = {} }) {
  return (
    <div className="img-placeholder" style={{ height, ...style }}>
      <div>
        <div style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--secondary)', opacity: 0.7 }}>[фото: {label}]</div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <span style={{ display: 'block', width: 32, height: 2, background: 'var(--leather)' }}/>
      <span style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700, color: 'var(--leather)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{children}</span>
    </div>
  );
}

function ContactFormSection({ title = 'Готовы к печати?' }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', phone: '', product: '', qty: '', comment: '' });

  return (
    <div style={{ background: 'var(--ink)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
          <div style={{ color: 'var(--white)' }}>
            <SectionLabel>Оставить заявку</SectionLabel>
            <h2 style={{ color: 'var(--white)', marginBottom: 16 }}>{title}</h2>
            <div style={{ width: 60, height: 3, background: 'var(--gold)', marginBottom: 24 }}/>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
              Отправьте ТЗ или макет — рассчитаем стоимость за 30 минут. Работаем с издательствами, авторами и корпоративными заказчиками.
            </p>
            <div style={{ display: 'flex', flex: 'column', gap: 16 }}>
              <a href="tel:88002224076" style={{ display: 'block', color: 'var(--gold)', fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700 }}>
                8-800-222-40-76
              </a>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>бесплатный звонок · Пн–Пт 8:00–17:00</div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px 20px' }}>
                <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 14 }}>Самовывоз</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 4 }}>Москва</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px 20px' }}>
                <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 14 }}>Доставка</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 4 }}>По всей России</div>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '48px', textAlign: 'center' }}>
                <div style={{ fontSize: 48, color: 'var(--gold)', marginBottom: 16 }}>✓</div>
                <h3 style={{ color: 'var(--white)', marginBottom: 8 }}>Заявка отправлена</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Свяжемся с вами в течение 30 минут</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="form-field">
                    <label className="form-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Имя *</label>
                    <input required className="form-input" placeholder="Ваше имя" value={form.name}
                      style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--white)' }}
                      onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="form-field">
                    <label className="form-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Телефон *</label>
                    <input required className="form-input" placeholder="+7 (___) ___-__-__" value={form.phone}
                      style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--white)' }}
                      onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                </div>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="form-field">
                    <label className="form-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Продукция</label>
                    <select className="form-input" value={form.product}
                      style={{ background: '#2a2a28', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--white)' }}
                      onChange={e => setForm({...form, product: e.target.value})}>
                      <option value="">Выберите...</option>
                      <option>Книга</option><option>Журнал</option><option>Брошюра</option>
                      <option>Визитки</option><option>Листовки</option><option>Бланки</option><option>Другое</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Тираж</label>
                    <input className="form-input" placeholder="Экземпляров" value={form.qty}
                      style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--white)' }}
                      onChange={e => setForm({...form, qty: e.target.value})} />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Комментарий / ТЗ</label>
                  <textarea className="form-input" placeholder="Формат, полосность, переплёт, сроки..." value={form.comment}
                    style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--white)' }}
                    onChange={e => setForm({...form, comment: e.target.value})} />
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="submit" className="btn-gold" style={{ flex: 1, justifyContent: 'center' }}>Отправить заявку</button>
                  <a href="tel:88002224076" className="btn-ghost-white" style={{ justifyContent: 'center', flex: '0 0 auto' }}>Позвонить</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Header, Footer, Breadcrumbs, TrustBar, ReviewCard, FAQAccordion,
  ContactModal, ImgPlaceholder, SectionLabel, ContactFormSection
});
