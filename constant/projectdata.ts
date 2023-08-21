import { iconType } from '../lib/types'
import flexvest from '/assets/projectimages/ui/flexvest.png'
import vergecomerce from '/assets/projectimages/ui/vergecomerce.png'
import designtaxi from '/assets/projectimages/ui/designtaxi.png'
import daspy from '/assets/projectimages/ui/daspy.png'
import nexturl from '/assets/projectimages/dev/nexturl.png'
import expensetracker from '/assets/projectimages/dev/expensetracker.png'
import gitfindr from '/assets/projectimages/dev/gitfindr.png'
import pyPoll from '/assets/projectimages/dev/py-poll.png'

const projectData = [
  {
    id: 1,
    type: 'design',
    title: 'Flex Vest',
    description: 'Financial, saving and investment app design',
    imgUrl: flexvest,
    links: [
      {
        id: 1,
        icons: 'behance' as iconType,
        url: 'https://www.behance.net/gallery/129555233/Flex-vest-finance-and-investment-app',
        size: '1.6rem',
      },
    ],
  },
  {
    id: 8,
    type: 'design',
    title: 'Daspy',
    description: 'Digital marketing solution agency',
    imgUrl: daspy,
    links: [
      {
        id: 1,
        icons: 'behance' as iconType,
        url: 'https://www.behance.net/gallery/131650031/Daspy',
        size: '1.6rem',
      },
    ],
  },
  {
    id: 2,
    type: 'dev',
    title: 'Next-url',
    description: 'Url link shortener and modifier',
    imgUrl: nexturl,
    imgBg: '#fefefe',
    links: [
      {
        id: 1,
        icons: 'github' as iconType,
        url: 'https://github.com/chuddyjoachim/next-url',
        size: '1.85rem',
      },
      { id: 1, icons: 'link' as iconType, url: 'https://nexturl.vercel.app/', size: '1.6rem' },
    ],
  },
  {
    id: 5,
    type: 'design',
    title: 'Verge Comerce',
    description: 'Flower ecomerce app',
    imgUrl: vergecomerce,
    links: [
      {
        id: 1,
        icons: 'behance' as iconType,
        url: 'https://www.behance.net/gallery/128874717/Verge-commerce',
        size: '1.6rem',
      },
    ],
  },
  {
    id: 3,
    type: 'dev',
    title: 'Expense tracker',
    description: 'Basic expense tracker built with react.js',
    imgUrl: expensetracker,
    imgBg: '#fefefe',
    links: [
      {
        id: 1,
        icons: 'github' as iconType,
        url: 'https://github.com/chuddyjoachim/expense-tracker',
        size: '1.85rem',
      },
      {
        id: 1,
        icons: 'link' as iconType,
        url: 'https://expense-tracker-git-main-chuddyjoachim.vercel.app/',
        size: '1.6rem',
      },
    ],
  },
  {
    id: 4,
    type: 'dev',
    title: 'Git Findr',
    description: 'Web app Tools used to find existing users on github',
    imgUrl: gitfindr,
    imgBg: '#fefefe',
    links: [
      {
        id: 1,
        icons: 'github' as iconType,
        url: 'https://github.com/chuddyjoachim/git-findr',
        size: '1.85rem',
      },
      { id: 1, icons: 'link' as iconType, url: 'https://getgitfindr.netlify.app/', size: '1.6rem' },
    ],
  },
  {
    id: 6,
    type: 'design',
    title: 'Design Taxi',
    description: 'Taxi design (short)',
    imgUrl: designtaxi,
    imgBg: '#fefefe',
    links: [
      {
        id: 1,
        icons: 'behance' as iconType,
        url: 'https://www.behance.net/gallery/129464171/Design-Taxi-shot',
        size: '1.75rem',
      },
    ],
  },
  {
    id: 7,
    type: 'dev',
    title: 'Py poll',
    description: 'Graphql api for creating poll and polling',
    imgUrl: pyPoll,
    imgBg: '#fefefe',
    links: [
      {
        id: 1,
        icons: 'github' as iconType,
        url: 'https://github.com/chuddyjoachim/py-poll',
        size: '1.85rem',
      },
    ],
  },
]
export default projectData
