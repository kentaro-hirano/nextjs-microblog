import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavascriptです
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText} href="">SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText} href="">SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText} href="">SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText} href="">SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
