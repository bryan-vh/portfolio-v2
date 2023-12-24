import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function NavMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href="/projects">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Projects
                        </NavigationMenuLink>
                    </a>
                    <a href="/blog">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </a>
                    <a href="/tags">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Tags
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}