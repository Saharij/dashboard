import { useState } from "react";

import './ReadyToRelease.scss';
import { Card } from "../Card/Card";
import mockData from "../../api/mockData.json";

export const ReadyToRelease = () => {
  const [courses, setCourses] = useState(mockData.courses);

  return (
    <div className="readyToRelease">
      <h3>
        Ready to release ({courses.length})
      </h3>
      <ul className="readyToRelease__list">
        {courses.map(({ id, title, status }) => {
          return (
            <li
              key={id}
            >
              <Card
                key={id}
                title={title}
                modules={status.readyToRelease}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
};
