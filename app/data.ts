import { Team } from "~/types/types";

export const teams: Team[] = [
  {
    id: 1,
    issues: 12,
    name: "Dragons",
    city: "New York",
    description: "A fierce and determined team known for their strategic play and teamwork.",
    members: [
      { id: 1, name: "Alice Johnson", role: "Captain" },
      { id: 2, name: "Bob Smith", role: "Player" },
      { id: 3, name: "Carol Lee", role: "Coach" }
    ]
  },
  {
    id: 2,
    issues: 8,
    name: "Tigers",
    city: "Los Angeles",
    description: "An aggressive team with a focus on offensive plays and high energy.",
    members: [
      { id: 4, name: "David Brown", role: "Captain" },
      { id: 5, name: "Emma Davis", role: "Player" },
      { id: 6, name: "Frank Wilson", role: "Coach" }
    ]
  },
  {
    id: 3,
    issues: 5,
    name: "Eagles",
    city: "Chicago",
    description: "A well-balanced team known for their versatility and adaptability.",
    members: [
      { id: 7, name: "Grace Miller", role: "Captain" },
      { id: 8, name: "Hank Moore", role: "Player" },
      { id: 9, name: "Ivy Anderson", role: "Coach" }
    ]
  }
];
