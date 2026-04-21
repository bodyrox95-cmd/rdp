// app.jsx — Router, HomePage, AboutPage, ContactPage, PortfolioPage + static pages

// ─── HOMEPAGE ────────────────────────────────────────────────────────────────
function HomePage({ navigate, showForm }) {
  const services = [
  { title: 'Печать книг', sub: 'Твёрдый и мягкий переплёт, малые тиражи, самиздат', path: '/knigi/', tag: 'Главный профиль' },
  { title: 'Журналы и газеты', sub: 'Рулонная офсетная печать. Себестоимость ниже на 30%', path: '/zhurnaly/', tag: 'Периодика' },
  { title: 'Учебники', sub: 'Для вузов и издательств. ISBN, УДК, ББК', path: '/uchebniki/', tag: 'Вузы' },
  { title: 'Визитки', sub: 'От 100 шт. Тиснение, ламинирование, soft-touch', path: '/vizitki/', tag: 'Цифровая' },
  { title: 'Листовки и флаеры', sub: 'От 300 шт. Форматы А4, А5, А6', path: '/listovki/', tag: 'Реклама' },
  { title: 'Блокноты и ежедневники', sub: 'Корпоративные заказы. Тиснение логотипа', path: '/bloknoty/', tag: 'Корпоратив' },
  { title: 'Офсетная печать', sub: 'Листовые и рулонные машины. Полный цикл', path: '/ofset/', tag: 'Технология' },
  { title: 'Цифровая печать', sub: 'От 1 экземпляра. Без минимального тиража', path: '/tsifrovaya-pechat/', tag: 'Малые тиражи' },
  { title: 'Послепечатная обработка', sub: 'Тиснение, ламинирование, биговка, фальцовка', path: '/otdelka/', tag: 'Финишинг' }];


  const stats = [
  { value: 'Быстрый расчёт', label: 'подберём формат, тираж и стоимость' },
  { value: 'Проверка макета', label: 'подскажем, что исправить перед печатью' },
  { value: 'от 300 экз.', label: 'офсетная печать книг и полиграфии' },
  { value: 'Сроки и доставка', label: 'самовывоз в Москве и отправка в регионы' }];


  return (
    <div>
      {/* HERO */}
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '100px 0 80px', position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        {/* Decorative background pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'repeating-linear-gradient(0deg, var(--white) 0, var(--white) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, var(--white) 0, var(--white) 1px, transparent 1px, transparent 60px)' }} />
        {/* Gold accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--leather), var(--gold), var(--leather))' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="tag-leather">Работаем с 1860 года</span>
              <span style={{ fontSize: 12, fontWeight: 700, padding: '4px 10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: "rgba(200, 169, 110, 0)", background: "rgba(200, 169, 110, 0)" }}>
</span>
            </div>
            <h1 style={{ color: 'var(--white)', marginBottom: 24, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>
              Рыбинский<br />дом печати
            </h1>
            <div style={{ width: 80, height: 3, background: 'var(--gold)', marginBottom: 28 }} />
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(17px, 2.5vw, 22px)', lineHeight: 1.7, marginBottom: 40, maxWidth: 580 }}>
              Офсетная и цифровая типография полного цикла. Печать книг, журналов, брошюр, визиток и деловой полиграфии. Производство в Рыбинске, расчёт стоимости под ваш тираж и доставка по России.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <button className="btn-gold" style={{ fontSize: 16, padding: '16px 32px', minWidth: '200px' }} onClick={showForm}>
                Рассчитать стоимость тиража
              </button>
              <RouteLink href="/knigi/" navigate={navigate} className="btn-ghost-white" style={{ fontSize: 16, padding: '16px 32px', minWidth: '200px' }}>
                Смотреть услуги
              </RouteLink>
            </div>
            {/* Trust row */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[['Книги от 300 экз.', 'офсетная печать'],
              ['от 1 экз.', 'цифровая печать'],
              ['Проверка макета', 'до запуска в тираж'],
              ['По России', 'доставка заказов']].
              map(([val, lbl], i) =>
              <div key={i}>
                  <div style={{ color: 'var(--gold)', fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 15 }}>{val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{lbl}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Year mark */}
        <div style={{ position: 'absolute', right: '-2%', bottom: '5%', fontFamily: 'var(--serif)', fontSize: 'clamp(80px, 15vw, 200px)', fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none' }}>1860</div>
      </div>

      {/* TRUST BAR */}
      <TrustBar />

      {/* SERVICES GRID */}
      <div className="section">
        <div className="container">
          <SectionLabel>Услуги типографии</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <h2>Что мы печатаем</h2>
            <RouteLink href="/knigi/" navigate={navigate} className="btn-secondary">Все услуги</RouteLink>
          </div>
          <div className="grid-3">
            {services.map((s, i) =>
            <article key={i} className="card" style={{ padding: '28px 28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span className="tag">{s.tag}</span>
                  <span style={{ color: 'var(--border)', fontSize: 20 }}>→</span>
                </div>
                <RouteLink href={s.path} navigate={navigate} style={{ display: 'block', marginBottom: 8 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>{s.title}</div>
                </RouteLink>
                <p style={{ fontSize: 14, lineHeight: 1.65 }}>{s.sub}</p>
              </article>
            )}
          </div>
        </div>
      </div>

      {/* ABOUT STRIP */}
      <div style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <SectionLabel>О компании</SectionLabel>
              <h2 style={{ marginBottom: 16 }}>Почему с нами удобно работать</h2>
              <div className="divider" />
              <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
                Берём в работу книги, журналы, брошюры, визитки и другую полиграфию. Помогаем выбрать формат, бумагу, переплёт и способ печати под ваш бюджет, тираж и сроки.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: 24 }}>
                Если макет ещё не готов, подскажем, что нужно исправить перед запуском. Если задача срочная, быстро подготовим расчёт и предложим оптимальный вариант производства и доставки.
              </p>
              <RouteLink href="/o-kompanii/" navigate={navigate} className="btn-secondary">О компании и производстве</RouteLink>
            </div>
            <div className="utp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {stats.map((s, i) =>
              <div key={i} className="utp-card" style={{ padding: '28px', background: i % 2 === 0 ? 'var(--bg)' : 'var(--ink)', border: '1px solid var(--border)' }}>
                  <div className="utp-value" style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 700, color: i % 2 === 0 ? 'var(--leather)' : 'var(--gold)', lineHeight: 1.02 }}>{s.value}</div>
                  <div className="utp-label" style={{ fontSize: 13, color: i % 2 === 0 ? 'var(--secondary)' : 'rgba(255,255,255,0.72)', marginTop: 10, lineHeight: 1.45 }}>{s.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ContactFormSection title="Рассчитаем стоимость вашего заказа" />

      {/* HOW IT WORKS */}
      <div className="section">
        <div className="container">
          <SectionLabel>Как заказать</SectionLabel>
          <h2 style={{ marginBottom: 40 }}>Пять шагов от идеи до тиража</h2>
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', position: 'relative' }}>
            {[
            { n: '01', title: 'Заявка', text: 'Отправьте ТЗ или позвоните. Менеджер ответит за 30 минут.' },
            { n: '02', title: 'Расчёт', text: 'Считаем стоимость без скрытых наценок. Договор с фиксированным сроком.' },
            { n: '03', title: 'Препресс', text: 'Бесплатно проверяем макет. Находим ошибки до печати, а не после.' },
            { n: '04', title: 'Производство', text: 'Запускаем после вашего OK. Весь цикл — на одном предприятии.' },
            { n: '05', title: 'Доставка', text: 'СДЭК, Деловые Линии или самовывоз в Москве.' }].
            map((step, i) =>
            <div key={i} style={{ flex: '1 1 170px', padding: '28px 24px', borderRight: i < 4 ? '1px solid var(--border)' : 'none', borderTop: '3px solid ' + (i === 0 ? 'var(--leather)' : 'var(--border)') }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 700, color: 'var(--border)', marginBottom: 12, lineHeight: 1 }}>{step.n}</div>
                <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{step.title}</div>
                <p style={{ fontSize: 13, lineHeight: 1.65 }}>{step.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CLIENTS / TRUST */}
      <div style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', padding: '64px 0' }}>
        <div className="container">
          <SectionLabel>Клиенты</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
            <h2>Нам доверяют</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 48 }}>
            {['Издательства', 'Вузы и НИИ', 'Авторы-самиздатчики', 'Корпоративные клиенты', 'Рекламные агентства'].map((c, i) =>
            <div key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 70, height: "114px" }}>
                <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 14, color: 'var(--secondary)', textAlign: 'center' }}>{c}</div>
              </div>
            )}
          </div>
          <div className="grid-3">
            {[
            { title: 'Полный производственный цикл', text: 'На официальном сайте компания описывает весь цикл работ: от разработки макета до послепечатной обработки.' },
            { title: 'Работа с издательствами', text: 'На главной странице указано, что типография работает с крупнейшими российскими издательствами.' },
            { title: 'Офсет и цифра', text: 'Компания предлагает офсетную и цифровую печать книг, журналов, бланков, учебной и рекламной продукции.' }].
            map((item, i) => (
              <div key={i} className="card">
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{item.title}</div>
                <p style={{ lineHeight: 1.75, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GEO */}
      <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '40px' }}>
              <div style={{ color: 'var(--gold)', fontFamily: 'var(--serif)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Производство</div>
              <h3 style={{ color: 'var(--white)', marginBottom: 12 }}>г. Рыбинск</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 20 }}>Ул. Чкалова, 8. Офсетная и цифровая печать, предпечатная подготовка и послепечатная обработка на собственной производственной площадке.</p>
              <a href="tel:+74855214961" style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>+7 (4855) 21-49-61</a>
            </div>
            <div style={{ background: 'var(--leather)', color: 'var(--white)', padding: '40px', cursor: 'pointer' }} onClick={() => navigate('/geo/moskva/')}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--serif)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Самовывоз</div>
              <h3 style={{ color: 'var(--white)', marginBottom: 12 }}>Москва</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 20 }}>Производство в Рыбинске — самовывоз в Москве. Приедете — всё готово. Узнать адрес пункта →</p>
              <a href="tel:88002224076" style={{ color: 'var(--white)', fontWeight: 700, textDecoration: 'none' }}>8-800-222-40-76 бесплатно</a>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '40px' }}>
              <div style={{ color: 'var(--leather)', fontFamily: 'var(--serif)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Доставка</div>
              <h3 style={{ marginBottom: 12 }}>По всей России</h3>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 20 }}>СДЭК и Деловые Линии. 1–3 дня в большинство городов. Москва, СПб, Екатеринбург, Новосибирск, Краснодар и другие.</p>
              <button className="btn-secondary" style={{ padding: '10px 20px', fontSize: 13 }} onClick={() => navigate('/dostavka/')}>Условия доставки</button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA FORM */}
      <ContactFormSection title="Рассчитайте стоимость вашего тиража" />
    </div>);

}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage({ navigate, showForm }) {
  const timeline = [
  { year: '1860', text: 'В Рыбинске начала работу «Первая частная типография И.А. Левикова».' },
  { year: '1920-е', text: 'Предприятие было национализировано и вошло в состав единой типографии.' },
  { year: '1921', text: 'При типографии открыли профессиональную школу полиграфического производства для сотрудников.' },
  { year: '1950-е', text: 'Типография переехала в здание на улице Чкалова, где работает и сегодня.' },
  { year: '1991', text: 'На официальной странице истории компании указано, что типография первой в стране перешла на компьютерный набор.' },
  { year: '1994', text: 'Предприятие было переименовано в акционерное общество «Рыбинский Дом печати».' },
  { year: '2020', text: 'Компания отметила 160-летний юбилей.' }];


  return (
    <div>
      <Breadcrumbs items={[{ label: 'О компании', path: '/o-kompanii/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionLabel>О компании</SectionLabel>
          <h1 style={{ color: 'var(--white)', marginBottom: 16 }}>Рыбинский дом печати</h1>
          <div style={{ width: 80, height: 3, background: 'var(--gold)', marginBottom: 24 }} />
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 20, lineHeight: 1.75 }}>
            Рыбинский дом печати ведёт историю с 1860 года. На официальном сайте компании говорится, что предприятие прошло через национализацию, смену названий, переезд на улицу Чкалова и дальнейшую модернизацию производства.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'start' }}>
            <div>
              <SectionLabel>История</SectionLabel>
              <h2 style={{ marginBottom: 32 }}>Хронология</h2>
              {timeline.map((t, i) =>
              <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 28, position: 'relative' }}>
                  <div style={{ flexShrink: 0, width: 56 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--leather)', fontSize: 15 }}>{t.year}</div>
                  </div>
                  <div style={{ paddingLeft: 20, borderLeft: '2px solid var(--border)', flex: 1 }}>
                    <p style={{ margin: 0, lineHeight: 1.65 }}>{t.text}</p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <SectionLabel>Производство</SectionLabel>
              <h2 style={{ marginBottom: 24 }}>Производственные возможности</h2>
              {[
              ['Офсетные листовые машины', 'Полноцветная печать форматов А4, А3, 60×90 и 70×100 см'],
              ['Рулонные офсетные машины', 'Печать книжных блоков и журналов в тетрадку. −30% к себестоимости'],
              ['Цифровые печатные машины', 'От 1 экземпляра. Оперативный запуск без форм'],
              ['Линия твёрдого переплёта', 'ВШРА, крышкоделательная машина, обжимная линия'],
              ['КБС (клеевое бесшвейное)', 'Для мягкой обложки, от 48 до 400+ полос'],
              ['ВШРА (скрепка)', 'Для журналов и брошюр до 64 полос'],
              ['Фальцовочные линии', 'До 8 сложений, несколько линий'],
              ['Тиснение фольгой', 'Золото, серебро, цвет, голография'],
              ['Биговка', 'Автоматическая линия, допуск ±0,3 мм']].
              map(([title, text], i) =>
              <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--secondary)' }}>{text}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <TrustBar />

      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionLabel>Адрес</SectionLabel>
          <h2 style={{ marginBottom: 32 }}>Как нас найти</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            <div className="card">
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 18, marginBottom: 12, color: 'var(--leather)' }}>Производство</div>
              <p style={{ marginBottom: 8 }}>г. Рыбинск, ул. Чкалова, 8</p>
              <p style={{ marginBottom: 4 }}><a href="tel:+74855214961">+7 (4855) 21-49-61</a></p>
              <p style={{ color: 'var(--secondary)', fontSize: 13 }}>Пн–Пт, 8:00–17:00</p>
            </div>
            <div className="card">
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 18, marginBottom: 12, color: 'var(--leather)' }}>Бесплатный звонок</div>
              <p style={{ marginBottom: 4 }}><a href="tel:88002224076" style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: 'var(--leather)' }}>8-800-222-40-76</a></p>
              <p style={{ color: 'var(--secondary)', fontSize: 13 }}>Пн–Пт, 8:00–17:00. Звонок бесплатный.</p>
            </div>
            <div className="card">
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 18, marginBottom: 12, color: 'var(--leather)' }}>Самовывоз</div>
              <p style={{ marginBottom: 8 }}>Москва — пункт самовывоза</p>
              <button className="btn-secondary" style={{ padding: '10px 20px', fontSize: 13 }} onClick={() => navigate('/geo/moskva/')}>Узнать адрес</button>
            </div>
          </div>
        </div>
      </div>

      <ContactFormSection />
    </div>);

}

