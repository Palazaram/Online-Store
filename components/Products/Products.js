class Products{
	constructor(id, name, img, price, box, root){
		this.id = id;
		this.name = name;
		this.img = img;
		this.price = price;
		this.box = box;
		this.root = root;
		this.classNameActive = 'products-element__btn_active';
		this.labelAdd = 'У кошик';
		this.labelRemove = 'Видалити з кошика';	
	}

	handleSetLocationStorage(element, id){
		const { pushProduct, products } = localStorageUtil.putProducts(id);

		if(pushProduct){
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;
		}else{
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}
		headerPage.render(products.length);
	}

	minus(objName, min, max, step, price) {
		var obj = document.getElementById(objName);
		var tmp = +obj.value + step;
		if (tmp<min) tmp=min;
		if (tmp>max) tmp=max;
		obj.value = tmp;
		let count = obj.value
		count = count < 1 ? 1 : count;
		//console.log(count);
		productsPage.updatePrice(obj.id, price, count);
	}


	plus(objName, min, max, step, price) {
		var obj = document.getElementById(objName);
		var tmp = +obj.value + step;
		if (tmp<min) tmp=min;
		if (tmp>max) tmp=max;
		obj.value = tmp;
		//console.log(obj.id);
		productsPage.updatePrice(obj.id, price, obj.value);
	}

	updatePrice(id, price, count) {
		price = price * count;
		$(`.products-element__price[id="${id}"]`).text(price);

		ProductsCatalog.forEach((el) => {
			if(id === el.id){
				el.price = price;
				console.log(el.price);
			}
		});
		EggProductsCatalog.forEach((el) => {
			if(id === el.id){
				el.price = price;
				console.log(el.price);
			}
		});
	}

	make(array, root){		
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';

		let activeClass = '';
			let activeText = '';

			if(productsStore.indexOf(this.id) === -1){
				activeText = this.labelAdd;
			}else{
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			}


		array.forEach(({id, name, img, price, box, ROOT}) => {
			let activeClass = '';
			let activeText = '';

			if(productsStore.indexOf(id) === -1){
				activeText = this.labelAdd;
			}else{
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			}

			htmlCatalog += `
				<li class="products-element"> 
					<span class="products-element__name">${name}</span>
					<img class="products-element__img" src="${img}">
					<div class="padd">
						<!--<div class="block">
							<span class="select__title">Кількість:</span>
						
							<input class="Btn" id="minus_btn" type="button" value="-" onclick="productsPage.minus('${id}',1,100,-1, ${price})"/>
							<input class="Btn count__amount" id="${id}" type="text" value="1"/>
							<input class="Btn" id="plus_btn" type="button"   value="+" onclick="productsPage.plus('${id}',0,100, 1, ${price})"/>
						</div>-->
						
						<div class="block">
							<span class="select__title">Ціна:</span>
							<span class="products-element__price" id="${id}">${price}</span>.00 UAH
						</div>
						
						<div class="block">
							<span class="select__title">Упаковка:</span>
							<span class="products-element__box">${box}</span>
						<div>
					<div>
					

					<button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
						${activeText}
					</button>
				</li>
			`;
		});

		const html = `			
			<ul class="products-container">
				${htmlCatalog}
			</ul>
		`;

		root.innerHTML = html;
	}

}

const productsPage = new Products();
//productsPage.render();

const ProductsCatalog = [
		{
			id: 'watermelon1',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon1.jpg',
			price: 23,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},

		{
			id: 'watermelon2',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon2.jpg',
			price: 28,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},

		{
			id: 'watermelon3',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon3.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},

		{
			id: 'watermelon4',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon4.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},

		{
			id: 'watermelon5',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon5.jpg',
			price: 12,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},

		{
			id: 'watermelon6',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon6.jpg',
			price: 31,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},

		{
			id: 'watermelon7',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon7.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},

		{
			id: 'watermelon8',
			name: 'Насіння кавуна АУ Продюсер(Sais)',
			img: '../img/watermelon/watermelon8.jpg',
			price: 17,
			box: '20 гр.',
			root: ROOT_PRODUCTS,
		},
];

