import typingPro from 'assets/projects/typing_pro/typing_pro.png';
import typingProMain from 'assets/projects/typing_pro/main.png';
import typingProCategoryModal from 'assets/projects/typing_pro/category_modal.png';
import typingProShower from 'assets/projects/typing_pro/shower.png';
import typingProShowerInGame from 'assets/projects/typing_pro/shower_in_game.png';
import planmate from 'assets/projects/planmate/planmate.png';
export interface IProject {
  imgUrlList: string[];
  title: string;
  techStacks: string[];
}
export const projectList: IProject[] = [
  {
    imgUrlList: [
      typingPro,
      typingProMain,
      typingProCategoryModal,
      typingProShower,
      typingProShowerInGame,
    ],
    title: 'TypingPro',
    techStacks: ['Javascript', 'React'],
  },
  {
    imgUrlList: [planmate],
    title: 'PlanMate',
    techStacks: ['Typescript', 'React', 'Redux'],
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
  },
];
