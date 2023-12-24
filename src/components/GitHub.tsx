import { Circle, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import type { GitHubRepo } from "@/lib/types";
import * as colors from 'public/github-colors.json'

interface GitHubProps {
    repo: GitHubRepo
}

export function GitHub({ repo }: GitHubProps) {
    return (
        <Card className="shadow-none">
            <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
                <CardDescription>{repo.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4">
                    <div className="flex items-center">
                        {/* <Circle className="mr-1 w-3 h-3 fill-orange-400 text-orange-400"/> */}
                        {repo.language}
                    </div>
                    <div className="flex items-center">
                        <Star className="mr-1 w-4 h-4"/>
                        {repo.stargazers_count}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}