const EggProductsCatalog = [
		{
			id: 'eggplant1',
			name: 'Насіння баклажану Бриджит F1',
			img: '../img/eggplant/egg1.jpg',
			price: 38,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},

		{
			id: 'eggplant2',
			name: 'Насіння баклажану Честер F1',
			img: '../img/eggplant/egg2.jpg',
			price: 25,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},

		{
			id: 'eggplant3',
			name: 'Насіння баклажану INX 804 F1',
			img: '../img/eggplant/egg3.jpg',
			price: 8,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},

		{
			id: 'eggplant4',
			name: 'Насіння баклажану Чівас F1',
			img: '../img/eggplant/egg4.jpg',
			price: 50,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},

		{
			id: 'eggplant5',
			name: 'Насіння баклажану Алмаз',
			img: '../img/eggplant/egg5.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},

		{
			id: 'eggplant6',
			name: 'Насіння баклажану Анатолія F1',
			img: '../img/eggplant/egg6.jpg',
			price: 13,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},

		{
			id: 'eggplant7',
			name: 'Насіння баклажану Анет F1',
			img: '../img/eggplant/egg7.jpg',
			price: 22,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},

		{
			id: 'eggplant8',
			name: 'Насіння баклажану Аретуза F1',
			img: '../img/eggplant/egg8.jpg',
			price: 18,
			box: '20 гр.',
			root: ROOT_EGGPLANTPRODUCTS,
		},
];

const MelonProductsCatalog = [
		{
			id: 'melon1',
			name: 'Насіння дині INX 1037 F1',
			img: '../img/melon/melon1.jpg',
			price: 40,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},

		{
			id: 'melon2',
			name: 'Насіння дині INX 1063 F1',
			img: '../img/melon/melon2.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},

		{
			id: 'melon3',
			name: 'Насіння дині INX 1077 F1',
			img: '../img/melon/melon3.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},

		{
			id: 'melon4',
			name: 'Насіння дині INX 1097 F1',
			img: '../img/melon/melon4.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},

		{
			id: 'melon5',
			name: 'Насіння дині KS 6147 F1',
			img: '../img/melon/melon5.jpg',
			price: 55,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},

		{
			id: 'melon6',
			name: 'Насіння дині KS 6150 F1',
			img: '../img/melon/melon6.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},

		{
			id: 'melon7',
			name: 'Насіння дині KS 6188 F1',
			img: '../img/melon/melon7.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},

		{
			id: 'melon8',
			name: 'Насіння дині KS 6191 F1',
			img: '../img/melon/melon8.jpg',
			price: 30,
			box: '20 гр.',
			root: ROOT_MELONPRODUCTS,
		},
];

const SquashProductsCatalog = [
		{
			id: 'squash1',
			name: 'Насіння кабачків ГОЛД БОЛЛ F1',
			img: '../img/squash/sq1.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},

		{
			id: 'squash2',
			name: 'Насіння кабачків ГОЛДЛАЙН F1',
			img: '../img/squash/sq2.jpg',
			price: 14,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},

		{
			id: 'squash3',
			name: 'Насіння кабачків САНСЕНС F1',
			img: '../img/squash/sq3.jpg',
			price: 26,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},

		{
			id: 'squash4',
			name: 'Насіння кабачків PL 6010 F1',
			img: '../img/squash/sq4.jpg',
			price: 31,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},

		{
			id: 'squash5',
			name: 'Насіння кабачків INX 1423 F1',
			img: '../img/squash/sq5.jpg',
			price: 23,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},

		{
			id: 'squash6',
			name: 'Насіння кабачків KS 2446 F1',
			img: '../img/squash/sq6.jpg',
			price: 13,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},

		{
			id: 'squash7',
			name: 'Насіння кабачків Азіад F1',
			img: '../img/squash/sq7.jpg',
			price: 29,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},

		{
			id: 'squash8',
			name: 'Насіння кабачків INX 1424 F1',
			img: '../img/squash/sq8.jpg',
			price: 27,
			box: '20 гр.',
			root: ROOT_SQUASHPRODUCTS,
		},
];

const CabbageProductsCatalog = [
		{
			id: 'cabbage1',
			name: 'Насіння капусти Акіра F1',
			img: '../img/cabbage/cab1.jpg',
			price: 14,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},

		{
			id: 'cabbage2',
			name: 'Насіння капусти брокколі Самоа F1',
			img: '../img/cabbage/cab2.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},

		{
			id: 'cabbage3',
			name: 'Насіння капусти Геркулес F1',
			img: '../img/cabbage/cab3.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},

		{
			id: 'cabbage4',
			name: 'Насіння капусти кольрабі Колібрі F1',
			img: '../img/cabbage/cab4.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},

		{
			id: 'cabbage5',
			name: 'Насіння капусти Кіото F1',
			img: '../img/cabbage/cab5.jpg',
			price: 21,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},

		{
			id: 'cabbage6',
			name: 'Насіння капусти пекінської Білко F1',
			img: '../img/cabbage/cab6.jpg',
			price: 19,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},

		{
			id: 'cabbage7',
			name: 'Насіння капусти савойської Вертю',
			img: '../img/cabbage/cab7.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},

		{
			id: 'cabbage8',
			name: 'Насіння капусти Скайвокер F1',
			img: '../img/cabbage/cab8.jpg',
			price: 27,
			box: '20 гр.',
			root: ROOT_CABBAGEPRODUCTS,
		},
];

const CornProductsCatalog = [
		{
			id: 'corn1',
			name: 'Насіння кукурудзи 1010 F1',
			img: '../img/corn/corn1.jpg',
			price: 14,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},

		{
			id: 'corn2',
			name: 'Насіння кукурудзи 1980 F1',
			img: '../img/corn/corn2.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},

		{
			id: 'corn3',
			name: 'Насіння кукурудзи Айова',
			img: '../img/corn/corn3.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},

		{
			id: 'corn4',
			name: 'Насіння кукурудзи біколор Ксанаду F1',
			img: '../img/corn/corn4.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},

		{
			id: 'corn5',
			name: 'Насіння кукурудзи Акведук F1',
			img: '../img/corn/corn5.jpg',
			price: 21,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},

		{
			id: 'corn6',
			name: 'Насіння кукурудзи Герміона F1',
			img: '../img/corn/corn6.jpg',
			price: 19,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},

		{
			id: 'corn7',
			name: 'Насіння кукурудзи Джамала F1',
			img: '../img/corn/corn7.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},

		{
			id: 'corn8',
			name: 'Насіння кукурудзи Добриня F1',
			img: '../img/corn/corn8.jpg',
			price: 27,
			box: '20 гр.',
			root: ROOT_CORNPRODUCTS,
		},
];

const OnionProductsCatalog = [
		{
			id: 'onion1',
			name: 'Насіння цибулі на перо Кімі',
			img: '../img/onion/onion1.jpg',
			price: 14,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},

		{
			id: 'onion2',
			name: 'Насіння цибулі на перо Байа Верде',
			img: '../img/onion/onion2.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},

		{
			id: 'onion3',
			name: 'Насіння цибулі озимої Пантер F1',
			img: '../img/onion/onion3.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},

		{
			id: 'onion4',
			name: 'Насіння цибулі озимої Хієло',
			img: '../img/onion/onion4.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},

		{
			id: 'onion5',
			name: 'Насіння цибулі порей Камус',
			img: '../img/onion/onion5.jpg',
			price: 21,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},

		{
			id: 'onion6',
			name: 'Насіння цибулі порей Порілюкс F1',
			img: '../img/onion/onion6.jpg',
			price: 19,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},

		{
			id: 'onion7',
			name: 'Насіння цибулі ріпчастої Берекет',
			img: '../img/onion/onion7.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},

		{
			id: 'onion8',
			name: 'Насіння цибулі ріпчастої Берсерк',
			img: '../img/onion/onion8.jpg',
			price: 27,
			box: '20 гр.',
			root: ROOT_ONIONPRODUCTS,
		},
];

const CarrotProductsCatalog = [
		{
			id: 'carrot1',
			name: 'Насіння моркви Ньюхол F1',
			img: '../img/carrot/car1.jpg',
			price: 11,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},

		{
			id: 'carrot2',
			name: 'Насіння моркви SV3118 F1',
			img: '../img/carrot/car2.jpg',
			price: 26,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},

		{
			id: 'carrot3',
			name: 'Насіння моркви Абако F1',
			img: '../img/carrot/car3.jpg',
			price: 23,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},

		{
			id: 'carrot4',
			name: 'Насіння моркви Балтімор F1',
			img: '../img/carrot/car4.jpg',
			price: 33,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},

		{
			id: 'carrot5',
			name: 'Насіння моркви Бангор F1',
			img: '../img/carrot/car5.jpg',
			price: 31,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},

		{
			id: 'carrot6',
			name: 'Насіння моркви Белградо F1',
			img: '../img/carrot/car6.jpg',
			price: 17,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},

		{
			id: 'carrot7',
			name: 'Насіння моркви Берлін F1',
			img: '../img/carrot/car7.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},

		{
			id: 'carrot8',
			name: 'Насіння моркви Болівар F1',
			img: '../img/carrot/car8.jpg',
			price: 14,
			box: '20 гр.',
			root: ROOT_CARROTPRODUCTS,
		},
];

const CucumberProductsCatalog = [
		{
			id: 'cucumber1',
			name: 'Насіння огірків KS 70 F1',
			img: '../img/cucumber/cum1.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},

		{
			id: 'cucumber2',
			name: 'Насіння огірків SV3506 CV F1',
			img: '../img/cucumber/cum2.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},

		{
			id: 'cucumber3',
			name: 'Насіння огірків SV4097 CV F1',
			img: '../img/cucumber/cum3.jpg',
			price: 18,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},

		{
			id: 'cucumber4',
			name: 'Насіння огірків Сігурд F1',
			img: '../img/cucumber/cum4.jpg',
			price: 26,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},

		{
			id: 'cucumber5',
			name: 'Насіння огірків Акорд F1',
			img: '../img/cucumber/cum5.jpg',
			price: 30,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},

		{
			id: 'cucumber6',
			name: 'Насіння огірків Гектор F1',
			img: '../img/cucumber/cum6.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},

		{
			id: 'cucumber7',
			name: 'Насіння огірків Аякс F1',
			img: '../img/cucumber/cum7.jpg',
			price: 22,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},

		{
			id: 'cucumber8',
			name: 'Насіння огірків Астерікс F1',
			img: '../img/cucumber/cum8.jpg',
			price: 25,
			box: '20 гр.',
			root: ROOT_CUCUMBERPRODUCTS,
		},
];

const RadishProductsCatalog = [
		{
			id: 'radish1',
			name: 'Насіння редис дайкон Титан',
			img: '../img/radish/rad1.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},

		{
			id: 'radish2',
			name: 'Насіння редис дайкон ЯПАНА F1',
			img: '../img/radish/rad2.jpg',
			price: 18,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},

		{
			id: 'radish3',
			name: 'Насіння дайкону Еверест F1',
			img: '../img/radish/rad3.jpg',
			price: 22,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},

		{
			id: 'radish4',
			name: 'Насіння дайкону Chimbozaro F1',
			img: '../img/radish/rad4.jpg',
			price: 21,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},

		{
			id: 'radish5',
			name: 'Насіння дайкону Алабастер F1',
			img: '../img/radish/rad5.jpg',
			price: 30,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},

		{
			id: 'radish6',
			name: 'Насіння дайкону Лонг Вайт F1',
			img: '../img/radish/rad6.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},

		{
			id: 'radish7',
			name: 'Насіння дайкону Ред Мит F1',
			img: '../img/radish/rad7.jpg',
			price: 27,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},

		{
			id: 'radish8',
			name: 'Насіння редиски Аутелла F1',
			img: '../img/radish/rad8.jpg',
			price: 12,
			box: '20 гр.',
			root: ROOT_RADISHRPRODUCTS,
		},
];

const BeetProductsCatalog = [
		{
			id: 'beet1',
			name: 'Насіння буряка Бебібіт F1',
			img: '../img/beet/beet1.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},

		{
			id: 'beet2',
			name: 'Насіння буряка Водан F1',
			img: '../img/beet/beet2.jpg',
			price: 13,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},

		{
			id: 'beet3',
			name: 'Насіння буряка Детройт',
			img: '../img/beet/beet3.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},

		{
			id: 'beet4',
			name: 'Насіння буряка Дарк Ред 2',
			img: '../img/beet/beet4.jpg',
			price: 23,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},

		{
			id: 'beet5',
			name: 'Насіння буряка Зеппо F1',
			img: '../img/beet/beet5.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},

		{
			id: 'beet6',
			name: 'Насіння буряка Кадет',
			img: '../img/beet/beet6.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},

		{
			id: 'beet7',
			name: 'Насіння буряка Кестрел F1',
			img: '../img/beet/beet7.jpg',
			price: 11,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},

		{
			id: 'beet8',
			name: 'Насіння буряка Пабло F1',
			img: '../img/beet/beet8.jpg',
			price: 19,
			box: '20 гр.',
			root: ROOT_BEETPRODUCTS,
		},
];

const CeleryProductsCatalog = [
		{
			id: 'celery1',
			name: 'Насіння селери Діамант',
			img: '../img/celery/cel1.jpg',
			price: 16,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},

		{
			id: 'celery2',
			name: 'Насіння селери Камо',
			img: '../img/celery/cel2.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},

		{
			id: 'celery3',
			name: 'Насіння селери Петрик',
			img: '../img/celery/cel3.jpg',
			price: 8,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},

		{
			id: 'celery4',
			name: 'Насіння селери Албін',
			img: '../img/celery/cel4.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},

		{
			id: 'celery5',
			name: 'Насіння селери Балена',
			img: '../img/celery/cel5.jpg',
			price: 30,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},

		{
			id: 'celery6',
			name: 'Насіння селери Ілона F1',
			img: '../img/celery/cel6.jpg',
			price: 17,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},

		{
			id: 'celery7',
			name: 'Насіння селери Неон',
			img: '../img/celery/cel7.jpg',
			price: 19,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},

		{
			id: 'celery8',
			name: 'Насіння селери Президент F1',
			img: '../img/celery/cel8.jpg',
			price: 29,
			box: '20 гр.',
			root: ROOT_CELERYPRODUCTS,
		},
];

const SweetPepperProductsCatalog = [
		{
			id: 'sweet_pepper1',
			name: 'Насіння перцю Генерал Топтигін',
			img: '../img/sweet pepper/pep1.jpg',
			price: 14,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},

		{
			id: 'sweet_pepper2',
			name: 'Насіння перцю Геркулес F1',
			img: '../img/sweet pepper/pep2.jpg',
			price: 21,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},

		{
			id: 'sweet_pepper3',
			name: 'Насіння перцю Брюс F1',
			img: '../img/sweet pepper/pep3.jpg',
			price: 19,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},

		{
			id: 'sweet_pepper4',
			name: 'Насіння перцю Сінатра F1',
			img: '../img/sweet pepper/pep4.jpg',
			price: 33,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},

		{
			id: 'sweet_pepper5',
			name: 'Насіння перцю PL6205 F1',
			img: '../img/sweet pepper/pep5.jpg',
			price: 35,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},

		{
			id: 'sweet_pepper6',
			name: 'Насіння перцю Олександр',
			img: '../img/sweet pepper/pep6.jpg',
			price: 17,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},

		{
			id: 'sweet_pepper7',
			name: 'Насіння перцю Амаретта F1',
			img: '../img/sweet pepper/pep7.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},

		{
			id: 'sweet_pepper8',
			name: 'Насіння перцю Амарок F1',
			img: '../img/sweet pepper/pep8.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_SWEETPEPPERPRODUCTS,
		},
];

const TomatoProductsCatalog = [
		{
			id: 'tomato1',
			name: 'Насіння томату Ріо Гранд',
			img: '../img/tomato/tot1.jpg',
			price: 18,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},

		{
			id: 'tomato2',
			name: 'Насіння томату Гладіс',
			img: '../img/tomato/tot2.jpg',
			price: 21,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},

		{
			id: 'tomato3',
			name: 'Насіння томату Кітару F1',
			img: '../img/tomato/tot3.jpg',
			price: 22,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},

		{
			id: 'tomato4',
			name: 'Насіння томату Торбей F1',
			img: '../img/tomato/tot4.jpg',
			price: 33,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},

		{
			id: 'tomato5',
			name: 'Насіння томату Гравітет F1',
			img: '../img/tomato/tot5.jpg',
			price: 39,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},

		{
			id: 'tomato6',
			name: 'Насіння томату Хурма',
			img: '../img/tomato/tot6.jpg',
			price: 25,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},

		{
			id: 'tomato7',
			name: 'Насіння томату Челсі F1',
			img: '../img/tomato/tot7.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},

		{
			id: 'tomato8',
			name: 'Насіння томату Девонет F1',
			img: '../img/tomato/tot8.jpg',
			price: 17,
			box: '20 гр.',
			root: ROOT_TOMATOPRODUCTS,
		},
];

const PumpkinProductsCatalog = [
		{
			id: 'pumpkin1',
			name: 'Насіння гарбуза Ольга',
			img: '../img/pumpkin/pum1.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},

		{
			id: 'pumpkin2',
			name: 'Насіння гарбуза Мускат де Прованс',
			img: '../img/pumpkin/pum2.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},

		{
			id: 'pumpkin3',
			name: 'Насіння гарбуза Голіаш',
			img: '../img/pumpkin/pum3.jpg',
			price: 16,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},

		{
			id: 'pumpkin4',
			name: 'Насіння гарбуза Матільда F1',
			img: '../img/pumpkin/pum4.jpg',
			price: 22,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},

		{
			id: 'pumpkin5',
			name: 'Насіння гарбуза Аріель F1',
			img: '../img/pumpkin/pum5.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},

		{
			id: 'pumpkin6',
			name: 'Насіння гарбуза Атлантичний гігант',
			img: '../img/pumpkin/pum6.jpg',
			price: 27,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},

		{
			id: 'pumpkin7',
			name: 'Насіння гарбуза Атлас F1',
			img: '../img/pumpkin/pum7.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},

		{
			id: 'pumpkin8',
			name: 'Насіння гарбуза Біг Макс',
			img: '../img/pumpkin/pum8.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_PUMPKINPRODUCTS,
		},
];

const BeansProductsCatalog = [
		{
			id: 'beans1',
			name: 'Насіння квасолі Стрегонта',
			img: '../img/beans/beans1.jpg',
			price: 20,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},

		{
			id: 'beans2',
			name: 'Насіння гороху Авола',
			img: '../img/beans/beans2.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},

		{
			id: 'beans3',
			name: 'Насіння петрушки Gigante Italia',
			img: '../img/beans/beans3.jpg',
			price: 16,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},

		{
			id: 'beans4',
			name: 'Насіння щавля широколистого',
			img: '../img/beans/beans4.jpg',
			price: 22,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},

		{
			id: 'beans5',
			name: 'Насіння гіркого перцю Шегеді 178',
			img: '../img/beans/beans5.jpg',
			price: 24,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},

		{
			id: 'beans6',
			name: 'Насіння гіркого перцю Бібо F1',
			img: '../img/beans/beans6.jpg',
			price: 27,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},

		{
			id: 'beans7',
			name: 'Насіння базиліка Superbo',
			img: '../img/beans/beans7.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},

		{
			id: 'beans8',
			name: 'Насіння гороху Оскар',
			img: '../img/beans/beans8.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_BEANSPRODUCTS,
		},
];

const FlowerProductsCatalog = [
		{
			id: 'flower1',
			name: 'Насіння чорнобривців F1',
			img: '../img/flower/flower1.jpg',
			price: 10,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},

		{
			id: 'flower2',
			name: 'Насіння петунії Містрал F1',
			img: '../img/flower/flower2.jpg',
			price: 15,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},

		{
			id: 'flower3',
			name: 'Насіння петунії Сільвія F1',
			img: '../img/flower/flower3.jpg',
			price: 16,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},

		{
			id: 'flower4',
			name: 'Насіння петунії Снені F1',
			img: '../img/flower/flower4.jpg',
			price: 12,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},

		{
			id: 'flower5',
			name: 'Насіння петунії Тоуга F1',
			img: '../img/flower/flower5.jpg',
			price: 18,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},

		{
			id: 'flower6',
			name: 'Насіння петунії Тріумф F1',
			img: '../img/flower/flower6.jpg',
			price: 19,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},

		{
			id: 'flower7',
			name: 'Насіння квітів Катарантус',
			img: '../img/flower/flower7.jpg',
			price: 13,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},

		{
			id: 'flower8',
			name: 'Насіння квітів Оленка F1',
			img: '../img/flower/flower8.jpg',
			price: 9,
			box: '20 гр.',
			root: ROOT_FLOWERPRODUCTS,
		},
];

const HerbicidesProductsCatalog = [
		{
			id: 'herbicides1',
			name: 'Гербіцид Макстар (цибуля, кукурудза)',
			img: '../img/herbicides/her1.jpg',
			price: 30,
			box: '5 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},

		{
			id: 'herbicides2',
			name: 'Гербіцид Агіл (Пропахізафоп)',
			img: '../img/herbicides/her2.jpg',
			price: 15,
			box: '5 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},

		{
			id: 'herbicides3',
			name: 'Гербіцид Антибур`ян (суцільна дія)',
			img: '../img/herbicides/her3.jpg',
			price: 200,
			box: '100 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},

		{
			id: 'herbicides4',
			name: 'Гербіцид Антиперей (хізалофоп-П-тефуріл)',
			img: '../img/herbicides/her4.jpg',
			price: 140,
			box: '250 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},

		{
			id: 'herbicides5',
			name: 'Гербіцид Антисапу (метрибузин)',
			img: '../img/herbicides/her5.jpg',
			price: 170,
			box: '100 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},

		{
			id: 'herbicides6',
			name: 'Гербіцид Апріорі ВГ+ Біопауер',
			img: '../img/herbicides/her6.jpg',
			price: 600,
			box: '250 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},

		{
			id: 'herbicides7',
			name: 'Гербіцид Бельведер Форте (цукровий буряк)',
			img: '../img/herbicides/her7.jpg',
			price: 1000,
			box: '500 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},

		{
			id: 'herbicides8',
			name: 'Гербіцид Бетагард (буряк)',
			img: '../img/herbicides/her8.jpg',
			price: 100,
			box: '100 мл.',
			root: ROOT_HERBICIDESPRODUCTS,
		},
];

const InsecticidesProductsCatalog = [
		{
			id: 'insecticides1',
			name: 'Біологічний інсекто-акарицид Актоцид',
			img: '../img/insecticides/insec1.jpg',
			price: 50,
			box: '50 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},

		{
			id: 'insecticides2',
			name: 'Інсектицид Цезар (кліщ-личинка молі-щитівка)',
			img: '../img/insecticides/insec2.jpg',
			price: 100,
			box: '300 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},

		{
			id: 'insecticides3',
			name: 'Інсектицид Акарамік (моль-совка-тля-жук)',
			img: '../img/insecticides/insec3.jpg',
			price: 200,
			box: '500 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},

		{
			id: 'insecticides4',
			name: 'Інсектицид Актара (жук-клопи-трипс)',
			img: '../img/insecticides/insec4.jpg',
			price: 300,
			box: '250 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},

		{
			id: 'insecticides5',
			name: 'Інсектицид Актелік (тля, трипс, білокрилка)',
			img: '../img/insecticides/insec5.jpg',
			price: 170,
			box: '100 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},

		{
			id: 'insecticides6',
			name: 'Інсектицид Актор (колоради)',
			img: '../img/insecticides/insec6.jpg',
			price: 160,
			box: '250 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},

		{
			id: 'insecticides7',
			name: 'Інсектицид Актофіт (кліщ-тля-жук-совка)',
			img: '../img/insecticides/insec7.jpg',
			price: 980,
			box: '500 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},

		{
			id: 'insecticides8',
			name: 'Інсектицид Аламектин Alamectin 1.8EC',
			img: '../img/insecticides/insec8.jpg',
			price: 210,
			box: '100 мл.',
			root: ROOT_INSECTICIDESPRODUCTS,
		},
];

const SurfactantsProductsCatalog = [
		{
			id: 'surfactants1',
			name: 'Ад`ювант Inex-A',
			img: '../img/surfactans/surf1.jpg',
			price: 195,
			box: '50 мл.',
			root: ROOT_SURFACTANTSPRODUCTS,
		},

		{
			id: 'surfactants2',
			name: 'Прилипатель Добрий Господар',
			img: '../img/surfactans/surf2.jpg',
			price: 30,
			box: '100 мл.',
			root: ROOT_SURFACTANTSPRODUCTS,
		},

		{
			id: 'surfactants3',
			name: 'Прилипатель Союз',
			img: '../img/surfactans/surf3.jpg',
			price: 90,
			box: '500 мл.',
			root: ROOT_SURFACTANTSPRODUCTS,
		},

		{
			id: 'surfactants4',
			name: 'Прилипатель Ліпосам',
			img: '../img/surfactans/surf4.jpg',
			price: 52,
			box: '250 мл.',
			root: ROOT_SURFACTANTSPRODUCTS,
		},

		{
			id: 'surfactants5',
			name: 'Прилипатель Тренд 90',
			img: '../img/surfactans/surf5.jpg',
			price: 500,
			box: '100 мл.',
			root: ROOT_SURFACTANTSPRODUCTS,
		},
];

const DisinfectantsProductsCatalog = [
		{
			id: 'disinfectants1',
			name: 'Інсектицид Еместо Квантум (колоради)',
			img: '../img/disinfectants/dis1.png',
			price: 150,
			box: '50 мл.',
			root: ROOT_DISINFECTANSPRODUCTS,
		},

		{
			id: 'disinfectants2',
			name: 'Протруйник інсекто–фунгіцид Матадор',
			img: '../img/disinfectants/dis2.png',
			price: 550,
			box: '100 мл.',
			root: ROOT_DISINFECTANSPRODUCTS,
		},

		{
			id: 'disinfectants3',
			name: 'Протруйник Інсекто-фунгіцидної дії',
			img: '../img/disinfectants/dis3.png',
			price: 150,
			box: '50 мл.',
			root: ROOT_DISINFECTANSPRODUCTS,
		},

		{
			id: 'disinfectants4',
			name: 'Протруйник Антислизень (Метальдегід)',
			img: '../img/disinfectants/dis4.png',
			price: 280,
			box: '200 гр.',
			root: ROOT_DISINFECTANSPRODUCTS,
		},

		{
			id: 'disinfectants5',
			name: 'Протруйник Венцедор',
			img: '../img/disinfectants/dis5.png',
			price: 330,
			box: '100 мл.',
			root: ROOT_DISINFECTANSPRODUCTS,
		},
];

const FungicidesProductsCatalog = [
		{
			id: 'fungicides1',
			name: 'Фунгіцид Мідний (Biester IDHA Cu10)',
			img: '../img/fungicides/fun1.jpg',
			price: 800,
			box: '500 гр.',
			root: ROOT_FUNGICIDESPRODUCTS,
		},

		{
			id: 'fungicides2',
			name: 'Антибактеріальний та протигрибковий фунгіцид',
			img: '../img/fungicides/fun2.jpg',
			price: 150,
			box: '100 мл.',
			root: ROOT_FUNGICIDESPRODUCTS,
		},

		{
			id: 'fungicides3',
			name: 'Фунгіцид MaxClean',
			img: '../img/fungicides/fun3.jpg',
			price: 200,
			box: '50 мл.',
			root: ROOT_FUNGICIDESPRODUCTS,
		},

		{
			id: 'fungicides4',
			name: 'Фунгіцид Акробат МЦ (широкий спектр дії)',
			img: '../img/fungicides/fun4.jpg',
			price: 300,
			box: '500 гр.',
			root: ROOT_FUNGICIDESPRODUCTS,
		},

		{
			id: 'fungicides5',
			name: 'Фунгіцид Ал`єт (фітофтороз-переноспороз)',
			img: '../img/fungicides/fun5.jpg',
			price: 770,
			box: '500 гр.',
			root: ROOT_FUNGICIDESPRODUCTS,
		},
];

const SubstratesProductsCatalog = [
		{
			id: 'substrates1',
			name: 'Субстрат Domoflor mix 3 (Домофлор микс 3)',
			img: '../img/substrates/sub1.jpg',
			price: 800,
			box: '250 мл. Fr.0-5mm',
			root: ROOT_SUBSTRATESPRODUCTS,
		},

		{
			id: 'substrates2',
			name: 'Субстрат Klasmann TS-3 (субстрат Класман)',
			img: '../img/substrates/sub2.jpg',
			price: 545,
			box: '100 мл.',
			root: ROOT_SUBSTRATESPRODUCTS,
		},

		{
			id: 'substrates3',
			name: 'Торф`яний субстрат REMIX 1 для посіву та розсади',
			img: '../img/substrates/sub3.jpg',
			price: 545,
			box: '250 мл. Fr.0-7mm',
			root: ROOT_SUBSTRATESPRODUCTS,
		},

		{
			id: 'substrates4',
			name: 'Торф`яний субстрат "PEATFIELD PLS-2"',
			img: '../img/substrates/sub4.jpg',
			price: 522,
			box: '250 мл. Fr.5-15mm',
			root: ROOT_SUBSTRATESPRODUCTS,
		},
];

const StimulantsProductsCatalog = [
		{
			id: 'stimulants1',
			name: 'Біостимулятор MAX 600 SeaSailer (Альга 600)',
			img: '../img/fertilizers and growth stimulants/fer1.jpg',
			price: 500,
			box: '1 кг.',
			root: ROOT_STIMULANTSPRODUCTS,
		},

		{
			id: 'stimulants2',
			name: 'Антистресант кореневої системи Віва (Viva)',
			img: '../img/fertilizers and growth stimulants/fer2.jpg',
			price: 360,
			box: '100 мл.',
			root: ROOT_STIMULANTSPRODUCTS,
		},

		{
			id: 'stimulants3',
			name: 'Бактеріально-грибкова суміш Ecoseed Prop',
			img: '../img/fertilizers and growth stimulants/fer3.jpg',
			price: 200,
			box: '1 кг.',
			root: ROOT_STIMULANTSPRODUCTS,
		},

		{
			id: 'stimulants4',
			name: 'Біологічне добриво AgriFlex (гумат) Агріфлекс',
			img: '../img/fertilizers and growth stimulants/fer4.jpg',
			price: 42,
			box: '15 гр.',
			root: ROOT_STIMULANTSPRODUCTS,
		},

		{
			id: 'stimulants5',
			name: 'Біологічне добриво Ізабіон (стимулятор росту)',
			img: '../img/fertilizers and growth stimulants/fer5.jpg',
			price: 70,
			box: '100 мл.',
			root: ROOT_STIMULANTSPRODUCTS,
		},

		{
			id: 'stimulants6',
			name: 'Біопрепарат Екопроп N',
			img: '../img/fertilizers and growth stimulants/fer6.jpg',
			price: 440,
			box: '1 кг.',
			root: ROOT_STIMULANTSPRODUCTS,
		},

		{
			id: 'stimulants7',
			name: 'Біопрепарат Eкoseed Cereal',
			img: '../img/fertilizers and growth stimulants/fer7.jpg',
			price: 880,
			box: '1 кг.',
			root: ROOT_STIMULANTSPRODUCTS,
		},

		{
			id: 'stimulants8',
			name: 'Біостемулятор FOLCROP Titan',
			img: '../img/fertilizers and growth stimulants/fer8.jpg',
			price: 80,
			box: '100 мл.',
			root: ROOT_STIMULANTSPRODUCTS,
		},
];

const DripProductsCatalog = [
		{
			id: 'drip1',
			name: 'Подвійний дисковий фільтр',
			img: '../img/drip splicing/drip1.jpg',
			price: 5500,
			box: '4 дюйми',
			root: ROOT_DRIPPRODUCTS,
		},

		{
			id: 'drip2',
			name: 'Дисковий картридж до фільтру',
			img: '../img/drip splicing/drip2.jpg',
			price: 2800,
			box: '120 mesh',
			root: ROOT_DRIPPRODUCTS,
		},

		{
			id: 'drip3',
			name: 'Діркопробивач для LFT',
			img: '../img/drip splicing/drip3.jpg',
			price: 200,
			box: 'діаметр 16 мм.',
			root: ROOT_DRIPPRODUCTS,
		},

		{
			id: 'drip4',
			name: 'Крапельна стрічка щілинна Oxi Drip',
			img: '../img/drip splicing/drip4.jpg',
			price: 600,
			box: '500 м.',
			root: ROOT_DRIPPRODUCTS,
		},

		{
			id: 'drip5',
			name: 'Крапельна стрічка щілинна AMCO-Drip',
			img: '../img/drip splicing/drip5.jpg',
			price: 4000,
			box: '2 м.',
			root: ROOT_DRIPPRODUCTS,
		},
];

const RelatedProductsCatalog = [
		{
			id: 'related1',
			name: 'Касети розсадні 30 штук в упаковці',
			img: '../img/related products/related1.jpg',
			price: 13,
			box: '16 осередків',
			root: ROOT_RELATEDPRODUCTS,
		},

		{
			id: 'related2',
			name: 'Фарба світлозахисна "Parasolex Special Plastic"',
			img: '../img/related products/related2.jpg',
			price: 1400,
			box: '10 кг.',
			root: ROOT_RELATEDPRODUCTS,
		},

		{
			id: 'related3',
			name: 'Феромонна пастка від томатної молі',
			img: '../img/related products/related3.jpg',
			price: 200,
			box: '2 кг.',
			root: ROOT_RELATEDPRODUCTS,
		},

		{
			id: 'related4',
			name: 'Кран для Лейфлет',
			img: '../img/related products/related4.jpg',
			price: 10,
			box: '1 шт.',
			root: ROOT_RELATEDPRODUCTS,
		},
];




(function(){
    document.addEventListener("DOMContentLoaded", ready);

   function ready(){

	ProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product.make(ProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	EggProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product2 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product2.make(EggProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	MelonProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product3 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product3.make(MelonProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	SquashProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product4 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product4.make(SquashProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	CabbageProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product5 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product5.make(CabbageProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	CornProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product6 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product6.make(CornProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	OnionProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product7 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product7.make(OnionProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	CarrotProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product8 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product8.make(CarrotProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	CucumberProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product9 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product9.make(CucumberProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	RadishProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product10 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product10.make(RadishProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	BeetProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product11 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product11.make(BeetProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	CeleryProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product12 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product12.make(CeleryProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	SweetPepperProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product13 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product13.make(SweetPepperProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	TomatoProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product14 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product14.make(TomatoProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	PumpkinProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product15 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product15.make(PumpkinProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	BeansProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product16 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product16.make(BeansProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	FlowerProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product17 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product17.make(FlowerProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	HerbicidesProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product18 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product18.make(HerbicidesProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	InsecticidesProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product19 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product19.make(InsecticidesProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	SurfactantsProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product20 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product20.make(SurfactantsProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	DisinfectantsProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product21 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product21.make(DisinfectantsProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	FungicidesProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product22 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product22.make(FungicidesProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	SubstratesProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product23 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product23.make(SubstratesProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	StimulantsProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product24 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product24.make(StimulantsProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	DripProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product25 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product25.make(DripProductsCatalog, element.root);
			console.log(element.root);
		}
	});

	RelatedProductsCatalog.forEach((element) => {
		if(element.root !== null){
			const product26 = new Products(element.id, element.name, element.img, element.price, element.box, element.root);
			product26.make(RelatedProductsCatalog, element.root);
			console.log(element.root);
		}
	});
   };
}());





