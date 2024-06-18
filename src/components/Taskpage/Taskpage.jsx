import Header from '@/components/Header/Header';
import { useParams } from 'react-router-dom';
import { useSelector } from'react-redux';

import classes from './Taskpage.module.css';

function Taskpage(){
    const id = useParams().id;
    const tasks = useSelector((state) => state.tasks.tasks);
    const task = tasks.find((task) => task.id == id);

    return(
        <>
            <Header></Header>
            <section>
                <h1 className={classes.title}>- {task.title} -</h1>
                <h2 className={classes.description}>{task.description}</h2>
                <h3 className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fuga tenetur libero non unde! Corporis nesciunt, magni perferendis illum quasi soluta quis minima saepe iste recusandae ab non aut dicta pariatur atque totam quaerat tenetur cupiditate amet quas suscipit qui repellendus sit! A, sint. Non magni ab, repudiandae numquam placeat adipisci ipsum eveniet dignissimos perferendis illo ipsam nesciunt inventore, voluptates ratione voluptatem. Perspiciatis nulla deleniti rerum ex incidunt labore quo inventore cum, exercitationem, earum distinctio fugit sit minima magnam, impedit iusto voluptates debitis reprehenderit unde quis! Incidunt dolorem consequatur dolorum. Accusamus id odit aperiam aliquid est nulla distinctio autem vitae quia debitis facere sapiente magnam ipsam officia eius, earum libero alias accusantium, a nisi doloremque animi dicta error velit! Earum ea molestias assumenda voluptate necessitatibus officiis minus deleniti eaque veritatis eveniet ad magnam libero id saepe nam, et quia obcaecati quisquam tempore voluptatem deserunt sapiente cupiditate similique impedit. Necessitatibus voluptatum quis beatae odio magnam nostrum, porro illum ea pariatur dicta quaerat dolores ducimus corporis nam architecto repellat et numquam accusantium! Ad odit animi, non nam in officia commodi dolore odio dolores nemo, aut magni est dignissimos ipsum sed explicabo ut eaque sapiente cum fuga eius impedit. Natus aliquid accusamus reiciendis? </h3>
                <h2 className={classes.date}>{task.date}</h2>
            </section>
        </>
    )
}
export default Taskpage;