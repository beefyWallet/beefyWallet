import React from 'react'
import { Pie } from 'react-chartjs-2'
import useStyles from '../../useStyle'
const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}
function randomColors(items) {
  const colorslist = []
  items.forEach(element => {
    const random = Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()
    const color = `#${random}`
    colorslist.push(color)
  })
  return colorslist
}

export default function PieChart({ transactionsData }) {
  console.log(transactionsData)
  const categories = {}
  transactionsData.map(item => {
    categories[item.category]
      ? (categories[item.category] += 1)
      : (categories[item.category] = 1)
  })

  const colorsList = randomColors(Object.keys(categories))
  const classes = useStyles()
  return (
    <>
      <Pie
        data={{
          labels: Object.keys(categories),
          datasets: [
            {
              data: Object.values(categories),
              backgroundColor: colorsList,
              hoverBackgroundColor: colorsList,
            },
          ],
        }}
        width={10}
        height={10}
      />
    </>
  )
}
