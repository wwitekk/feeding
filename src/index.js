import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Provider from 'react-redux';
import CreateStore from 'redux';
import items from './Reducers/foodItems'


const rawData = [
  {
    "id": 1,
    "qty": 68,
    "time": "2016-08-23 17:55:16",
    "type": 1
  },
  {
    "id": 2,
    "qty": 74,
    "time": "2017-10-16 06:16:15",
    "type": 1
  },
  {
    "id": 3,
    "qty": 119,
    "time": "2017-10-16 17:42:50",
    "type": 0
  },
  {
    "id": 4,
    "qty": 65,
    "time": "2017-10-16 12:47:40",
    "type": 1
  },
  {
    "id": 5,
    "qty": 114,
    "time": "2017-01-28 03:04:46",
    "type": 0
  },
  {
    "id": 6,
    "qty": 47,
    "time": "2016-06-29 21:45:21",
    "type": 1
  },
  {
    "id": 7,
    "qty": 134,
    "time": "2017-10-31 18:56:24",
    "type": 0
  },
  {
    "id": 8,
    "qty": 105,
    "time": "2016-05-01 20:01:51",
    "type": 0
  },
  {
    "id": 9,
    "qty": 122,
    "time": "2016-12-13 15:29:36",
    "type": 1
  },
  {
    "id": 10,
    "qty": 55,
    "time": "2017-09-09 09:36:38",
    "type": 1
  },
  {
    "id": 11,
    "qty": 145,
    "time": "2018-01-11 14:13:44",
    "type": 1
  },
  {
    "id": 12,
    "qty": 73,
    "time": "2017-08-12 18:26:41",
    "type": 1
  },
  {
    "id": 13,
    "qty": 77,
    "time": "2016-04-13 06:39:57",
    "type": 0
  },
  {
    "id": 14,
    "qty": 53,
    "time": "2017-09-22 16:39:15",
    "type": 0
  },
  {
    "id": 15,
    "qty": 146,
    "time": "2016-03-23 10:33:21",
    "type": 0
  }
];


//1. create days helpers
const sortByDate = (a, b) =>
  new Date(b.time) - new Date(a.time);
const exctractDate = (item) => {
  const date = new Date(item.time);
  return {
    ...item,
    day: date.getDate(),
    week: Math.ceil(new Date(item.time).getDate() / 7), //TODO: redo - mon-fri
    month: date.getMonth(),
    year: date.getFullYear(),
    dateString: `${date.getFullYear()}${date.getMonth()}${date.getDate()}`
  }
};
const countSum = (prev, next) => (prev.qty || prev) + next.qty;

const resultItems = rawData
  .sort(sortByDate)
  .map(exctractDate);

const groupByDate = (items, result) => {
  const sortedItems = items.sort(sortByDate),
    date = sortedItems[0].dateString,
    group = sortedItems.filter(function (item) {
      return item.dateString === date;
    });
  result = result || [];
  result.push({ "date": date, "items": group });
  const remainingItems = sortedItems.slice(group.length);

  if (remainingItems.length > 0) {
    return groupByDate(remainingItems, result);
  }
  else {
    return result;
  }
}

const daysRaw = groupByDate(resultItems);

const daysWithTotals = day => {
  return {
    ...day,
    //TODO: refactor
    subtotalType1: day.items.filter(item => item.type === 0).reduce(countSum, 0),
    subtotalType2: day.items.filter(item => item.type === 1).reduce(countSum, 0),
    total: day.items.reduce(countSum, 0)
  }
}

const days = daysRaw
  .map(daysWithTotals);

console.log('days', days)




//2. divide by weeks

//3. calculate totals





let store = CreateStore(items)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
