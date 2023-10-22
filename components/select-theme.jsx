import Title from "./nav-title";

const SelectTheme = ({ ...props }) => (
    <div className="flex items-start">
        <Title>Theme</Title>
        <select className='text-center border border-amber-500 text-black w-1/2 rounded-lg'>
            <option value="Sunny">Sunny</option>
        </select></div>
);

export default SelectTheme