import css from './Name.module.scss'
const Name = (props: NameProps) => {
    return <p className={css.Name}>{props.name} age is {props.children}</p>
}

export default Name;

interface NameProps {
    name: string,
    children: string
}