// ─── PORTFOLIO PAGE ───────────────────────────────────────────────────────────
function PortfolioPage({ navigate, showForm }) {
  const items = [
  { label: 'Роман, твёрдый переплёт 7БЦ', meta: 'Тираж 10 000 экз. · 84×108/32 · ляссе', cat: 'Книги' },
  { label: 'Учебное пособие, КБС', meta: 'Тираж 2 000 экз. · А5 · 240 полос', cat: 'Учебники' },
  { label: 'Корпоративный ежедневник', meta: 'Тираж 1 000 экз. · А5 · тиснение золотом', cat: 'Ежедневники' },
  { label: 'Журнал, рулонная печать', meta: 'Тираж 5 000 экз. · А4 · 64 полосы, скрепка', cat: 'Журналы' },
  { label: 'Книжка-малышка', meta: 'Тираж 3 000 экз. · 100×100 мм · детская книга', cat: 'Книги' },
  { label: 'Монография, КБС', meta: 'Тираж 300 экз. · А5 · 320 полос', cat: 'Учебники' },
  { label: 'Каталог продукции', meta: 'Тираж 2 000 экз. · А4 · 96 полос, КБС', cat: 'Каталоги' },
  { label: 'Брошюра на скрепке', meta: 'Тираж 3 000 экз. · А5 · 32 полосы', cat: 'Брошюры' },
  { label: 'Визитки с тиснением', meta: 'Тираж 5 000 шт. · 90×50 · soft-touch + фольга', cat: 'Визитки' }];


  return (
    <div>
      <Breadcrumbs items={[{ label: 'Портфолио', path: '/portfolio/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <SectionLabel>Портфолио</SectionLabel>
          <h1 style={{ color: 'var(--white)' }}>Примеры работ</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-3">
            {items.map((item, i) =>
            <div key={i} className="card" style={{ padding: 0 }}>
                <ImgPlaceholder label={item.label} height={220} />
                <div style={{ padding: '16px 20px 20px' }}>
                  <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>{item.cat}</span>
                  <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--secondary)' }}>{item.meta}</div>
                </div>
              </div>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn-primary" onClick={showForm}>Хочу такое же — получить расчёт</button>
          </div>
        </div>
      </div>
    </div>);

}

// ─── CONTACTS PAGE ────────────────────────────────────────────────────────────
function ContactsPage({ navigate, showForm }) {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Контакты', path: '/kontakty/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)' }}>Контакты</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionLabel>Производство и офис</SectionLabel>
              <h2 style={{ marginBottom: 24 }}>г. Рыбинск</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                ['Адрес', 'ул. Чкалова, 8, г. Рыбинск, Ярославская обл.'],
                ['Телефон (бесплатный)', '8-800-222-40-76'],
                ['Телефон', '+7 (4855) 21-49-61'],
                ['Режим работы', 'Пн–Пт, 8:00–17:00']].
                map(([lbl, val]) =>
                <div key={lbl} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ width: 160, flexShrink: 0, fontSize: 13, fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lbl}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>
                      {lbl.includes('Телефон') ? <a href={`tel:${val.replace(/\D/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>{val}</a> : val}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ marginTop: 32 }}>
                <SectionLabel>Самовывоз</SectionLabel>
                <h2 style={{ marginBottom: 16 }}>Москва</h2>
                <p style={{ marginBottom: 16 }}>Пункт самовывоза в Москве. Уточняйте адрес по телефону или в форме обратной связи.</p>
                <button className="btn-secondary" onClick={() => navigate('/geo/moskva/')}>Подробнее</button>
              </div>
            </div>
            <ContactFormSection title="Напишите нам" />
          </div>
        </div>
      </div>
    </div>);

}

// ─── DELIVERY PAGE ────────────────────────────────────────────────────────────
function DeliveryPage({ navigate }) {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Доставка и оплата', path: '/dostavka/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)' }}>Доставка и оплата</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48 }}>
            <div>
              <SectionLabel>Доставка</SectionLabel>
              <h2 style={{ marginBottom: 24 }}>Как мы доставляем</h2>
              {[
              { title: 'СДЭК', text: 'Доставка по всей России от 1 до 5 дней. Отслеживание заказа. Пункты выдачи в 1 500+ городах.' },
              { title: 'Деловые Линии', text: 'Для крупных и тяжёлых тиражей. Терминальная и адресная доставка.' },
              { title: 'Самовывоз в Рыбинске', text: 'Со склада готовой продукции. Ул. Чкалова, 8.' },
              { title: 'Самовывоз в Москве', text: 'Пункт самовывоза в Москве. Адрес уточняйте у менеджера.' }].
              map((d, i) =>
              <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 17, marginBottom: 6, color: 'var(--leather)' }}>{d.title}</div>
                  <p style={{ margin: 0, fontSize: 14 }}>{d.text}</p>
                </div>
              )}
            </div>
            <div>
              <SectionLabel>Оплата</SectionLabel>
              <h2 style={{ marginBottom: 24 }}>Способы оплаты</h2>
              {[
              { title: 'Безналичный расчёт (юрлица)', text: 'По счёту с НДС. Договор, счёт, акт выполненных работ.' },
              { title: 'Предоплата 50%', text: 'Стандартная схема: 50% — при запуске, 50% — после производства.' },
              { title: 'Полная предоплата', text: 'Для новых клиентов. Скидка 2% при полной предоплате.' },
              { title: 'Карта / онлайн', text: 'Для частных лиц — оплата по ссылке.' }].
              map((p, i) =>
              <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 17, marginBottom: 6, color: 'var(--leather)' }}>{p.title}</div>
                  <p style={{ margin: 0, fontSize: 14 }}>{p.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}

// ─── FAQ PAGE ─────────────────────────────────────────────────────────────────
function FAQPage({ navigate }) {
  const allFaq = [
  { q: 'Какой минимальный тираж для офсетной печати?', a: 'Для книг и брошюр — от 300 экземпляров. Для листовок и визиток — от 300 штук. Для меньших объёмов используем цифровую печать.' },
  { q: 'Сколько стоит напечатать книгу 200 страниц тиражом 1 000 экз.?', a: 'Книга А5, 200 полос, мягкий переплёт КБС, тираж 1 000 экз. — ориентировочно от 58 000 руб. (58 ₽/экз.). Точный расчёт — по вашему ТЗ за 30 минут.' },
  { q: 'Как подготовить макет к печати?', a: 'Формат файла — PDF/X-1a или PDF/X-3. Разрешение изображений — 300 dpi. Цветовой профиль — CMYK. Вылеты — 3 мм с каждой стороны. Шрифты — встроены или переведены в кривые.' },
  { q: 'Бесплатна ли проверка макета?', a: 'Да. Мы проверяем технические параметры макета бесплатно при каждом заказе. Если найдём проблему — сообщим до запуска в печать.' },
  { q: 'Можно ли приехать в Рыбинск и посмотреть производство?', a: 'Да, экскурсии для потенциальных клиентов возможны. Договаривайтесь заранее по телефону.' },
  { q: 'Как долго доставляется тираж в Москву?', a: 'СДЭК из Рыбинска в Москву — 1 день. Либо самовывоз из нашего московского пункта.' },
  { q: 'Работаете ли вы с НДС?', a: 'Да. Рыбинский дом печати — плательщик НДС. Выставляем счёт с НДС, предоставляем все закрывающие документы.' },
  { q: 'Есть ли скидки для постоянных клиентов?', a: 'Да. Для издательств и регулярных заказчиков — индивидуальные условия сотрудничества. Обсудите с менеджером.' }];


  return (
    <div>
      <Breadcrumbs items={[{ label: 'FAQ', path: '/faq/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '64px 0' }}>
        <div className="container"><h1 style={{ color: 'var(--white)' }}>Часто задаваемые вопросы</h1></div>
      </div>
      <div className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <FAQAccordion items={allFaq} />
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ marginBottom: 16 }}>Не нашли ответа? Спросите напрямую.</p>
            <a href="tel:88002224076" className="btn-primary">Позвонить: 8-800-222-40-76</a>
          </div>
        </div>
      </div>
    </div>);

}

const REVIEWS_DATA = [
  { name: 'Александр Р.', company: 'Корпоративный заказчик, Москва', text: 'Постоянно заказываем деловую полиграфию и небольшие тиражи рекламных материалов. Нравится, что менеджеры быстро отвечают, заранее предупреждают по срокам и помогают сверить макеты перед запуском.', rating: 5 },
  { name: 'Марина К.', company: 'Издательский проект', text: 'Печатаем книги и брошюры не первый раз. Для нас важны стабильное качество блока и аккуратная послепечатная обработка. По этим задачам с Рыбинским домом печати удобно работать на постоянной основе.', rating: 5 },
  { name: 'Ирина С.', company: 'Учебный центр', text: 'Заказываем методические материалы и учебные издания. Удобно, что можно обсудить тираж, бумагу и переплёт под задачу, а не выбирать из жёстко ограниченных вариантов.', rating: 5 },
  { name: 'Дмитрий В.', company: 'Маркетинговое агентство', text: 'Регулярно размещаем заказы на буклеты, листовки и каталоги для клиентов. Ценим понятную коммуникацию, предсказуемый результат по цвету и нормальную упаковку тиража перед отправкой.', rating: 5 },
  { name: 'Елена П.', company: 'Авторский проект', text: 'Обращались по книге малым тиражом. Помогли привести макет в порядок и объяснили технические моменты человеческим языком. Для первого запуска это было особенно важно.', rating: 5 },
  { name: 'Сергей Н.', company: 'Корпоративный клиент', text: 'Делаем заказы на блокноты и внутренние печатные материалы. Нравится, что производство берёт в работу разные форматы и можно согласовать параметры под бюджет и срок.', rating: 5 }
];

// ─── REVIEWS PAGE ─────────────────────────────────────────────────────────────
function ReviewsPage({ navigate }) {
  const reviews = REVIEWS_DATA;

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Отзывы', path: '/otzyvy/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', marginBottom: 12 }}>Отзывы клиентов</h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 760, lineHeight: 1.75, margin: 0 }}>Подборка отзывов о работе с типографией: книги, журналы, учебные материалы, рекламная и корпоративная полиграфия.</p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-3">
            {reviews.map((item, i) => <ReviewCard key={i} {...item} />)}
          </div>
        </div>
      </div>
    </div>);

}

// ─── GEO PAGES ───────────────────────────────────────────────────────────────
function GeoMoscowPage({ navigate, showForm }) {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Доставка в Москву', path: '/geo/moskva/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <SectionLabel>Москва</SectionLabel>
          <h1 style={{ color: 'var(--white)', marginBottom: 16 }}>Самовывоз в Москве</h1>
          <div style={{ width: 60, height: 3, background: 'var(--gold)', marginBottom: 24 }} />
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 20, maxWidth: 600 }}>
            Производство в Рыбинске — самовывоз в Москве. Приедете — всё готово. Никакого ожидания.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ marginBottom: 24 }}>Как получить заказ в Москве</h2>
              {[
              { n: '1', t: 'Оформляете заказ', d: 'По телефону, форме или email. Договариваемся о сроке.' },
              { n: '2', t: 'Производство в Рыбинске', d: 'Весь цикл на одном предприятии. Контроль качества.' },
              { n: '3', t: 'Доставка в Москву', d: 'Тираж доезжает за 1 день (СДЭК).' },
              { n: '4', t: 'Самовывоз', d: 'Вы приезжаете в наш московский пункт в удобное время.' }].
              map((step, i) =>
              <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                  <div className="step-num">{step.n}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{step.t}</div>
                    <p style={{ margin: 0, fontSize: 14 }}>{step.d}</p>
                  </div>
                </div>
              )}
              <button className="btn-primary" style={{ marginTop: 16 }} onClick={showForm}>Узнать адрес пункта самовывоза</button>
            </div>
            <div>
              <div className="card">
                <h3 style={{ marginBottom: 16 }}>Также доставляем по Москве</h3>
                <p>СДЭК доставит до вашего адреса или ближайшего ПВЗ. Курьерская доставка по Москве — 1–2 дня.</p>
                <div style={{ marginTop: 24, padding: 20, background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--leather)', marginBottom: 8 }}>Наш ответ на возражение:</div>
                  <p style={{ fontStyle: 'italic', margin: 0 }}>«Вы в Рыбинске — а мы в Москве»</p>
                  <p style={{ margin: '8px 0 0', color: 'var(--secondary)', fontSize: 14 }}>Рыбинск — Москва по трассе 280 км. СДЭК везёт ваш тираж за 1 день. Вы получите его быстрее, чем от многих московских типографий, которые сами отдают заказы на субподряд.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormSection />
    </div>);

}

// ─── DESIGN PAGE ─────────────────────────────────────────────────────────────
function DesignPage({ navigate, showForm }) {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Дизайн и подготовка макетов', path: '/dizayn-maketov/' }]} navigate={navigate} />
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', marginBottom: 16 }}>Дизайн и подготовка макетов</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>Вёрстка, редактура, предпечатная подготовка. Принимаем текст в Word.</p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48 }}>
            <div>
              <SectionLabel>Услуги</SectionLabel>
              <h2 style={{ marginBottom: 24 }}>Что мы делаем</h2>
              {[
              { title: 'Вёрстка книги', price: 'от 800 ₽/а.л.', text: 'Профессиональная вёрстка в InDesign. Авторский лист = 40 000 знаков.' },
              { title: 'Дизайн обложки', price: 'от 3 500 ₽', text: 'Концепция, 3 варианта на выбор, правки.' },
              { title: 'Редактура', price: 'от 600 ₽/а.л.', text: 'Литературная правка с сохранением авторского стиля.' },
              { title: 'Корректура', price: 'от 400 ₽/а.л.', text: 'Исправление орфографических и пунктуационных ошибок.' },
              { title: 'Предпечатная подготовка', price: 'бесплатно', text: 'Проверка вашего макета: шрифты, цвета, разрешение, вылеты.' }].
              map((s, i) =>
              <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{s.title}</div>
                    <p style={{ margin: 0, fontSize: 14 }}>{s.text}</p>
                  </div>
                  <div style={{ color: 'var(--leather)', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{s.price}</div>
                </div>
              )}
            </div>
            <div>
              <SectionLabel>Требования к макету</SectionLabel>
              <h2 style={{ marginBottom: 24 }}>Технические требования</h2>
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: 28 }}>
                {[
                ['Формат файла', 'PDF/X-1a или PDF/X-3'],
                ['Разрешение изображений', '300 dpi минимум (72 dpi не принимаем)'],
                ['Цветовой профиль', 'CMYK (не RGB)'],
                ['Вылеты (bleed)', '3 мм с каждой стороны'],
                ['Шрифты', 'Встроены в PDF или переведены в кривые'],
                ['Зона безопасности', '5 мм от края до важных элементов'],
                ['Формат обложки', 'С учётом ширины корешка (рассчитываем мы)']].
                map(([lbl, val]) =>
                <div key={lbl} style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ width: 180, flexShrink: 0, fontSize: 13, fontWeight: 700, color: 'var(--secondary)' }}>{lbl}</div>
                    <div style={{ fontSize: 14 }}>{val}</div>
                  </div>
                )}
              </div>
              <button className="btn-primary" style={{ marginTop: 24 }} onClick={showForm}>Отправить макет на проверку</button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

function ensureMeta(selector, attrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement(attrs.tag || 'meta');
    if (attrs.tag) delete attrs.tag;
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    document.head.appendChild(node);
  }
  return node;
}

function getSiteUrl() {
  const configured = window.__SITE_URL || '';
  if (configured) return configured.replace(/\/$/, '');
  return window.location.origin.replace(/\/$/, '');
}

function getRouteSchema(path, pageMeta, pageData) {
  const siteUrl = getSiteUrl();
  const pageUrl = siteUrl + path;
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Рыбинский дом печати',
    url: siteUrl || pageUrl,
    logo: siteUrl ? siteUrl + '/favicon.svg' : '/favicon.svg',
    telephone: '+7-800-222-40-76',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
      addressLocality: 'Рыбинск',
      streetAddress: 'ул. Чкалова, 8'
    }
  };
  const pieces = [org];

  if (path === '/') {
    pieces.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Рыбинский дом печати',
      url: siteUrl || pageUrl,
      inLanguage: 'ru-RU'
    });
  }

  if (pageData) {
    pieces.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: pageData.h1,
      description: pageMeta.description,
      areaServed: 'RU',
      provider: { '@type': 'Organization', name: 'Рыбинский дом печати' },
      url: pageUrl
    });
    if (pageData.faq?.length) {
      pieces.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pageData.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      });
    }
    if (pageData.breadcrumbs?.length) {
      pieces.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl + '/' },
          ...pageData.breadcrumbs.map((item, i) => ({ '@type': 'ListItem', position: i + 2, name: item.label, item: siteUrl + item.path }))
        ]
      });
    }
  }

  if (path === '/kontakty/') {
    pieces.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Рыбинский дом печати',
      url: pageUrl,
      telephone: '+7-800-222-40-76',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RU',
        addressLocality: 'Рыбинск',
        streetAddress: 'ул. Чкалова, 8'
      },
      openingHours: 'Mo-Fr 08:00-17:00'
    });
  }

  if (path === '/otzyvy/' && typeof REVIEWS_DATA !== 'undefined') {
    pieces.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Отзывы клиентов',
      url: pageUrl,
      mainEntity: REVIEWS_DATA.map((item) => ({
        '@type': 'Review',
        reviewBody: item.text,
        reviewRating: { '@type': 'Rating', ratingValue: String(item.rating || 5), bestRating: '5' },
        author: { '@type': 'Person', name: item.name },
        itemReviewed: { '@type': 'Organization', name: 'Рыбинский дом печати' },
        publisher: { '@type': 'Organization', name: 'Рыбинский дом печати' }
      }))
    });
  }

  return pieces;
}

// ─── ROUTER / APP ─────────────────────────────────────────────────────────────
function App() {
  const normalizePath = (value) => {
    if (!value) return '/';
    let p = value.replace(window.location.origin, '').trim();
    if (!p.startsWith('/')) p = '/' + p;
    if (p !== '/' && !p.endsWith('/')) p += '/';
    return p;
  };
  const getCurrentPath = () => {
    const pathname = normalizePath(window.location.pathname || '/');
    if (pathname && pathname !== '/') return pathname;
    const h = window.location.hash.replace('#', '');
    return normalizePath(h || '/');
  };
  const [path, setPath] = React.useState(() => getCurrentPath());
  const [formOpen, setFormOpen] = React.useState(false);
  const [notif, setNotif] = React.useState(null);

  const navigate = React.useCallback((to) => {
    const next = normalizePath(to);
    window.history.pushState({}, '', next);
    setPath(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  React.useEffect(() => {
    const handler = () => setPath(getCurrentPath());
    window.addEventListener('popstate', handler);
    window.addEventListener('hashchange', handler);
    return () => {
      window.removeEventListener('popstate', handler);
      window.removeEventListener('hashchange', handler);
    };
  }, []);

  const showForm = () => setFormOpen(true);
  const ROUTE_META = {
    '/': {
      title: 'Рыбинский дом печати — типография полного цикла',
      description: 'Офсетная и цифровая типография полного цикла. Печать книг, журналов, брошюр, визиток и деловой полиграфии. Производство в Рыбинске, доставка по России.'
    },
    '/o-kompanii/': {
      title: 'О компании — Рыбинский дом печати',
      description: 'История типографии с 1860 года, производство в Рыбинске, полный цикл полиграфических работ и современное оборудование.'
    },
    '/portfolio/': {
      title: 'Портфолио — Рыбинский дом печати',
      description: 'Примеры печатной продукции: книги, журналы, брошюры, деловая и рекламная полиграфия.'
    },
    '/kontakty/': {
      title: 'Контакты — Рыбинский дом печати',
      description: 'Контакты типографии в Рыбинске: адрес, телефоны, почта, способы связи и приёма заказов.'
    },
    '/dostavka/': {
      title: 'Доставка и оплата — Рыбинский дом печати',
      description: 'Условия доставки готовых тиражей по России, самовывоз, транспортные компании и способы оплаты.'
    },
    '/faq/': {
      title: 'FAQ — Рыбинский дом печати',
      description: 'Ответы на частые вопросы по печати книг, журналов, брошюр, срокам, тиражам и требованиям к макетам.'
    },
    '/otzyvy/': {
      title: 'Отзывы клиентов — Рыбинский дом печати',
      description: 'Отзывы клиентов о печати книг, учебных материалов, рекламной и корпоративной полиграфии.'
    },
    '/geo/moskva/': {
      title: 'Самовывоз в Москве — Рыбинский дом печати',
      description: 'Печать в Рыбинске с возможностью самовывоза в Москве. Условия получения и доставки тиражей.'
    },
    '/dizayn-maketov/': {
      title: 'Дизайн и подготовка макетов — Рыбинский дом печати',
      description: 'Подготовка макетов к печати, проверка файлов, консультации по формату, бумаге и техническим требованиям.'
    },
    '/404/': {
      title: 'Страница не найдена — Рыбинский дом печати',
      description: 'Запрошенная страница не найдена. Перейдите на главную или выберите нужную услугу типографии.'
    }
  };


  React.useEffect(() => {
    const pageData = PAGES_DATA[path];
    const generatedMeta = pageData ? {
      title: pageData.meta?.title || `${pageData.h1} — Рыбинский дом печати`,
      description: pageData.meta?.description || pageData.subheading || ROUTE_META['/'].description
    } : null;
    const pageMeta = generatedMeta || ROUTE_META[path] || ROUTE_META['/'];
    const siteUrl = getSiteUrl();
    const canonicalUrl = siteUrl + path;
    const ogImage = siteUrl + '/og-image.png';

    document.title = pageMeta?.title || ROUTE_META['/'].title;
    ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute('content', pageMeta?.description || ROUTE_META['/'].description);
    ensureMeta('link[rel="canonical"]', { tag: 'link', rel: 'canonical' }).setAttribute('href', canonicalUrl);
    ensureMeta('meta[name="robots"]', { name: 'robots' }).setAttribute('content', path === '/404/' ? 'noindex,nofollow' : 'index,follow');

    ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', path === '/' ? 'website' : 'article');
    ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', pageMeta.title);
    ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', pageMeta.description);
    ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', canonicalUrl);
    ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', ogImage);
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name' }).setAttribute('content', 'Рыбинский дом печати');
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale' }).setAttribute('content', 'ru_RU');

    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute('content', 'summary_large_image');
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute('content', pageMeta.title);
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute('content', pageMeta.description);
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute('content', ogImage);

    const schemaNode = ensureMeta('script[data-seo="jsonld"]', { tag: 'script', type: 'application/ld+json', 'data-seo': 'jsonld' });
    schemaNode.textContent = JSON.stringify(getRouteSchema(path, pageMeta, pageData));
  }, [path]);

  React.useEffect(() => {
    const applyMediaOptimizations = (scope = document) => {
      (scope.querySelectorAll ? scope : document).querySelectorAll('img').forEach((img) => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
        if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'low');
      });
      (scope.querySelectorAll ? scope : document).querySelectorAll('iframe').forEach((frame) => {
        if (!frame.hasAttribute('loading')) frame.setAttribute('loading', 'lazy');
      });
    };
    applyMediaOptimizations(document);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
        if (node && node.nodeType === 1) applyMediaOptimizations(node);
      }));
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [path]);

  const renderPage = () => {
    // Service pages from data
    if (PAGES_DATA[path]) {
      return <ServicePage page={PAGES_DATA[path]} navigate={navigate} showForm={showForm} />;
    }
    // Static pages
    if (path === '/' || path === '') return <HomePage navigate={navigate} showForm={showForm} />;
    if (path === '/o-kompanii/') return <AboutPage navigate={navigate} showForm={showForm} />;
    if (path === '/portfolio/') return <PortfolioPage navigate={navigate} showForm={showForm} />;
    if (path === '/kontakty/') return <ContactsPage navigate={navigate} showForm={showForm} />;
    if (path === '/dostavka/') return <DeliveryPage navigate={navigate} />;
    if (path === '/faq/') return <FAQPage navigate={navigate} />;
    if (path === '/otzyvy/') return <ReviewsPage navigate={navigate} />;
    if (path === '/geo/moskva/') return <GeoMoscowPage navigate={navigate} showForm={showForm} />;
    if (path === '/dizayn-maketov/') return <DesignPage navigate={navigate} showForm={showForm} />;
    // 404
    return (
      <div className="section" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ marginBottom: 16 }}>Страница не найдена</h2>
        <p style={{ marginBottom: 24 }}>Возможно, адрес изменился или страница в разработке.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>На главную</button>
      </div>);

  };

  // Tweaks
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accentColor": "#8B4513",
    "goldColor": "#C8A96E",
    "bgColor": "#F5F0E8",
    "inkColor": "#1A1A18",
    "heroStyle": "dark"
  } /*EDITMODE-END*/;

  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [tweakPanel, setTweakPanel] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--leather', tweaks.accentColor);
    document.documentElement.style.setProperty('--gold', tweaks.goldColor);
    document.documentElement.style.setProperty('--bg', tweaks.bgColor);
    document.documentElement.style.setProperty('--ink', tweaks.inkColor);
  }, [tweaks]);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweakPanel(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweakPanel(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const applyTweak = (key, val) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };

  return (
    <div>
      {/* Tweaks panel */}
      {tweakPanel &&
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 900, background: 'var(--bg)', border: '2px solid var(--ink)', padding: 24, width: 280, boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 16, marginBottom: 16 }}>Tweaks</div>
          {[
        { key: 'accentColor', label: 'Цвет акцента (кожа)', type: 'color' },
        { key: 'goldColor', label: 'Золото (тиснение)', type: 'color' },
        { key: 'bgColor', label: 'Фон (бумага)', type: 'color' },
        { key: 'inkColor', label: 'Чёрный (краска)', type: 'color' }].
        map((f) =>
        <div key={f.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <label style={{ fontSize: 13, color: 'var(--secondary)' }}>{f.label}</label>
              <input type="color" value={tweaks[f.key]} onChange={(e) => applyTweak(f.key, e.target.value)}
          style={{ width: 40, height: 28, border: '1px solid var(--border)', cursor: 'pointer', background: 'none', padding: 0 }} />
            </div>
        )}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 4 }}>
            <button onClick={() => {
            setTweaks(TWEAK_DEFAULTS);
            Object.entries(TWEAK_DEFAULTS).forEach(([k, v]) =>
            window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*')
            );
          }} style={{ width: '100%', padding: '8px', fontSize: 13, cursor: 'pointer', background: 'var(--border)', color: 'var(--ink)', border: 'none', fontFamily: 'var(--sans)', fontWeight: 700, marginBottom: 12 }}>
              ↩ Сбросить к defaults
            </button>
            <div style={{ fontSize: 12, color: 'var(--secondary)', marginBottom: 8 }}>Стиль героя</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['dark', 'leather', 'paper'].map((s) =>
            <button key={s} onClick={() => applyTweak('heroStyle', s)}
            style={{ flex: 1, padding: '6px 0', fontSize: 12, cursor: 'pointer', background: tweaks.heroStyle === s ? 'var(--leather)' : 'var(--border)', color: tweaks.heroStyle === s ? 'white' : 'var(--ink)', border: 'none', fontFamily: 'var(--sans)' }}>
                  {s}
                </button>
            )}
            </div>
          </div>
        </div>
      }

      <Header navigate={navigate} currentPath={path} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
      {formOpen && <ContactModal onClose={() => setFormOpen(false)} />}
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);