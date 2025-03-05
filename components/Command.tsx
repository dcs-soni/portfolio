"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/index";
import { RESUME_DATA } from "@/data/RESUME_DATA";
import * as Dialog from "@radix-ui/react-dialog";

interface CommandItemProps {
  onSelect?: () => void;
  children: React.ReactNode;
}

const CommandItem = ({ onSelect, children }: CommandItemProps) => {
  return (
    <Command.Item
      onSelect={onSelect}
      className="px-2 py-3 rounded-lg aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800/50 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
      {children}
    </Command.Item>
  );
};

const socialLinks: Record<string, string> = RESUME_DATA.contact.social.reduce(
  (acc, item) => {
    acc[item.name] = item.url;
    return acc;
  },
  {} as Record<string, string>
);

const socialItems = [
  { name: "GitHub", icon: <GitHubIcon />, url: socialLinks["GitHub"] },
  { name: "LinkedIn", icon: <LinkedInIcon />, url: socialLinks["LinkedIn"] },
  { name: "X", icon: <XIcon />, url: socialLinks["X"] },
];

const sections = [
  { section: "Home", url: "#home" },
  { section: "ABout", url: "#about" },
  { section: "Experience", url: "#experience" },
  { section: "Projects", url: "#projects" },
  { section: "Space", url: `${RESUME_DATA.constants.space}` },
];

export const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleNavigation = (href: string) => {
    setOpen(false);
    window.location.href = href;
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-zinc-600/5 dark:bg-zinc-600/5 backdrop-blur-sm z-30" />
      )}

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 z-40 ">
        {/* Add Dialog.DialogTitle for accessibility*/}
        <Dialog.DialogTitle className="sr-only">
          Command Menu
        </Dialog.DialogTitle>

        <Command.Input
          placeholder="Type a command or search..."
          className="w-full px-4 py-3 text-sm border-b border-zinc-200 dark:border-zinc-800 outline-none bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="px-2 py-3 text-sm text-zinc-500 dark:text-zinc-400">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Navigation"
            className="px-2 py-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            {sections.map(({ section, url }) => (
              <CommandItem
                key={section}
                onSelect={() => handleNavigation(`${url}`)}>
                {section}
              </CommandItem>
            ))}
          </Command.Group>

          <Command.Group
            heading="Social"
            className="mt-2 px-2 py-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            {socialItems.map(({ name, icon, url }) => (
              <CommandItem
                key={name}
                onSelect={() => window.open(url, "_blank")}>
                {icon} {name}
              </CommandItem>
            ))}

            <CommandItem
              onSelect={() =>
                (window.location.href = `mailto:${RESUME_DATA.contact.email}`)
              }>
              <Mail className="w-4 h-4" />
              Email
            </CommandItem>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};
