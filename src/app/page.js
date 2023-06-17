import Image from 'next/image'
import styles from './page.module.css'
import utils from '@/styles/_utils.module.scss'

export default function Home() {
  return (
    <main className={utils.heightI}>
      <header className={`${utils.header} ${utils.dflex} ${utils.marginTB_auto} ${utils.maxWidthM} `}>
        <div>
          <h1>suite</h1>
        </div>
        <div>
          <span className={utils.btnSecondary}>Request Beta Access</span>
        </div>
      </header>
      <section className={`${utils.hero} ${utils.marginL}`}>
        <div className={`${utils.heroContent} ${utils.marginL}`}>
          <div className={`${utils.line}`}></div>
          <h2>
            A <b>super solution
            for your business.</b>
          </h2>
          <p className={`${styles.heroText} ${utils.marginTB} ${utils.lineHeightM}`}>
            Our marketing and sales automations help you scale your outreach to get more leads for your company. 
          </p>
          <span className={utils.btnPrimary}>Request Beta Access</span>
        </div>
        <div className={`${utils.stats} ${styles.grid} ${utils.marginTB}`}>
          <div className={styles.imageContent}>
            <picture>
              <source srcSet="/images/image-hero-landscape.png" media="(max-width: 768px)" />
              <source srcSet="/images/image-hero-portrait.png" width={281} height={482} />
              <Image src="/images/image-hero-landscape.png" priority={true} alt="My Image" width={343} height={240} />
            </picture>
          </div>
          <div className={`${styles.card} ${styles.companies} ${utils.marginTM}`}>
            <h2>
              <span>2k +</span>
            </h2>
            <p>COMPANIES.</p>
          </div>
          <div className={`${styles.card} ${styles.langs} ${utils.marginTM}`}>
            <h2>
            <span>8 </span>
            </h2>
            <p>Languages</p>
          </div>
          <div className={`${styles.card} ${styles.leads}  ${utils.marginTM}`}>
            <h2>
            <span>1.2 M</span>
            </h2>
            <p>LEADS</p>
          </div>
        </div>
      </section>
      <section className={`${utils.paddingM} ${utils.testimonials} ${utils.relative}`}>
        <div className={`${utils.testimonialsWraper} ${utils.maxWidthM} ${utils.marginAuto}`}>
          <picture>
            <source srcSet="/images/image-jeremy-small.png"  media="(max-width: 768px)" />
            <source srcSet="/images/image-jeremy-large.png" width={361} height={590} /> 
            <Image className={`${utils.marginAuto} ${utils.testimonialsImage}`} src="/images/image-jeremy-small.png" priority={true} alt="My Image" width={243} height={395} />
          </picture>
          <div className={`${utils.line} ${utils.curved2}`}></div>
          <h3>It just <b>works</b>.</h3>
          <p className={`${utils.marginTB} ${utils.lineHeightM}`}>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
          <h5>JEREMY ROBINSON</h5>
          <p className={utils.marginTS}>CMO, FYLO</p>
        </div>
      </section>
      <footer className={`${utils.footer}`}>
        <div>
          <h5>suite</h5>
        </div>
        <div className={`${utils.marginTB_small}`}>
          <span>Copyright - Suite</span>
        </div>
        <div>
          <ul className={`${utils.dflex} ${utils.justifyCenter} ${utils.listStyleNone}`}>
            <li className={utils.marginRyL}>
              <Image src="/images/icon-facebook.svg"  alt="facebook" width={20} height={20} />
            </li>
            <li className={utils.marginRyL}>
              <Image src="/images/icon-instagram.svg"  alt="instagram" width={20} height={20} />
            </li>
            <li className={utils.marginRyL}>
            <Image src="/images/icon-twitter.svg"  alt="twitter" width={20} height={20} />
            </li>
          </ul>
        </div>
      </footer>
    </main>
  )
}
