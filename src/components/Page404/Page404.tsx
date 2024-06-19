import Header from '@/components/Header/Header.tsx';
import classes from './Page404.module.css'

export default function Taskpage() {
    return (
    <>
      <Header />
      <section>
        <h1 className={classes.notfound}>- Страница не найдена -</h1>
      </section>
    </>
  );

}