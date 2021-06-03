import {
  Button,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import emoji from 'node-emoji';

import Emoji from './Emoji';

type ClickEmojiProps = {
  team: string
}

const ClickEmoji = ({ team }: ClickEmojiProps) => {
  // TODO push clicks to backend
  return (
    <div>
      <Card>
        <CardBody>
          <Button color="light">
            <Emoji instance={team} size="10em" />
          </Button>
          <CardTitle tag="h5">Go team {emoji.unemojify(team).replaceAll(":", "")}!</CardTitle>
        </CardBody>
      </Card>
    </div >
  );
};

export default ClickEmoji;
