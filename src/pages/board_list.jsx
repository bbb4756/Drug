{% load static %}
<html data-wf-page="640e9bbd4d749928400d75ca" data-wf-site="640e9bbd4d74997d100d75c6">
<head>
  <link href="{% static 'css/normalize.css' %}" rel="stylesheet" type="text/css">
  <link href="{% static 'css/webflow.css' %}" rel="stylesheet" type="text/css">
  <link href="{% static 'css/pill-fd9de5.webflow.css' %}" rel="stylesheet" type="text/css">
  <link href="{% static 'css/css2.css' %}" rel="stylesheet" >
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({  google: {    families: ["Inter:regular,500,600,700","Libre Baskerville:regular,italic,700","Volkhov:regular,italic,700,700italic","Noto Serif:regular,italic,700,700italic"]  }});</script>
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <script>
    $(document).ready(function() {
      var title_list = []; // 변수를 함수 외부에서 선언
      $.ajax({
        url: 'http://127.0.0.1:8000/api/v1/reviews/', // API 엔드포인트 URL
        type: 'GET', // HTTP 메소드
        dataType: 'json', // 예상되는 데이터 타입
        success: function(data) { // 요청이 성공적으로 완료되면 호출될 함수
          // 데이터 처리
          console.log(data);
          // 예시: 각 리뷰 제목을 출력
          for (var i = 0; i < data.length; i++) {
            title_list.push(data[i].title);
          };
          console.log(title_list)
          // 템플릿으로 전달
          $('#title_list').html(JSON.stringify(title_list));
        },
        error: function(jqXHR, textStatus, errorThrown) { // 요청이 실패하면 호출될 함수
          // 오류 처리
          console.log(textStatus, errorThrown);
        }
      });
    });
  </script>
</head>
<body>
  <div id="Announcement-Bar" class="banner-section wf-section">
    <div class="banner-container w-container">
      <div class="banner">
        <div class="banner-text">찾으신 일반의약품은 의사 진료없이 바로 구매 가능합니다.  <a href="/api/v1/pharmacies" target="_blank" class="banner-link">내 주변 약국확인하기&gt;</a>
        </div>
      </div>
    </div>
  </div>
  <div data-collapse="small" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav-bar w-nav">
    <div class="nav-container w-container">
      <div class="logo-div">
        <a href="/" aria-current="page" class="nav-logo w-inline-block w--current"><img src="{% static 'images/002.png' %}" width="178" height="150" alt="" sizes="(max-width: 479px) 66vw, 178px" srcset="{% static 'images/002-p-500.png' %} 500w, {% static 'images/002-p-800.png' %} 800w, {% static 'images/002.png' %} 800w" class="logo"></a>
      </div>
      <nav role="navigation" class="nav-content w-nav-menu">
        <div class="search-banner">
          <div class="search-section">
            <form action="/search" class="search w-form"><input type="search" class="search-bar w-input" autofocus="true" maxlength="256" name="query" placeholder="검색어를 적고 엔터를 눌러주세요" id="search" required=""><input type="submit" value="Search" class="hidden w-button"></form>
          </div>
        </div>
        <div class="nav-menu">
          <a href="/" class="nav-link w-nav-link">홈</a>
          <a href="mypage.html" class="nav-link w-nav-link">약품/증상 검색</a>
          <a href="/api/v1/reviews" class="nav-link w-nav-link">게시판</a>
          
          <button class="nav-link" data-wf-user-logout="로그아웃" data-wf-user-login="로그인" type="button">로그아웃</button>
        </div>
        <div class="nav-cta-button-container">
          <a href="/api/v1/users" class="nav-link cta-button w-nav-link">회원가입</a>
        </div>
      </nav>
      <div class="menu-button w-nav-button"><img src="{% static 'images/Menu-Icon.svg' %}" loading="lazy" width="24" alt="" class="menu-icon"></div>
    </div>
  </div>
    <div class="board_wrap">
        <div class="board_list_wrap">
            <div class="board_list">
            
                <div class="top">
                    <div class="num">번호</div>
                    <div class="title">글제목</div>
                    
                    <div class="writer">작성자</div>
                    <div class="date">작성일</div>
                    <div class="count">조회수</div>
                  
                </div>
                <div id="title_list">
                  <script>
                    $(document).ready(function() {
                      $.ajax({
                        url: 'http://127.0.0.1:8000/api/v1/reviews/', // API 엔드포인트 URL
                        type: 'GET', // HTTP 메소드
                        dataType: 'json', // 예상되는 데이터 타입
                        success: function(data) { // 요청이 성공적으로 완료되면 호출될 함수
                          // 데이터 처리
                          console.log(data);
                          // 예시: 각 리뷰 제목을 출력
                          for (var i = 0; i < data.length; i++) {
                            //$('.real_content > .title').append(data[i].title + '/');
                            var review = data[i];
                            var pk = review.pk;
                            var title = review.title;
                            var writer = review.writer.username;
                            var updated_at = review.updated_at;
                            var html = '<div class="real_content">';
                            html += '<div class="num">' + pk + '</div>';
                            html += '<div class="real_title">' + title + '</div>';
                            html += '<div writer="writer">' + writer + '</div>';
                            html += '<div class="date">' + updated_at + '</div>';
                            html += '</div>';
                            $('body').append(html);
                          }
                        },
                        error: function(jqXHR, textStatus, errorThrown) { // 요청이 실패하면 호출될 함수
                          // 오류 처리
                          console.log(textStatus, errorThrown);
                        }
                      });
                    });
                  </script>

                </div>
                <div id="title_list">
                {% for title in title_list %}
                <div class="real_content">
                    <div class="num"></div>
                  
                    <div class="real_title" style="text-align:center;"><a href="">{{title}}</a></div>
           
                    <div class="writer"></div>
                    <div class="date"><div>
                      
                        <script>
                        date = new Date().toLocaleDateString();
                        document.write(date);
                        </script>
                        <div class="views"></div>
                    
                        </div>
                      </div>
                  </div>
                {% endfor %}
              </div>
            </div>

            </div>
            <div class="bt_wrap">
                <a href="write.html" class="on">등록</a>
                <!--<a href="#">수정</a>-->
            </div>
            <div class="board_page">
                
                <a href="#" class="bt first"><<</a>
                <a href="#" class="bt prev"><</a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="bt next">></a>
                <a href="#" class="bt last">>></a>
            </div>
            
            <div class="bt_wrap1">
                <input type="text" id="review-search">
                <a href="find.html" class="search">검색</a>
            </div>
        </div>
    </div>


    <div style="justify-content:center; text-align:center;" class="footer wf-section">
      <div class="footer-container w-container">
        <div class="w-layout-grid footer-grid">
          <div id="w-node-b8d7be4a-ce45-83ab-5947-02d204c8bff0-cf3fcb86" class="footer-logo-block">
            <p style="text-align:center;" class="paragraph small">PlayData Project team4<br>Memeber: 손동환, 김가람, 강토, 전혜성<br></p>
            <div class="spacer _16"></div>
            <div class="paragraph small">© 2023 Pillfinder. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=640e9bbd4d74997d100d75c6" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="{% static 'js/webflow.js' %}" type="text/javascript"></script>
    <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
  </body>
  </html>