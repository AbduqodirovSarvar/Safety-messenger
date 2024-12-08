export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    msg: string;
    isSeen: boolean;
    seenAt: Date;
    createdAt: Date;
  }