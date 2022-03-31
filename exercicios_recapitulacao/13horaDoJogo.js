//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instanciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks

const clothes = {
	pants: { colors: ["black", "blue"] },
	shirts: { colors: ["white", "red"] },
	socks: { colors: ["beige", "gray"] },
};

const cores = [...clothes.shirts.colors, ...clothes.socks.colors];

console.log(cores);
