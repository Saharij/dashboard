import './Modules.scss';

export const Modules = ({ modules }) => {
  return (
    <div className="modules">
      <ul className="modules__list">
        {modules.map(({ id, module }) => (
          <li
            key={id}
            className="modules__item"
          >
            {module}
          </li>
        ))}
      </ul>
    </div>
  );
}
