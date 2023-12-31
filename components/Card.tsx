import React from 'react';
import { useRouter } from 'next/navigation';

/**
 * Component that renders the individual cards
 */

interface Character {
  id: string;
  image: string;
  name: string;
  dateOfBirth: string;
}

const Card: React.FC<{ item: Character }> = ({ item }) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    router.push(`/character/${item.id}`);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto my-4">
      <div className="h-56 md:h-72 flex items-center justify-center">
        <img
          className="rounded-t-lg w-full h-56 md:h-80 object-cover"
          src={item.image}
          alt=""
        />
      </div>
      <div className="text-center p-4">
        <h5 className="my-2 text-lg font-bold tracking-tight text-gray-600 dark:text-white">
          Name: {item.name}
        </h5>
        <p className="mb-3 font-medium text-gray-600 dark:text-gray-400">
          D.O.B: {item.dateOfBirth}
        </p>
        <button
          type="button"
          onClick={handleReadMoreClick}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
