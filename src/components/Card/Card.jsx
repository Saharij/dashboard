import { Modules } from "../Modules/Modules";
import './Card.scss';

export const Card = ({ title, modules }) => {
  return (
    <div className="card">
      <h4 className="card__title">
        {title}
      </h4>
      <div className="card__module">
        <Modules
          modules={modules}
        />
      </div>
    </div>
  );
};
