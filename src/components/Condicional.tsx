type Props = {
    phrase: string;
    author?: string;
}


export const Condicional = ({ phrase, author }: Props) => {
    return (
        <div>
            <h3>"{phrase}"</h3>
            {author && 
                <p>{author}</p>
            }
            {/* <p>{author ? author : 'Autor desconhecido'}</p> */}
        </div>
    )
}