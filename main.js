/**
 Quay trở lại quá khứ

https://web.archive.org/ là một dự án lưu trữ trang web toàn cầu
cung cấp khả năng truy cập vào các phiên bản lưu trữ của các
trang web từ quá khứ tơi hiện tại. Dự án này bao gồm hàng tỷ
trang web đẫ được lưu trữ từ năm 1996 đến ngày nay.


5. Setup Visual studio code

Cài đặt tiện ích mở rộng: pretier - tự động định dạng lại code
trông đẹp và dễ đọc hơn


////////

Giới thiệu HTML, CSS, JS

1. HTML - Hyper Text Markup Language
Ngôn ngữ đánh dấu siêu văn bản

-> HTML k phải là ngôn ngữ lập trình
-> Html xác định nội dung và cấu trúc của 1 trang web 
-> Html đánh dấu các nội dung khác nhau của văn bản: 
paragraphs - đoạn văn, links - liên kết, headings - tiêu đề,
images - hình ảnh...

2. CSS - Cascading Style Sheets
Ngôn ngữ định dạng trang web(tô màu, in đậm, in nghiêng,...)

3. JS - JavaScript
Các thao tác trên văn bản: Ẩn, hiện khi click, thay đổi 
nội dung hiển thị

///////

Bài 6 - Cấu trúc tệp html
Tìm hiểu DOCTYPE, thẻ html, thẻ head trong lập trình web

html tree
1-> DOCTYPE
2-> Thẻ html
3-> Thẻ head
4-> Thẻ body

6.1 Thẻ !DOCTYPE

-> <!DOCTYPE html> là một khai báo doctype (document type declaration)
trong HTML, đây là mã khai báo cho trình duyệt biết rằng bạn
đang sử dụng HTML5 - Phiên bản mới nhất của HTML hiện tại

-> 1 số định dạng của các phiên bản HTML cũ - (tham khảo)

HTML 4.01 Strict:
<!DOCTYPE HTML PUBLIC> -//W3C//DTD HTML 4.01//EN


HTML 4.01 Trasitional:
<!DOCTYPE HTML PUBLIC> -//W3C//DTD HTML 4.01 Transitional//EN



6.2 - Cặp thẻ <html> </html>

-> Cặp thẻ <html> </html> được sử dụng để định nghĩa phần thân
của tài liệu HTML

-> Thẻ html có thể dùng kèm thuộc tính "lang" để chỉ ngôn ngữ
được viết của website

<html lang="en"> để thay đổi mã ngôn ngữ
 hãy search quy định viết tắt mã ngôn ngữ

-> Trong 1 file html chỉ có duy nhất 1 Cặp thẻ <html> </html>


6.3 Thẻ <head> </head>

-> Thẻ <head> </head> là 1 phần tử của HTML được sử dụng để chứa
các thông tin về trang web mà không được hiển thị trực tiếp
trên trình duyệt của người dùng.

-> Các thông tin trong thẻ head như tiêu đề trang, mô tả trang,
từ khóa, thông tin tác giả, các tập tin CSS và JavaScript được
liên kết với trang, và nhiều thông tin khác.

-> Các thông tin trong thẻ head rất quan trọng cho việc tối ưu
hóa công cụ tìm kiếm (SEO), vì chúng giúp các công cụ tìm kiếm
hiểu được nội dung và ý nghĩa của trang web.


//// 
 - Trong thẻ <head> có thẻ
        attribute   value
  <meta charset="UTF-8">
-> Ý nghĩa: <!--Bảng mã ký tự cho trang web: hỗ trợ các ký tự 
ngoài bảng chữ cái tiếng anh: việt, trung, hàn, nhật, ...>


<meta name="viewport" content="width=device-width, initial-scale=1.0">
1. Sử dụng để hỗ trợ multil screen size, hỗ trợ kích thước
màn hình khác nhau như PC, mobile, tablet...
2. Hiển thị tiêu đề trên kết quả tìm kiếm (vd: google )
3. width=device-width : set chiều rộng bằng chiều rộng thiết bị
4. initial-scale=1.0 tỷ lệ hiển thị trang web 100%,
để tráng bị phóng to hoặc thu nhỏ

<title>Document</title>

1. Hiển thị tiêu đề trang web trên tab trình duyệt
2. Hiển thị tiêu đề trên kết quả tìm kiếm (vd: google)

ctrl + k + c : để comment nhanh trong visual code
ctrl + k + u : để uncomment nhanh trong visual code
shift  + alt + mũi tên xuống : 
để copy cả dòng xuống dưới nhanh trong visual code

////

6.4 - Thẻ <body> </body>

-> Thẻ body là một phần tử HTML được sử dụng để chứa nội dung
chính của trang web, bào gồm các phần từ như văn bản, hình ảnh
doạn mã JavaScript, các phần tử định dạng, v.v...

-> Các phần tử HTML bên trong thẻ body được hiển thị trực tiếp
trên trình duyệt của người dùng, và chúng tạo thành nội dung chính
của trang web.

1. Thẻ h - được sử dụng để định nghĩa tiêu đề của trang web
2. Thẻ p - paragraph <p> </p> để chứa các đoạn văn bản
3. Thẻ b: bold 
- in đậm (dùng strong thay thế thể hiện nội dung quan trọng)
4. Thẻ i : italic - in nghiêng ( dùng em-emphasis để nhấn mạnh nội dung)
5. Thẻ u : underline - gạch chân
6. Thẻ a: anchor - gắn kèm đường dẫn
7. Thẻ img : image - hình ảnh
8. Thẻ ul - un-ordered list : danh sách không có thứ tự
9. Thẻ ol - ordered list : danh sách có thứ tự

-> search : mdn để tìm hiểu thêm về các thẻ

////////////////////////////

1.-> Thẻ h - được sử dụng để định nghĩa tiêu đề của trang web

-> Có 6 loại thẻ h, được đánh số từ h1 đến h6, tương ứng với
các kích cỡ và mức độ quan trong của tiêu đề.

-> Các thẻ "h" có cấp độ khác nhau, với h1 là thẻ tiêu đề
lớn nhất và quan trọng nhất, còn h6 là tiêu đề nhỏ nhất và
ít quan trọng nhất.

-> Các thẻ này có thể được sử dụng để trình bày các phần khác nhau
của trang web, như tiêu đề của bài viết, phần mục lục, phần 
giới thiệu và nội dung chính của trang

<h1>Tiêu đề lớn nhất </h1>

- Thẻ h1 là thẻ tiêu đề chính của trang web, được sử dụng để
chỉ ra nội dung chính của trang. chỉ nên sử dụng 1 thẻ h1 duy nhất.
Việc sử dụng nhiều thẻ h1 trên cùng 1 trang web có thể gây nhầm 
lẫn cho các máy chủ tìm kiếm về nội dung chính của trang web.


        <h2>Tiêu đề lớn vừa </h2>
        <h3>Tiêu đề vừa </h3>
        <h4>Tiêu đề nhỏ hơn </h4>
        <h5>Tiêu đề nhỏ hơn nữa </h5>
        <h6>Tiêu đề nhỏ nhất </h6>

6.5 - Phân biệt tag & Element

<h1>Tiêu đề lớn nhất </h1>

-> <h1> : Opening Tag
-> </h1> : Closing Tag 
             ---> Tags

Tiêu đề lớn nhất : -> Gọi là content


->>> Toàn bộ gọi là : HTML element


8. Tìm hiểu thẻ p
-> Thẻ p - paragraph <p> </p> để chứa các đoạn văn bản
-> 
<p>Đoạn văn - paragraph  </p>

-> <p> : Opening Tag
-> </p> : Closing Tag 
             ---> Tags

paragraph : -> Gọi là content


->>> Toàn bộ gọi là : HTML element


///////////
//9. - Tìm hiểu thẻ hr, br
-> Thẻ <br> - break ( thẻ tự đóng self-closing tag):
"phá vỡ" hoặc "ngắt" dòng

-> thẻ <hr> - horizontal rule (thẻ tự đóng self-closing tag)
tạo "đường kẻ ngang" ngăn cách trên trang


//////////
//10. Tìm hiểu thẻ b, i, u
a. Thẻ b: bold - in đậm
( dùng strong thay thế thể hiện nội dung quan trọng)

b. Thẻ i: italic - in nghiêng
( dùng em-emphasis để nhấn mạnh nội dung)

c. Thẻ u: underline - gạch chân văn bản

///////////
//11. Thẻ List trong html - <ul> <ol>

a. Thẻ ul - unordered list : danh sách không có thứ tự

b. Thẻ ol - ordered list: danh sách có thứ tự
        Thẻ ol - ordered list: có 2 thuộc tính thông dụng
        1. reversed
        2. type

c. Thẻ li - List item: là thẻ con trực tiếp của ul, ol

d. Emmet - gõ tắt 
-> search : emmet 

Ví dụ:

<h2>Danh sách món ăn ngon tại Việt Nam</h2>

<ul>
  <li>Bún chả Hà Nội</li>
  <li>Bún Bò Huế</li>
  <li>Cơm tấm Sườn Bì chả</li>
  <li>Phở Hà Nội</li>
</ul>


<h2>Top các trường đại học hàng đầu Việt Nam</h2>

<ol>
  <li>Đại học Ngoại Thương</li>
  <li>Đại học Kinh tế Quốc Dân</li>
  <li>Đại học Ngân Hàng</li>
    
</ol>

//////
<h2>Học emmet - lệnh gõ tắt ul, ol, li</h2>
<ul>
  <li>cấu trúc lệnh ul>li + enter</li>
</ul>

<ol>
  <li>cấu trúc lệnh ul,ol>li*x (số bất kỳ) + enter để tạo nhiều dòng </li>
  <li>bước 2</li>
  <li>bước 3</li>
</ol>

// Để gõ luôn nội dung -> cú pháp ul,ol>li*x{item$}
<ul>
  <li>phần tử số 1</li>
  <li>phần tử số 2</li>
  <li>phần tử số 3</li>
  <li>phần tử số 4</li>
  <li>phần tử số 5</li>
  <li>phần tử số 6</li>
</ul>

/////
<ol reversed> -> đảo ngược thứ tự
  <li>thứ tự 1</li>
  <li>thứ tự 2</li>
  <li>thứ tự 3</li>
  <li>thứ tự 4</li>
  <li>thứ tự 5</li>
</ol>

<ol type="I"> -> Thay đổi các đánh kí hiệu thứ tự: 1,2,3...a,b,c...
  <li>thứ tự 1</li>
  <li>thứ tự 2</li>
  <li>thứ tự 3</li>
  <li>thứ tự 4</li>
  <li>thứ tự 5</li>
</ol>





/////////////////

12. Thẻ list trong html - ul, ol

- Thẻ ul, ol, li lồng nhau

-> Thực hành
I. Giới thiệu
Đây là phần mở đầu, trình bày tổng quan nội dung chính của văn bản.

II. Nội dung chính
Phần này đi sâu vào các ý quan trọng.

Khái niệm
Giải thích khái niệm cơ bản liên quan đến chủ đề.

Đặc điểm
Trình bày các đặc điểm nổi bật.

a. Đặc điểm thứ nhất
Mô tả chi tiết đặc điểm đầu tiên.

b. Đặc điểm thứ hai
Phân tích đặc điểm tiếp theo.

c. Đặc điểm thứ ba
Bổ sung thêm thông tin liên quan.

III. Kết luận
Tóm tắt lại toàn bộ nội dung và đưa ra nhận định cuối cùng.



//////////
12. Tìm hiểu thẻ a
-> Thẻ a: anchor - gắn kèm liên kết, email, phone
href (hypertext reference) được dùng để khai báo URL 
mà trang web sẽ được chuyển đến.

<a href = "http://tuhoc.cc" target="_blank">
  Click vào đây để đến trang web của chúng Tôi
</a>

- href: thuộc tính - Attribute
- "http://tuhoc.cc" : giá trị - value

=> nằm ở trong thẻ mở

<a href = " "> Tải lại trang </a>
// nếu để trống -> tải lại trang

<a href = "#"> Tải lại trang </a>
// nếu value để # -> Trở lại trang đầu


////////////////
//12.2 - Tìm hiểu thẻ <a> + Tip học tập
Thẻ a: anchor - gắn kèm liên kết, email, phone

-> Liên kết tới số email: mailto
<a href = "mailto:tuhoc.cc@gmail.com">
  Hoặc gửi email tới: <b><u>tuhoc.cc@gmail.com</u></b>
</a><br>

<a href = "mailto:tuhoc.cc@gmail.com">
 gửi mail cho tôi
</a><br>

-> 1 số tham số có thể truyền trước cho: mailto

cc: danh sách email sẽ nhận được bản sao của thư
bcc: danh sách email ẩn sẽ nhận được bản sao của thư
subject: chủ đề của thư
body: nội dung của mail
? : dấu phân cách giữa phần mailto và tham số
&: dấu phân cách tham số

///////////////
13. Chèn ảnh vào html
<h2>Hình ảnh minh họa</h2>
<img src="image/raoul-droog-yMSecCHsIBc-unsplash.jpg" alt="Hình ảnh mèo"
height="300">
<img src="image/rafaella1.jpg" alt="beauty girl"
height="300">


/////////////////////
//14. HTML PATH - Đường dẫn tương đối - Tuyệt đối

<h3>HTML PATH - ĐƯỜNG DẪN TƯƠNG ĐỐI - TUYỆT ĐỐI TRONG HTML</h3>

 <p>Đường dẫn tương đối</p>
    <img src="./baby.jpg" alt="baby boy" width="250">
    <p>Đường dẫn tương đối</p>
    <img src="./image/girl.jpg" alt="ảnh cô gái" width="250">
   
    <p>Đường dẫn tương đối cách 2</p>
    <img src="baby.jpg" alt="ảnh cậu bé" width="250">
    <!-- nên dùng cách 1 cho chuẩn -->
    
    <p>trở về thư mục trên 1 cấp</p>
    <img src="../boy.jpg" alt="anh cau be" width="250">
   

    <p>Đường dẫn tuyệt đối</p>
    <img src="/image/rafaella1.jpg" alt="ảnh cô gái" width="250">

    ==> Kết luận
    Đường dẫn tương đối khi di chuyển file index
    thì đường dẫn sẽ bị mất
    Còn đường dẫn tuyệt đối thì sẽ không bị mất

    -> Nên dùng đường dẫn tuyệt đối



    ///////////////////////////////
    //15. Multi - page website 



    //////////////////////////////////
    //16. Làm việc với github 

    echo "# duan2" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/dstijl62/duan2.git
    git push -u origin main


    16.3 Deploy website using VScode 
    -> Thao tác trên Remote repo

    Step 1: Tạo repository tren github: DÙng để lưu trữ dự án
    của bạn trên máy chủ git

    Step 2: Tạo dự án trên máy tính cá nhân: Dùng để code và
    lưu trữ cục bộ trên máy tình. Ổ đĩa mà hỏng thì xác định...

    Step 3: Khởi tạo git: để khởi tạo một kho lưu trữ Git cục bộ
    - local repo 
    
    Step 3.1: Mở terminal

    -> Chọn file > terminal > new terminal (ctrl + shift + `)
    (Chỗ mặc định powershell -> chuyển sang git bash)
    chọn vào mũi tên > select default profile > git bash 
    -> Chọn thùng rác xóa
    -> Mở lại Terminal > new terminal (ctrl + shift + `)
    
    Step 3.2: config mặc định chọn git bash khi mở terminal 

    Step 3.3: Kiểm tra trạng thái git bằng lệnh
    git status
    -> để khởi tạo
    git init

    Step 4: Add thư mục dự án vào staging area chờ commit:
    --------> stagging area ( vùng chờ commit xác nhận)------>

    /-> Add tất cả: ----> git add . ---> enter
    /-> Add lẻ thư mục, tệp ----> git add ten_thu_muc

    git add thumuc/
    git add add1,html

    ////////////
    Trường hợp sau khi sửa đổi code
    git status ---> Để kiểm tra status có sửa đổi gì hay k ?


    -----> git add . 
    để thêm lại toàn bộ
    
    
    -----> git add index.html 
    để thêm file lẻ (gõ in + tab để chọn file gọi ý)








    ////////////////////////////
    //17. HTML ENTITIES
    a. Tổng quan:
    -> Là các chuối nằm trong cặp dấu &...;

    <p>Chúng ta sử dụng thẻ &lt;h1&gt; để đặt tiêu đề:</p>
    &lt;h1&gt; Đặt nội dung tiêu đề vào đây &lt;/h1&gt;

    ----> gõ tìm kiếm html entities list

    -> Sử dụng để nhặp các ký tự
    1. Trùng thẻ, ký tự quy ước code HTML: <b>, <i>....
    2. Các ký tự đặc biệt : 

    <p>Các ký tự đặc biệt :</p>

        <p>&copy;</p>	
        <p>&yen;</p> 
        <p>&para;</p>

        <p>Δ</p>

    -> Với trang web sử dụng bảng mã ký tự UTF-8 thì đa phần
    các ký tự dặc biệt (bao gồm cả các biểu tượng cảm xúc)
    có thể hiển thị ngay mà không cần sử dụng HTML Entities.

///////////////////////
//18. Tìm hiểu thẻ PRE
-> Thẻ <pre> - preformatted: dùng để giữ nguyên định dạng 
văn bản trong trình soản thảo code, ví dụ: khoảng trắng
dư thừa, tab thụt vào đầu dòng...
//
<pre>
  Đoạn     văn bản   đã được     định dạng trước 
  ---->    k chỉnh sửa
</pre>


///////////////////////
//19. Tìm hiểu thẻ CODE
-> Thẻ <code>: là 1 thẻ có ngữ nghĩa.
-> sử dụng khi có 1 đoạn code, trình duyệt sẽ hiểu đây là
1 đoạn code.

   <p>Tôi đang học các thẻ <code> &lt; em &gt;</code>
và <code>&lt; strong &gt;</code>
</p>

-> Thể hiện một khối code độc lập ( cần chuyển các ký tự đặc
biệt sang HTML Entities)

Không thụt thẻ code vào trong
Dùng kèm thẻ pre để giữ định dạng khối code

->>>>>>>> Để gõ nhanh các mã ký hiệu 
vào trang codebeauty.org ----> search : html escape/unescape

//////////////////////
//20. Highlight code
---> Thẻ <code> : Highlight code với thư viện PrismJS

<!-- Step 1: Copy trước thẻ </head> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css">

    <!-- Code sau khi highlight -->
    <!-- Step 2: Thêm class="language-html" vào thẻ mở code -->


 <!-- Step3: Thêm đoạn code sau trước thẻ đóng </body> -->
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>


    ///////////////////////
    //21-1. HTML table
    TR - TD - TH 
    Thead, Tbody, Tfoot

    ---> Sử dụng cặp thẻ <table> </table> để vẽ bảng

    tr -- table row -- Đại diện cho 1 hàng trong bảng HTML
    td -- table data  --- định nghĩa một ô dữ liệu trong 1 bảng
    th -- table header -- định nghĩa một ô tiêu đề trong bảng

////////////
  

<table>
 <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
    </tr>
 </thead>
<tbody>
    <tr>
      <td>Áo phông</td>
      <td>100k VND</td>
    </tr>
    <tr>
      <td>Quần jeans</td>
      <td>200k VND</td>
    </tr>
</tbody>
<tfoot>
    <tr>
      <td>Tổng cộng</td>
      <td>300K VND</td>
    </tr>
  </table>
</tfoot>

/////////////
21-2 HTML Table
Colspan - Rowspan

- Colspan --> chỉ định phần tử chiếm bao nhiêu cột
- Rowspan --> Chỉ định phần tử chiếm bao nhiêu hàng

<table>
thead>tr>th*3
  <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Giá sản phẩm</th>
      <th>Số lượng còn lại</th>
    </tr>
  </thead>

  ////
  tbody>tr*3>td*3

  <tbody>
    <tr>
      <td>Áo thun nam</td>
      <td>100.000vnd</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Quần jean nữ</td>
      <td>200.000vnd</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Giày thể thao</td>
      <td>300.000vnd</td>
      <td>30</td>
    </tr>
 </tbody>\

////////////
 tfoot>tr>td*2

 <tfoot>
    <tr>
      <td>Remark</td>
      <td colspan="2">Chỉ thống kê sản phẩm trong kho</td>
    </tr>
 </tfoot>


 ////////////
 //22. CSS Cơ Bản
 INLINE - INTERNAL, EXTERNAL CSS

2. Vị trí đặt CSS
-> có 3 nơi có thể đặt CSS
a. Inline - CSS nội tuyến
<tag style="css" />

- LÀ cách viết mã CSS ngay bên trong phần tử cơ bản HTML

<h3 style="color:blueviolet">Inline - CSS nội tuyến</h3>

-style là : name of attribute
-"color:..." : value of attribute

*** Nhược điểm
1. Khó thay đổi, mỗi lần thay đổi phải thay đổi một cách riêng lẻ
2. Không tái sử dụng được
3. Khó quản lý
4. Khó tách biệt cấu trúc


b. Internal - CSS nội bộ
<style>css</style>

- Là cách viết mã CSS trong cặp thẻ style (đặt trong khối head)

**Ưu điểm
1. Code tách biệt với phần tử, có thể áp dụng với toàn trang
(như ví dụ: ÁP dụng với toàn bộ thẻ h1)

**Hạn chế: 
1. Vẫn khó quản lý khi dự án lớn, quá nhiều mã CSS 
sẽ làm tệp HTML trở nên cồng kềnh

c. External - CSS bên ngoài
<link href="style.css"/>

- Trong trường hợp muốn áp dụng cho toàn bộ các file html nằm trên trang web,
tránh việc phải copy css ra tất cả các file này.

-> Là các viết mã CSS thành 1 tệp .css quản lý riêng

-> Cần khai báo trong HTML để link đến tệp CSS

   <!-- Khai báo link .css -->
      <link rel="stylesheet" href="style.css">



/////////////
//22.3 DỘ ƯU TIÊN 
Inline - Internal - External CSS

---> Độ ưu tiên giữa 3 cách đặt CSS
>Inline  > Internal 
         > External
Cao  >>>>>>>>>>>>>> Thấp

Giữa Internal và External thì : Trong code HTML chính, phần khai báo của
thằng nào viết sau thì sẽ ghi đèn lên thằng viết trước đó

----> Người nào viết sau --> người đó định nghĩa











 */