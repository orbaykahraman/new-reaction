import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css'],
  animations: [
    trigger('emojiRain', [
      transition(':enter', [
        style({
          opacity: 0.5,
          transform: 'translateY(-100px) rotate(0deg) scale(0.5)'
        }),
        animate('{{duration}} cubic-bezier(0.1, 0.7, 0.6, 1)',
          style({
            opacity: 1,
            transform: 'translateY(100vh) rotate({{rotation}}deg) scale(1.2)'
          })
        ),
        animate('0.5s ease-out',
          style({
            opacity: 0,
            transform: 'translateY(120vh) rotate({{rotation}}deg) scale(0.8)'
          })
        )
      ])
    ]),
    trigger('messageAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.8) translateY(40px) rotate(-5deg)',
        filter: 'blur(2px)'
      })),
      transition(':enter', [
        animate('0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({
          opacity: 1,
          transform: 'scale(1) translateY(0) rotate(0deg)',
          filter: 'blur(0)'
        })),
        animate('2s', style({
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
        })),
        animate('0.6s 2.5s ease-out', style({
          opacity: 0,
          transform: 'scale(1.3)',
          filter: 'blur(1px)',
          textShadow: 'none'
        }))
      ])
    ])
  ]
})
export class ReactionComponent {
  emojis = ['😊', '👍', '👎', '💯', '❤️'];
  activeEmojis: {
    emoji: string,
    left: string,
    duration: string,
    rotation: string,
    size: string
  }[] = [];

  // Emoji mesaj eşleşmeleri
  emojiMessages: { [key: string]: string } = {
    '😊': 'HAHAHA',
    '👍': 'OK',
    '👎': 'NOPE',
    '💯': 'BULLSEYE',
    '❤️': 'I like it'
  };

  currentMessage: string = '';
  showMessage: boolean = false;

  getEmojiIndex(emoji: string): number {
    return this.emojis.indexOf(emoji) + 1;
  }

  react(emoji: string) {
    // Mesajı göster
    this.showReactionMessage(emoji);

    // 50 adet emoji oluştur
    for (let i = 0; i < 100; i++) {
      const left = `${Math.random() * 100}%`;
      const duration = `${3 + Math.random() * 2}s`;
      const rotation = `${Math.random() * 360}`;
      const size = `${20 + Math.random() * 20}px`;

      this.activeEmojis.push({
        emoji,
        left,
        duration,
        rotation,
        size
      });

      // Animasyon bittikten sonra kaldır
      setTimeout(() => {
        this.activeEmojis = this.activeEmojis.filter(item => item.left !== left);
      }, 5000);
    }
  }

  showReactionMessage(emoji: string) {
    this.currentMessage = this.emojiMessages[emoji];
    this.showMessage = true;

    // 3 saniye sonra mesajı gizle
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const keyEmojiMap: { [key: string]: string } = {
      '1': '😊', '2': '👍', '3': '👎', '4': '💯', '5': '❤️'
    };

    if (keyEmojiMap[event.key]) {
      this.react(keyEmojiMap[event.key]);
    }
  }

}
