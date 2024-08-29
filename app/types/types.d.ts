export interface TeamMember {
    id: number;
    name: string;
    role: string;
}

export interface Team {
    id: number;
    name: string;
    city: string;
    issues:number;
    description: string;
    members: TeamMember[];
}