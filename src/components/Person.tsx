type Props = {
    name: string;
    avatar: string;
    roles: string[]
}



export const Person = ({name, avatar, roles}: Props) => {


    return (
        <>
            <h1>{name} - {getWeekday()}</h1>
            <img 
                src={avatar} 
                alt={name}
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>{roles[2]}</li>
            </ul>
        </>
    )
}

export const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}