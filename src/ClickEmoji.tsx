import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle
} from 'reactstrap';

import { apiBaseUrl } from './Config';
import { useClick, useUpdateTeam } from './mmocg-client/mmocg';
import Emoji from './Emoji';
import TeamName from './TeamName';

type ClickEmojiProps = {
  team: string
}

const ClickEmoji = ({ team }: ClickEmojiProps) => {

  // TODO use a context provider for mocking?
  const { mutate: doCreateTeam, isLoading: isLoadingTeam } = useUpdateTeam({ axios: { baseURL: apiBaseUrl } });
  const { mutate: sendClicks, data: teamStats } = useClick({ axios: { baseURL: apiBaseUrl } });

  const [teamClicks, setTeamClicks] = useState(0);

  useEffect(() => {
    if (team) {
      doCreateTeam({ teamId: team })
    }
  }, [doCreateTeam, team]);

  let clickBatch = 0;

  const onEmojiClick = () => {
    if (isLoadingTeam) {
      console.warn("team is still creating");
      clickBatch++;
    } else {
      // TODO batch more clicks
      let count = 1;
      if (0 < clickBatch) {
        count = clickBatch;
        clickBatch = 0;
      }
      const params = { count };
      sendClicks({ teamId: team, params })
    }
  }

  const backendTeamClicks = teamStats?.data.clicks;
  if (backendTeamClicks && teamClicks < backendTeamClicks) {
    setTeamClicks(backendTeamClicks);
  }

  if (!team) {
    return <></>
  }

  return (
    <>
      <Card>
        <CardBody>
          <Button color="light" onClick={_ => onEmojiClick()}>
            <Emoji instance={team} size="10em" />
          </Button>
          <CardTitle tag="h5">Go team <TeamName name={team} />!</CardTitle>
          <CardSubtitle>{teamClicks} clicks</CardSubtitle>
        </CardBody>
      </Card>
    </>
  );
};

export default ClickEmoji;
