import timelineElements from "../helpers/timelineElements";

const Timeline = () => {
    return (
      <div>
        {timelineElements.map(item => (
          <timelineElements key={item.id} item={item} />
        ))}
      </div>
    );
  };

  const timelineElements = ({ item }) => {
    return (
      <div>
        <img src={item.image} alt={item.caption} />
        <p>{item.caption}</p>
        <p>{item.date}</p>
      </div>
    );
  };

  import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Timeline</h1>
      <Timeline />
    </div>
  );
};

export default App;