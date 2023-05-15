export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-y-5 leading-7 text-slate-800 dark:text-gray-200 my-9">
        <p>
          I’m a student and developer living in Reggio Emilia, currently
          building software at GAB Tamagnini and other side projects. I’m
          interested in a wide range of topics, including web development, open
          source, hiking, climbing, cooking and ski.
        </p>
        <p>
          Since high school, I spent many time coding, now I use Angular at
          work. However, I am also familiar with React and Next. Currently, I am
          pursuing a computer science course at University of Bologna to further
          enhance my knowledge in this field.
        </p>
        <p>
          You can know more about me via my writings and social media accounts.
        </p>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-gray-200 dark:bg-gray-600 opacity-100 dark:opacity-50" />
      <div className="w-full flex flex-row gap-x-4 leading-7 text-gray-200 my-9">
        <a href="https://twitter.com/brigati_filippo" target="_blank" className=" no-underline text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-500">Twitter</a>
        <a href="https://github.com/filippo-brigati" target="_blank" className=" no-underline text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-500">GitHub</a>
        <a href="https://www.instagram.com/fillobrigati/" target="_blank" className=" no-underline text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-500">Instagram</a>
        <a href="https://www.linkedin.com/in/filippo-brigati-6569981b2/" target="_blank" className=" no-underline text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-500">LinkedIn</a>
      </div>
    </>
  );
}
