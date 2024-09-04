let book = {
	상품명: 'nodejs 를 공부하자',
	상품가격: 20000,
	소개: '이 책 좋음 왜?'
}

function print(ojt) {
    console.log(ojt.상품명);
    console.log(ojt.상품가격);
    console.log(ojt.소개);
}

print(book);