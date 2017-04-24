import React from 'react';

import DayItem from './dayItem';

function DayList({ list }) {
  return (
    <ul>
      {list.map(item => <DayItem key={item.id} item={item} />)}
    </ul>
  );
}

export default DayList;
