class Footer{
	
	render(){
		const html = `
			<div class="footer">
			<div class="footer__container container">
				<div class="footer__row row">
					<div class="row__item">
					<nav class="row__nav">
						<ul class="row__list list">
							<li class="list__item"><a href="about.html" class="list__link">Про компанію</a></li>
							<li class="list__item"><a href="payment and delivery.html" class="list__link">Оплата і доставка</a></li>
							<li class="list__item"><a href="reviews.html" class="list__link">Відгуки</a></li>
							<li class="list__item"><a href="contacts.html" class="list__link">Контакти</a></li>
							<li class="list__item"><a href="return and exchange.html" class="list__link">Повернення та обмін</a></li>
						</ul>
					</nav>
					</div>
					<div class="verticalLine"></div>
					<div class="row__item">
						<div class="row__title">Адреса:</div>
						<p>Київська область, Святошинський район, Петропалівська Борщагівка, вул. Велика Кільцева, 4г</p>
					</div>
					<div class="verticalLine"></div>
					<div class="row__item">
						<div class="row__title">Години роботи:</div>
						<span>Вт-Нд: 10:00-19:00</span>
						<span>Пн: вихідний</span>
					</div>
					<div class="verticalLine"></div>
					<div class="row__item">
						<div class="row__title">Телефони:</div>
						<span class="row__phoneNumber">+380(99)628-66-44</span>
						<span class="row__phoneNumber">+380(50)433-68-68</span>
					</div>
					<div class="verticalLine"></div>
					<div class="row__item">
						<div class="row__title">Соціальні мережі:</div>
						<div class="media">
							<ul class="media__list">
								<li class="media__item"><a href="https://www.instagram.com/sadovakrayina/" class="media__link"><img class="media__img" src="../img/index/instagram.png" alt=""></a></li>
								<li class="media__item"><a href="" class="media__link"><img class="media__img" src="../img/index/facebook.png" alt=""></a></li>
								<li class="media__item"><a href="" class="media__link"><img class="media__img" src="../img/index/twitter.png" alt=""></a></li>
								<li class="media__item"><a href="" class="media__link"><img class="media__img" src="../img/index/g+.png" alt=""></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<span class="lowTitle"><a href="index.html">"САДОВА КРАЇНА"</a></span>
				</div>
			</div>
		</div>
		`;
		ROOT_FOOTER.innerHTML = html;
	}
	
}

const footerPage = new Footer();
footerPage.render();

