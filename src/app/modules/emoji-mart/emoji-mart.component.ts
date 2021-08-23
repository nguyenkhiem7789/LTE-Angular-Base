import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-mart',
  templateUrl: './emoji-mart.component.html',
  styleUrls: ['./emoji-mart.component.css']
})
export class EmojiMartComponent implements OnInit {

  constructor() { }
  name = 'Angular';
  message = '';
  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ];
  set = 'twitter';

  ngOnInit(): void {
  }

  toggleEmojiPicker(): void {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event): void {
    console.log(this.message);
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`);
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    // this.showEmojiPicker = false;
  }

  onFocus(): void {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur(): void {
    console.log('onblur');
  }

}
