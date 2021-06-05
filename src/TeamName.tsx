import emoji from 'node-emoji';

type TeamNameProps = {
    name: string
}

const TeamName = ({ name }: TeamNameProps) => {
    const prettyName = emoji.unemojify(name).replaceAll(":", "").replaceAll("_", " ");
    return (
        <span style={{ textDecoration: "underline" }}>{prettyName}</span>
    )
}


export default TeamName;
