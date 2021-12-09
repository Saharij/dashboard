import { useState } from "react";

import './InProgress.scss';
import { Card } from "../Card/Card";
import mockData from "../../api/mockData.json";

export const InProgress = () => {
  const [courses, setCourses] = useState(mockData.courses);

  return (
    <div className="inProgress">
      <h3>
        In progress ({courses.length})
      </h3>
      <ul className="inProgress__list">
        {courses.map(({ id, title, status }) => {
          return (
            <li
              key={id}
            >
              <Card
                key={id}
                title={title}
                modules={status.inProgress}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
};
