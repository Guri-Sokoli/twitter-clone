const LeftSideBarLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name;

  return (
    <li className="group" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="cursor-pointer block text-xl pointer-events-none"
      >
        <div className="inline-block py-1">
          <div
            className={`flex items-center justify-center pl-3 pr-8 py-3 rounded-full group-hover:bg-gray-800 group-transform group-transition-colors duration-200
            ${isActive ? "font-bold" : "font-normal"}
            ${isActive ? "text-white" : "text-gray-400"}
            ${isActive ? "bg-gray-900" : ""}
            `}
          >
            <Icon />
            <span className="ml-4">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default LeftSideBarLink;
