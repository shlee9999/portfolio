import typingProImg from 'assets/typing_pro.png';
import planmateImg from 'assets/planmate.png';
export interface IProject {
  imgUrl: string;
  title: string;
  techStacks: string[];
}
export const projectList: IProject[] = [
  {
    imgUrl: typingProImg,
    title: 'TypingPro',
    techStacks: ['Javascript', 'ReactJS'],
  },
  {
    imgUrl: planmateImg,
    title: 'PlanMate',
    techStacks: ['Typescript', 'ReactJS', 'Redux'],
  },
  {
    imgUrl: 'https://source.unsplash.com/random',
    title: 'Random',
    techStacks: [],
  },
  {
    imgUrl: 'https://source.unsplash.com/random',
    title: 'Random',
    techStacks: [],
  },
  {
    imgUrl: 'https://source.unsplash.com/random',
    title: 'Random',
    techStacks: [],
  },
  {
    imgUrl: 'https://source.unsplash.com/random',
    title: 'Random',
    techStacks: [],
  },
];
