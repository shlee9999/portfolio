import fastImg from 'assets/fast.png';
import responsiveImg from 'assets/responsive.png';
import intuitiveImg from 'assets/intuitive.png';
import dynamicImg from 'assets/dynamic.png';
export interface IAboutCard {
  title: string;
  description: string;
  imgUrl: string;
}
export const aboutCardList: IAboutCard[] = [
  {
    title: 'Fast',
    description:
      'Fast load times and lag free interaction, my highest priority.',
    imgUrl: fastImg,
  },
  {
    title: 'Responsive',
    description: 'My layouts will work on any device, big or small.',
    imgUrl: responsiveImg,
  },
  {
    title: 'Intuitive',
    description: 'Strong preference for easy to use, intuitive UX/UI.',
    imgUrl: intuitiveImg,
  },
  {
    title: 'Dynamic',
    description:
      "Websites don't have to be static, I love making pages come to life.",
    imgUrl: dynamicImg,
  },
];
