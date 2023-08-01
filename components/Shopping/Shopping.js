class Shopping {

	constuctor(){
		
	}

	handleClear(){
		ROOT_SHOPPING.innerHTML = '';
	}

	render(){
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		ProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		EggProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		MelonProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		SquashProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		CabbageProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		CornProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		OnionProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		CarrotProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		CucumberProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		RadishProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		BeetProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		CeleryProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		SweetPepperProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		TomatoProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		PumpkinProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		BeansProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		FlowerProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		HerbicidesProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		InsecticidesProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		SurfactantsProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		DisinfectantsProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		SubstratesProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		StimulantsProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		DripProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		RelatedProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		FungicidesProductsCatalog.forEach(({id, name, price, box}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🌼 ${name}</td>
						<td class="shopping-element__price">${price}.00 </td>
						<td class="shopping-element__box">${box}</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});
		
		

		const html = `
			<div class="shopping-container"> 
				<div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
				<table> 
					${htmlCatalog}
					<tr>
						<td class="shopping-element__name">🌞 Сума:</td>
						<td class="shopping-element__price">${sumCatalog.toLocaleString()}.00 UAH</td>
					</tr>
				</table>
			</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();
