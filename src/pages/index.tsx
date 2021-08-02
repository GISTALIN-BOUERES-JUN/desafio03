import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Header from '../components/Header';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Prismic from '@prismicio/client';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';


interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  // TODO
  return (
    <>
      <main className={commonStyles.container}>
        <Header />
        <div className={styles.posts}>
          <Link href='/'>
            <a className={styles.post}>
              <strong> Título </strong>
              <p> Content </p>
              <ul>
                <li>
                  <FiCalendar />
                  02 AUG 2021
                </li>

                <li>
                  <FiUser />
                  Geraldo Boueres
                </li>

              </ul>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.post}>
              <strong> Título </strong>
              <p> Content </p>
              <ul>
                <li>
                  <FiCalendar />
                  02 AUG 2021
                </li>

                <li>
                  <FiUser />
                  Geraldo Boueres
                </li>

              </ul>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.post}>
              <strong> Título </strong>
              <p> Content </p>
              <ul>
                <li>
                  <FiCalendar />
                  02 AUG 2021
                </li>

                <li>
                  <FiUser />
                  Geraldo Boueres
                </li>

              </ul>
            </a>
          </Link>

          <button type="button">Carregar mais posts</button>

        </div>

      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')], {
    pageSize: 1,
  }
  )

  console.log(postsResponse.results);

  return {
    props: {
      data: 1,
    },
  }

};

/*
src/pages/index.tsx: Utilizar o método query para retornar todos os posts já com paginação. Por padrão, a paginação vem configurada como 20.
Portanto se quiser testar sem ter que criar mais de 20 posts, altere a opção pageSize para o valor que deseja.*/