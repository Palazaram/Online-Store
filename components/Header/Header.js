class Header {

	handlerOpenShoppingPage(){
		shoppingPage.render();
	}

	render(count){
		const html = `
		<header class="header">
			<div class="header__container container">
				<nav class="header__menu menu">
					<ul class="menu__list">
						<li class="menu__item">
							<a href="about.html" class="menu__link">Про компанію</a>
						</li>
						<li class="menu__item">
							<a href="payment and delivery.html" class="menu__link">Оплата і доставка</a>
						</li>
						<li class="menu__item">
							<a href="reviews.html" class="menu__link">Відгуки</a>
						</li>
						<li class="menu__item">
							<a href="contacts.html" class="menu__link">Контакти</a>
						</li>
						<li class="menu__item">
							<a href="return and exchange.html" class="menu__link">Повернення та обмін</a>
						</li>
					</ul>
				</nav>
				<div class="header__button knopka">
					<form>
					  <input type="text" placeholder="Пошук">
					  <button type="submit"></button>
					</form>
				</div>


				<div class="header__basket basket">
					<div class="header-container">
						<div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
							<img class="basket__img" src="../img/basket/basket2.png" alt=""> ${count}
						</div>
					</div>						
				</div>

				<!--<div class="header-container">
					<div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
						🛒 ${count}
					</div>
				</div>-->


				<nav class="header__login login">
					<ul class="login__list">
						<li class="login__item">
							<a href="#" class="login__link"><i class="fa fa-home fa-fw"></i></a>
						</li>
						<li class="login__item">
							<a href="" class="login__link">Вхід</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="logo ">
					<div class="logo__container container">
						<div class="logo__description description">
							<div class="description__item">
								<img class="description__image" src="../img/index/logo.png" alt="logo">
								<p class="description__text">
									САДОВА КРАЇНА
								</p>
							</div>
							<div class="description__item">
								<span class="description__logo_name">САДОВА КРАЇНА</span>
							</div>
							<div class="description__item">
								<ul class="description__list fa-ul list">
									<li class="list__item"><i class="fa-li fa fa-check-square"></i>Інтернет-магазин агротоварів</li>
									<li class="list__item"><i class="fa-li fa fa-check-square"></i>Все для саду та городу</li>
									<li class="list__item"><i class="fa-li fa fa-check-square"></i>Доставка по всій Україні</li>
									<li class="list__item"><i class="fa-li fa fa-check-square"></i>Чудові ціни</li>
								</ul>
							</div>
							<div class="description__item">
								<i class="fa fa-phone"></i>
								<span class="description__phone">+380(99)628-66-44</span>
								<div>
									<i class="fa fa-phone"></i>
									<span class="description__phone2">+380(50)433-68-68</span>
								</div>
		  						<p class="description__back_call"><a href="">Зворотний дзвінок</a></p>
		  					</div>
						</div>
					</div>
		   </div>
		   <div class="line ">
		   	<div class="line__container container">
		   		<ul class="line__menu _menu">
		   			<li class="_menu__item"><a href="seed.html">Насіння</a></li>
		   			<li class="_menu__item"><a href="plants protecting tools.html">Засоби захисту рослин</a></li>
		   			<li class="_menu__item"><a href="substrates.html">Субстрати</a></li>
		   			<li class="_menu__item"><a href="fertilizers and growth stimulants.html">Добрива та стимулятори росту</a></li>
		   			<li class="_menu__item"><a href="drip splicing.html">Крапельне зрошення</a></li>
		   			<li class="_menu__item"><a href="related products.html">Супутні товари</a></li>
		   		</ul>
		   	</div>
		   </div>
		</header>
		`;

		ROOT_HEADER.innerHTML = html;
	}
}

const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);