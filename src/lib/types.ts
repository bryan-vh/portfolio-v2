export type GitHubRepo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    created_at: Date;
    updated_at: Date;
    fork: boolean
  };