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

    const clear = <Button onClick={_ => props.setTeam(null)} color="light">{props.team}</Button>

    const pick = <EmojiPicker
        onEmojiClick={onEmojiClick}
        disableSearchBar={true}
        disableSkinTonePicker={true}
        disableAutoFocus={true}
        native
    />;

    return (
        <div>
            <p>Your team is {props.team ? clear : pick}</p>
        </div>
    )
}

export default SelectTeam;
