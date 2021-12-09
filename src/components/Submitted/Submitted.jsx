import { useState } from "react";

import './Submitted.scss';
import { Card } from "../Card/Card";
import mockData from "../../api/mockData.json";

export const Submitted = () => {
  const [courses, setCourses] = useState(mockData.courses);

  return (
    <div className="submitted">
      <h3>
        Submitted ({courses.length})
      </h3>
      <ul className="submitted__list">
        {courses.map(({ id, title, status }) => {
          return (
            <li
              key={id}
            >
              <Card
                key={id}
                title={title}
                modules={status.submitted}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
};
