import { User } from "../user/user.model";

export class BoardMetaData {
  id: string;
  name: string | null;
  participants: User[];
  numberOfPosts: number;
  numberOfPositiveVotes: number;
  numberOfNegativeVotes: number;
  numberOfActions: number;
  created: Date;
  createdBy: User;
  canBeDeleted: boolean;
  isPublic: boolean;
}