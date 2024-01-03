import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            autor="Sra. Roque"
            content="Meu amado Sr. Roque, Ao seu lado, cada dia é uma página preciosa de risos e cumplicidade. Seus olhos iluminam minha jornada, proporcionando conforto e força. Cada momento contigo é um tesouro, e nosso amor é a essência que dá sentido aos meus dias. Prometo cultivar este jardim de afeto que floresce entre nós. Com todo o meu amor, [Seu Nome].\nkkkkkkkkkkkkkkk----------AMO O MOZAO--------"
          />
          <Post
            autor="Sr. Roque"
            content="Querida Sra. Roque,E m seus olhos, encontro o brilho que ilumina meus dias, e em seu sorriso, descubro a alegria que preenche meu coração. Cada momento ao seu lado é uma jornada de amor e cumplicidade, onde encontro paz e significado. Sua presença é meu refúgio e sua essência, a melodia que embala minha alma. Meu amor por você transcende as palavras e se manifesta em gestos sinceros. Com todo o meu coração, para sempre sua, [Seu Nome]."
          />
        </main>
      </div>
    </div>
  )
}
