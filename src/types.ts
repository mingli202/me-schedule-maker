export type Class = {
  count: number;
  program: string;
  course: string;
  code: string;
  codeHeader: string;
  section: string;
  disc: string;
  lecture: {
    prof: string;
    title: string;
    rating: Rating;
  };
  lab: {
    prof: string;
    title: string;
    rating: Rating;
  };
  more: string;
};

export type Rating = {
  prof: string;
  score: number;
  avg: number;
  nRating: number;
  takeAgain: number;
  difficulty: number;
  status: string;
};
