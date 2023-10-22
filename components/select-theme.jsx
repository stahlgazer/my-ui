'use client';
import Title from "./nav-title";
import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    theme: 'retro', // Default theme
    setTheme: (newTheme) => set({ theme: newTheme }),
}));

const SelectTheme = () => {
    const { theme, setTheme } = useThemeStore();

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className="flex items-start">
            <Title>Theme</Title>
            <select
                onChange={handleThemeChange}
                value={theme}
                className='text-center border border-amber-500 text-black w-1/2 rounded-lg'>
                <option value="retro">Retro</option>
                <option value="sunny">Sunny</option>
            </select>
        </div>)
};

export default SelectTheme