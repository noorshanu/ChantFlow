export type ReligionId =
  | 'hindu'
  | 'muslim'
  | 'christian'
  | 'sikh'
  | 'jain'
  | 'buddhist';

export type ReligionOption = {
  id: ReligionId;
  practiceLabel: string;
  title: string;
};
