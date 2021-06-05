import { Button } from 'reactstrap';
import EmojiPicker, { IEmojiData } from "emoji-picker-react";

interface SelectTeamProps {
    team: string | null;
    setTeam: (s: string | null) => void;
}

const SelectTeam = (props: SelectTeamProps) => {

    const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
        props.setTeam(emojiObject.emoji);
    };

    const changeTeam = <Button onClick={_ => props.setTeam(null)} color="light">Change team</Button>

    // TODO improve team state (and select from leaderboard somehow?)

    const picker = <EmojiPicker
        onEmojiClick={onEmojiClick}
        disableSearchBar={true}
        disableSkinTonePicker={true}
        disableAutoFocus={true}
        native
    />;

    return (
        <div>
            {props.team
                ? <p style={{ padding: "1ex 1em" }}>{changeTeam}</p>
                : (<><p>Select a team below</p> {picker}</>)
            }
        </div>
    )
}

export default SelectTeam;
