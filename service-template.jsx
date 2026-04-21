// service-template.jsx — Full 14-section service page template

function ServicePage({ page, navigate, showForm }) {
  const [faqOpen, setFaqOpen] = React.useState(null);

  const breadcrumbs = page.breadcrumbs || [{ label: page.h1, path: page.path }];

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} navigate={navigate} />

      {/* 1. HERO */}
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative lines */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.04,
          background: 'repeating-linear-gradient(-45deg, var(--white), var(--white) 1px, transparent 1px, transparent 20px)' }}/>
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {page.tags && page.tags.map(t => <span key={t} className="tag-leather">{t}</span>)}
            </div>
            <h1 style={{ color: 'var(--white)', marginBottom: 16 }}>{page.h1}</h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 19, lineHeight: 1.7, marginBottom: 32, maxWidth: 600 }}>
              {page.subheading}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <button className="btn-gold" onClick={showForm}>Получить расчёт</button>
              <a href="tel:88002224076" className="btn-ghost-white">Перезвоните мне</a>
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
              {[
                ['160 лет', 'на рынке'],
                ['Рыбинск', 'собственное производство'],
                page.heroStat || ['от 300 экз.', 'минимальный тираж'],
                ['По России', 'доставка']
              ].map(([val, lbl], i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 700, color: 'var(--gold)' }}>{val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. BENEFITS */}
      {page.benefits && (
        <div className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <SectionLabel>Почему РДП</SectionLabel>
            <h2 style={{ marginBottom: 40 }}>Преимущества работы с нами</h2>
            <div className="grid-3">
              {page.benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--bg)', border: '2px solid var(--leather)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 700, color: 'var(--leather)' }}>{i+1}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{b.title}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.65 }}>{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. DESCRIPTION + VARIANTS */}
      {page.description && (
        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
              <div>
                <SectionLabel>Описание услуги</SectionLabel>
                <h2 style={{ marginBottom: 16 }}>{page.descTitle || 'Технология и варианты'}</h2>
                <div className="divider"/>
                <div style={{ color: 'var(--secondary)', lineHeight: 1.8, fontSize: 16 }}
                  dangerouslySetInnerHTML={{ __html: page.description.replace(/\n/g, '<br/>') }}/>
              </div>
              {page.variants && (
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 700, marginBottom: 16 }}>Варианты исполнения</div>
                  {page.variants.map((v, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ width: 6, height: 6, background: 'var(--leather)', borderRadius: '50%', marginTop: 8, flexShrink: 0 }}/>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{v.title}</div>
                        {v.text && <div style={{ fontSize: 13, color: 'var(--secondary)', marginTop: 2 }}>{v.text}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. PRICES */}
      {page.prices && (
        <div className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <SectionLabel>Стоимость</SectionLabel>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
              <h2>Ориентировочные цены</h2>
              <div style={{ fontSize: 14, color: 'var(--secondary)' }}>Точная стоимость рассчитывается индивидуально</div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="price-table">
                <thead>
                  <tr>{page.prices.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {page.prices.rows.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn-primary" onClick={showForm}>Точный расчёт — отправить ТЗ</button>
              <span style={{ fontSize: 13, color: 'var(--secondary)' }}>Цены указаны «от», включая НДС. Расчёт — за 30 мин.</span>
            </div>
          </div>
        </div>
      )}

      {/* 5. СРОКИ */}
      {page.timeline && (
        <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '48px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              {page.timeline.map((t, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '24px 16px', background: 'var(--white)', border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 700, color: 'var(--leather)' }}>{t.value}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginTop: 4 }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--secondary)', marginTop: 4 }}>{t.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. PROCESS */}
      {page.process && (
        <div className="section">
          <div className="container">
            <SectionLabel>Как мы работаем</SectionLabel>
            <h2 style={{ marginBottom: 40 }}>Процесс работы</h2>
            <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
              {page.process.map((step, i) => (
                <div key={i} style={{ flex: '1 1 160px', padding: '24px', borderLeft: i > 0 ? '1px solid var(--border)' : 'none', position: 'relative' }}>
                  <div className="step-num" style={{ marginBottom: 16 }}>{i + 1}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{step.title}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.65 }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. PORTFOLIO EXAMPLES */}
      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionLabel>Примеры работ</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
            <h2>{page.portfolioTitle || 'Из нашего портфолио'}</h2>
          </div>
          <div className="grid-3">
            {(page.portfolio || [
              { label: 'Книга в твёрдом переплёте 7БЦ', meta: 'Тираж 3 000 экз. · А5' },
              { label: 'Учебное пособие, КБС', meta: 'Тираж 1 500 экз. · 60×90/16' },
              { label: 'Корпоративный ежедневник', meta: 'Тираж 300 экз. · А5, кожзам' },
            ]).map((item, i) => (
              <div key={i} className="card" style={{ padding: 0 }}>
                <ImgPlaceholder label={item.label} height={200} />
                <div style={{ padding: '16px 20px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--secondary)' }}>{item.meta}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <button className="btn-secondary" onClick={showForm}>Хочу такое же — оставить заявку</button>
          </div>
        </div>
      </div>

      {/* 8. SEGMENT BLOCK */}
      {page.segmentBlock && (
        <div style={{ background: page.segmentBlock.dark ? 'var(--ink)' : 'var(--leather)', padding: '64px 0', color: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>{page.segmentBlock.tag}</div>
              <h2 style={{ color: 'var(--white)', marginBottom: 16 }}>{page.segmentBlock.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, lineHeight: 1.8, marginBottom: 32 }}>{page.segmentBlock.text}</p>
              <button className="btn-gold" onClick={showForm}>{page.segmentBlock.cta || 'Получить расчёт'}</button>
            </div>
          </div>
        </div>
      )}

      {/* 9. FAQ */}
      {page.faq && (
        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64 }}>
              <div>
                <SectionLabel>Вопросы и ответы</SectionLabel>
                <h2 style={{ marginBottom: 8 }}>FAQ</h2>
                <p style={{ marginBottom: 0 }}>Ответы на частые вопросы о {page.faqTopic || 'печати'}</p>
              </div>
              <FAQAccordion items={page.faq} />
            </div>
          </div>
        </div>
      )}

      {/* 10. OBJECTIONS */}
      {page.objections && (
        <div style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div className="container">
            <SectionLabel>Отвечаем на возражения</SectionLabel>
            <h2 style={{ marginBottom: 40 }}>Частые сомнения</h2>
            <div className="grid-3">
              {page.objections.map((obj, i) => (
                <div key={i} style={{ borderLeft: '3px solid var(--leather)', paddingLeft: 20 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--secondary)', fontSize: 15, marginBottom: 10 }}>«{obj.q}»</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', lineHeight: 1.6 }}>{obj.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 11. REVIEWS */}
      <div className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <SectionLabel>Отзывы</SectionLabel>
          <h2 style={{ marginBottom: 32 }}>Что говорят клиенты</h2>
          <div className="grid-3">
            {(page.reviews || [
              { name: 'Алексей Р.', company: 'Издательский проект', text: 'Удобно работать с типографией по книгам и брошюрам: быстро согласовывают технические детали и заранее предупреждают о сроках.' },
              { name: 'Наталья К.', company: 'Корпоративный заказчик', text: 'Заказывали деловую полиграфию и блокноты. Понравились аккуратная отделка, понятная коммуникация и нормальная упаковка тиража.' },
              { name: 'Игорь В.', company: 'Маркетинговое агентство', text: 'Регулярно размещаем заказы на листовки, каталоги и буклеты. По соотношению сроков, качества и общения работать комфортно.' },
            ]).map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </div>

      {/* 12. RELATED */}
      {page.related && (
        <div className="section" style={{ background: 'var(--white)', paddingTop: 0 }}>
          <div className="container">
            <SectionLabel>Смежные услуги</SectionLabel>
            <div className="grid-3">
              {page.related.map((r, i) => (
                <article key={i} className="card">
                  <div className="tag-leather" style={{ display: 'inline-block', marginBottom: 12 }}>Услуга</div>
                  <RouteLink href={r.path} navigate={navigate} style={{ display: 'block', marginBottom: 8 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700 }}>{r.title}</div>
                  </RouteLink>
                  <p style={{ fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{r.text}</p>
                  <RouteLink href={r.path} navigate={navigate} style={{ color: 'var(--leather)', fontWeight: 700, fontSize: 14 }}>Подробнее →</RouteLink>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 13. FORM */}
      <ContactFormSection title={page.formTitle || 'Готовы обсудить ваш тираж?'} />

      {/* 14. SEO TEXT */}
      {page.seoText && (
        <div style={{ padding: '48px 0', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <details>
              <summary style={{ cursor: 'pointer', fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 700, marginBottom: 16, color: 'var(--secondary)' }}>
                Полное описание услуги
              </summary>
              <div style={{ color: 'var(--secondary)', lineHeight: 1.8, fontSize: 14, maxWidth: 840, marginTop: 16 }}
                dangerouslySetInnerHTML={{ __html: page.seoText.replace(/\n/g, '<br/>') }}/>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ServicePage });
