import typingProImg from 'assets/typing_pro.png';
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
  {
    imgUrl: 'https://source.unsplash.com/random',
    title: 'Random',
    techStacks: [],
  },
];
