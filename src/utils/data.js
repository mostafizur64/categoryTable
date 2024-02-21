export const heading = [
  "Title",
  "Categories",
  "Price",
  "Date",
  "Author",
  "status",
  "Action",
];

export const bodyDataItem = [
  {
    title: "Journalism",
    category: 'TbBeach',
    price: "120",
    date: "21 Feb 2024",
    author: "Mostafizur Rahman",
    status: <>
    <button className="bg-[green]/10 border border-green-500 text-green-500 px-4 py-2 md:w-32 h-10 w-full rounded-lg">Publish</button>
    </>,
    action: <>
    <button className="bg-indigo-500 border border-indigo-500 text-white px-4 py-2 rounded-lg w-18 h-10 ">Edit</button>
    </>,
  },
  {
    title: "X Project",
    category: 'Philosophy',
    price: "1000",
    date: "22 Feb 2024",
    author: "Mrs Rahman",
    status: <>
    <button className="bg-gray-300 border border-slate-500 text-gray-500 px-4 py-2 rounded-lg md:w-32 w-full h-10">Draft</button>
    </>,
    action: <>
    <button className="bg-indigo-500 border border-indigo-500 text-white px-4 py-2 rounded-lg w-18  h-10">Edit</button>
    </>,
  },
  
];
