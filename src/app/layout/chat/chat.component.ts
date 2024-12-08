import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  imageError: boolean = false;
  selectedUserImageError: boolean = false;
  sidebarOpen: boolean = true;

  constructor(
    private router: Router,
  ) { }

  contacts = [
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'Travis Barker', lastMessage: 'See you at office tomorrow!', image: 'path/to/image2.jpg', messages: [{ text: 'Meeting at the office tomorrow.' }, { text: 'Don’t forget your laptop.' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?bkdk  s  k kbewb dshhe  jbej d heb   ekbd  h   k e  h sd j hje j dj', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'How are you doing?', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },
    { name: 'John Doe', lastMessage: 'wjejkbjb jwebjk wke dj', image: 'path/to/image1.jpg', messages: [{ text: 'Hello!' }] },

  ];

  messages = [
    { id: 1, text: 'Meeting at the office tomorrow', time: new Date(2023, 10, 1, 9, 0) },
    { id: 2, text: 'Don’t forget your laptop', time: new Date(2023, 10, 1, 9, 5) },
    { id: 1, text: 'Hello!', time: new Date(2023, 10, 1, 9, 10) },
    { id: 1, text: 'How are you doing?', time: new Date(2023, 10, 1, 9, 15) },
    { id: 2, text: 'I’m good, thank you!', time: new Date(2023, 10, 1, 9, 20) },
    { id: 1, text: 'See you at office tomorrow!', time: new Date(2023, 10, 1, 9, 25) },
    { id: 2, text: 'Meeting at the office tomorrow', time: new Date(2023, 10, 1, 9, 30) },
    { id: 1, text: 'Don’t forget your laptop', time: new Date(2023, 10, 1, 9, 35) },
    { id: 1, text: 'Hello!', time: new Date(2023, 10, 1, 9, 40) },
    { id: 1, text: 'How are you doing?', time: new Date(2023, 10, 1, 9, 45) },
    { id: 2, text: 'I’m good, thank you!', time: new Date(2023, 10, 1, 9, 50) },
  ];
  

  selectedContact = this.contacts[1];
  public newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        id: 1,
        text: this.newMessage,
        time: new Date()
      });
      this.newMessage = '';
    }
  }

  toggleMenu(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  clickSetting(){
    this.router.navigate(['/chat/settings']).catch(err => {
      console.error('Navigation error:', err);
    });
  }
}
