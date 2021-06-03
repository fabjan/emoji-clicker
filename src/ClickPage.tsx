import {
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import emoji from 'node-emoji';

import Emoji from './Emoji';

type ClickPageProps = {
  team: string
}

const ClickPage = ({ team }: ClickPageProps) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Emoji instance={team} size="10em" />
          <CardTitle tag="h5">Go team {emoji.unemojify(team).replaceAll(":", "")}!</CardTitle>
        </CardBody>
      </Card>
    </div >
  );
};

export default ClickPage;
