document.getElementById('envelope').addEventListener('click', function() {
    // Thêm lớp 'opened' vào phần tử cha (container)
    document.querySelector('.container').classList.add('opened');
    
    // Ẩn thông báo
    document.querySelector('.message-prompt').style.display = 'none';

    // (Tùy chọn) Thêm âm thanh lãng mạn khi mở thư
    // const audio = new Audio('romantic_song.mp3');
    // audio.play();
    
    // Thay đổi tiêu đề trang
    document.title = "❤️ Em đã mở thư rồi! ❤️";
});