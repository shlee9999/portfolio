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
  description: string;
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
    techStacks: ['Javascript', 'React', 'Hangul-js'],
    description:
      'TypingPro는 타자 연습 웹사이트로, 시작할 당시 HTML, CSS 조차 처음이었지만 팀장이라는 책임감 하나로 4월부터 6월까지 진행하여 성공적으로 완료하였습니다. 협업에 있어서 린팅과 디렉토리 구조가 중요하다는 것을 알게 되었고, 커스텀 코드 스니펫을 만들어보기도 하며 개발 속도를 촉진했습니다. 이 프로젝트에서 정말 크게 와닿은 것은 프로젝트를 완성하는 것은 수준급의 개발 실력이 아니라 결국 프로젝트에 대한 집착과 애정이라는 것입니다. 웹사이트를 제가 만족할 때까지 혼자서 꾸며보고, 프로젝트에 TypingPro라는 이름을 붙이고, 로고를 직접 만들고 타자연습을 위한 자바스크립트의 복잡한 로직들을 다루서 프로젝트에 애정이 커져갔습니다. 오타는 빨간색으로, 정타는 파란색으로 표시해 주는 복잡한 기능도 스스로 구현해 보았습니다. 팀장이 처음부터 정해져 있던 것은 아니었지만, 제가 이 프로젝트에 애정을 갖고 열심히 참여하는 모습을 보고 중간에 노력을 인정받아 팀장이 됐습니다. 팀원들의 코드를 리팩토링 해주기도 하고, 한컴타자연습의 산성비를 모티브로 한 소나기라는 게임을 라이브러리 없이 순수 CSS와 Javascript만으로 구현해보기도 했습니다. 애정이 커질수록 저는 더욱 성장했고 기능이 하나씩 추가될 때마다 행복했습니다. ',
  },
  {
    imgUrlList: [planmate],
    title: 'PlanMate',
    techStacks: ['Typescript', 'React', 'Redux'],
    description: '',
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
    description: '',
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
    description: '',
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
    description: '',
  },
  {
    imgUrlList: ['https://source.unsplash.com/random'],
    title: 'Random',
    techStacks: [],
    description: '',
  },
];
