import {
  createElement,
  createHeader,
} from '../../script/layout'

// ===

const page = document.querySelector('.page')

// ===

const header = createHeader()
page.append(header)

// ===

const title = createElement('h1', 'title', `Ком'юніті`)
page.append(title)

//==

const INFO_TABS = [
  {
    info: 'База знань',
    active: false,
  },
  {
    info: 'Інформація',
    active: true,
  },
]

const createTabs = () => {
  const infoTabs = createElement('div', 'info__tabs')

  INFO_TABS.forEach((tabsData) => {
    const tab = createElement(
      'div',
      tabsData.active
        ? 'info__tab info__tab--active'
        : 'info__tab',
      tabsData.info,
    )
    infoTabs.append(tab)
  })
  return infoTabs
}
const tabs = createTabs()
page.append(tabs)

//

const infoBannerImg = createElement('img')
infoBannerImg.src = 'img/info__banner.png'
page.append(infoBannerImg)

const postHeader = createElement(
  'div',
  'post__header',
  'Що таке база знань?',
)
page.append(postHeader)

const postInfoParagraph = createElement(
  'p',
  'post__info',
  `База знань — це база даних, яка містить правила виведення та інформацію про людський досвід
		та знання в певній предметній області. У самонавчальних системах база знань також містить інформацію, яка є
		результатом вирішення попередніх завдань.`,
)
page.append(postInfoParagraph)

const buttonInfoButtonImg = createElement('div', 'button')
const imgInfoButtonImg = createElement('img')
imgInfoButtonImg.src = 'img/info__button.png'
buttonInfoButtonImg.append(imgInfoButtonImg)
page.append(buttonInfoButtonImg)

const bottomLine = createElement('div', 'bottom__line')
const bottomLineImg = createElement('img')
bottomLineImg.src = 'img/info__bottom_line.png'
bottomLine.append(bottomLineImg)
page.append(bottomLine)
