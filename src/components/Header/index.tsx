import {
  CreditCard,
  CrownSimple,
  Heart,
  MagnifyingGlass,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserCircle,
} from 'phosphor-react';

import styles from './styles.module.scss';

import caoselheiroLogo from '../../assets/caoselheiro-logo.svg';
import backBox from '../../assets/back-box.svg';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.info}>
        <div>
          <ShieldCheck size={20} weight="bold" />
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div>
          <Truck size={20} weight="bold" />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div>
          <CreditCard size={20} weight="bold" />
          <p>
            <span>Parcele</span> suas compras
          </p>
        </div>
      </section>

      <section className={styles.mainMenu}>
        <img src={caoselheiroLogo} alt="" />

        <form>
          <input type="text" placeholder="O que você está buscando?" />

          <button type="submit">
            <MagnifyingGlass size={28} />
          </button>
        </form>

        <nav className={styles.usersNav}>
          <img src={backBox} alt="" />

          <Heart size={32} />
          <UserCircle size={32} />
          <ShoppingCart size={32} />
        </nav>
      </section>

      <nav className={styles.navLinks}>
        <ul>
          <HeaderNavigation linkTitle="Brincar" url="/" />
          <HeaderNavigation linkTitle="Morder" url="/" />
          <HeaderNavigation linkTitle="Comer" url="/" />
          <HeaderNavigation linkTitle="Passear" url="/" />
          <HeaderNavigation linkTitle="Casa e conforto" url="/" />
          <HeaderNavigation linkTitle="Educação" url="/" />
          <HeaderNavigation linkTitle="Ofertas" url="/" active />
          <HeaderNavigation
            linkTitle="Coleção de outono"
            url="/"
            icon={CrownSimple}
          />
        </ul>
      </nav>
    </header>
  );
}
