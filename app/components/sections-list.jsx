import NavLink from "./navlink";

// Sections List
const SectionsList = ({ items }) => (
    <div className='text-white px-4 md:px-8'>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        href={item?.href}
                        active='text-gray-900 border-amber-600'
                        className='block w-full py-2 px-4 border-l hover:border-amber-600 hover:text-gray-900 duration-150'>
                        {item?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

export default SectionsList