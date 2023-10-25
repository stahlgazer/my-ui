import NavLink from "./nav-link";

export default function ComponentList({ routes }) {
    return (
        <div className='text-white px-4 md:px-8'>
            <ul>
                {routes?.map((route, idx) => (
                    <li key={idx}>
                        <NavLink
                            href={route?.href}
                            className='block w-full py-2 px-4 border-l hover:border-fuchsia-500 hover:text-gray-400 duration-150'>
                            {route?.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>)
}
