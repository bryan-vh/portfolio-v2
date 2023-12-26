import { Star } from "lucide-react";
import type { GitHubRepo } from "@/lib/types";

interface GitHubProps {
  repo: GitHubRepo;
}

export function GitHub({ repo }: GitHubProps) {
  return (
    <a href={repo.html_url}>
      <div className="flex flex-col bg-muted rounded-xl p-4 gap-2">
        <h2 className="text-lg hover:text-primary font-bold">{repo.name}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {repo.description}
        </p>
        <div className="flex gap-4">
          <div className="flex items-center">
            {/* <Circle className="mr-1 w-3 h-3 fill-orange-400 text-orange-400"/> */}
            <p className="text-sm font-medium">{repo.language}</p>
          </div>
          <div className="flex items-center">
            <Star className="mr-1 w-3 h-3" />
            <p className="text-sm font-medium">{repo.stargazers_count}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
