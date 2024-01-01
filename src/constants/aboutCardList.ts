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
      '빠른 로딩 시간과 지연 없는 상호 작용은 제가 가장 중요하게 생각하는 부분입니다.',
    imgUrl: fastImg,
  },
  {
    title: 'Responsive',
    description: '제 레이아웃은 모든 기기에서 크기에 관계 없이 작동합니다.',
    imgUrl: responsiveImg,
  },
  {
    title: 'Intuitive',
    description: '사용하기 쉽고 직관적인 UX/UI를 선호합니다.',
    imgUrl: intuitiveImg,
  },
  {
    title: 'Dynamic',
    description: '페이지에 생동감을 불어넣는 것을 좋아합니다.',
    imgUrl: dynamicImg,
  },
];
