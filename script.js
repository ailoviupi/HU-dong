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
    const messageMenu = document.getElementById('messageMenu');
    const quotedMessage = document.getElementById('quotedMessage');
    const forwardModal = document.getElementById('forwardModal');
    const forwardModalClose = document.querySelector('.forward-modal-close');
    const forwardConfirm = document.getElementById('forwardConfirm');
    const forwardChatItems = document.querySelectorAll('.forward-chat-item');
    const toastContainer = document.getElementById('toastContainer');

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
    let selectedMessage = null;
    let quotedMessageContent = null;
    let quotedMessageSender = null;
    let messages = [];

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
            span.addEventListener('click', (e) => {
                insertEmoji(emoji, e);
            });
            emojiList.appendChild(span);
        });
    }

    function insertEmoji(emoji, event) {
        const start = messageInput.selectionStart;
        const end = messageInput.selectionEnd;
        const text = messageInput.value;
        const newText = text.substring(0, start) + emoji + text.substring(end);
        messageInput.value = newText;
        messageInput.focus();
        messageInput.selectionStart = messageInput.selectionEnd = start + emoji.length;

        if (event && event.target) {
            event.target.classList.add('clicked');
            setTimeout(() => {
                event.target.classList.remove('clicked');
            }, 400);
        }

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

    function getMessageTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 2000);
    }

    function hideMessageMenu() {
        messageMenu.style.display = 'none';
        document.querySelectorAll('.message').forEach(msg => msg.classList.remove('selected'));
    }

    function showMessageMenu(messageElement, x, y) {
        hideMessageMenu();
        selectedMessage = messageElement;
        messageElement.classList.add('selected');
        messageMenu.style.display = 'block';
        messageMenu.style.left = x + 'px';
        messageMenu.style.top = y + 'px';

        const isSent = messageElement.classList.contains('sent');
        const recallMenuItem = document.getElementById('recallMenuItem');
        if (isSent) {
            const messageTime = new Date(messageElement.dataset.time || getMessageTime());
            const now = new Date();
            const timeDiff = (now - messageTime) / 1000 / 60;
            if (timeDiff <= 2) {
                recallMenuItem.style.display = 'flex';
            } else {
                recallMenuItem.style.display = 'none';
            }
        } else {
            recallMenuItem.style.display = 'none';
        }
    }

    function handleMessageAction(action) {
        if (!selectedMessage) return;

        const messageContent = selectedMessage.querySelector('.message-bubble');
        const messageText = messageContent.innerHTML;

        switch(action) {
            case 'reply':
                quotedMessageContent = messageText;
                quotedMessageSender = selectedMessage.classList.contains('sent') ? '我' : '对方';
                quotedMessage.style.display = 'block';
                quotedMessage.querySelector('.quoted-name').textContent = quotedMessageSender + ':';
                quotedMessage.querySelector('.quoted-text').innerHTML = messageText;
                messageInput.focus();
                break;

            case 'forward':
                forwardModal.classList.add('show');
                break;

            case 'copy':
                const textToCopy = messageContent.innerText;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast('已复制到剪贴板');
                }).catch(() => {
                    showToast('复制失败', 'error');
                });
                break;

            case 'collect':
                showToast('收藏成功');
                break;

            case 'delete':
                selectedMessage.style.transform = 'translateX(100%)';
                selectedMessage.style.opacity = '0';
                setTimeout(() => {
                    selectedMessage.remove();
                    showToast('已删除');
                }, 300);
                break;

            case 'recall':
                const originalContent = selectedMessage.querySelector('.message-bubble').innerHTML;
                selectedMessage.querySelector('.message-bubble').innerHTML = '<span class="recalled-message">你撤回了一条消息</span>';
                selectedMessage.classList.add('recalled');
                showToast('已撤回');
                break;
        }

        hideMessageMenu();
    }

    function forwardMessage(targetChat) {
        if (!selectedMessage || !targetChat) return;

        const content = selectedMessage.querySelector('.message-bubble').innerHTML;
        const messageElement = createMessageElement(content, 'sent');

        if (currentChat !== targetChat) {
            const chatItem = document.querySelector(`[data-chat="${targetChat}"]`);
            if (chatItem) {
                chatMessages.innerHTML = '';
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        } else {
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        showToast('转发成功');
        forwardModal.classList.remove('show');
        hideMessageMenu();
    }

    function setupMessageEventListeners(messageElement) {
        messageElement.addEventListener('click', (e) => {
            if (e.target.closest('.message-bubble img')) return;
            if (e.target.closest('.message-menu')) return;

            const rect = chatMessages.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            showMessageMenu(messageElement, x, y);
        });
    }

    function createMessageElement(content, type = 'sent', time = null, originalTime = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;

        const avatar = type === 'sent'
            ? 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%2307C160\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E我%3C/text%3E%3C/svg%3E'
            : 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23FF6B6B\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E朋%3C/text%3E%3C/svg%3E';

        const messageTime = time || getCurrentTime();

        let quotedHtml = '';
        if (quotedMessageContent && type === 'sent') {
            quotedHtml = `<div class="quoted-message-inline">
                <span class="quoted-sender">${quotedMessageSender}:</span>
                <span class="quoted-content-inline">${quotedMessageContent}</span>
            </div>`;
        }

        const statusIcons = {
            sent: '<span class="message-status sent"><i class="fas fa-check"></i></span>',
            delivering: '<span class="message-status delivering"><i class="fas fa-clock"></i></span>',
            delivered: '<span class="message-status delivered"><i class="fas fa-check-double"></i></span>',
            read: '<span class="message-status read"><i class="fas fa-check-double"></i></span>'
        };

        if (content.startsWith('<img')) {
            messageDiv.innerHTML = `
                <div class="message-content">
                    ${quotedHtml}
                    <div class="message-bubble">${content}</div>
                    <div class="message-meta">
                        <div class="message-time">${messageTime}</div>
                        <div class="message-status-container">${statusIcons.sent}</div>
                    </div>
                </div>
                <img src="${avatar}" alt="头像" class="message-avatar">
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    ${quotedHtml}
                    <div class="message-bubble">${content}</div>
                    <div class="message-meta">
                        <div class="message-time">${messageTime}</div>
                        <div class="message-status-container">${statusIcons.sent}</div>
                    </div>
                </div>
                <img src="${avatar}" alt="头像" class="message-avatar">
            `;
        }

        messageDiv.dataset.time = originalTime || getMessageTime();

        const imageElement = messageDiv.querySelector('.message-bubble img');
        if (imageElement) {
            imageElement.addEventListener('click', () => {
                showImagePreview(imageElement.src);
            });
        }

        setupMessageEventListeners(messageDiv);

        return messageDiv;
    }

    function sendMessage() {
        const content = messageInput.value.trim();
        if (!content) return;

        const originalQuotedContent = quotedMessageContent;
        const originalQuotedSender = quotedMessageSender;

        quotedMessageContent = null;
        quotedMessageSender = null;
        quotedMessage.style.display = 'none';

        const messageElement = createMessageElement(content);
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        messageInput.style.height = 'auto';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        updateChatPreview(content, 'sent');

        messages.push({
            content: content,
            type: 'sent',
            time: getMessageTime(),
            quotedContent: originalQuotedContent,
            quotedSender: originalQuotedSender
        });

        const statusContainer = messageElement.querySelector('.message-status-container');
        setTimeout(() => {
            if (statusContainer) {
                statusContainer.innerHTML = '<span class="message-status delivering"><i class="fas fa-clock"></i></span>';
            }
        }, 500);
        setTimeout(() => {
            if (statusContainer) {
                statusContainer.innerHTML = '<span class="message-status delivered"><i class="fas fa-check-double"></i></span>';
            }
        }, 1500);
        setTimeout(() => {
            if (statusContainer) {
                statusContainer.innerHTML = '<span class="message-status read"><i class="fas fa-check-double"></i></span>';
            }
        }, 3000);

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

            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.style.display = 'flex';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            const typingTime = 1500 + Math.random() * 2000;

            setTimeout(() => {
                if (typingIndicator) {
                    typingIndicator.style.display = 'none';
                }

                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                const receivedMessage = createMessageElement(randomResponse, 'received');
                chatMessages.appendChild(receivedMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                updateChatPreview(randomResponse, 'received');

                messages.push({
                    content: randomResponse,
                    type: 'received',
                    time: getMessageTime()
                });
            }, typingTime);
        }, 500);
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

    fileBtn.addEventListener('click', () => {
        documentInput.click();
    });

    documentInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileSize = (file.size / 1024).toFixed(2);
            const fileIcon = getFileIcon(file.name);
            const fileHtml = `<div class="file-message">
                <div class="file-icon">${fileIcon}</div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${fileSize} KB</div>
                </div>
            </div>`;
            const messageElement = createMessageElement(fileHtml);
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            updateChatPreview(`[文件] ${file.name}`, 'sent');

            messages.push({
                content: file.name,
                type: 'sent',
                time: getMessageTime()
            });

            const statusContainer = messageElement.querySelector('.message-status-container');
            setTimeout(() => {
                if (statusContainer) {
                    statusContainer.innerHTML = '<span class="message-status delivering"><i class="fas fa-clock"></i></span>';
                }
            }, 500);
            setTimeout(() => {
                if (statusContainer) {
                    statusContainer.innerHTML = '<span class="message-status delivered"><i class="fas fa-check-double"></i></span>';
                }
            }, 1500);
            setTimeout(() => {
                if (statusContainer) {
                    statusContainer.innerHTML = '<span class="message-status read"><i class="fas fa-check-double"></i></span>';
                }
            }, 3000);
        }
        documentInput.value = '';
    });

    function getFileIcon(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        const icons = {
            pdf: '<i class="fas fa-file-pdf" style="color: #ff6b6b;"></i>',
            doc: '<i class="fas fa-file-word" style="color: #2b5c8a;"></i>',
            docx: '<i class="fas fa-file-word" style="color: #2b5c8a;"></i>',
            xls: '<i class="fas fa-file-excel" style="color: #217346;"></i>',
            xlsx: '<i class="fas fa-file-excel" style="color: #217346;"></i>',
            ppt: '<i class="fas fa-file-powerpoint" style="color: #d24726;"></i>',
            pptx: '<i class="fas fa-file-powerpoint" style="color: #d24726;"></i>',
            txt: '<i class="fas fa-file-alt" style="color: #666;"></i>',
            zip: '<i class="fas fa-file-archive" style="color: #f0ad4e;"></i>',
            rar: '<i class="fas fa-file-archive" style="color: #f0ad4e;"></i>'
        };
        return icons[ext] || '<i class="fas fa-file" style="color: #999;"></i>';
    }

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

    document.querySelectorAll('.message-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            handleMessageAction(action);
        });
    });

    document.addEventListener('click', (e) => {
        if (!messageMenu.contains(e.target) && !e.target.closest('.message')) {
            hideMessageMenu();
        }
    });

    chatMessages.addEventListener('click', (e) => {
        if (e.target.closest('.message')) {
            return;
        }
        hideMessageMenu();
    });

    // 移动端功能
    function initMobileFeatures() {
        initMobileNavigation();
        initMobileChatList();
        initMobileChatDetail();
        syncChatDataToMobile();
    }

    function initMobileNavigation() {
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        const mobileViews = document.querySelectorAll('.mobile-view');

        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                const viewName = item.dataset.view;

                mobileNavItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                mobileViews.forEach(view => {
                    view.classList.remove('active');
                    if (view.id === viewName + 'View') {
                        view.classList.add('active');
                    }
                });
            });
        });
    }

    function initMobileChatList() {
        const chatListData = [
            { id: 'friend1', name: '好友1', avatar: '朋', color: '#FF6B6B', lastMessage: '你好！欢迎使用微信聊天网页版！😊', time: '10:30', unread: 2 },
            { id: 'friend2', name: '小红', avatar: '小', color: '#4ECDC4', lastMessage: '收到！👍', time: '09:45', unread: 0 },
            { id: 'group1', name: '开发群', avatar: '群', color: '#967BB6', lastMessage: '太棒了！🎉', time: '昨天', unread: 5 },
            { id: 'friend3', name: '阿明', avatar: '明', color: '#FFD93D', lastMessage: '好的，明天见！', time: '昨天', unread: 0 },
            { id: 'friend4', name: '产品经理', avatar: '产', color: '#6BCB77', lastMessage: '需求已更新，请查看', time: '周一', unread: 1 }
        ];

        const mobileChatList = document.getElementById('mobileChatList');
        mobileChatList.innerHTML = '';

        chatListData.forEach(chat => {
            const chatItem = document.createElement('div');
            chatItem.className = 'mobile-chat-item';
            chatItem.dataset.chat = chat.id;

            const unreadBadge = chat.unread > 0 ? `<span class="mobile-unread-badge">${chat.unread}</span>` : '';

            chatItem.innerHTML = `
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='${chat.color}'/%3E%3Ctext x='50' y='65' text-anchor='middle' fill='white' font-size='40'%3E${chat.avatar}%3C/text%3E%3C/svg%3E" alt="${chat.name}" class="mobile-chat-avatar">
                <div class="mobile-chat-info">
                    <div class="mobile-chat-header-row">
                        <span class="mobile-chat-name">${chat.name}</span>
                        <span class="mobile-chat-time">${chat.time}</span>
                    </div>
                    <div class="mobile-chat-preview-row">
                        <span class="mobile-chat-preview">${chat.lastMessage}</span>
                        ${unreadBadge}
                    </div>
                </div>
            `;

            chatItem.addEventListener('click', () => {
                openMobileChat(chat);
            });

            mobileChatList.appendChild(chatItem);
        });
    }

    function openMobileChat(chatData) {
        const mobileChatDetail = document.getElementById('mobileChatDetail');
        const mobileChatTitle = mobileChatDetail.querySelector('.mobile-chat-title');
        const mobileChatMessages = document.getElementById('mobileChatMessages');

        mobileChatTitle.textContent = chatData.name;
        mobileChatMessages.innerHTML = '';

        const welcomeMessages = [
            { content: `和 ${chatData.name} 的对话`, type: 'system' },
            { content: '你好！欢迎使用微信聊天网页版！😊', type: 'received' },
            { content: '这里支持发送文字和表情哦！', type: 'received' },
            { content: '太棒了！我来试试！😄', type: 'sent' },
            { content: '💖 发送成功！', type: 'received' }
        ];

        welcomeMessages.forEach(msg => {
            if (msg.type === 'system') {
                const systemDiv = document.createElement('div');
                systemDiv.className = 'mobile-system-message';
                systemDiv.textContent = msg.content;
                mobileChatMessages.appendChild(systemDiv);
            } else {
                const messageElement = createMobileMessageElement(msg.content, msg.type);
                mobileChatMessages.appendChild(messageElement);
            }
        });

        mobileChatMessages.scrollTop = mobileChatMessages.scrollHeight;
        mobileChatDetail.classList.add('active');
    }

    function createMobileMessageElement(content, type = 'sent') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `mobile-message ${type}`;

        const avatar = type === 'sent'
            ? 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%2307C160\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E我%3C/text%3E%3C/svg%3E'
            : 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23FF6B6B\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E朋%3C/text%3E%3C/svg%3E';

        const messageTime = getCurrentTime();

        messageDiv.innerHTML = `
            <img src="${avatar}" alt="头像" class="mobile-message-avatar">
            <div class="mobile-message-content">
                <div class="mobile-message-bubble">${content}</div>
                <div class="mobile-message-time">${messageTime}</div>
            </div>
        `;

        return messageDiv;
    }

    function initMobileChatDetail() {
        const mobileBackBtn = document.getElementById('mobileBackBtn');
        const mobileChatDetail = document.getElementById('mobileChatDetail');
        const mobileMessageInput = document.getElementById('mobileMessageInput');
        const mobileSendBtn = document.getElementById('mobileSendBtn');
        const mobileEmojiBtn = document.getElementById('mobileEmojiBtn');

        mobileBackBtn.addEventListener('click', () => {
            mobileChatDetail.classList.remove('active');
        });

        mobileSendBtn.addEventListener('click', () => {
            sendMobileMessage();
        });

        mobileMessageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMobileMessage();
            }
        });

        mobileEmojiBtn.addEventListener('click', () => {
            const recentEmojisToInsert = recentEmojis.slice(0, 5);
            if (recentEmojisToInsert.length > 0) {
                const emoji = recentEmojisToInsert[0];
                mobileMessageInput.value += emoji;
                mobileMessageInput.focus();
            }
        });
    }

    function sendMobileMessage() {
        const mobileMessageInput = document.getElementById('mobileMessageInput');
        const mobileChatMessages = document.getElementById('mobileChatMessages');
        const content = mobileMessageInput.value.trim();

        if (!content) return;

        const messageElement = createMobileMessageElement(content, 'sent');
        mobileChatMessages.appendChild(messageElement);
        mobileMessageInput.value = '';
        mobileChatMessages.scrollTop = mobileChatMessages.scrollHeight;

        const responses = [
            '收到！😊',
            '好的！👍',
            '明白！👌',
            '太棒了！🎉',
            '真的吗？🤔',
            '哈哈！🤣',
            '嗯嗯！😊',
            '厉害！🔥'
        ];

        setTimeout(() => {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'mobile-typing-indicator';
            typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
            mobileChatMessages.appendChild(typingDiv);
            mobileChatMessages.scrollTop = mobileChatMessages.scrollHeight;

            setTimeout(() => {
                typingDiv.remove();
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                const receivedMessage = createMobileMessageElement(randomResponse, 'received');
                mobileChatMessages.appendChild(receivedMessage);
                mobileChatMessages.scrollTop = mobileChatMessages.scrollHeight;
            }, 1000 + Math.random() * 1000);
        }, 300);
    }

    function syncChatDataToMobile() {
        const chatItems = document.querySelectorAll('.chat-item');
        const mobileChatList = document.getElementById('mobileChatList');

        if (chatItems.length === 0) return;

        const chatDataList = [];
        chatItems.forEach(item => {
            const chatId = item.dataset.chat;
            const chatName = item.querySelector('.chat-name')?.textContent || '未知';
            const chatPreview = item.querySelector('.chat-preview')?.textContent || '';
            const chatTime = item.querySelector('.chat-time')?.textContent || '';

            let avatar = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23967BB6\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'30\'%3E聊%3C/text%3E%3C/svg%3E';

            if (chatId === 'friend1') {
                avatar = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23FF6B6B\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E朋%3C/text%3E%3C/svg%3E';
            } else if (chatId === 'friend2') {
                avatar = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%234ECDC4\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'40\'%3E小%3C/text%3E%3C/svg%3E';
            } else if (chatId === 'group1') {
                avatar = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23967BB6\'/%3E%3Ctext x=\'50\' y=\'65\' text-anchor=\'middle\' fill=\'white\' font-size=\'30\'%3E群聊%3C/text%3E%3C/svg%3E';
            }

            chatDataList.push({
                id: chatId,
                name: chatName,
                avatar: avatar,
                lastMessage: chatPreview || '暂无消息',
                time: chatTime || '',
                unread: 0
            });
        });

        mobileChatList.innerHTML = '';
        chatDataList.forEach(chat => {
            const chatItem = document.createElement('div');
            chatItem.className = 'mobile-chat-item';
            chatItem.dataset.chat = chat.id;

            chatItem.innerHTML = `
                <img src="${chat.avatar}" alt="${chat.name}" class="mobile-chat-avatar">
                <div class="mobile-chat-info">
                    <div class="mobile-chat-header-row">
                        <span class="mobile-chat-name">${chat.name}</span>
                        <span class="mobile-chat-time">${chat.time}</span>
                    </div>
                    <div class="mobile-chat-preview-row">
                        <span class="mobile-chat-preview">${chat.lastMessage}</span>
                    </div>
                </div>
            `;

            chatItem.addEventListener('click', () => {
                const mobileChatDetail = document.getElementById('mobileChatDetail');
                const mobileChatTitle = mobileChatDetail.querySelector('.mobile-chat-title');
                const mobileChatMessages = document.getElementById('mobileChatMessages');

                mobileChatTitle.textContent = chat.name;
                mobileChatMessages.innerHTML = '';

                const welcomeMessages = [
                    { content: `和 ${chat.name} 的对话`, type: 'system' },
                    { content: '你好！欢迎使用微信聊天网页版！😊', type: 'received' },
                    { content: '移动端聊天功能已启用！', type: 'received' }
                ];

                welcomeMessages.forEach(msg => {
                    if (msg.type === 'system') {
                        const systemDiv = document.createElement('div');
                        systemDiv.className = 'mobile-system-message';
                        systemDiv.textContent = msg.content;
                        mobileChatMessages.appendChild(systemDiv);
                    } else {
                        const messageElement = createMobileMessageElement(msg.content, msg.type);
                        mobileChatMessages.appendChild(messageElement);
                    }
                });

                mobileChatMessages.scrollTop = mobileChatMessages.scrollHeight;
                mobileChatDetail.classList.add('active');
            });

            mobileChatList.appendChild(chatItem);
        });
    }

    initMobileFeatures();
});

