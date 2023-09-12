import { Accordion } from "flowbite-react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function FilterLayout({ title, children }) {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="py-2 px-3 focus:ring-2 bg-gray-50">
          {title}
        </Accordion.Title>
        <Accordion.Content className="p-0">
          <ScrollArea.Root className="w-full h-full rounded overflow-hidden bg-white">
            <ScrollArea.Viewport className="w-full h-full max-h-[250px] rounded">
              {children}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA8" />
          </ScrollArea.Root>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
