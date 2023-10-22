import NavLink from "./navlink";

const ComponentList = ({ items }) => (

    <div className='text-white px-4 md:px-8'>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        href={item?.href}
                        className='block w-full py-2 px-4 border-l hover:border-fuchsia-500 hover:text-gray-400 duration-150'>
                        {item?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

export default ComponentList