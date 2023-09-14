import { Accordion } from "flowbite-react";

export default function FilterLayout({ title, children }) {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="py-2 px-3 focus:ring-2 text-sm">
          {title}
        </Accordion.Title>
        <Accordion.Content className="p-0 relative">
          {children}
          <div className="flex w-[calc(100%_-_10px)] absolute bottom-0 rounded-b-lg h-6 bg-gradient-to-t from-white dark:from-gray-800 to-white/0 dark:to-gray-800/0"></div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
