import { UserRole } from "../common/user.role.model";
import { Message } from "../message/message.model";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    createdAt: string;
    isDeleted: boolean;
    photoName?: string | null;
    unReadedMessageCount: number;
    messages: Message[];
  }