document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
    const emojiBtn = document.getElementById('emojiBtn');
    const emojiPanel = document.getElementById('emojiPanel');
    const emojiList = document.getElementById('emojiList');
    const imageBtn = document.getElementById('imageBtn');
    const fileInput = document.getElementById('fileInput');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const chatList = document.getElementById('chatList');
    const searchInput = document.getElementById('searchInput');
    const chatItems = document.querySelectorAll('.chat-item');
    const chatHeader = document.getElementById('chatHeader');
    const emojiTabs = document.querySelectorAll('.emoji-tab');

    const emojis = {
        emoji: ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖'],
        animal: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🪱', '🐛', '🦋', '🐌', '🐞', '🐜', '🪰', '🪲', '🪳', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊️', '🐇', '🦝', '🦨', '🦡', '🦦', '🦥', '🐁', '🐀', '🐿️', '🦔'],
        food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🫒', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶️', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅', '🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🫓', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🫔', '🌭', '🥪', '🌮', '🌯', '🫗', '🥙', '🧆', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '☕', '🫖', '🍵', '🧃', '🥤', '🧋', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊'],
        sport: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛼', '🛷', '⛸️', '🥌', '🎿', '⛷️', '🏂', '🪂', '🏋️', '🤼', '🤸', '⛹️', '🤺', '🤾', '🏌️', '🏇', '🧘', '🏄', '🏊', '🤽', '🚣', '🧗', '🚵', '🚴', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️', '🎫', '🎟️', '🎪', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🪕', '🎻', '🎲', '♟️', '🎯', '🎳', '🎮', '🎰', '🧩'],
        heart: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️', '💌', '💍', '💎', '👑', '💐', '🌹', '🌸', '🌺', '🌻', '🌼', '🌷', '🌱', '🪴', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘️', '🍀', '🍁', '🍂', '🍃', '🍇', '🍊', '🍋', '🍌', '🍉', '🍊'],
        flag: ['🚩', '🏳️', '🏴', '🏁', '🏳️‍🌈', '🏴‍☠️', '🇨🇳', '🇺🇸', '🇬🇧', '🇯🇵', '🇰🇷', '🇩🇪', '🇫🇷', '🇮🇹', '🇪🇸', '🇵🇹', '🇧🇷', '🇷🇺', '🇮🇳', '🇦🇺', '🇨🇦', '🇲🇨', '🇸🇦', '🇿🇦', '🇳🇬', '🇲🇽', '🇨🇭', '🇸🇪', '🇳🇱', '🇨🇭', '🇦🇹', '🇬🇷', '🇵🇱', '🇹🇷', '🇺🇦', '🇻🇳', '🇹🇭', '🇸🇬', '🇲🇾', '🇮🇩', '🇵🇭', '🇹🇼', '🇭🇰', '🇲🇴', '🇹🇷']
    };

    let currentChat = 'friend1';
    let recentEmojis = [];

    function initEmojis() {
        renderEmojis('emoji');
    }

    function renderEmojis(category) {
        emojiList.innerHTML = '';
        const emojiItems = emojis[category] || [];
        emojiItems.forEach(emoji => {
            const span = document.createElement('span');
            span.className = 'emoji-item';
            span.textContent = emoji;
            span.addEventListener('click', () => {
                insertEmoji(emoji);
            });
            emojiList.appendChild(span);
        });
    }

    function insertEmoji(emoji) {
        const start = messageInput.selectionStart;
        const end = messageInput.selectionEnd;
        const text = messageInput.value;
        const newText = text.substring(0, start) + emoji + text.substring(end);
        messageInput.value = newText;
        messageInput.focus();
        messageInput.selectionStart = messageInput.selectionEnd = start + emoji.length;

        if (!recentEmojis.includes(emoji)) {
            recentEmojis.unshift(emoji);
            if (recentEmojis.length > 20) {
                recentEmojis.pop();
            }
        }

        if (emojiPanel.classList.contains('show')) {
            emojiPanel.classList.remove('show');
        }
    }

    emojiTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            emojiTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.dataset.category;
            renderEmojis(category);
        });
    });

    emojiBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        emojiPanel.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!emojiPanel.contains(e.target) && e.target !== emojiBtn) {
            emojiPanel.classList.remove('show');
        }
    });

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function createMessageElement(content, type = 'sent', time = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;

        const avatar = type === 'sent'
            ? 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%2307C160\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E我%3C/text%3E%3C/svg%3E'
            : 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23FF6B6B\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E朋%3C/text%3E%3C/svg%3E';

        const messageTime = time || getCurrentTime();

        if (content.startsWith('<img')) {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-bubble">${content}</div>
                    <div class="message-time">${messageTime}</div>
                </div>
                <img src="${avatar}" alt="头像" class="message-avatar">
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-bubble">${content}</div>
                    <div class="message-time">${messageTime}</div>
                </div>
                <img src="${avatar}" alt="头像" class="message-avatar">
            `;
        }

        const imageElement = messageDiv.querySelector('.message-bubble img');
        if (imageElement) {
            imageElement.addEventListener('click', () => {
                showImagePreview(imageElement.src);
            });
        }

        return messageDiv;
    }

    function sendMessage() {
        const content = messageInput.value.trim();
        if (!content) return;

        const messageElement = createMessageElement(content);
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        messageInput.style.height = 'auto';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        updateChatPreview(content, 'sent');

        setTimeout(() => {
            const responses = [
                '收到！😊',
                '好的！👍',
                '明白！👌',
                '太棒了！🎉',
                '真的吗？🤔',
                '哈哈！🤣',
                '嗯嗯！😊',
                '厉害！🔥',
                '支持下！💪',
                '可以的！✨'
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const receivedMessage = createMessageElement(randomResponse, 'received');
            chatMessages.appendChild(receivedMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            updateChatPreview(randomResponse, 'received');
        }, 1000);
    }

    function updateChatPreview(content, type) {
        const chatItem = document.querySelector(`[data-chat="${currentChat}"]`);
        if (chatItem) {
            const preview = chatItem.querySelector('.chat-preview');
            const time = chatItem.querySelector('.chat-time');

            if (content.startsWith('<img')) {
                preview.textContent = '[图片]';
            } else {
                preview.textContent = content.length > 20 ? content.substring(0, 20) + '...' : content;
            }
            time.textContent = getCurrentTime();
        }
    }

    function showImagePreview(src) {
        modalImage.src = src;
        imageModal.classList.add('show');
    }

    modalClose.addEventListener('click', () => {
        imageModal.classList.remove('show');
    });

    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.remove('show');
        }
    });

    imageBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgHtml = `<img src="${event.target.result}" alt="发送的图片" class="uploaded-image">`;
                const messageElement = createMessageElement(imgHtml);
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                updateChatPreview(imgHtml, 'sent');
            };
            reader.readAsDataURL(file);
        }
        fileInput.value = '';
    });

    sendBtn.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = Math.min(messageInput.scrollHeight, 100) + 'px';
    });

    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            chatItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            currentChat = item.dataset.chat;
            const chatName = item.querySelector('.chat-name').textContent;
            chatHeader.querySelector('.chat-title').textContent = chatName;

            const avatars = {
                friend1: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23FF6B6B\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E朋%3C/text%3E%3C/svg%3E',
                friend2: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%234ECDC4\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E小%3C/text%3E%3C/svg%3E',
                group1: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23967BB6\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'30\'%3E群聊%3C/text%3E%3C/svg%3E'
            };

            chatMessages.innerHTML = '';
            const welcomeMessages = [
                { content: `和 ${chatName} 的对话`, type: 'system' },
                { content: '你好！欢迎使用微信聊天网页版！😊', type: 'received' },
                { content: '这里支持发送文字、表情和图片哦！', type: 'received' },
                { content: '太棒了！我来试试发送表情包！😄', type: 'sent' },
                { content: '💖 表情包发送成功！', type: 'received' }
            ];

            welcomeMessages.forEach(msg => {
                if (msg.type === 'system') {
                    const systemDiv = document.createElement('div');
                    systemDiv.style.cssText = 'text-align: center; color: #999; font-size: 12px; padding: 10px;';
                    systemDiv.textContent = msg.content;
                    chatMessages.appendChild(systemDiv);
                } else {
                    const messageElement = createMessageElement(msg.content, msg.type);
                    chatMessages.appendChild(messageElement);
                }
            });

            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        chatItems.forEach(item => {
            const name = item.querySelector('.chat-name').textContent.toLowerCase();
            const preview = item.querySelector('.chat-preview').textContent.toLowerCase();
            if (name.includes(searchTerm) || preview.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    const systemMessages = document.createElement('div');
    systemMessages.style.cssText = 'text-align: center; color: #999; font-size: 12px; padding: 10px;';
    systemMessages.textContent = '和好友1 的对话';
    chatMessages.insertBefore(systemMessages, chatMessages.firstChild);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    initEmojis();

    const menuIcons = document.querySelectorAll('.menu-icon');
    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            menuIcons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
        });
    });
});
