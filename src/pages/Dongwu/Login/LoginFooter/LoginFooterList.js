const FOOTER_LIST = [];
const FOOTER_LIST_TEXT = [
  `소개`,
  `블로그`,
  `채용 정보`,
  `도움말`,
  `API`,
  `개인정보처리방침`,
  `약관`,
  `인기 계정`,
  `해시태그`,
  `위치`,
];

FOOTER_LIST_TEXT.forEach((elem, idx) => {
  let FOOTER_LIST_INFO = { id: idx + 1, href: `#`, text: elem };
  FOOTER_LIST.push(FOOTER_LIST_INFO);
});

export default FOOTER_LIST;
