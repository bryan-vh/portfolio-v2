import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <AlignJustify className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-start">Go To</SheetTitle>
            <SheetDescription className="text-start">
              Check out some of my personal projects or read from my blog.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 pt-4">
            <Button asChild variant="outline">
              <a href="/projects">Projects</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/blog">Blog</a>
            </Button>
            <Button>
              <a href="https://www.buymeacoffee.com/bryanvh">Buy me a 🍵</a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
