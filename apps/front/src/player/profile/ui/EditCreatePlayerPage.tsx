import { Button } from '#/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Container } from 'styled-system/jsx';
import { PlayerProfilePersonalForm } from './molecule/PlayerProfilePersonalForm';
import { PlayerProfileSportForm } from './molecule/PlayerProfileSportForm';
import { Tab, Tabs } from '#/components/Tabs';

const tabs: Tab[] = [
  { id: 'personal', label: 'Informations Personnelles', content: <PlayerProfilePersonalForm /> },
  { id: 'sport', label: 'Informations Sportives', content: <PlayerProfileSportForm /> },
];

export const EditPlayerProfilePage: React.FC = () => {
  return (
    <Container maxWidth="3xl">
      <Button asChild>
        <Link to="/player/profile">Revenir au profil</Link>
      </Button>

      <Tabs tabs={tabs} defaultTabId={tabs[0].id} size="lg" />
    </Container>
  );
};
