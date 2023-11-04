$(function () {
  //文字色変化
  $('#change-color').on('click', function () {
    $('#target').css('color', 'blue');
  });

  //文字内容変更
  $('#change-text').on('click', function () {
    $('#target').text('お疲れ様です');
  });

  //フェードアウト
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  //フェードイン
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
});