document.addEventListener('click', () => {
    chatContextMenu.classList.remove('show');
});

chatContextMenu.querySelectorAll('.context-menu-item').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        const action = menuItem.dataset.action;
        if (!selectedChatItem) return;

        if (action === 'pin') {
            selectedChatItem.classList.toggle('pinned');
            const isPinned = selectedChatItem.classList.contains('pinned');
            localStorage.setItem(`pinned_${selectedChatItem.dataset.chat}`, isPinned);
            showToast(isPinned ? '已置顶该聊天' : '已取消置顶', 'success');
        } else if (action === 'mute') {
            selectedChatItem.classList.toggle('muted');
            const isMuted = selectedChatItem.classList.contains('muted');
            localStorage.setItem(`muted_${selectedChatItem.dataset.chat}`, isMuted);
            showToast(isMuted ? '已开启免打扰' : '已关闭免打扰', 'success');
        } else if (action === 'delete') {
            selectedChatItem.classList.add('deleting');
            showToast('聊天已删除', 'success');
            setTimeout(() => {
                selectedChatItem.remove();
                localStorage.removeItem(`pinned_${selectedChatItem.dataset.chat}`);
                localStorage.removeItem(`muted_${selectedChatItem.dataset.chat}`);
            }, 300);
        }

        chatContextMenu.classList.remove('show');
    });
});

chatItems.forEach(item => {
    const isPinned = localStorage.getItem(`pinned_${item.dataset.chat}`) === 'true';
    const isMuted = localStorage.getItem(`muted_${item.dataset.chat}`) === 'true';
    if (isPinned) item.classList.add('pinned');
    if (isMuted) item.classList.add('muted');
});
