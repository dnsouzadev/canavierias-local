package com.localcommerce.data;

import com.localcommerce.model.Comercio;
import com.localcommerce.model.ItemCardapio;
import com.localcommerce.repository.ComercioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ComercioRepository comercioRepository;

    @Override
    public void run(String... args) {
        if (comercioRepository.count() == 0) {
            criarComerciosFake();
        }
    }

    private void criarComerciosFake() {
        List<Comercio> comercios = Arrays.asList(
            criarPizzaria("Pizza Express", "Rua Principal, 123", "Pizzaria"),
            criarLanchonete("Burger King", "Avenida Central, 456", "Lanchonete"),
            criarRestaurante("Sabor do Mar", "Rua da Praia, 789", "Restaurante"),
            criarCafeteria("Café & Cia", "Rua das Flores, 101", "Cafeteria"),
            criarSorveteria("Gelato Italiano", "Avenida do Sol, 202", "Sorveteria"),
            criarPadaria("Pão Quente", "Rua do Pão, 303", "Padaria"),
            criarRestauranteJapones("Sushi Master", "Rua do Japão, 404", "Restaurante Japonês"),
            criarHamburgueria("The Burger", "Avenida dos Sabores, 505", "Hamburgueria"),
            criarPizzaria("Pizza Hut", "Rua da Pizza, 606", "Pizzaria"),
            criarCafeteria("Starbucks", "Avenida do Café, 707", "Cafeteria")
        );

        comercioRepository.saveAll(comercios);
    }

    private Comercio criarPizzaria(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("A melhor pizza da cidade!");
        comercio.setTelefone("(73) 99999-9999");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("5.00"));
        comercio.setHorarioFuncionamento("18:00 - 23:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/pizza.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("Pizza Margherita", "Molho de tomate, mussarela e manjericão", new BigDecimal("45.00")),
            criarItemCardapio("Pizza Calabresa", "Molho de tomate, mussarela e calabresa", new BigDecimal("50.00")),
            criarItemCardapio("Pizza Frango", "Molho de tomate, mussarela e frango", new BigDecimal("55.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private Comercio criarLanchonete(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("Os melhores lanches da região!");
        comercio.setTelefone("(73) 98888-8888");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("3.00"));
        comercio.setHorarioFuncionamento("10:00 - 22:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/lanche.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("X-Burger", "Hambúrguer, queijo, alface e tomate", new BigDecimal("15.00")),
            criarItemCardapio("X-Salada", "Hambúrguer, queijo, alface, tomate e maionese", new BigDecimal("18.00")),
            criarItemCardapio("X-Bacon", "Hambúrguer, queijo, bacon, alface e tomate", new BigDecimal("20.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private Comercio criarRestaurante(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("Cozinha tradicional com pratos deliciosos!");
        comercio.setTelefone("(73) 97777-7777");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("8.00"));
        comercio.setHorarioFuncionamento("11:00 - 15:00, 18:00 - 22:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/restaurante.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("Feijoada", "Feijoada completa com acompanhamentos", new BigDecimal("35.00")),
            criarItemCardapio("Bife à Parmegiana", "Bife empanado com molho de tomate e queijo", new BigDecimal("40.00")),
            criarItemCardapio("Moqueca de Peixe", "Peixe cozido no leite de coco com dendê", new BigDecimal("45.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private Comercio criarCafeteria(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("Os melhores cafés e doces da cidade!");
        comercio.setTelefone("(73) 96666-6666");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("4.00"));
        comercio.setHorarioFuncionamento("07:00 - 20:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/cafe.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("Café Expresso", "Café expresso tradicional", new BigDecimal("5.00")),
            criarItemCardapio("Cappuccino", "Café com leite vaporizado e chocolate", new BigDecimal("8.00")),
            criarItemCardapio("Croissant", "Croissant de manteiga", new BigDecimal("7.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private Comercio criarSorveteria(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("Sorvetes artesanais de qualidade!");
        comercio.setTelefone("(73) 95555-5555");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("6.00"));
        comercio.setHorarioFuncionamento("13:00 - 22:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/sorvete.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("Sorvete de Chocolate", "Sorvete cremoso de chocolate", new BigDecimal("10.00")),
            criarItemCardapio("Sorvete de Morango", "Sorvete cremoso de morango", new BigDecimal("10.00")),
            criarItemCardapio("Sorvete de Baunilha", "Sorvete cremoso de baunilha", new BigDecimal("10.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private Comercio criarPadaria(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("Pães frescos todos os dias!");
        comercio.setTelefone("(73) 94444-4444");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("3.00"));
        comercio.setHorarioFuncionamento("06:00 - 20:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/pao.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("Pão Francês", "Pão francês tradicional", new BigDecimal("1.00")),
            criarItemCardapio("Bolo de Chocolate", "Bolo de chocolate caseiro", new BigDecimal("15.00")),
            criarItemCardapio("Coxinha", "Coxinha de frango", new BigDecimal("5.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private Comercio criarRestauranteJapones(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("Autêntica culinária japonesa!");
        comercio.setTelefone("(73) 93333-3333");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("10.00"));
        comercio.setHorarioFuncionamento("11:00 - 15:00, 18:00 - 23:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/sushi.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("Sushi Combo", "10 peças de sushi variado", new BigDecimal("45.00")),
            criarItemCardapio("Temaki", "Temaki de salmão", new BigDecimal("25.00")),
            criarItemCardapio("Yakisoba", "Yakisoba de frango", new BigDecimal("35.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private Comercio criarHamburgueria(String nome, String endereco, String tipo) {
        Comercio comercio = new Comercio();
        comercio.setNome(nome);
        comercio.setDescricao("Hambúrgueres artesanais incríveis!");
        comercio.setTelefone("(73) 92222-2222");
        comercio.setEndereco(endereco);
        comercio.setTaxaEntrega(new BigDecimal("5.00"));
        comercio.setHorarioFuncionamento("11:00 - 23:00");
        comercio.setTipoComercio(tipo);
        comercio.setFotoUrl("https://example.com/hamburguer.jpg");
        comercio.setCodigoAcesso(UUID.randomUUID().toString().substring(0, 8));

        List<ItemCardapio> cardapio = Arrays.asList(
            criarItemCardapio("Hambúrguer Artesanal", "Hambúrguer 180g com queijo", new BigDecimal("25.00")),
            criarItemCardapio("Hambúrguer Duplo", "Dois hambúrgueres 180g com queijo", new BigDecimal("35.00")),
            criarItemCardapio("Batata Frita", "Porção de batata frita", new BigDecimal("15.00"))
        );
        comercio.setCardapio(cardapio);

        return comercio;
    }

    private ItemCardapio criarItemCardapio(String nome, String descricao, BigDecimal preco) {
        ItemCardapio item = new ItemCardapio();
        item.setNome(nome);
        item.setDescricao(descricao);
        item.setPreco(preco);
        item.setFotoUrl("https://example.com/" + nome.toLowerCase().replace(" ", "_") + ".jpg");
        return item;
    }
}
