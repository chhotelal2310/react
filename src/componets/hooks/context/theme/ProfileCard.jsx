

import { useTheme } from "./ThemeContext";

const ProfileCard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center p-5 transition-colors duration-300">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="h-28 bg-linear-to-r from-blue-600 to-purple-600" />
        <div className="px-6 pb-6">
          <div className="-mt-14 mb-4 flex justify-between items-end">
            <div className="w-28 h-28 rounded-full bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-gray-900 flex items-center justify-center text-4xl font-bold text-gray-700 dark:text-white">
              CP
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition cursor-pointer"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Chhotelal Patel
          </h1>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
            Software Developer
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                Email
              </p>

              <p className="text-gray-800 dark:text-gray-200">
                chhotupatel705@gmail.com
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                Phone
              </p>

              <p className="text-gray-800 dark:text-gray-200">
                +91 7348651529
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;